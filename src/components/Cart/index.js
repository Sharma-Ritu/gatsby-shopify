import React, { useContext } from 'react'
import {Container,Jumbotron, Row, Col, Button, Media, Table} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })
  
  return (
    <>
    <p>{line_items}</p>
    <section>
      <div className="container-large">
        <Row>
          
          <ul className="pl-0 list-unstyled w-100 cart-total">
              <li className="d-flex w-100 no-gutters"><strong>CART TOTAL</strong></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">SUBTOTAL</div><div className="col-5">CAD$ {checkout.subtotalPrice}</div></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">SHIPPING</div><div className="col-5">Enter your address to view shipping options.</div></li>
              <li className="d-flex w-100 no-gutters"><div className="col-7">TOTAL</div><div className="col-5 color-primary font-weight-bold">CAD$ {checkout.totalPrice}</div></li>
          </ul>
          <div className="col-12 pt-5 checkout">
           <button className="btn p-2 space-1 float-right font-weight-bold btn-checkout color-primary onClick={handleCheckout} disabled={checkout.lineItems.length === 0}">PROCEED TO CHECKOUT</button>
          </div>
        </Row>
      </div>
    </section>
    </>
  )
}

export default Cart
