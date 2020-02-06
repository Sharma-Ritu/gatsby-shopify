import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import msize from "../assets/img/mattress-sizes.png"
import women from "../assets/img/woman-sleeeping.jpg"
import foam from "../assets/img/foam.jpg"
import support from "../assets/img/support.jpg"
import us from "../assets/img/pur.png"
import packing from "../assets/img/unpacking-chirofoam.jpg"
import logo from "../assets/img/logo2.png"




export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">Introducing The Chirofoam™ Mattress</h2>
			</Jumbotron>
		</section>
		<section className="mb-0 py-3 position-relative">
			<Container className="our-focus pt-5">
				<h4 className="text-center lead-text-font color-primary erbaum-bold text-uppercase w-100 pb-lg-3 pb-xl-3 m-0">Our focus on comfort, support, and health</h4>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 pt-2 pt-sm-2 pt-lg-5 pt-xl-5">
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">TODAY’S MATTRESS MARKET</h5>
						<p className="filson-pro-reg color-secondary pt-2">With so many options on the market today, there are hundreds of various mattresses to choose from ranging in firmness, features, coils, foams, cooling gels, fabrics and everything in between.</p>
						<p className="filson-pro-reg color-secondary pt-2">But which mattress is best for you? Firm or soft? Coils or foam? With so much information on the internet today, the mattress buying experience can be more confusing than ever before.</p>
						<p className="filson-pro-reg color-secondary">At Chirofoam™, we decided to transform the mattress buying experience and take the guess work out of buying the perfect mattress.</p>
					</div>
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={msize} alt="Mattress Sizes" />
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={women} alt="women-sleeping"/>
					</div>
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">A GREAT MATTRESS IS FOR YOUR BODY AND MIND</h5>
						<p className="filson-pro-reg color-secondary pt-2">Whether you experience back pain or not, sleeping on the right mattress can have a positive effect on your health and overall well being.  A lot of back pain can be attributed to an outdated mattress, as well as improper posture, or strenuous physical activity throughout the day.  The right mattress will help your body recover at night to prevent as well as relieve common back pain.</p>
						<p className="filson-pro-reg color-secondary pt-2">The Chirofoam™ mattress was developed with a focus on muscle recovery, to help relieve back pain and tension in the body.  Restorative sleep is also very important to mental health, alertness, and energy throughout the day. If you let your mind rest easy at night, it will reward you by performing better during the day.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">DEVELOPING THE PERFECT MATTRESS</h5>
						<p className="filson-pro-reg color-secondary pt-2">At Chirofoam™, we have worked together with chiropractors, mattress experts, as well as consumers like yourself to design and develop the perfect mattress.</p>
						<p className="filson-pro-reg color-secondary pt-2">Our Chiropractors insisted that that the perfect mattress needs to have factors of conformity, alignment, support, pressure relief, and comfort.  They focused on restorative sleep which targets muscle recovery and back pain relief.</p>
						<p className="filson-pro-reg color-secondary pt-2">Our mattress experts insisted that the perfect mattress needs to provide pressure relief, proper back support and alignment, provide a balanced sleep temperature, eliminate motion transfer, and resist sagging. They focused on optimum sleep comfort.</p>
						<p className="filson-pro-reg color-secondary pt-2">With the professional experience of both chiropractors and mattress experts, we focused to build a mattress that is as comfortable as it is supportive.  With hundreds of hours of development and testing, we finally found the right combination of materials to provide continuous restorative sleep, while maintaining proper back support and postural alignment for enhanced muscle recovery at night.</p>
						<p className="filson-pro-reg color-secondary pt-2">We introduce to you, the Chirofoam™ mattress.</p>
					</div>
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={foam} alt="foam"/>
						<img src={support} alt="support" className="mt-2 mt-sm-5 pt-0 pt-sm-3"/>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={us} alt="us"/>
					</div>
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">QUALITY MATERIALS AND SKILLED CRAFTSMANSHIP</h5>
						<p className="filson-pro-reg color-secondary pt-2">With hundreds of hours of design and development, we have found the perfect mix of firmness, support, and comfort to help you get that sleep you’ve always dreamed of.</p>
						<p className="filson-pro-reg color-secondary pt-2">We have sourced the best technologies and highest quality materials, which will not only stand up to the test of time, but are also environmentally responsible and healthy for you to sleep on night after night.</p>
						<p className="filson-pro-reg color-secondary pt-2">Our foams are Certipur certified with ultra-low VOC with the highest environmental production standards. Our foams are made without ozone depleters, do not contain any mercury, lead or any other heavy metals, and are made without formaldehyde or phthalates.  Each mattress is also wrapped in a flame retardant sock, free of any harmful chemicals.</p>
						<p className="filson-pro-reg color-secondary pt-2">Each mattress is built in our Toronto, ON factory in Canada, and backed by our 15 year total warranty protection seal.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">EASY DELIVERY AND SET UP IN YOUR HOME</h5>
						<p className="filson-pro-reg color-secondary pt-2">Not only did we develop the perfect mattress, we have sourced a way to conveniently package it in an easy to deliver box, which can be shipped across Canada and the USA, and enjoyed by everyone quickly and easily.</p>
						<p className="filson-pro-reg color-secondary pt-2">Our foams are of such high quality that we are able to compress the mattress into a portable box and ship directly to your door for easy setup. The Chirofoam™ mattress is tough enough to come back to its original shape, and offer you many years of support and comfort while you sleep.</p>
						<p className="filson-pro-reg color-secondary pt-2">This method of shipping allows us to demonstrate the integrity of the Chirofoam™ mattress.   We are able to ship the mattress to your door at a fraction of the cost, saving you money and reducing your carbon footprint on our planet.</p>
					</div>
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={packing} alt="packing"/>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0">
					<div className="col-12 col-sm-4 col-lg-4 col-xl-4 pt-2 pt-sm-5 mt-0 mt-sm-5 right-card">
						<img src={logo} alt="chirofoam"/>
					</div>
					<div className="col-12 col-sm-8 col-lg-8 col-xl-8 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">WE GUARANTEEE YOUR SATISFACTION</h5>
						<p className="filson-pro-reg color-secondary pt-2">We are so confident that the Chirofoam™ mattress is going to be the best mattress you have ever slept on that we are offering a 100 night in home trial to try it out for yourself. We love to hear our customer’s feedback, so please share and tell us how Chirofoam™ has transformed your life.</p>
						<p className="filson-pro-reg color-secondary pt-2">From our team at Chirofoam™, we wish you many years of comfortable, relaxing, and rejuvenating sleep on your new Chirofoam™ mattress.</p>
					</div>
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
