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
    }
  `).then(result => {
    console.log(result)
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
  })
}

exports.createArticles = ({ graphql, actions }) => {
  const { createArticle } = actions
  return graphql(`
    {
      allShopifyArticle {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `).then(result => {
    console.log(result)
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createArticle({
        path: `/article/${node.id}/`,
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