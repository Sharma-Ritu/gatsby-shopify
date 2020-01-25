import React from 'react';
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import run from "../assets/img/run.png"

const ProductsPage = ({ data }) => (
  <Container>
    <h1>Products</h1>
    <Row>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <div key={node.shopifyId}>
          <h3>
            {node.title}
            {" - "}${node.priceRange.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
        </div>
      ))}
    </Row>
  </Container>
)

export default ProductsPage
export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`