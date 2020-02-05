import React from 'react';
import Header from "~/components/header"
import Footer from "~/components/footer"
import "~/assets/css/bootstrap.min.css"

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export const query = graphql`
  query ($limit: Int!) {
    allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: $limit, skip: 0) {
      edges {
        node {
          id
          title
          excerpt
          url
          publishedAt(formatString: "MMM DD, YYYY")
          image {
            src
          }
          author {
            name
          }
          blog {
            title
          }
        }
      }
      pageInfo {
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
      totalCount
    }
  }
`
export default BlogPage
