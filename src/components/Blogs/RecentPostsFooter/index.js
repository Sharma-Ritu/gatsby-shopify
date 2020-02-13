import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Row, Col} from 'reactstrap';

const RecentPosts = ({ location, RecentPostsId }) => {
  const { allShopifyArticle } = useStaticQuery(
    graphql`
      query {
         allShopifyArticle (sort: {order: DESC, fields: publishedAt}, limit: 4){
          edges {
            node {
              id
              title
              excerpt
              url
              blog {
                url
              }
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
            ? allShopifyArticle.edges.map(({ node: {id, url, blog, title, content, excerpt, publishedAt, image } }) => (
          <Col sm="3" className="mb-3 mb-sm-3 mb-lg-0 mb-xl-0" key={id}>
            <div className="recenet-post-inner border">
              <Link to={`/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="recent-post-image position-relative overflow-hidden d-block" style={{height:'200px'}}>
                <img src={image.src} alt="Blog" className="position-relative" style={{transition:'all 0.15s ease-in-out', width:'auto', height:'100%', left: '50%', transform: 'translateX(-50%)'}}/>
                <div className="card-layer">
                </div>
              </Link>
              <Link to={`/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="recent-post-title">
                <h4 className="text-uppercase erbaum p-2 m-0 border-top" style={{fontSize:'12px', color:'#000'}}>{title}</h4>
              </Link>
            </div>
            
          </Col>
           ))
        : <p>No Products found!</p>}
          </Row>
          
       
  )
}

export default RecentPosts
