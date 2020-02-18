import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import SEO from '../components/seo'
import "../assets/css/bootstrap.min.css"
import coolgel from "../assets/img/Cool-Gel-Memory-Foam-1.jpg"
import support from "../assets/img/support.jpg"
import latex from "../assets/img/latex-5keyfeatures.jpg"
import chirofoam_mattres_angle_5key from "../assets/img/chirofoam-mattress-angle-5key.jpg"
import chirofoam_mattress_5key from "../assets/img/chirofoam-mattress-5key.jpg"


export default (props) => {
  return (
	<>
		<SEO title="5-key-features" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">AN EXTRA FIRM MATTRESS FOR MAXIMUM SUPPORT</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>Designed by mattress experts with 5 key features necessary for maximum support and comfort in an extra firm mattress. (Most extra firm mattresses don’t succeed in all 5 areas.)</p>
				</Row>
			</Container>
		</section>
    	<section className="mb-0 py-3 position-relative features">
      		<Container className="pt-5 five-key-features-outer">
		        <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
					<div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
						<h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5"><span>1</span></h3>
						<img src={coolgel} alt="Cool-Gel-Memory-Foam-1" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">DECOMPRESSION AND EXTENSION OF THE SPINE</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The Chirofoam™ XF Extra Firm mattress is <strong>designed to stretch and decompress your spine</strong> while you sleep. Using the pressure of your own body weight, the top layers of the extra firm mattress help to stretch the spine, and decompress any pressure build up in the vertebrae, while increasing blood flow between spinal discs.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The gel infused memory foam layer works together with the firm support Chirofoam™ layer to relieve pressure and improve blood flow throughout the spine. By relieving pressure and stretching the spine during sleep, the Chirofoam™ XF mattress will ease tension in the back and help alleviate back pain.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
					<div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
						<h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5"><span>2</span></h3>
						<img src={support} alt="Support" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">MAXIMUM BACK SUPPORT</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">For individuals suffering from extreme and chronic back pain, even the simplest of tasks such as standing or sitting can create unbearable pressure on the back and spine.  This leads to extreme pain and discomfort in day to day life, and one of the best ways to relieve this pressure is to have maximum support on the back while sleeping.  Many people even resort to sleeping on the floor to help alleviate this pressure during the night.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The pro lumbar support layer in your Chirofoam™ XF Extra Firm mattress works together with the bio foam core to stretch your body and create maximum support for your back while you rest at night. We have built the extra firm mattress to provide the most support, similar to sleeping on the floor, while minimizing uncomfortable pressure points with a thin memory foam layer on top.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
					<div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
						<h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5"><span>3</span></h3>
						<img src={latex} alt="Latex" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">BALANCED SLEEP TEMPERATURE</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">Sleep temperature can have an extreme impact on comfort and quality of sleep.  Once you wake up from being too cold or too hot, you break your sleep cycle, making if difficult to fall back asleep and get a quality night’s rest.  Creating an ideal sleep temperature was a very critical element in the design process of the Chirofoam™ XF Extra Firm mattress.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The gel infused memory foam top layer is built to whisk heat away from your body and stay cool while you sleep, while helping your body sleep “on” the mattress instead of “in” the mattress by reducing the sinking feeling. The extra firm support Chirofoam™ layer is breathable which helps to circulate air in order to keep your body at a balanced sleep temperature at night.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
					<div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
						<h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5"><span>4</span></h3>
						<img src={chirofoam_mattres_angle_5key} alt="chirofoam-mattress-angle-5key" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">ELIMINATES MOTION TRANSFER</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">Partner movement while you sleep can be felt across a mattress with traditional coils. This is caused by tossing and turning during the night and can affect the sleep pattern of the person sleeping as well as the partner they are sleeping with.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The Chirofoam™ XF Extra Firm mattress does not have any moving components such as a coil mattress and therefore completely eliminates all motion felt from a partner tossing and turning at night. The mattresses extra firm qualities also greatly reduce the impact depth and circumference of any movement, creating a much smaller movement footprint compared to softer mattresses.</p>
					</div>
				</Row>
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0 no-gutters">
					<div className="col-12 col-sm-5 col-lg-5 col-xl-5 pt-2 mt-0 right-card d-flex mb-2 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
						<h3 className="erbaum-bold pr-3 pr-sm-2 pr-md-4 pr-lg-5 pr-xl-5"><span>5</span></h3>
						<img src={chirofoam_mattress_5key} alt="chirofoam-mattress-5key" className="rounded-circle" width="250px" height="250px" />
					</div>
					<div className="col-12 col-sm-7 col-lg-7 col-xl-7 left-card">
						<h5 className="erbaum-bold color-primary pb-2 pb-lg-3 pb-xl-3">RESISTS SAGGING</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">One of the most common problems people have which causes them to replace their mattress is sagging. These dips in the mattress are caused by years of use and often lead to great discomfort and irritable sleep.  Softer mattresses typically experience much larger body impressions compared to firmer mattresses.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 space-1">The Chirofoam™ XF Extra Firm mattress is made from the highest quality components which are designed to keep their shape and provide many years of comfort and support. The extra hard foams make it virtually impossible for body impressions to occur over time and the pro lumbar support layer provides an additional 20% more support in the centre third of the mattress which is where the majority of the wear and tear occurs. With the highest quality materials, extra hard foams, and additional reinforcement in the centre third, the Chirofoam™ XF Extra Firm mattress is designed to resist sagging and remain free of body impressions with many years of supportive sleep.</p>
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