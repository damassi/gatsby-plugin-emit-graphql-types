// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/cn/Sites/cn/gatsby-plugin-emit-types/example/.cache/data.json")

