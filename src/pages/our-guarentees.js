import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col} from 'reactstrap';
import SEO from '~/components/seo'
import Chirofoam_Mattress_Sleep_Quality from "../assets/img/Chirofoam-Mattress-Sleep-Quality.png"
import Chirofoam_Mattress_Quality_Materials from "../assets/img/Chirofoam-Mattress-Quality-Materials.png"
import Chirofoam_Mattress_Charity_Donations from "../assets/img/Chirofoam-Mattress-Charity-Donations.png"
import Chirofoam_Mattress_In_Home_Trial from "../assets/img/Chirofoam-Mattress-In-Home-Trial.png"
import Chirofoam_Mattress_Warranty_15_Years from "../assets/img/Chirofoam-Mattress-Warranty-15-Years.png"

export default (props) => {
  return (
	<>
		<SEO title="OUR GUARANTEES" description="We have your back!" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
				<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">OUR GUARANTEES</h2>
				<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>We have your back!</p>
				</Row>
				<Row className="py-3 mb-0 mb-sm-5 charity-inner text-center mx-0">
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center">
						<div className="text-center">
							<img className="img-fluid" src={Chirofoam_Mattress_Sleep_Quality} alt="Chirofoam Mattress Sleep Quality" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">IMPROVED COMFORT AND SLEEP QUALITY</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-left text-1" style={{lineHeight:'25px'}}>Chirofoam™ was designed and built to relieve back pain and help you get a better night’s sleep.  Our team of chiropractors and mattress experts have designed this mattress to work with your body to relieve pressure from your back, keep your spine properly aligned, and improve your overall sleep quality.  We promise that Chirofoam™ will be the best memory foam mattress you have ever owned or we will refund your money back.  Give Chirofoam™ a try for 100 nights and see for yourself what a difference it can make.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center">
						<div className="text-center">
							<img className="img-fluid" src={Chirofoam_Mattress_Quality_Materials} alt="Chirofoam Mattress Quality Materials" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">QUALITY MATERIALS AND SKILLED CRAFTSMANSHIP</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-left text-1" style={{lineHeight:'25px'}}>Each and every Chirofoam™ mattress is built using the highest quality foams and fabrics which have been sourced from the best and most reputable suppliers in the industry.  Our team of highly skilled seamstresses and mattress builders ensure that every mattress meets the toughest Chirofoam™ standards and passes our thorough 18 point inspection before being shipped to your door.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center">
						<div className="text-center">
							<img className="img-fluid" src={Chirofoam_Mattress_In_Home_Trial} alt="Chirofoam Mattress In Home Trial" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">100 NIGHT IN HOME SLEEP TRIAL</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-left text-1" style={{lineHeight:'25px'}}>Try the Chirofoam™ mattress in the comfort of your home for 100 nights and see what a difference it could make in the quality of your sleep.  From back pain relief, increased muscle recovery, and overall sleep comfort, we are sure Chirofoam™ is the best mattress you will ever buy.  If for whatever reason you do not feel like the Chirofoam™ mattress is right for you, you may return it and we will give you 100% of your money back.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center">
						<div className="text-center">
							<img className="img-fluid" src={Chirofoam_Mattress_Warranty_15_Years} alt="Chirofoam Mattress Warranty 15 Years" />
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase text-center">15 YEAR TOTAL WARRANTY PROTECTION</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-left text-1" style={{lineHeight:'25px'}}>From the moment your Chirofoam™ mattress arrives at your door, you are covered by our 15 year total warranty protection program.  If by any chance something goes wrong with your Chirofoam™ mattress due to a defect in materials or faulty craftsmanship, we will repair or replace your mattress hassle free.</p>
					</Col>
					
					<Col sm="12" className="mb-3 mb-sm-5 mt-3 mt-sm-5 text-center">
						<div className="charity-image text-center">
							<img className="img-fluid" src={Chirofoam_Mattress_Charity_Donations} alt="Chirofoam Mattress Charity Donations" width="100%"/>
						</div>
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">CHIROFOAM WILL DONATE 1 BEDKIT FOR EVERY MATTRESS SOLD</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 text-left" style={{lineHeight:'25px'}}>At Chirofoam we strongly believe in giving back to the less fortunate people in the world.  Many children in underdeveloped countries do not have the luxury of sleeping in a comfortable bed among other things.  We have partnered with the Sleeping Children Around The World Charity to donate 1 bed kit to children living in poverty for every Chirofoam™ mattress sold.</p>
					</Col>
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
