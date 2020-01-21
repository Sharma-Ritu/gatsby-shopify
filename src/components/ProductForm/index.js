import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import warranty from "~/assets/img/waranty.png"
import van from "~/assets/img/van.png"
import box from "~/assets/img/box.png"

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

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

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
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
      selectedOptions: [
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

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <>
    <div className="d-flex text-center pt-3 pl-sm-0 pl-lg-5 pl-0 facilities">
							<Col sm="4" className="px-2 px-sm-3">
								<a href="/warranty/"><img src={warranty} alt="warranty" width="60px" className="mb-3"/></a>
								<a href="/warranty/"><span className="d-block erbaum-bold color-primary" style={{fontSize:'0.8rem'}}>15 YEAR WARRANTY</span></a>
							</Col>
							<Col sm="4" className="px-2 px-sm-3">
								<img src={van} alt="van" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold color-primary" style={{fontSize:'0.8rem'}}>FREE EXPRESS DELIVERY AND <a className="color-primary" href="/return-policy/">EASY RETURNS</a></span>
							</Col>
							<Col sm="4" className="px-2 px-sm-3">
								<img src={box} alt="box" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold" style={{fontSize:'0.8rem'}}>DELIVERED IN PORTABLE BOX</span>
							</Col>
						</div>
      {options.map(({ id, name, values}, index) => (
        <React.Fragment key={id}>
          <select
            name={name}
            key={id}
            onChange={event => handleOptionChange(index, event)}
          >
            {values.map(value => (
              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value}
              </option>
            ))}
          </select>
         
          <br />
        </React.Fragment>
      ))}
       <div className="row text-center text-lg-left no-gutters mt-4 ml-0 all-varients">
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="cali" className="text-center color-secondary border d-block variants active" style={{fontSize:'0.6rem', width:'95%'}}>CALI KING</a></div>
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="king" className="text-center color-secondary border d-block variants" style={{fontSize:'0.6rem', width:'95%'}}>KING</a></div>
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="queen" className="text-center color-secondary border d-block variants" style={{fontSize:'0.6rem', width:'95%'}}>QUEEN</a></div>
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="double" className="text-center color-secondary border d-block variants" style={{fontSize:'0.6rem', width:'95%'}}>DOUBLE FULL</a></div>
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="single" className="text-center color-secondary border d-block variants" style={{fontSize:'0.6rem', width:'95%'}}>SINGLE/TWIN</a></div>
              <div className="col-sm-6 col-lg-2 col-4 mb-2"><a href="#" id="twin" className="text-center color-secondary border d-block variants" style={{fontSize:'0.6rem', width:'95%'}}>TWIN XL</a></div>
          </div>
      <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-right pr-5">
        <span className="proxima-b color-primary float-left display-5 v-price" style={{lineHeight:'30px'}}>{price}</span> <button className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0 add-to-cart"
        type="submit"
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
        price: PropTypes.string,
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
