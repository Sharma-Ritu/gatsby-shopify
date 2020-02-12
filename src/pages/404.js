import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Card, CardBody, UncontrolledCollapse} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const FourZeroFour = (props) => {

	return (
	<>
		<Header />
		<section className="error-page py-5">
			<Container>
					<div className="four-zero-four text-center">
						<strong className="filson-pro-reg py-3">WHOOPS!</strong>
						<h1 className="proxima-r pt-3 color-primary">404</h1>
						<p className="proxima-b pt-3">Sorry! Page not found.</p>
						<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
							<Link to="" className="btn-cta color-primary erbaum-bold space-1">GO TO HOMEPAGE</Link>
						</p>
					</div>
			</Container>
		</section>
		
		
		<Footer />
	</>
  );
}
export default FourZeroFour
