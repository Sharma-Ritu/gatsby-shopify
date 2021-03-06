import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Button } from 'reactstrap'
import find from 'lodash/find'
import PropTypes from 'prop-types'
import {navigate} from 'gatsby';

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant/*, setVariant*/] = useState({ ...initialVariant })
  const [quantity/*, setQuantity*/] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)
  const [rSelected, setRSelected] = useState('Queen')
  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          variant => variant.shopifyId === productVariant.shopifyId
        )
        setAvailable(result[0].availableForSale)
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleAddToCart = () => {
    addVariantToCart(variants[selectedVariantIndex].shopifyId, quantity).then(()=>{
      navigate('/cart/')
    })
    return product.title
  }
  

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions:[
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }
  const selectedVariantIndex = options[0].values.indexOf(rSelected);
  const get_selectedDimension = () => {
    const selectedIndex = options[0].values.indexOf(rSelected);
    return options[1].name+': '+options[1].values[selectedIndex]
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variants[selectedVariantIndex].price)  
  return (
    <>
      <React.Fragment key={options[0].id}>
        <h4 className="text-center">{options[0].name}</h4>
        <div>
            {options[0].values.map((value, index) => (
              <Button 
                key={index}
                value={value}
                disabled={checkDisabled(options[0].name, value)}
                onClick={() => setRSelected(value)} 
                active={rSelected === (value)}
                color="" className=" border color-secondary variants rounded font-italic mr-1 py-2 px-2 style={{fontSize:'.5rem'}}"
              >
                {value}
              </Button>
            ))}
       </div>
      
      </React.Fragment>
      {<h4 className="mt-2" style={{fontSize:'14px'}}>{get_selectedDimension()}</h4>}
    
      
     
      <p className="cta mt-0 mt-sm-5 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-right pr-5">
        <span className="proxima-b color-primary float-left display-4 v-price" style={{lineHeight:'30px'}}>{price}</span>
        <button className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0 add-to-cart"
        disabled={!available || adding}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
      </p>
     
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
