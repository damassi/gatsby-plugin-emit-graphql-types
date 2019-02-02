const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/pages/index.js")))
}

