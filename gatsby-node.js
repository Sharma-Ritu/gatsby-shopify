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
        totalCount
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
        path: `/article/${node.id}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
    createPage({
      path: `/blogs/2/`,
      component: path.resolve(`./src/templates/BlogPage/index.js`),
      context: {
        // Data passed to context is available
        // in article queries as GraphQL variables.
        limit: 10,
        skip: 10,
      },
    })
    [...Array(Math.ceil(result.data.allShopifyArticle.totalCount/10))].map((page, i) => {

    })
    /*[...Array(Math.ceil(result.data.allShopifyArticle.totalCount/10))].map((page, i) => {
      
      createPage({
        path: `/blogs/${i+1}/`,
        component: path.resolve(`./src/templates/BlogPage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          limit: 10
        },
      })
      
    })*/
  })
}