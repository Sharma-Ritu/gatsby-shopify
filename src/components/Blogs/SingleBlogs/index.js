import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import blogs1 from "~/assets/img/blogs5.jpg"



    

const SingleBlogs = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

console.log(id);
  const { shopifyArticle } = useStaticQuery(
    
    graphql `
      query {
        shopifyArticle(id: {eq: "Shopify__Article__Z2lkOi8vc2hvcGlmeS9BcnRpY2xlLzM4NzA2NjEwMTgxNQ=="}) {
          id
          title
          content
          excerpt
          url
          image {
            src
          }
          publishedAt
        }
      }
    `
  )

  return (
   
    

          <Col sm="8" className="align-middle">
            
            <div className="blogs-section mb-5">
              <div className="featured-image position-relative overflow-hidden">
              
                  <img src={shopifyArticle.image.src} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
                  <div className="card-layer">
                    <div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                      <i class="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
                    </div>
                  </div>
         
              </div>
              <div className="blogs-content d-flex mt-4 pb-4">
                <Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
                  <p style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-share-alt"></i><span className="d-block">2</span></p>
                  <p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-envelope"></i><span className="d-block">2</span></p>
                  <p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-heart"></i><span className="d-block">2</span></p>
                </Col>
                <Col sm="11" className="pl-4">
                  <p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span> {shopifyArticle.publishedAt}</span></p>
                  <h3 className="mb-3"><a href="/single-blog/" className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>{shopifyArticle.title}</a></h3>
                  <p className="filson-pro-reg" style={{fontSize:'14px'}}>{shopifyArticle.excerpt}</p>
                  <p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
                    <a href="/single-blog/" className="btn-cta color-primary erbaum-bold space-1">READ MORE</a>
                  </p>
                </Col>
              </div>
            </div>
          </Col>
          
       
  )
}

export default SingleBlogs
    

