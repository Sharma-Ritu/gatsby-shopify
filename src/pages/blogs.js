import React from 'react';
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import run from "../assets/img/run.png"

const Blog = ({ data }) =>  (
	<Header>
    <Container>
      <div>Hello world</div>
	  console.log(data)
    </Container>
	<Footer>
  );


export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`