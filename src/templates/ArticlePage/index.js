import React from 'react';
import Header from "~/components/header"
import Footer from "~/components/footer"
import {Row, Col} from 'reactstrap';
import SEO from '~/components/seo'
import "~/assets/css/bootstrap.min.css"
import RecentPosts from "~/components/Blogs/RecentPostsFooter"

const ArticlePage = ({ data }) => {
  const article = data.shopifyArticle
  console.log(article);
  return (
    <>
    <SEO title={article.title} description={article.excerpt} />
    <Header />
    <section className="single-blog py-3 py-sm-3 py-lg-5 py-xl-5" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
      <div className="container-large">
        <h3 className="text-uppercase filson-pro-reg m-0" style={{fontSize:'22px'}}>{article.title}</h3>
      </div>
    </section>
    <section className="mb-0 py-5 position-relative">
      <div className="container-large">
        <Row>
          <Col sm="12" className="align-middle single-article">
              
            <div className="featured-image position-relative overflow-hidden">
              <img src={article.image.src} className="img-fluid" alt={article.image.altText} style={{transition:'all 0.15s ease-in-out', width:'100%'}}/>
            </div>
            <h2 className="mb-3 color-primary text-uppercase erbaum-bold pt-4 space-1">{article.title}</h2>
            <Row>
              <Col sm="6">
                <p style={{fontSize:'12px'}}>By <span>{article.author.firstName}</span> In <span>{article.blog.title}</span> Posted <span>{article.publishedAt}</span></p>
              </Col>
              <Col sm="6" className="text-left text-sm-right text-lg-right text-xl-right" style={{display:'ruby'}}>
                <span style={{color:'rgba(0,0,0,0.4)'}} className="ml-0 ml-sm-0 ml-lg-4 ml-xl-4"><i className="fa fa-share-alt"></i><span className="pl-2">2</span></span>
                <span className="px-2 ml-4" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-envelope"></i><span className="pl-2">2</span></span>
                <span className="mb-0 ml-4" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-heart"></i><span className="pl-2">2</span></span>
              </Col>
            </Row>  
            <Row className="mt-3">
              <Col sm="12">
                <div
                  className="filson-pro-reg single-article-content"
                  style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}
                  dangerouslySetInnerHTML={{ __html: article.contentHtml}}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
    <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
      <div className="container-large pb-0 pb-sm-5">
        <h3 className="text-center mb-4" style={{fontSize:'18px'}}>RECENT POSTS</h3>
        <RecentPosts />
      </div>
    </section>
    <Footer />
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
        altText
      }
      author {
        firstName
      }
      blog {
        title
        url
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      excerpt
      contentHtml
    }
  }
`

export default ArticlePage
