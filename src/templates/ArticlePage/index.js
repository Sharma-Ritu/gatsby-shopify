import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../../assets/css/bootstrap.min.css"
import blogs1 from "../../assets/img/blogs5.jpg"
import girl from "../../assets/img/girl.jpg"
import RecentPosts from "../../components/Blogs/RecentPostsFooter"

const ArticlePage = ({ data }) => {
  const article = data.shopifyArticle
  console.log(article);
  return (
    <>

    </>
  )
}

export const query = graphql`
  query($id: String!) {
    shopifyArticle(id: {eq: $id}) {
      id
      title
      image {
        src
      }
      publishedAt
      content
    }
  }
`

export default ArticlePage
