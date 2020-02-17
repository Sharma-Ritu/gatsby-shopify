import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import mattress_size from "../assets/img/mattress-size.png"
import xl_twin_size from "../assets/img/xl-twin-size.png"
import full_size from "../assets/img/full-size.png"
import queen_size from "../assets/img/queen-size.png"
import king_size from "../assets/img/size.png"
import cali_king from "../assets/img/cali-king-size.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="py-5 mattress-section1" style={{backgroundColor:'#efefef'}}>
			<Container>
				<Row>
					<Col sm="6" className="text-center">
						<h1 className="display-5 font-weight-bold erbaum-bold text-uppercase pt-5 space-3 color-primary px-0 pb-3 text-center text-sm-left text-lg-center text-xl-center">ONE MATTRESS SIZE DOES NOT FIT ALL.</h1>
						<p className="filson-pro-reg text-1 color-secondary text-center text-sm-left text-lg-center text-xl-center">Choosing a mattress online without testing it for yourself can prove challenging. Bed selection differs between buyer preference as well as space available in varying bedrooms.</p>
						<p className="filson-pro-reg text-1 color-secondary text-center text-sm-left text-lg-center text-xl-center">Below we’ve provided a comparison of the different Chirofoam™ mattress dimensions available to ensure you get the appropriate sized bed in a box perfect for you. Don’t worry sleepyhead, We Got Your Back!</p>
					</Col>
					<Col sm="6" className="m-size">
						<img src={mattress_size} alt="Mattress Sizes" style={{width:'100%'}}/>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<Container className="py-3 py-sm-5">
				<Row className="pb-2 pb-sm-5">
					<Col sm="4" className="difference-sizes text-center">
						<img src={xl_twin_size} alt="XL Twin Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">TWIN</h5>
						<span className="color-secondary proxima-r">39” X 75” X 12”</span>
					</Col>
					<Col sm="4" className="difference-sizes text-center">
						<img src={xl_twin_size} alt="XL Twin Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">TWIN XL</h5>
						<span className="color-secondary proxima-r">39” X 80” X 12”</span>
					</Col>
					<Col sm="4" className="difference-sizes text-center">
						<img src={full_size} alt="Full Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">FULL</h5>
						<span className="color-secondary proxima-r">54” X 75” X 12”</span>
					</Col>
					<Col sm="4" className="difference-sizes text-center">
						<img src={queen_size} alt="Queen Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">QUEEN</h5>
						<span className="color-secondary proxima-r">60” X 80” X 12”</span>
					</Col>
					<Col sm="4" className="difference-sizes text-center">
						<img src={king_size} alt="King Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">KING</h5>
						<span className="color-secondary proxima-r">76” X 80” X 12”</span>
					</Col>
					<Col sm="4" className="difference-sizes text-center">
						<img src={cali_king} alt="Cali King Size"/>
						<h5 className="erbaum py-3 py-sm-4 m-0">CALI KING</h5>
						<span className="color-secondary proxima-r">72” X 84” X 12”</span>
					</Col>
				</Row>
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
		<section className="py-5" style={{backgroundColor:'#efefef'}}>
			<Container>
				<Row className="m-0">
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={xl_twin_size} alt="XL Twin Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">Single/Twin Mattress</h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">The Chirofoam™ single/twin mattress is an ideal fit for compact living spaces and relaxing all by yourself.  Perfect for one person or growing kids, the single/twin mattress measures 39 inches wide and 75 inches in length. </p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – SINGLE/TWIN SIZE</Link>
						</p>
					</div>
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={xl_twin_size} alt="XL Twin Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">Twin XL Mattress</h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">Spanning 39 inches wide and 80 inches in length, the twin XL mattress is perfect for those living in an apartment with a necessity to maximize a minimal amount of bedroom space.  This size mattress is slightly bigger than the twin (by 5 inches in length) and is a popular size choice for teenagers or college students.</p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – SINGLE XL/TWIN XL SIZE</Link>
						</p>
					</div>
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={full_size} alt="Full Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">Double/Full Mattress </h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">Larger in width than the twin & twin XL mattress, the dimensions of the double/full Chirofoam™ mattress spans 75 inches in length and 54 inches in width.  This mattress is a great choice for a couple, a smaller guest bedroom or an owner of a few pets who enjoy cozying up on a comfortable & supportive mattress.</p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – DOUBLE/FULL SIZE</Link>
						</p>
					</div>
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={queen_size} alt="Queen Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">Queen Mattress</h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">Larger than a double bed and a common choice for most bedrooms, the Chirofoam Queen mattress measures out 60 inches wide and 80 inches in length. The Queen is a spacious mattress, providing more room for couples to rest than the double or individuals who enjoy an ample amount of space to get comfortable on.</p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – QUEEN SIZE</Link>
						</p>
					</div>
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={cali_king} alt="King Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">King Mattress</h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">The King mattress by Chirofoam™ is 16 inches wider than the queen mattress, measuring 76 inches wide by 80 inches long.  The main difference between the Queen, King and Cali King mattresses are the size dimensions, the amount of space available in the bedroom and how much preferred space each sleeper needs. A King requires a more spacious bedroom to fit this size mattress.</p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – KING SIZE</Link>
						</p>
					</div>
					<div className="all-mattress text-center mb-2 mb-sm-5 pb-0 pb-sm-5">
						<img src={cali_king} alt="Cali King Size"/>
						<h4 className="space-1 color-primary erbaum-bold text-uppercase py-2 py-sm-5 mb-0">Cali King Mattress</h4>
						<p className="mattress-desc space-3 proxima-r color-primary m-auto text-center px-0 pb-2 pb-sm-5">The largest size mattress option available, Chirofoam’s Cali King mattress measures 72 inches wide and 84 inches long.  The luxurious Cali King mattress offers an abundance of space for sharing with multiple people, taller bodies or individuals who prefer a lot of space to move around.  In comparison to the King mattress, the Cali King mattress is 4 inches longer while the King is 4 inches wider.</p>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
							<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">SHOP – CALI KING SIZE</Link>
						</p>
					</div>
				</Row>
			</Container>
		</section>
		<section className="globe parallax">
			<Container>
				<Row className="text-center">
					<h4 className="space-1 text-white erbaum-bold text-uppercase pb-2 pb-sm-5 w-100 mb-0 display-5">Cali King Mattress</h4>
					<p className="space-4 proxima-r text-white w-100 m-auto text-center px-0 pb-2 pb-sm-5" style={{fontSize:'26px'}}>Increased comfort and support while you sleep.</p>
					<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2 w-100">
						<Link to="/chiropractor-recommended/" className="btn-cta text-white erbaum-bold space-1 mr-3">LEARN MORE</Link>
					</p>
				</Row>
			</Container>
		</section>
		<section className="rating-and-review py-5 py-sm-5">
			<Container className="pb-0 pb-sm-5 mt-0 mt-sm-5">
				<Row className="py-0 py-sm-5">
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>“A great quality mattress I enjoy waking up on every day…” <br/>  -Mark F. from Toronto, Ontario</p>
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
