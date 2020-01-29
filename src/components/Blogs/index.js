import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import blogs1 from "~/assets/img/blogs5.jpg"

const Blogs = ({ id }) => {
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
   
    

          <Col sm="8" className="align-middle">
            {allShopifyArticle.edges
            ? allShopifyArticle.edges.map(({ node: { id, url, title, content, excerpt, publishedAt, image } }) => (
            <div className="blogs-section mb-5">
              <div className="featured-image position-relative overflow-hidden">
                <Link to={`/single-blog/?id=${id}`} state={{ fromFeed: true }}>
                  <img src={image.src} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
                  <div className="card-layer">
                    <div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                      <i class="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="blogs-content d-flex mt-4 pb-4">
                <Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
                  <p style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-share-alt"></i><span className="d-block">2</span></p>
                  <p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-envelope"></i><span className="d-block">2</span></p>
                  <p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-heart"></i><span className="d-block">2</span></p>
                </Col>
                <Col sm="11" className="pl-4">
                  <p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span> {publishedAt}</span></p>
                  <h3 className="mb-3"><Link to={`/single-blog/?id=${id}`} state={{ fromFeed: true }} className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>{title}</Link></h3>
                  <p className="filson-pro-reg" style={{fontSize:'14px'}}>{excerpt}</p>
                  <p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
                    <Link to={`/single-blog/?id=${id}`} state={{ fromFeed: true }} className="btn-cta color-primary erbaum-bold space-1">READ MORE</Link>
                  </p>
                </Col>
              </div>
            </div>
             ))
        : <p>No Products found!</p>}
            
          </Col>
          
       
  )
}

export default Blogs
