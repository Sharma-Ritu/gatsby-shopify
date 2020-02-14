import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import "../assets/css/custom.css"
import product1 from "../assets/img/product1.jpg"
import warranty from "../assets/img/waranty.png"
import van from "../assets/img/van.png"
import box from "../assets/img/box.png"
import icon1 from "../assets/img/ic1.png"
import icon2 from "../assets/img/ic2.png"
import icon3 from "../assets/img/ic3.png"
import icon4 from "../assets/img/ic4.png"
import us from "../assets/img/us.png"
import eco from "../assets/img/eco.png"
import confidence from "../assets/img/confidence.png"
import ol1 from "../assets/img/ol1.jpg"
import ol2 from "../assets/img/ol2.jpg"
import ol3 from "../assets/img/ol3.jpg"
import ol4 from "../assets/img/ol4.jpg"
import ol5 from "../assets/img/ol5.jpg"
import ol6 from "../assets/img/ol6.jpg"
import ol7 from "../assets/img/ol7.jpg"
import ol8 from "../assets/img/ol8.jpg"
import ol9 from "../assets/img/ol9.jpg"




export default (props) => {
  return (
	<>
		<Header />
		<section className="mt-4 mb py-5" style={{backgroundColor:'#fff'}}>
			<Container>
				<Row className="no-gutters pb-2 pb-sm-5">
					<Col sm="6" className="col-12 col-sm-6">
						<img src={product1} alt="Product1" width="100%" />
						<div className="row text-center text-lg-left no-gutters">

					    <div className="col-lg-2 col-md-3 col-3 mx-2">
					      <Link to="#" className="d-block mb-4 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol1} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-2">
					      <Link to="#" className="d-block mb-4 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol2} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol3} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					           <img className="img-fluid img-thumbnail border-0" src={ol4} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					           <img className="img-fluid img-thumbnail border-0" src={ol5} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					           <img className="img-fluid img-thumbnail border-0" src={ol6} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol7} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol8} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol9} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol1} alt=""/>
					          </Link>
					    </div>
					     <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-42h-100">
					            <img className="img-fluid img-thumbnail border-0" src={ol3} alt=""/>
					          </Link>
					    </div>
					    <div className="col-lg-2 col-md-3 col-3 mx-1">
					      <Link to="#" className="d-block mb-2 h-100">
					           <img className="img-fluid img-thumbnail border-0" src={ol4} alt=""/>
					          </Link>
					    </div>
					  </div>
					</Col>
					<Col sm="6" className="pl-0 pl-sm-5 color-primary pt-4 pt-sm-0 col-12">	
						<h3 className="erbaum-bold pb-3 color-primary">THE ORIGINAL CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p className="filson-pro-reg space-1 col-sm-12 col-lg-7 col-12 px-0" style={{fontSize:'14px'}}>The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. Upgrade your sleep today!</p>
						<p className="filson-pro-reg space-1 col-sm-12 col-lg-7 col-12 px-0" style={{fontSize:'14px'}}>Ideal for all sleeping positions.</p>
						<p className="filson-pro-reg space-1 col-sm-12 col-lg-7 col-12 px-0" style={{fontSize:'14px'}}>Firmness sacle: 7.5/10-Luxury Firm</p>
						<p className="filson-pro-reg space-1 col-sm-12 col-lg-7 col-12 px-0" style={{fontSize:'14px'}}>Free Delivery across Canada and Continental USA.</p>
						<p className="filson-pro-reg space-1 col-sm-12 col-lg-7 col-12 px-0" style={{fontSize:'14px'}}>Usually ships within 1 - 2 business day. </p>
						<div className="d-flex text-center pt-3 pl-sm-0 pl-lg-5 pl-0 facilities">
							<Col sm="4" className="px-2 px-sm-3">
								<Link to="/warranty/"><img src={warranty} alt="warranty" width="60px" className="mb-3"/></Link>
								<Link to="/warranty/"><span className="d-block erbaum-bold color-primary" style={{fontSize:'0.8rem'}}>15 YEAR WARRANTY12</span></Link>
							</Col>
							<Col sm="4" className="px-2 px-sm-3">
								<Link to="/return-policy/"><img src={van} alt="van" width="60px" className="mb-3"/></Link>
								<span className="d-block erbaum-bold color-primary" style={{fontSize:'0.8rem'}}>FREE EXPRESS DELIVERY AND <Link className="color-primary" to="/return-policy/">EASY RETURNS</Link></span>
							</Col>
							<Col sm="4" className="px-2 px-sm-3">
								<img src={box} alt="box" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold" style={{fontSize:'0.8rem'}}>DELIVERED IN PORTABLE BOX</span>
							</Col>
						</div>
						<div className="row text-center text-lg-left no-gutters mt-4 ml-0">
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="cali" variants="DIMENSIONS: 54″ X 75″ X 12″" price="CAD $1090.00" className="text-center border d-block py-2 variants active" style={{fontSize:'0.6rem', width:'95%'}}>CALI KING</span></div>
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="king" variants="DIMENSIONS: 54″ X 75″ X 12″" price="CAD $890.00" className="text-center border d-block py-2 variants" style={{fontSize:'0.6rem', width:'95%'}}>KING</span></div>
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="queen" variants="DIMENSIONS: 76″ X 80″ X 12″" price="CAD $1090.00" className="text-center border d-block py-2 variants" style={{fontSize:'0.6rem', width:'95%'}}>QUEEN</span></div>
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="double" variants="DIMENSIONS: 60″ X 80″ X 12″" price="CAD $990.00" className="text-center border d-block py-2 variants" style={{fontSize:'0.6rem', width:'95%'}}>DOUBLE FULL</span></div>
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="single" variants="DIMENSIONS: 39″ X 75″ X 12″" price="CAD $690.00" className="text-center border d-block py-2 variants" style={{fontSize:'0.6rem', width:'95%'}}>SINGLE/TWIN</span></div>
							<div className="col-sm-6 col-lg-2 col-4 mb-2"><span id="twin" variants="DIMENSIONS: 39″ X 80″ X 12″" price="CAD $740.00" className="text-center border d-block py-2 variants" style={{fontSize:'0.6rem', width:'95%'}}>TWIN XL</span></div>
						</div>
						<div className="v-sizes">
							<p className="v-size">DIMENSIONS: 54″ X 75″ X 12″</p>
						</div>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
							<b className="proxima-eb">Our specilized layer of chirofoam<sup pr>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain.
						</p>
						<p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-right pr-5">
							<span className="proxima-b color-primary float-left display-5 v-price" style={{lineHeight:'30px'}}>CAD $990.00</span><Link to="/cart/" className="btn-cta color-primary erbaum-bold space-1">ADD TO CART</Link>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<div className="py-4 py-sm-5 feature bg-image">
				<div className="card-layer"></div>
				<Container>
					<Row className="pt-sm-5 pt-3">
						<div style={{width:'100%'}}>
							<h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5 d-none">ONDIMENTUM QUISBIBENDUM SED</h4>
						</div>
						<Col sm="6">
							<Media className="px-sm-5 px-0 pb-3 pb-sm-5">
								  <Media left middle>
										<img src={icon1} alt="icon1" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BY SCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with data by the Sleep To Live Institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity, support, alignment, pressure relief and comfort.</p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-sm-5 px-0 pb-3 pb-sm-5">
								  <Media left middle>
										<img src={icon2} alt="icon2" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>COMFORT GUARANTEED</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Made with the highest quality materials and designed to help you get a better night’s sleep.  Our 97% customer satisfaction rate speaks for itself.</p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-sm-5 px-0 pb-3 pb-sm-5">
								  <Media left middle>
										<img src={icon4} alt="icon4" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>5 KEY FEATURES</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Designed by mattress experts with 5 key features that consumers voted most important for a comfortable sleep experience.</p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-sm-5 px-0 pb-3 pb-sm-5">
								  <Media left middle>
										<img src={icon3} alt="icon3" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>FREE EXPRESS DELIVERY & EASY RETURNS </h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Delivered to your door free of charge, and you may return it within 100 nights if you are not 100% satisfied with full money back.</p>
								  </Media>
							</Media>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
		<section>
			<Container>
				<Row className="py-5 my-sm-5 my-0">
					<Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
						  <Media left middle>
							<h4 className="lead-text-font color-primary erbaum-bold display-5 d-none">HEADING</h4>
							<p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>CertiPUR-US® approved foams are made without ozone depleters, made without PBDE flame retardants made without mercury, lead and other heavy metals, made without formaldehyde. </p>	
						  </Media>
						  <Media body middle className="pl-sm-4 pl-0 pb-3">
							  <img src={us} alt="us" width="150px"/>
						  </Media>
					</Media>
					<Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
						  <Media left middle>
							<p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>Eco institut tested for emission analysis in the test chamber according to ISO 16000. compound analyses for heavy metals. AOX/EOX, biocides, phthalates, flame retatdants etc... odour testing according to VDA, toxicological and ecological expertise.</p>	
						  </Media>
						  <Media body middle className="pl-sm-4 pl-0 pb-3">
							  <img src={eco} alt="eco" width="150px"/>
						  </Media>
					</Media>
					<Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
						  <Media left middle>
							<p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>Confidence In Textile Oeko-Tex® standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to human. Oeko-Tex® standard 100 is an international certification that set limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>	
						  </Media>
						  <Media body middle className="pl-sm-4 pl-0 pb-3">
							  <img src={confidence} alt="confidence" width="150px"/>
						  </Media>
					</Media>
				</Row>
			</Container>
		</section>
		<section className="mt-4 py-5 max-support bg-image">
			<Container>
				<Row className="">
					<Col sm="4">
						<h2 className="display-3 erbaum-bold text-white">MAX SUPPORT MAX RESULTS</h2>
						<p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
							<Link to="/faq/" className="btn-cta text-white erbaum-bold space-1">CALL TO ACTION</Link>
						</p>
					</Col>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};
