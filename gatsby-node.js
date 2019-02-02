const fs = require("fs")
const minilog = require("minilog")
const path = require("path")
const write = require("write")
const { exec } = require("child_process")
const { printSchema } = require("gatsby/graphql")

minilog.enable()

const package = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "package.json"), "utf8")
)
const namespace = `\n[${package.name}]`
const logger = minilog(namespace)
const defaultArtifactDirectory = "./src/__generated__"

/**
 * Add babel-plugin-relay to Babel pipeline
 */
exports.onCreateBabelConfig = ({ actions }, options) => {
  const { artifactDirectory = defaultArtifactDirectory } = options

  actions.setBabelPlugin({
    name: "babel-plugin-relay",
    options: {
      artifactDirectory,
    },
  })
}

/**
 * Generate GraphQL schema.json and execute the relay compiler.
 */
exports.onPostBootstrap = async ({ store }, options) => {
  const {
    src = ".",
    schema: schemaDest = "./schema.graphql",
    language = "typescript",
    artifactDirectory = defaultArtifactDirectory,
    watch = false,
  } = options

  try {
    const gatsbySchema = store.getState().schema
    const sdlSchema = printSchema(gatsbySchema)

    // Emit schema
    write.sync(schemaDest, sdlSchema, {})
    logger.log(`wrote schema to ${schemaDest} \n`)

    // Execute relay compiler
    exec(
      `relay-compiler \
      --src ${src} \
      --schema ${schemaDest} \
      --language ${language} \
      --artifactDirectory ${artifactDirectory} \
      --watch ${watch}`,

      (error, stdout) => {
        if (error) {
          logger.error("error emitting types \n\n", stdout)
        } else {
          logger.log(stdout)
        }
      }
    )
  } catch (error) {
    logger.error("error emitting types: ", error)
  }
}
