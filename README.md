# gatsby-plugin-emit-graphql-types

A Gatsby plugin that automatically emits GraphQL TypeScript types via [relay-language-compiler-typescript](https://github.com/relay-tools/relay-compiler-language-typescript).

## Wait! Large bold caveat!

As it currently stands, this plugin *will not work* in projects that use plugins that export fragments, and will fail to emit types. This includes
- `gatsby-transformer-sharp`
- `gatsby-source-contentful`
- `gatsby-source-datocms`
- `gatsby-source-sanity`

and other plugins that take advantage of [`gatsby-image`](https://www.gatsbyjs.org/packages/gatsby-image/#fragments).

This is a limitation in Gatsby's current architecture. See [this issue](https://github.com/graphql/graphiql/issues/612) or more information. Please use at your own risk.

## Setup

```
yarn install gatsby-plugin-emit-graphql-types
```

And then in `gatsby-config.js`, add the plugin:

```js
plugins: [
  "gatsby-plugin-emit-graphql-types"
]
```

If also accepts these configuration options:

```js
plugins: [
  {
    resolve: "gatsby-plugin-emit-graphql-types",
    options: {
      /**
       * The root location of source files
       */
      src: './src',
      /**
       * The location to save the schema to. This is used by the compiler to emit types
       */
      schema: './schema.graphql',
      /**
       * The relay compiler supports different languages, such as flow. Right now
       * this plugin only supports TypeScript, but willing to accept PRs.
       */
      language: 'typescript',
      /**
       * Location where generated types are saved to
       */
      artifactDirectory: './src/__generated__',
      /**
       * If true, the compiler will watch `src` for changes and recompile
       */
      watch: false
    }
  }
]

