import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <tr className="cart_item">
      <td className="product-remove">
        <a onClick={handleRemove} title="Remove this item"><i className="fa fa-remove"></i></a> 
      </td>
      <td className="product-thumbnail">
        {variantImage}
      </td>
      <td className="product-name">
         <p>
          {line_item.title}
          {`  `}
          {line_item.variant.title === !'Default Title'
            ? line_item.variant.title
            : ''}
        </p> 
      </td>
      <td className="product-price">
        <span>CAD&nbsp;<span>$&nbsp;</span><span>{line_item.variant.price}</span></span> 
      </td>
      <td className="product-quantity">{line_item.quantity}</td>
      <td className="product-subtotal">
        <span> CAD $ 840.00 </span> 
      </td>
    </tr>
  )
}

export default LineItem
 
