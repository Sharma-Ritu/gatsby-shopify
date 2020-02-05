const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 10, skip: 0) {
        edges {
          node {
            id
            url
          }
        }
        totalCount
        pageInfo {
          perPage
          pageCount
          itemCount
          hasPreviousPage
          hasNextPage
          currentPage
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.id}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
    [...Array(result.data.allShopifyArticle.pageInfo.pageCount)].map((page, i) => {
      createPage({
        path: `/blogs/${i+1}/`,
        component: path.resolve(`./src/templates/BlogPage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          limit: result.data.allShopifyArticle.pageInfo.perPage
        },
      })
    })
  })
}