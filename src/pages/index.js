import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify. First Shopify</p>
    <p>Welcome to your new Shop powered by Gatsby and Shopify. First Shopify</p>
    </section>
    <section>
    <ProductGrid />
    </section>
  
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
