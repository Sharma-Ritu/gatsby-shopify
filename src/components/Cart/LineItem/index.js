import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem, updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }
  const handleQuantityChange = (event) => {
    updateLineItem(client, checkout.id, line_item.id, event.target.value);
  }
  return (
    <tr className="cart_item">
      <td className="product-remove">
        <button onClick={handleRemove} className="btn btn-link p-0" title="Remove this item"><i className="fa fa-remove"></i></button> 
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
      <input type="number" min={1} className="form-control" style={{maxWidth:'65px'}} defaultValue={line_item.quantity} onChange={handleQuantityChange} />
      </td>
      <td className="product-subtotal">
        <span>CAD&nbsp;<span>$&nbsp;</span><span>{line_item.quantity * line_item.variant.price}</span></span> 
      </td>
    </tr>
  )
}

export default LineItem
 
