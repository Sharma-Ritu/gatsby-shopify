import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import amazon from "../assets/img/amazon.jpg"
import best from "../assets/img/best.png"
import nm from "../assets/img/nm.png"




export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 px-sm-5">Chirofoam Mattresses are now available at the following locations:</h2>
			</Jumbotron>
		</section>
		<section className="mb-0 pt-5 pb-3 position-relative">
			<Container className="our-focus pt-5">
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<Col sm="4" className="text-center px-0 px-sm-4">
						<h4 className="text-uppercase color-primary erbaum-bold pb-4">Markham</h4>
						<p className="filson-pro-reg color-secondary">
							7701 Woodbine Avenue<br/>
							Unit#5<br/>
							Markham, ON<br/>
							L3R 2R4
						</p>
						<p className="filson-pro-reg color-secondary">
							Hours:<br/>
							Monday to Friday – 10am to 8pm<br/>
							Saturdays – Noon to 5pm<br/>
							Sundays – Closed<br/><br/>

							Contact: 905-963-0890
						</p>
						<div className="g-map pt-2 pt-sm-4">
							<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=7701+Woodbine+Avenue" width="100%" height="300px" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
						</div>
					</Col>
					<Col sm="4" className="text-center px-0 px-sm-4">
						<h4 className="text-uppercase color-primary erbaum-bold pb-4">Mississauga</h4>
						<p className="filson-pro-reg color-secondary">
							1550 Meyerside Drive<br/>
							Unit#3<br/>
							Mississauga, ON<br/>
							L5T 1V4
						</p>
						<p className="filson-pro-reg color-secondary">
							Hours:<br/>
							Monday to Friday – 10am to 8pm<br/>
							Saturdays – Noon to 5pm<br/>
							Sundays – Closed<br/> <br/>

							Contact: 905-565-0885
						</p>
						<div className="g-map pt-2 pt-sm-4">
							<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=1550+Meyerside+Drive" width="100%" height="300px" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
						</div>
					</Col>
					<Col sm="4" className="text-center px-0 px-sm-4">
						<h4 className="text-uppercase color-primary erbaum-bold pb-4">Milton/Georgetown</h4>
						<p className="filson-pro-reg color-secondary">
							15 Brownridge Road<br/>
							Unit#3<br/>
							Georgetown, ON<br/>
							L7G 0E2
						</p>
						<p className="filson-pro-reg color-secondary">
							Hours:<br/>
							Monday to Friday – 10am to 8pm<br/>
							Saturdays – Noon to 5pm<br/>
							Sundays – Closed<br/><br/>

							Contact: 905-878-8444
						</p>
						<div className="g-map pt-2 pt-sm-4">
							<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=15+Brownridge+Road" width="100%" height="300px" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<p className="text-center w-100 filson-pro-reg color-secondary" style={{fontSize:'16px'}}>Also available at:</p>
				<Row>
					<Col sm="4" className="col-4 text-center">
						<a href="https://www.amazon.ca/dp/B079Q4GX48/ref=sr_1_1?s=kitchen&ie=UTF8&qid=1518208929&sr=1-1&keywords=chirofoam&th=1"><img src={amazon} alt="Amazon" width="90%" /></a>
					</Col>
					<Col sm="4" className="col-4 text-center">
						<a href="https://www.bestbuy.ca/en-ca/category/mattresses-mattress-toppers/mattresses?path=category%253aHome%2BLiving%253bcategory%253aFurniture%253bcategory%253aBedroom%2BFurniture%253bcategory%253aMattresses%2B%2526%2BMattress%2BToppers%253bbrandName%253aCHIROFOAM"><img src={best} alt="Best Buy" width="90%" /></a>
					</Col>
					<Col sm="4" className="col-4 text-center">
						<Link to="/shop-chirofoam/"><img src={nm} alt="National Mattress" width="90%" /></Link>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5">
					<div className="w-50 m-auto text-center d-sm-flex">
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<Link to="/take-test/" className="btn-cta color-primary erbaum-bold space-1">TAKE THE TEST</Link>
							</p>
							See if Chirofoam™ is right for you.
						</Col>
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">BUY NOW</Link>
							</p>
							Start your journey to a better sleep!
						</Col>
					</div>
				</Row>
			</Container>
		</section>
		<section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
			<Container className="pb-0 pb-sm-5">
				<Row>
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>“A great quality mattress I enjoy waking up on every day…” <br/>  -Mark F. from Toronto, Ontario</p>
					<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
						<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p> 
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};
