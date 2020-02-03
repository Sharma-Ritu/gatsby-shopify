import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import confirm from "../assets/img/confirm.png"
import support from "../assets/img/support.png"
import alignment from "../assets/img/allignment.png"
import presure from "../assets/img/presure.png"
import comfort from "../assets/img/comfort.png"
import massage from "../assets/img/message.png"
import one from "../assets/img/one.png"
import antizo from "../assets/img/antizo.png"
import trillium from "../assets/img/trillium.png"
import medical from "../assets/img/medical.png"
import health from "../assets/img/health.png"
import mobility from "../assets/img/mobility.png"
import church from "../assets/img/church.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg charity">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">Built by the pros</h2>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>The Chirofoam™ mattress is designed to improve posture, and provide incredible pressure relief.  Your back will thank you.</p>
			</Jumbotron>
		</section>
		<section className="mb-0 py-5 position-relative">
			<div className="container-large">
				<Row className="charity-inner text-center">
					<Col sm="6" className="mb-3 mb-sm-5">
						<div className="charity-image text-center w-100 pb-2 pb-sm-5">
							<img className="img-fluid" src={confirm} alt="Confirmity" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">Conformity</h5>
						<p className="filson-pro-reg color-secondary pt-2">The Chirofoam™ memory foam mattress conforms to your body’s natural curves. Mattresses that are too firm do not conform to your body and create additional pressure points. Chirofoam is designed to take your bodies shape and conform in a way that is supportive and aligns your spine into the optimal position while you rest.  The Chirofoam™ mattress conforms to your body to provide back pain relief and increased muscle recovery while you sleep.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5">
						<div className="charity-image text-center w-100 pb-2 pb-sm-5">
							<img className="img-fluid" src={support} alt="Support" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">SUPPORT</h5>
						<p className="filson-pro-reg color-secondary pt-2">Our Chirofoam™ support layer is designed to support the centre third of your body where the majority of weight and pressure accumulate for most people. Mattresses that are too soft conform to your body but do not offer the right support to keep your back straight.   This in turns create pressure points in the opposite areas in which a mattress that is too firm would create. With the ideal balance of support and comfort in a Chirofoam™ memory foam mattress you are assured to get the optimal support and back pain relief all night long.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5">
						<div className="charity-image text-center w-100 pb-2 pb-sm-5">
							<img className="img-fluid" src={alignment} alt="alignment" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">alignment</h5>
						<p className="filson-pro-reg color-secondary pt-2">With the ideal combination of conformity and support, Chirofoam™ is designed to keep your spine aligned with its natural curves while you sleep. This is important to relieve pressure which can build up during the day from improper posture, improper lifting, or from sitting for long periods of time. Proper spine alignment while you sleep is a key element to relieving back pain, increased muscle recovery and feeling better in the morning overall.</p>
						
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5">
						<div className="charity-image text-center w-100 pb-2 pb-sm-5">
							<img className="img-fluid" src={presure} alt="Presure Relief" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">pressure relief</h5>
						<p className="filson-pro-reg color-secondary pt-2">While placing your spine in proper alignment the Chirofoam™ memory foam mattress is simultaneously relieving pressure to repair your muscles and joints for the day ahead. Once again, pressure buildup from sitting for long periods of time without proper back support or posture, improper lifting, or walking with overall improper posture are keys factors which attribute to a built up of pressure on your back throughout the day. The Chirofoam™ mattress is specially designed to relieve this pressure every night so you feel better and healthier to tackle the day ahead.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5">
						<div className="charity-image text-center w-100 pb-2 pb-sm-5">
							<img className="img-fluid" src={comfort} alt="Comfort" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">Comfort</h5>
						<p className="filson-pro-reg color-secondary pt-2">With all the conformity, support, alignment, and pressure relief a Chirofoam™ mattress offers, it is also extremely comfortable and easy for your body to adjust into. You will look forward to an incredibly comfortable nights sleep for many years to come in your new Chirofoam™ memory foam mattress. The majority of Chirofoam™ owners state that the Chirofoam™ mattress is the most comfortable mattress they have ever owned. Try one today with our 100 night risk free trial and see what a difference it can make for you.</p>
					</Col>
				</Row>
			</div>
		</section>
		<section>
			<div className="container-large">
				<Row className="text-center">
					<h4 className="text-center lead-text-font color-primary erbaum-bold w-100 pb-2 pb-sm-5 text-uppercase">Chiropractor Recommended </h4>
					<p className="filson-pro-reg color-secondary w-100 m-auto">Chirofoam™ Memory Foam Mattresses are proudly recommended by the following Chiropractors in the Greater Toronto Area and many more…</p>
				</Row>
				<Row className="py-3 py-sm-5">
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="https://massage-matters.ca/" className="w-100 text-center d-block"><img className="img-fluid" src={massage} alt="Massage" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://www.onehealthcarecentre.com/clinic-hours/" className="w-100 text-center d-block"><img className="img-fluid" src={one} alt="One Healthcare Center" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://www.santizohealthcare.ca/index.html/" className="w-100 text-center d-block"><img className="img-fluid" src={antizo} alt="Antizo" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://trillium-rehab.com/" className="w-100 text-center d-block"><img className="img-fluid" src={trillium} alt="trillium" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://www.mrcdoctors.com/" className="w-100 text-center d-block"><img className="img-fluid" src={medical} alt="medical" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://www.bodyworkx.ca/" className="w-100 text-center d-block"><img className="img-fluid" src={health} alt="health" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="https://mobilitypluschiropractic.com/" className="w-100 text-center d-block"><img className="img-fluid" src={mobility} alt="mobility" /></a>
						</div>
					</Col>
					<Col sm="3" className="mb-3 mb-sm-5">
						<div className="recommend-image">
							<a href="http://ww12.churchwellesleyhealthcentre.com/" className="w-100 text-center d-block"><img className="img-fluid" src={church} alt="church" /></a>
						</div>
					</Col>
				</Row>
			</div>
		</section>
		<section>
			<div className="container-large py-3 py-sm-5 py-lg-5 py-xl-5">
				<Row>
					<h4 className="text-center lead-text-font color-primary erbaum-bold w-100 pb-2 pb-sm-5 text-uppercase">Chirofoam™ is trusted every night by: </h4>
				</Row>
				<Row>	
					<Col sm="3" className="text-center px-2 px-sm-4 erbaum text-uppercase" style={{fontFamily:'PN-R', fontSize:'20px',color:'#ba2154'}}>
						<p className="mb-2">✓  Doctors</p>
						<p>✓  Chiropractors</p>
					</Col>
					<Col sm="3" className="text-center px-2 px-sm-4 erbaum text-uppercase" style={{fontFamily:'PN-R', fontSize:'20px',color:'#ba2154'}}>
						<p className="mb-2">✓   Personal Trainers</p>
						<p>✓  Fitness Enthusiasts</p>
					</Col>
					<Col sm="3" className="text-center px-2 px-sm-4 erbaum text-uppercase" style={{fontFamily:'PN-R', fontSize:'20px',color:'#ba2154'}}>
						<p className="mb-2">✓  Amateur Athletes</p>
						<p>✓  Professional Athletes</p>
					</Col>
					<Col sm="3" className="text-center px-2 px-sm-4 erbaum text-uppercase" style={{fontFamily:'PN-R', fontSize:'20px',color:'#ba2154'}}>
						<p className="mb-2">✓  Thousands of customers across North America</p>
					</Col>
				</Row>
			</div>
		</section>
		<section>
			<div className="container-fluid">
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
			</div>
		</section>
		<section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
			<div className="container-fluid pb-0 pb-sm-5">
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
			</div>
		</section>

		<Footer />
	</>
  );
};
