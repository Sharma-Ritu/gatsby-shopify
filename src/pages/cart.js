import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media, Table} from 'reactstrap';
//import "../assets/css/bootstrap.min.css"
import Chirofoam_Mattress_Sleep_Quality from "../assets/img/Chirofoam-Mattress-Sleep-Quality.png"


export default (props) => {
  return (
	<>
		<Header />
		<section>
			<div className="container-large">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">CART</h2>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-3 py-sm-5">
			<div className="container-large">
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12 cart">
						<Table>
							<thead>
								<tr>
									<th> &nbsp; </th>
									<th> &nbsp; </th>
									<th> Product </th>
									<th> Price </th>
									<th> Quantity </th>
									<th> Total </th>
								</tr>
							</thead>
							<tbody>
								<tr className="cart_item">
									<td className="product-remove">
										<a href="#" title="Remove this item"><i class="fa fa-remove"></i></a> 
									</td>
									<td className="product-thumbnail">
										<a href="#"><img width="30px" height="30px" src={Chirofoam_Mattress_Sleep_Quality} alt="Chirofoam Mattress Sleep Quality" /></a> 
									</td>
									<td className="product-name">
										<a href="#">The Chirofoam™ XF Mattress - Extra Firm </a> 
									</td>
									<td className="product-price">
										<span>CAD&nbsp;<span>$</span>840.00</span> 
									</td>
									<td className="product-quantity">1 </td>
									<td className="product-subtotal">
										<span> CAD $ 840.00 </span> 
									</td>
								</tr>
								<tr>
									<td colSpan="5">
										<div class="coupon">
											<input type="text" name="coupon_code" className="my-3 mr-3" placeholder="Coupon code" />
											<input type="submit" class="btn btn-secondary" name="apply_coupon" value="Apply Coupon" />
										</div>
									</td>
									<td>
										<input type="submit" class="btn btn-secondary" name="update_cart" value="Update Cart" />
									</td>
								</tr> 
							</tbody>
						</Table>
					</div>
					<div className="col-12 pt-5 cart-total">
						<Table striped cellspacing="0">
							<thead>
								<tr>
									<th colSpan="2">CART TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr class="cart_item">
									<td>SUBTOTAL</td>
									<td className="text-center">CAD $840.00</td>
								</tr>
								<tr class="cart_item">
									<td>SHIPPING</td>
									<td className="text-center">Enter your address to view shipping options.</td>
								</tr>
								<tr class="cart_item">
									<td>TOTAL</td>
									<td className="text-center color-primary font-weight-bold">CAD $840.00</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className="col-12 pt-5 checkout">
						<a href="#" class="btn btn-primary float-right">Proceed to Checkout</a>
					</div>
				</Row>
			</div>
		</section>
		<section>
			<div className="container-large">
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5">
					<div className="w-50 m-auto text-center d-flex">
						<Col sm="6" className="text-center filson-pro-reg color-secondary">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<a href="/take-test/" className="btn-cta color-primary erbaum-bold space-1 mr-3">TAKE THE TEST</a>
							</p>
							See if Chirofoam™ is right for you.
						</Col>
						<Col sm="6" className="text-center filson-pro-reg color-secondary">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<a href="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">BUY NOW</a>
							</p>
							Start your journey to a better sleep!
						</Col>
					</div>
				</Row>
			</div>
		</section>
		<section className="rating-and-review py-3 py-sm-5">
			<div className="container-large pb-0 pb-sm-5">
				<Row>
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>“A great quality mattress I enjoy waking up on every day…” <br/>  -Mark F. from Toronto, Ontario</p>
					<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center">
						<a href="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</a>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p> 
				</Row>
			</div>
		</section>
		<Footer />
	</>
  );
};