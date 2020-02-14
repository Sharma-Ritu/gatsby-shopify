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
		<section className="blue-bg warranty-banner height-350">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 Jumbotron">
				<h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">CHIROFOAM™ MEMORY FOAM MATTRESS</h1>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>15 Year Total Warranty Protection</p>
			</Jumbotron>
		</section>
		<section className="py-5 position-relative">
			<Container className="our-focus">
				<Row className="py-2 py-lg-3 py-xl-3">
					<div className="col-12">
						<h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold w-100 pb-2 pb-lg-5 pb-xl-5 mb-0 mb-lg-2 mb-xl-2">WARRANTY</h3>
						<p className="filson-pro-reg color-secondary">Thank you for choosing Chirofoam™. Our company strives to provide the highest product quality and durability, providing you the most comfortable and healthy night’s sleep. This promise is backed by our Chirofoam™ 15 Years Warranty Guarantee, one of the most stringent and longest product quality warranties in the industry. You can feel confident that your Chirofoam™ sleep set will provide you with the long lasting comfort and support you expect.<br/>
							We strongly believe in the quality, design and craftsmanship of our products. Our mattresses are warranted against manufacturing defects in worksmanship and material (excluding covers and fabrics).</p>
						<h5 className="erbaum-bold color-primary py-2 py-sm-2 py-lg-5 py-xl-5 my-0">CHIROFOAM™ LIMITED 15 YEAR WARRANTY</h5>
						<p className="filson-pro-reg text-1 color-secondary">If you observe a defect, contact us directly through our Chirofoam™ website. We can be contacted through email warranty@chirofoam.com with your warranty issue.</p>
						<p className="filson-pro-reg text-1 color-secondary">You must, within the duration of the warranty, provide the original law tags (with registration number and regulatory tag information), proof of purchase including date of purchase and be the original purchasing consumer.</p>
						<p className="filson-pro-reg text-1 color-secondary"> If defective in workmanship or material, your Chirofoam™ mattress and will be repaired or replaced (at our option) with charges, as shown on the Warranty Schedule and exclusive of transportation and inspection costs.</p>
						<p className="filson-pro-reg text-1 color-secondary">All other claims including incidental or consequential damages are precluded. If identical materials are not available at the time of repair or replacement, the manufacturer reserves the right to substitute materials of comparable quality.</p>
						<p className="filson-pro-reg text-1 color-secondary">Any and all implied warranties on this product shall not exceed in duration the term of this limited warranty.</p>
						<p className="filson-pro-reg text-1 color-secondary">This warranty begins on the day you purchase your mattress. Warranty is prorated for the period of 15 years based on purchase price of the mattress. If your sleep set is repaired or replaced, this limited warranty will not be renewed or extended.</p>
						<p className="filson-pro-reg text-1 color-secondary">Some provinces do not allow the exclusion or limitation of incidental or consequential damages or limitations on how long an implied warranty lasts, so the above limitation or exclusion may not apply.</p>
						<h5 className="erbaum-bold color-primary py-2 py-sm-3 my-0" style={{fontSize:'16px'}}>WARRANTY COVERAGE DETAIL</h5>
						<p className="filson-pro-reg text-1 color-secondary">The Chirofoam™ Limited Warranty covers only the following items during normal wear:</p>
						<h5 className="erbaum-bold color-primary py-2 py-sm-3 my-0" style={{fontSize:'16px'}}>MATTRESS:</h5>
						<p className="filson-pro-reg text-1 color-secondary">Sagging or Body Impressions that measure 11/2” or greater, only if the mattress has been continuously supported by foundation and used with an appropriate frame with center support, or a minimum of 12 cross slats with center support that extends to the floor.</p>
						<p className="filson-pro-reg text-1 color-secondary">The Chirofoam™ Limited Warranty does NOT cover items not expressly listed below, such as, but not limited to:
							<ul className="pl-3text-1">
								<li>Transportation and inspection costs</li>
								<li>Bedding used in hotels, motels or institutional facilities</li>
								<li>Bedding sold “as is”, or floor samples, or bedding purchased from second hand parties,non-retail establishments or received as promotional item</li>
								<li>Bedding height</li>
								<li>Comfort preference</li>
								<li>Bent perimeter border due to moving or bending the sleep set</li>
								<li>Corner Guards</li>
								<li>Replacement of another piece in a sleep set, unless it is also defective</li>
								<li>Body impressions less than 1 1/2”</li>
								<li>Sagging in the mattress that measures less than 1 1/2”</li>
								<li>Damage of the mattress due to misuse or abuse</li>
								<li>Mattress damage due to an inappropriate foundation or when an incorrect bed frame is used</li>
								<li>Mattress fabric</li>
								<li>memory foam Layers: Normal change in softness and recovery time in these materials over time. This does not affect the pressure relieving qualities of these mattresses.</li>
								<li>Fabric Stains, soiling, fluid penetration, tears or burns</li>
							</ul>
						</p>
						<h5 className="erbaum-bold color-primary py-2 py-sm-3 my-0" style={{fontSize:'16px'}}>IMPORTANT INFORMATION</h5>
						<p className="filson-pro-reg text-1 color-secondary">Chirofoam™ reserves the right to refuse service and invalidate the warranty when the sleep set, even if defective, is in an unsanitary condition (due to blood or bodily fluid stains or soiling, infestation or other abuse), when the sleep set has evidence of damage from liquid penetration, cleaning or the use of cleaning fluids, or whenever the product failure is caused by factors other than defective workmanship or materials.</p>
						<p className="filson-pro-reg text-1 color-secondary">Allowing the sleep set to be in an unsanitary condition may damage the product and invalidate the warranty. For the health and safety of anyone who would be required to dispose of, or otherwise handle, the sleep set, Chirofoam™ may refuse to inspect such products to assess whether covered by the warranty, in which case, Chirofoam™ reserves the right to deny warranty coverage. The use of cleaning fluids may damage the fabric and materials in your mattress. Allowing water or other liquids to penetrate your mattress may damage the layers of upholstery, causing materials to compress.</p>
						<p className="filson-pro-reg text-1 color-secondary">Either of these situations may result in damage that will invalidate your warranty.</p>
						<p className="filson-pro-reg text-1 color-secondary">Chirofoam™ reserves the right to deny warranty coverage if the sleep set exhibits stains or soiling of unknown origin or nature and it appears to Chirofoam™, in good faith, that the sleep set may be in an unsanitary condition or may have been damaged by liquid penetration or other abuse.</p>
						<p className="filson-pro-reg text-1 color-secondary">Attached to every Chirofoam™ sleep set is a law tag which includes a warranty code number. This number is written under registry information and has to match with our registry records in order to process warranty claims.</p>
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
		<section className="rating-and-review py-3 py-sm-5">
			<Container className="pb-0 pb-sm-5">
				<Row>
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>People love their Chirofoam™ mattress and you will too! </p>
					<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center">
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
