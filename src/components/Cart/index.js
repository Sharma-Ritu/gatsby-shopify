import React, { useContext } from 'react'
import {Row, Table} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  const updateCart = () => {
    console.log(checkout);
  }
  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })
  return (
    <>
    {(checkout.ready) && (checkout.lineItems.length === 0) && <section className="mb-0 py-3 py-sm-5">
      <div className="container">
        <Row>
          <div className="col text-center">
            <p style={{color:'#ba2154'}}>YOUR CART IS CURRENTLY EMPTY.</p>
            <a className="btn btn-secondary" href="/shop-chirofoam/">Return To Shop</a>
          </div>
        </Row>
      </div>
    </section>}
    {(checkout.lineItems.length > 0) && <section className="mb-0 py-3 py-sm-5">
      <div className="container">
        <Row>
          <div className="col-12 col-md-12 col-sm-6 col-xs-12 cart table-responsive">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>  </th>
                  <th>  </th>
                  <th> Product </th>
                  <th> Price </th>
                  <th> Quantity </th>
                  <th> Total </th>
                </tr>
              </thead>
              <tbody>
                {line_items}
                <tr>
                  <td colSpan="5">
                    <div className="coupon">
                      <input type="text" name="coupon_code" className="my-3 mr-3 p-1" placeholder="Coupon code" />
                      <button className="btn-dark p-1 text-white space-1 font-weight-bold"> APPLY COUPON </button>
                    </div>
                  </td>
                  <td>
                    <button className="d-none btn-dark p-1 text-white space-1" onClick={updateCart}> UPDATE CART </button>
                  </td>
                </tr> 
              </tbody>
            </Table>
          </div>
        </Row>
      </div>
    </section>}
    {(checkout.lineItems.length > 0) && <section>
      <div className="container">
        <Row>
          
          <ul className="pl-0 list-unstyled w-100 cart-total">
              <li className="d-flex w-100 no-gutters"><strong>CART TOTAL</strong></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">SUBTOTAL</div><div className="col-5">CAD$ {checkout.subtotalPrice}</div></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">SHIPPING</div><div className="col-5">Enter your address to view shipping options.</div></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">TOTAL</div><div className="col-5 color-primary font-weight-bold">CAD$ {checkout.totalPrice}</div></li>
          </ul>
          <div className="col-12 pt-5 checkout">
            <button onClick={handleCheckout} className="btn btn-checkout font-weight-bold p-2 space-1 text-white float-right">PROCEED TO CHECKOUT</button>
          </div>
        </Row>
      </div>
    </section>}
    </>
  )
}

export default Cart
