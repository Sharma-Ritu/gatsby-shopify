import React from 'react';
import Header from "~/components/header"
import Footer from "~/components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import SEO from '~/components/seo'
import "~/assets/css/bootstrap.min.css"
import blogs1 from "../assets/img/blogs5.jpg"
import Blogs from "../components/Blogs"
import RecentBlogs from "../components/Blogs/RecentBlogs"

const BlogPage = ({ data }) => {
  console.log(data.allShopifyArticle);
  return (
    <>
    <SEO title="Chirofoam™ Memory Foam Mattresses" description="Sleep Education and Chirofoam™ News" />
    <Header />
    <section className="blue-bg charity">
      <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
        <h2 className="font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">Chirofoam™ Memory Foam Mattresses</h2>
        <p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>Sleep Education and Chirofoam™ News</p>
      </Jumbotron>
    </section>
    <Footer />
    </>
  )
}

export const query = graphql`
  query ($skip: Int!) {
    allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 10, skip: $skip) {
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
