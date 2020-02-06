import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby";
import {Jumbotron, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

export default (props) => {
  return (
	<>
		<Header />
		<section>
			<div className="container">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">AFFILIATE REGISTRATION</h2>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-3 py-sm-5">
			<Form>
				<div className="container">
					<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
						<Col className="mb-3 mb-sm-5">
							<h5 className="color-primary mb-0 text-uppercase">AFFILIATE REGISTRATION</h5>
	  						<p className="filson-pro-reg color-secondary" style={{fontSize:'14px'}}>Fields marked with an <span style={{color:'red'}}>*</span> are required</p>
							<div className="row">
								<Col>
									<FormGroup>
										<Label for="fname" className="color-secondary filson-pro-reg">First Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="fname" name="fname" />
									</FormGroup>
								</Col>
							</div>
	  						<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="lname" className="color-secondary filson-pro-reg">Last Name <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="lname" name="lname" />
									</FormGroup>
								</Col>
	  						</div>
	  						<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="uname" className="color-secondary filson-pro-reg">Username <span style={{color:'red'}}>*</span></Label>
										<input type="text" className="form-control" id="uname" name="uname" />
									</FormGroup>
								</Col>
	  						</div>
	  						<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="pass" className="color-secondary filson-pro-reg">Password <span style={{color:'red'}}>*</span></Label>
										<input type="password" className="form-control" id="pass" name="pass" />
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="conf_pass" className="color-secondary filson-pro-reg">Confirm Password <span style={{color:'red'}}>*</span></Label>
										<input type="password" className="form-control" id="conf_pass" name="conf_pass" />
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="email" className="color-secondary filson-pro-reg">Email <span style={{color:'red'}}>*</span></Label>
										<input type="email" className="form-control" id="email" name="email" />
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="pemail" className="color-secondary filson-pro-reg">Payment Email <span style={{color:'red'}}>*</span></Label>
										<input type="email" className="form-control" id="pemail" name="pemail" />
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="pmethod" className="color-secondary filson-pro-reg">Promotion Method <span style={{color:'red'}}>*</span></Label>
										<textarea class="form-control" rows="8" id="pmethod"></textarea>
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="website" className="color-secondary filson-pro-reg">Website/Social Media URL <span style={{color:'red'}}>*</span></Label>
										<input type="url" className="form-control" id="website" name="website" />
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
	  							<Col>
									<FormGroup>
										<Label for="tnc" className="color-secondary filson-pro-reg">Terms & Conditions <span style={{color:'red'}}>*</span></Label>
										<p><Input type="checkbox" name="tnc" id="tnc" className="ml-1" /><span className="color-secondary filson-pro-reg pl-4">I agree to the <Link to="/term-and-conditions">Terms and Conditions</Link> of the Chirofoam Mattress Company Affiliate Program.</span></p>
									</FormGroup>
								</Col>
	  						</div>
								<div className="row">
									<Col>
										<button type="button" class="btn btn-outline-dark">Submit</button>
									</Col>
								</div>
						</Col>
					</Row>
				</div>
			</Form>
		</section>
		<Footer />
	</>
  );
};
