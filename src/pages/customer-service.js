import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media, Form} from 'reactstrap';
import "../assets/css/bootstrap.min.css"


export default (props) => {
  return (
	<>
		<Header />
		<section>
			<div className="container-large">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">CUSTOMER SERVICE</h2>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-5 position-relative">
			<div className="container-large">
				<Row>
					<Col sm="6" className="mb-3 mb-sm-5">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">GET IN TOUCH</h5>
						<p className="filson-pro-reg color-secondary pt-2">If you have any questions, concerns, of would like to contact us, simply fill out the contact form and a member of our team will get back to you as soon as possible.  You can also email us directly: info@chirofoam.com</p>
						<p className="filson-pro-reg color-secondary pt-2">Prefer to talk to us by phone? <br/>
						Give us a call:
						</p>
						<p className="filson-pro-reg color-secondary pt-2"><strong>1 (888) CHIRO-31 </strong><br/>1 (888) 244-7631</p>
						<p className="filson-pro-reg color-secondary pt-2">Our sleep experts are on call <br/>
						Mon-Fri 10am-6pm (EST)</p>
						<p className="filson-pro-reg color-secondary pt-5">You may also call our local Toronto, Ontario office at: (905) 766-3380</p>
						<p className="filson-pro-reg color-secondary pt-5">Chirofoam Mattress Company, Head Office</p>
						<p className="filson-pro-reg color-secondary pt-3">130 King Street West <br/> Suite 1800 <br/> Toronto, Ontario 
						<br/> M5X 1E3 <br/> Canada</p>
						<p className="filson-pro-reg color-secondary pt-3">Office hours: <br/> Mon-Fri 10am-6pm (EST) </p>
						<p className="filson-pro-reg color-secondary pt-5">Distribution Center:</p>
						<p className="filson-pro-reg color-secondary pt-3">1550 Meyerside Drive <br/> Unit#2 <br/> Mississauga, Ontario 
						<br/> L5T 1V4 <br/> Canada</p>
						<p className="filson-pro-reg color-secondary pt-5">Our manufacturing plant located in Toronto, ON is not open to the public, however we may schedule a plant tour by appointment for wholesale clients.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 pt-5">
						<Form>
							<div class="row">
								<div class="col-6">
									<input type="text" class="form-control" id="name" placeholder="Your Name" name="name" />
								</div>
								<div class="col-6">
									<input type="text" class="form-control" id="email" placeholder="Your Email" name="email" />
								</div>
							</div>
							<div class="row pt-3">
								<div class="col-12">
									<input type="text" class="form-control" id="subject" placeholder="Subject" name="subject" />
								</div>
							</div>
							<div class="row pt-3">
								<div class="col-12">
									<textarea class="form-control" rows="8" id="message" placeholder="Your Message"></textarea>
								</div>
							</div>
							<div class="row pt-3">
								<div class="col-12">
									<button type="button" class="btn btn-danger btn-block">SEND</button>
								</div>
							</div>
						</Form>
					</Col>
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