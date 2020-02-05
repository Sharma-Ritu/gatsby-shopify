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
      allShopifyArticle {
        edges {
          node {
            id
            url
          }
        }
      }
      allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 3, skip: 0) {
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
        path: `/blogs/${node.id}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
  })
}
exports.createPagination = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 3, skip: 0) {
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
    console.log(result.data);
    /*[...Array(result.data.allShopifyArticle.pageInfo.pageCount)].map((page, i) => {
      createPage({
        path: `/blogs/page/${i+1}/`,
        component: path.resolve(`./src/templates/BlogPage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          limit: result.data.allShopifyArticle.pageInfo.perPage
        },
      })
    })*/
    /*
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/page/${node.id}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
    */
  })
}