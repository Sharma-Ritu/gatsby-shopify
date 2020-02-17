import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"


export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg charity">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">CHIROFOAM™ MEMORY FOAM MATTRESS</h1>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>100 Night In Home Sleep Trial – Full Money Back Returns</p>
			</Jumbotron>
		</section>
		<section className="mb-0 privacy-policy py-3 py-sm-5 mt-lg-3 mt-xl-3">
			<Container>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
					<div className="col-12">
						<h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center">IN HOME SLEEP TRIAL</h3>
						<p className="filson-pro-reg color-secondary pt-5 text-1">Try the Chirofoam™ mattress in the comfort of your home for 100 nights and see what a difference it could make in the quality of your sleep.  From back pain relief, increased muscle recovery, and overall sleep comfort, we are sure Chirofoam™ is the best mattress you will ever buy.  If for whatever reason you do not feel like the Chirofoam™ mattress is right for you, you may return it and we will give you 100% of your money back.</p>
						<h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">HOW DOES THE SLEEP TRIAL WORK?</h3>
						<p className="filson-pro-reg color-secondary pt-5 text-1">You have up to 100 nights to try the Chirofoam™ Memory Foam Mattress in your home to decide if it is the best mattress you have ever slept on.  The sleep trial starts from the day you receive your mattress and ends on the 101st day.  If for some reason you are not completely satisfied with the mattress, you may return the mattress to receive 100% of your money back.</p>
						<p className="filson-pro-reg color-secondary pt-5 text-1">Please note that you cannot return your mattress within the first 21 nights, in order to let your body get adjusted to the mattress. The National Sleep Association suggests that people usually take about 21 days to get adjusted to their new mattress.  Since you have been sleeping on your old mattress for many years, your body will take some time to get adjusted and start to feel better on the Chirofoam™ mattress.</p>
						<h3 className=" lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">RETURN PROCEDURES</h3>
						<p className="filson-pro-reg color-secondary pt-5 text-1">In order to return your mattress, you must contact us by email to request a return authorization.  We will provide you with an RA#</p>
						<p className="filson-pro-reg color-secondary text-1">We will work with you to make this process as quick and simple as possible.</p>
						<p className="filson-pro-reg color-secondary text-1">
							<ul>
								<li>For returns in the Greater Toronto Area, we can schedule a pick-up with our partner courier company.
								</li>
								<li>For returns outside the Greater Toronto Area, customers are responsible for selecting a courier and sending the mattress back to our headquarters in Toronto.
								</li>
								<li>Customers also have the option to donate their mattress to a registered charity and/or non-profit organization and provide us with a donation receipt in order to receive their refund. (As part of our environmentally friendly initiative, we ensure that our returned mattresses are always donated, and never end up in the landfill.)
								</li>
							</ul>
						</p>
						<p className="filson-pro-reg color-secondary text-1">Please ensure that your mattress is clean and free from any stains.  Refunds are issued once the mattress is received and inspected for damages and stains or upon receiving the charitable receipt. Mattresses must be returned in good condition, with all instructions, warranties, and original serial numbers (located on the mattress new material tags as well as the label attached to the box your mattress was shipped in).  Note that returned mattress cannot be resold as they are considered personal care items.  We will strive to donate your mattress to a charity or foundation which accepts used mattresses.</p>
						<p className="filson-pro-reg color-secondary text-1">Please state the reason for your return when contacting us as we use this information to improve our products and your feedback is greatly appreciated.</p>
						<p className="filson-pro-reg color-secondary text-1">Carefully package the mattress using the original bag, or any other heavy duty mattress bag, and/or mattress box for extra protection.</p>
						<p className="filson-pro-reg color-secondary text-1">Once we receive your mattress and confirm the return, we will process your refund in full on the original method of payment used for purchase within 2-5 business days.  Please note that it may take a little longer for the funds to process and display back on to your original method of payment.</p>
						<h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text erbaum-bold font-weight-bold color-primary space-2 text-center pt-5">AFTER THE 100 NIGHT SLEEP TRIAL</h3>
						<p className="filson-pro-reg color-secondary pt-5 text-1">The Chirofoam™ Memory Foam Mattress is protected by our 15 year total warranty protection guarantee.  This covers the mattress from any defects in workmanship and quality, for a period of 15 years from the purchase date.  Please see our warranty details for more information.</p>
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
