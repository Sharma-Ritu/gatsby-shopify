import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import blogs1 from "~/assets/img/blogs5.jpg"

const RecentBlogs = () => {
  const { allShopifyArticle } = useStaticQuery(
    graphql`
      query {
         allShopifyArticle(sort: {order: DESC, fields: publishedAt}) {
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
   
    

          <Col sm="4">
            <div className="recent-posts">
              <h5 className="filson-pro-reg">Recent Posts</h5>
              <ul className="list-unstyled">
            {allShopifyArticle.edges
            ? allShopifyArticle.edges.map(({ node: { id, url, title, content, excerpt, publishedAt, image } }) => (
            <li className="d-flex mb-3">
                  <div className="recent-post-image col-4">
                      <a href=""><img src={image.src} className="img-fluid" alt="Blog w-100" style={{transition:'all 0.15s ease-in-out'}}/></a>
                  </div>
                  <div className="recente-posts-data col-8 px-0">
                    <p className="mb-0"><a href="" style={{fontSize:'12px', color:'#000'}} className="filson-pro-reg d-block mb-0">{title}</a></p>
                    <span style={{fontSize:'12px'}}>{publishedAt}</span>
                  </div>
                </li>
             ))
        : <p>No Products found!</p>}

            
              </ul>
            </div>
          </Col>
          
       
  )
}

export default RecentBlogs



