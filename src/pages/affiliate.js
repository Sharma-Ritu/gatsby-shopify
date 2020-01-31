import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby";
import {Jumbotron, Row, Col, Table, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

export default (props) => {
  return (
	<>
		<Header />
		<section>
			<div className="container">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">Affiliate Register</h2>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-3 py-sm-5">
			<Form>
				<div className="container">
					<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
						<Col className="mb-3 mb-sm-5">
							<h5 className="color-primary pb-2 pb-sm-5 mb-0 text-uppercase">Affiliate Registration</h5>
							<div className="row">
								<Col>
									<FormGroup>
										<Label for="fname" className="color-secondary filson-pro-reg">First Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="fname" name="fname" />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label for="lname" className="color-secondary filson-pro-reg">Last Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="lname" name="lname" />
									</FormGroup>
								</Col>
							</div>
						</Col>
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
