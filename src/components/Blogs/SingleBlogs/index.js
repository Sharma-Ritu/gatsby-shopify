import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import blogs1 from "~/assets/img/blogs5.jpg"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blog_id = urlParams.get('id');

const SingleBlogs = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    shopifyArticle(id: {eq: ""}) {
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

export default SingleBlogs
