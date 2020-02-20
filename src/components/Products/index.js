import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Row} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import {Product} from './styles'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: ASC
          }
        ) {
          edges {
            node {
              id
              title
              descriptionHtml
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
   
    <section className="py-4 pt-sm-4 pt-lg-4 pt-xl-4 pb-sm-4 pb-lg-4 pb-xl-4 mb-0 mb-sm-3 mb-lg-3 mb-xl-3 mattresses" id="product">
      <div className="pt-0 pt-sm-5 container">
        <h4 className="text-center lead-text-font color-primary erbaum-bold display-5" style={{width:'100%'}}>THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
        <p className="col-sm-7 text-center pb-4 pb-sm-5 px-0 px-sm-2 pt-1 mb-5 color-primary proxima-b space-1 m-auto lead-sub-text">Aenean suscipit, lacus at handerit porta, massa sem efficitur est, quis mattis eros quam In saplen.</p>
        <Row className="text-center no-gutters row-eq-height pb-5">
          {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product key={id} className="col-12 col-sm-12 col-lg-6 col-xl-6 col-md-6 products-outer">
          <div className="products shop-page-product position-relative">
            <div className="mr-0">
                <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile &&
                  (<Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  width="auto"/>)}
              </Link>
               <Link to={`/product/${handle}/`}><h3 className="color-primary erbaum-bold pl-0">{title}</h3></Link>
              <p className="color-primary proxima-eb space-1 pt-1 mb-0 text-1">
                <b className="proxima-eb">Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.
              </p>
            </div>
            <p className="cta pr-0 pr-sm-5 mr-0 mt-5">
              <Link to={`/product/${handle}/`} className="btn-cta color-primary erbaum-bold space-1" style={{marginRight:'1rem'}}>BUY NOW</Link>
            </p>
            <span className="proxima-b color-primary" style={{fontSize:'1.2rem'}}>{getPrice(firstVariant.price)}</span>
          </div>
          </Product>
        ))
        : <p>No Products found!</p>}
        </Row>
      </div>
    </section>
  )
}

export default ProductGrid
