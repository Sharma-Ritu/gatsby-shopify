import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify. First Shopify</p>
    <p>Welcome to your new Shop powered by Gatsby and Shopify. Second Shopify</p>
    </section>
   
  
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
