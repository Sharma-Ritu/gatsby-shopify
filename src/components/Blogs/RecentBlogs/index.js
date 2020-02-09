import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Col} from 'reactstrap';

const RecentBlogs = () => {
  const { allShopifyArticle } = useStaticQuery(
    graphql`
      query {
         allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 3) {
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
  console.log(allShopifyArticle);
  return (
          <Col sm="4">
            <div className="recent-posts">
              <h5 className="filson-pro-reg">Recent Posts</h5>
              <ul className="list-unstyled">
            {allShopifyArticle.edges
            ? allShopifyArticle.edges.map(({ node: { id, url, title, content, excerpt, publishedAt, image } }) => (
            <li className="d-flex mb-3" key={id}>
                  <div className="recent-post-image col-4">
                      <Link to={`/article/${url.split("/").pop()}/`}><img src={image.src} className="img-fluid" alt="Blog w-100" style={{transition:'all 0.15s ease-in-out'}}/></Link>
                  </div>
                  <div className="recente-posts-data col-8 px-0">
                    <p className="mb-0"><Link to={`/article/${url.split("/").pop()}/`} style={{fontSize:'12px', color:'#000'}} className="filson-pro-reg d-block mb-0">{title}</Link></p>
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



