import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import SEO from '../components/seo'
import "../assets/css/bootstrap.min.css"
import coolgel from "../assets/img/Cool-Gel-Memory-Foam-1.jpg"
import support from "../assets/img/support.jpg"

export default (props) => {
  return (
	<>
		<SEO title="5-key-features" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">BETTER FEATURES FOR A BETTER SLEEP</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>Designed by mattress experts with 5 key features that consumers voted most important for a comfortable sleep experience.(Most mattresses don’t succeed in all 5 areas.)</p>
				</Row>
			</Container>
		</section>
    	<section className="mb-0 py-3 position-relative">
      		<Container className="pt-5">
		        <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 mt-0 right-card">
						<img src={coolgel} alt="Cool-Gel-Memory-Foam-1" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">PRESSURE RELIEF</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1">The Chirofoam™ memory foam mattress is designed to relieve pressure which is built up in your body from daily activities. This pressure build up is largely responsible for common back pain experienced by many people, and can be caused by improper sitting posture, heavy lifting, or other strenuous activities.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">The gel infused memory foam layer works together with the firm support Chirofoam™ layer to cushion your body and relieve pressure built up in your muscles and joints. By relieving pressure and relaxing your body during sleep, the Chirofoam™ mattress will help you feel rejuvenated and wake up with back pain relief to tackle the day ahead.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 mt-0 right-card">
						<img src={support} alt="Support" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">PROPER BACK SUPPORT AND ALIGNMENT</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1">The majority of people go by their daily life with improper posture while sitting, standing, or lifting heavy objects. This improper posture puts unnecessary strain on your back which leads to back pain and potentially more serious health problems in the future.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">The pro lumbar support layer in your Chirofoam™ mattress works together with the bio foam core to support your body and align your back to its natural curves while you rest at night. The memory foam mattress provides support and proper body alignment which contributes to pressure relief and helps your body regenerate and re-energize while you sleep.</p>
					</div>
				</Row>
      		</Container>
    	</section>
		<section>
			<Container>
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5">
					<div className="m-auto text-center d-sm-flex">
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<Link to="/take-test/" className="btn-cta color-primary erbaum-bold space-1">TAKE THE TEST</Link>
							</p>
							See if Chirofoam™ is right for you.
						</Col>
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
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
				<Row className="mx-0">
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
