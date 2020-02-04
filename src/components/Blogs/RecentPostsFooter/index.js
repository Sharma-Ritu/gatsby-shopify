import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import StoreContext from '~/context/StoreContext'

const RecentPosts = ({ location, RecentPostsId }) => {
  const { allShopifyArticle } = useStaticQuery(
    graphql`
      query {
         allShopifyArticle {
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
            }
          }
        }
      }
    `
  )

  return (
   
          <Row>
          {allShopifyArticle.edges
            ? allShopifyArticle.edges.map(({ node: {id, url, title, content, excerpt, publishedAt, image } }) => (
          <Col sm="3" className="" key={id}>
            <div className="recenet-post-inner border">
              <a href="#" className="recent-post-image position-relative d-block" style={{height:'200px'}}>
                <img src={image.src} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out', width:'100%'}}/>
                <div className="card-layer">
                </div>
              </a>
              <a href="#" className="recent-post-title">
                <h4 className="text-uppercase erbaum p-2 m-0 border-top" style={{fontSize:'12px', color:'#000'}}>{title}</h4>
              </a>
            </div>
            
          </Col>
           ))
        : <p>No Products found!</p>}
          </Row>
          
       
  )
}

export default RecentPosts
