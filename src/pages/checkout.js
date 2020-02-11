import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby";
import {Jumbotron, Row, Col, Table, Form, FormGroup, Label, Input} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import paypal from "../assets/img/paypal.jpg"
import cards from "../assets/img/cards.png"

export default (props) => {
  return (
	<>
		<Header />
		<section>
			<div className="container-large">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">CHECKOUT</h2>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-3 py-sm-5">
			<div className="container-large">
				<Row className="border border-info bg-light">
					<p className="color-secondary mt-2 ml-5 p-1">Returning customers? <Link to="#-cta" onClick={(e) => e.preventDefault()}>Click here to login.</Link></p>
				</Row>
				<Row className="border border-info bg-light mt-2">
					<p className="color-secondary mt-2 ml-5 p-1">Have a coupon? <Link to="#-cta" onClick={(e) => e.preventDefault()}>Click here to enter your code</Link></p>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-3 py-sm-5">
			<Form>
				<div className="container-large">
					<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
						<Col sm="6" className="mb-3 mb-sm-5">
							<h5 className="color-primary pb-2 pb-sm-5 mb-0 text-uppercase">BILLING DETAILS</h5>
							<div className="row">
								<div className="col-6">
									<FormGroup>
										<Label for="fname" className="color-secondary filson-pro-reg">First Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="fname" name="fname" />
									</FormGroup>
								</div>
								<div className="col-6">
									<FormGroup>
										<Label for="lname" className="color-secondary filson-pro-reg">Last Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="lname" name="lname" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="cname" className="color-secondary filson-pro-reg">Company Name (Optional)</Label>
										<input type="text" className="form-control" id="cname" name="cname" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
								        <Label for="country" className="color-secondary filson-pro-reg">Country <span style={{color:'red'}}>*</span></Label>
								      	<Input type="select" name="select" id="country">
								      		<option>Select a Country...</option>
								            <option>Canada</option>
								            <option>United States</option>
								        </Input>
								   	</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="street_address" className="color-secondary filson-pro-reg">Street Address <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="street_address_1" name="street_address_1" placeholder="House number and street name" /><br/>
										<input type="text" className="form-control" id="street_address_2" name="street_address_2" placeholder="Apartments, suite, unit etc. (Optional)" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="town_city" className="color-secondary filson-pro-reg">Town/City <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="town_city" name="town_city" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="state_country" className="color-secondary filson-pro-reg">State/Country <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="state_country" name="state_country" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="zip" className="color-secondary filson-pro-reg">Postcode/Zip <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="zip" name="zip" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="phone" className="color-secondary filson-pro-reg">Phone <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="phone" name="phone" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Label for="email" className="color-secondary filson-pro-reg">Email Address <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="email" name="email" />
									</FormGroup>
								</div>
							</div>
							<div className="row pt-2">
								<div className="col-12">
									<FormGroup>
										<Input type="checkbox" name="create_acc" id="create_acc" className="ml-1" />
										<span className="color-secondary filson-pro-reg pl-4">Create an account?</span>
									</FormGroup>
								</div>
							</div>
						</Col>
						<Col sm="6" className="mb-3 mb-sm-5">
							<FormGroup>
								<Input type="checkbox" name="check_ship" id="check_ship"/>
								<h5 className="color-primary pb-2 pb-sm-4 mb-0 text-uppercase">SHIP TO DIFFERENT ADDRESS</h5>
							</FormGroup>
							<div className="row">
								<div className="col-12">
									<FormGroup>
										<Label for="order_notes" className="color-secondary filson-pro-reg">Order Notes (Optional)</Label>
										<textarea className="form-control" rows="10" id="order_notes"></textarea>
									</FormGroup>
								</div>
							</div>
						</Col>
						<div className="col-12 cart-total">
							<h4 className="erbaum-bold text-uppercase pt-1 space-2">YOUR ORDER</h4>
							<Table className="text-center color-secondary">
								<thead>
									<tr>
										<th className="text-center color-secondary">PRODUCT</th>
										<th className="text-center color-secondary">TOTAL</th>
									</tr>
								</thead>
								<tbody>
									<tr className="cart_item">
										<td>The Chirofoam™ XF Mattress - Extra Firm x 1 </td>
										<td className="text-center">CAD $840.00</td>
									</tr>
									<tr className="cart_item">
										<td>CART SUBTOTAL</td>
										<td className="text-center">CAD $840.00</td>
									</tr>
									<tr className="cart_item">
										<td>SHIPPING</td>
										<td className="text-center">Enter your address to view shipping options.</td>
									</tr>
									<tr className="cart_item">
										<td>ORDER TOTAL</td>
										<td className="text-center color-primary font-weight-bold">CAD $840.00</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div className="col-12">
							<FormGroup>
								<Label>
									<Input type="radio" id="pay" name="pay" className="position-relative" /> Paypal <img src={paypal} alt="Paypal" /> What is Paypal?
								</Label><br/>
								<p className="color-secondary p-2 bg-light">Pay via PayPal. You can pay with your credit card if you don’t have a PayPal account.</p>
								<Label>
									<Input type="radio" id="pay" name="pay" className="position-relative" /> Credit Card (Via PayPal Secure Server) <img src={cards} alt="Cards" /> 
								</Label>
							</FormGroup>
						</div>
						<div className="col-12">
							<p className="color-secondary p-2">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacy-policy">privacy policy.</Link></p>
						</div>
						<div className="col-12">
							<FormGroup>
								<Input type="checkbox" name="tnc" id="tnc" />
								<span className="color-secondary filson-pro-reg">I have read and agree to the website <Link to="/term-and-conditions">terms and conditions <span style={{color:'red'}}>*</span></Link></span>
							</FormGroup>
						</div>
						<div className="col-12 pt-5 checkout">
							<button className="btn p-2 text-white space-1 float-right font-weight-bold btn-checkout"> PROCEED TO PAYPAL </button>
						</div>
					</Row>
				</div>
			</Form>
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
						<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p> 
				</Row>
			</div>
		</section>
		<Footer />
	</>
  );
};
