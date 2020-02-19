import React from 'react';
import Banner from "../components/banner"
import Footer from "../components/footer"
import {Container, Row, Col, Media} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"
import mattress1 from "../assets/img/mattress1.jpg"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import run from "../assets/img/run.png"
import { Link } from "gatsby"
import HomePageSlider2 from "../components/HomePageSlider2"
import SlickSlider from "../components/FiveKeys"

export default (props) => {
  return (
	<>
		<SEO title="Home" />
		<main id="homepage">
		<Banner />
		<section className="py-4 py-sm-4 py-lg-4 py-xl-4 active-style">
			<div className="container-large py-0 py-sm-5 py-lg-5 py-xl-5 px-3 px-sm-3">
				<Row className="pt-0 pt-sm-4 pt-lg-4 pt-xl-4 d-flex m-0">
					<Col sm="12" className="pt-0 pt-sm-12 pt-lg-12 pt-xl-2 col-lg-6 col-xl-6">
						<small className="filson-pro-reg color-primary space-4 pl-0 pl-sm-2 pl-lg-2 pl-xl-2" style={{fontSize:'18px'}}>DESIGNED FOR YOUR</small>
						<h2 className="erbaum-bold color-primary pt-0 pt-sm-2 pt-lg-2 pt-xl-2">ACTIVE LIFESTYLE</h2>
						<p className="proxima-eb color-primary space-1 pb-0 pb-sm-3 pb-lg-3 pb-xl-3 text-1">
							"Chirofoam is a premuim memory foam matttress designed with 5 key features consumers voted most important in a new mattress. Created by industry experts, for atheletes and individuals seeking better performance through a better sleep.
						</p>
						
						<p className="proxima-eb color-primary space-1 pb-0 pb-sm-0 pb-lg-0 pb-xl-0 mb-sm-2 mb-lg-2 mb-xl-2 text-1">
							Try the world-class rated mattress with free continetal USA and Caanada-wide delivery, and a 100-night sleep trial."
						</p>
						<p className="cta mt-0 pt-sm-2 pt-lg-2 pt-xl-2">
							<Link to="#" className="btn-cta color-primary erbaum-bold space-1">CALL TO ACTION </Link>
						</p>
					</Col>
					<Col sm="12" className="col-lg-6 col-xl-6">
						<img src={mattress1} alt="Mattress1" width="100%"/>
						 <ul className="list-unstyled d-flex float-sm-left float-lg-right float-none mt-3 extra-link">
							  <li className="mr-1 mr-sm-2 mr-lg-3"><Link to="/our-story/" className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold space-1 position-relative story">OUR STORY</Link></li>
							  <li className="mr-1 mr-sm-2 mr-lg-3"><Link to="/locations/" className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold space-1 position-relative location">LOCATIONS</Link></li>
							  <li className="mr-1 mr-sm-2 mr-lg-3"><Link to="/shop-chirofoam/" className="mr-sm-3 mr-lg-3 mr-xl-3 color-primary erbaum-bold space-1 position-relative online">BUY ONLINE</Link></li>
						</ul> 
					</Col>
				</Row>
			</div>
		</section>
		<section className="py-4 pt-sm-1 pb-sm-1 key-feature">
			<Container className="py-0 pt-sm-0 pb-sm-1">
				<Row className="pb-sm-3 pb-lg-4 pb-xl-3 pb-0 m-0">
					<h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold" style={{width:'100%'}}>5 KEY FEATURES IN EVERY CHIROFOAM MATTRESS</h3>
					<p className="text-center pb-5 pb-sm-4 pt-2 mb-5 color-primary proxima-b m-auto col-12 col-sm-10 col-lg-8 space-1 sub-text sub-sm-text sub-md-text sub-xl-text">Designed by mattress experts with 5 key features that consumers voted most important for a comfortable sleep experience. (Most mattresses don’t succeed in all 5 areas.) </p>
					<div style={{margin:'0px auto'}} className="key-features-inner py-5 overflow-hidden my-0 my-sm-0 my-md-3 my-lg-4 my-xl-5">
						<SlickSlider />
					</div>
				</Row>
			</Container>
		</section>
		<section className="my-4 py-4 py-sm-5 max-support bg-image">
			<Container className="p-0 pb-sm-5">
				<Row className="">
					<Col sm="4">
						<h2 className="erbaum-bold text-white ml-3">MAX SUPPORT MAX RESULTS</h2>
						<p className="text-white proxima-r feat pt-0 pt-sm-1 ml-3 text-1">
							COOL GEL INFUSED MEMORY FOAM<br />
							EXTRA FIRM SUPPORT CHIROFOAM<br />
							CHIROFOAM LUMBAR SUPPORT<br />
							BODY SUPPORT BIO FOAM CORE
						</p>
						<p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 mb-sm-2 ml-3">
							<Link to="#" className="btn-cta text-white erbaum-bold space-1">CALL TO ACTION </Link>
						</p>
					</Col>
				</Row>
			</Container>
		</section>

		<section className="py-4 pt-sm-4 pt-lg-4 pt-xl-4 pb-sm-4 pb-lg-4 pb-xl-4 mb-0 mb-sm-3 mb-lg-3 mb-xl-3 mattresses">
			<div className="pt-0 pt-sm-5 container-large">
				<h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold display-5 w-100">THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h3>
				<p className="col-12 col-sm-7 text-center pb-4 pb-sm-5 px-0 px-sm-2 pt-1 mb-5 color-primary proxima-b space-1 m-auto sub-text sub-sm-text sub-md-text sub-xl-text">Aenean suscipit, lacus at handerit porta, massa sem efficitur est, quis mattis eros quam In saplen.</p>
				<Row className="no-gutters row-eq-height pb-5 m-0">
					<Col sm="12" className="col-lg-6 col-xl-6 product-border-right pr-0 pr-sm-2 position-relative">
						<div className="pr-0 pr-lg-5 pr-xl-5 mr-0 mr-sm-4">
							<img src={product1} alt="Product1" width="100%" />
							<Link to="/product/the-original-chirofoam™-mattress-luxury-firm/"><h3 className="text-left text-sm-left text-lg-right text-xl-right color-primary erbaum-bold pl-0">THE ORIGINAL CHIROFOAM™ MATTRESS - LUXURY FIRM</h3></Link>
							<p className="text-left text-sm-left text-lg-right text-xl-right color-primary proxima-eb space-1 pt-1 mb-0 text-1">
								The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. 
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Upgrade your sleep today!
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Ideal for all sleeping positions.
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Firmness sacle: 7.5/10-Luxury Firm
							</p><br/>
							<p className="text-left text-sm-left text-lg-right mb-4 color-primary proxima-eb space-1 mb-0 text-1">
								Profile: 12 inches
							</p><br />
						</div>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute left-btn">
							<Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="btn-cta color-primary erbaum-bold space-1">BUY NOW</Link>
						</p>
					</Col>
					
					<Col sm="12" className="col-lg-6 col-xl-6 pl-0 pl-sm-0 pl-lg-2 pl-xl-2 position-relative mt-sm-5 mt-lg-0 mt-xl-0">
						<div className="pl-0 pl-sm-0 pl-lg-5 pl-xl-5 ml-0 ml-sm-0 ml-lg-4 ml-xl-4">
							<img src={product2} alt="Product2" width="100%" />
							<Link to="/product/the-chirofoam™-xf-mattress-extra-firm/"><h3 className="color-primary erbaum-bold pr-0">THE CHIROFOAM™ XF MATTRESS - EXTRA FIRM</h3></Link>
							<p className="text-left color-primary proxima-eb space-1 pt-1 mb-0 text-1">
								The Chirofoam XF Memory Foam Mattress is an extra firm designed maximum back support. Developed for indiduals and atheletes who suffer from back pain and require the greatest amount of stiffness for efficient recovery.
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Upgrade your sleep today!
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Ideal for back and stomach sleepers.
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Firmness sacle: 10/10-Extra Firm
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Profile: 10 inches
							</p><br/>
						</div>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute right-btn">
							<Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="btn-cta color-primary erbaum-bold space-1">BUY NOW</Link>
						</p>
					</Col>
				</Row>
			</div>
		</section>
		
		<div className="homepage-slider-2">
			<HomePageSlider2 />
		</div>
		<section className="py-4 pt-sm-5 pb-sm-4 our-customer">
				<Row className="pt-3 pb-3 pb-sm-0 no-gutters">
					<Col sm="6" className="px-3">
						<div className="pl-0 pl-sm-4 pt-0 pt-sm-3" style={{width:'100%', maxWidth:'605px', float:'right'}}>
							<h3 className="color-primary erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">WHAT OUR CUSTOMERS ARE SAYING ABOUT CHIROFOAM</h3>
							<h5 className="filson-pro-reg color-primary pt-2 text-2">CUSTOMER REVIEW</h5>
							<p className="text-left proxima-eb space-1 pt-1 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">Chirofoam mattresses are designed by Chiropractors</span> to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
							<p className="cta mt-3 pt-sm-5 pt-lg-5 pt-xl-5">
								<Link to="/customer-service/" className="btn-cta color-primary erbaum-bold space-1">CALL TO ACTION </Link>
							</p>
						</div>
					</Col>
					<Col sm="6" className="align-middle customer bg-image">
						
					</Col>
				</Row>
		</section>
		<Footer />
		</main>
	</>
  );
};
