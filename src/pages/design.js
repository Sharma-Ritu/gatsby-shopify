import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import SEO from '../components/seo'
import "../assets/css/bootstrap.min.css"
import coolgel from "../assets/img/Cool-Gel-Memory-Foam-1.jpg"
import latex from "../assets/img/latex-5keyfeatures.jpg"
import support from "../assets/img/support.jpg"

export default (props) => {
  return (
	<>
		<SEO title="design" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">DESIGNED FOR PERFECT SUPPORT</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>The <strong>highest quality materials</strong> and skilled craftsmanship in every Chirofoam™ mattress.</p>
				</Row>
			</Container>
		</section>
		<section className="py-4 pt-sm-5 pb-sm-4 our-customer">
			<Row className="pt-3 pb-3 pb-sm-0 no-gutters">
				<Col sm="6">
					<img src={coolgel} alt="coolgel" width="100%" height="350px" />
				</Col>
				<Col sm="6" className="px-3">
					<div className="pl-0 pl-sm-4 pt-0 pt-sm-5" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">COOL GEL INFUSED MEMORY FOAM</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">Helps keep your body cool and relaxed during sleep</span> while the temperature sensitive foam adjusts to your body’s natural shape and curves. Designed for back pain relief, this foam will help to relax your joints and muscles while relieving pressure and creating the ultimate comfort while your body rests.</p>
					</div>
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="px-3">
					<div className="pl-0 pl-sm-4 pt-0 pt-sm-5" style={{maxWidth:'500px', float:'right'}}>
						<h3 className="color-primary erbaum-bold lead-text">FIRM SUPPORT CHIROFOAM™</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">An extremely durable and sag resistant layer of support foam</span> provides an additional “pressure relief buffer” between your body and the core support foam. This layer helps cradle and protect your muscles, joints, and bones from excess pressure during sleep.  The foam creates ultra comfortable “push back” support to keep your spine in an optimal natural sleeping position, while relieving back pain.</p>
					</div>
				</Col>
				<Col sm="6">
					<img src={latex} alt="latex" width="100%" height="350px" />
				</Col>
			</Row>
			<Row className="pt-3 pb-3 pb-sm-0 no-gutters">
				<Col sm="6">
					<img src={support} alt="support" width="100%" height="350px" />
				</Col>
				<Col sm="6" className="px-3">
					<div className="pl-0 pl-sm-4 pt-0 pt-sm-5" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">CHIROFOAM™ LUMBAR SUPPORT</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">Our specialized layer of Chirofoam™ lumbar support</span> provides an additional 20% of conforming support in the centre third of the mattress for improved lumbar support and increased life span of the mattress. The majority of your body’s weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The Pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far beyond our 15 year warranty period.</p>
					</div>
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="px-3">
					<div className="pl-0 pl-sm-4 pt-0 pt-sm-5" style={{maxWidth:'500px', float:'right'}}>
						<h3 className="color-primary erbaum-bold lead-text">BODY SUPPORT BIO FOAM CORE</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">The core is made with a high density and ultra-resilient bio foam</span> designed to cradle the weight of your body and distribute pressure evenly for many years of back pain relief and peaceful sleep. The bio foam is made from soy content in a more environmentally friendly and sustainable production method which lessens your carbon footprint on our planet.</p>
					</div>
				</Col>
				<Col sm="6">
					<img src={latex} alt="latex" width="100%" height="350px" />
				</Col>
			</Row>
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
