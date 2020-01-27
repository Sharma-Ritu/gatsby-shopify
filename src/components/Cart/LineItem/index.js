import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const {
    updateQuantity,
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
  console.log(line_item);

  const handleQuantityChange = (event) => {
    console.log(event.target.value, line_item.id, checkout.id);
    updateQuantity();
  }
  return (
    <tr className="cart_item">
      <td className="product-remove">
        <a onClick={handleRemove} href="javascript:void(0);" class="btn btn-link p-0" title="Remove this item"><i className="fa fa-remove"></i></a> 
      </td>
      <td className="product-thumbnail">
        {variantImage}
      </td>
      <td className="product-name">
         <p>
          {line_item.title}
          <br/>
          {line_item.variant.title}
        </p> 
      </td>
      <td className="product-price">
        <span>CAD&nbsp;<span>$&nbsp;</span><span>{line_item.variant.price}</span></span> 
      </td>
      <td className="product-quantity">
      <input type="number" min={1} max={5} defaultValue={line_item.quantity} onChange={handleQuantityChange} />
      </td>
      <td className="product-subtotal">
        <span>CAD&nbsp;<span>$&nbsp;</span><span>{line_item.quantity * line_item.variant.price}</span></span> 
      </td>
    </tr>
  )
}

export default LineItem
 
