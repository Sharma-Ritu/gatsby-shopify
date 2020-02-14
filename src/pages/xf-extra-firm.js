import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col, Media} from 'reactstrap';
import {Link} from 'gatsby'
import "../assets/css/bootstrap.min.css"
import O_img1 from "../assets/img/home4.png"
import O_img4 from "../assets/img/home55.png"
import O_img3 from "../assets/img/home6.png"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import mattress1 from "../assets/img/mattress1.jpg"
import warranty from "../assets/img/waranty.png"
import van from "../assets/img/van.png"
import box from "../assets/img/box.png"
import icon1 from "../assets/img/ic1.png"
import icon2 from "../assets/img/ic2.png"
import icon3 from "../assets/img/ic3.png"
import icon4 from "../assets/img/ic4.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="mt-4 mb py-5" style={{backgroundColor:'#fff'}}>
			<Container>
				<Row className="no-gutters pb-2 pb-sm-5">
					<Col sm="6">
						<img src={product2} alt="Product2" width="100%" />
						<div className="row text-center text-lg-left no-gutters">

						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={product1} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={product2} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={mattress1} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						           <img className="img-fluid img-thumbnail border-0" src={O_img1} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						           <img className="img-fluid img-thumbnail border-0" src={O_img4} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						           <img className="img-fluid img-thumbnail border-0" src={O_img3} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={mattress1} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={product1} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={product2} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={O_img3} alt=""/>
						          </Link>
						    </div>
						     <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						            <img className="img-fluid img-thumbnail border-0" src={O_img4} alt=""/>
						          </Link>
						    </div>
						    <div className="col-lg-2 col-md-3 col-3 mx-1">
						      <Link to="#" className="d-block mb-2 h-100">
						           <img className="img-fluid img-thumbnail border-0" src={O_img1} alt=""/>
						          </Link>
						    </div>
					  </div>
					</Col>
					<Col sm="6" className="pl-lg-5 pl-0 pt-3 pt-sm-0 color-primary">	
						<h3 className="erbaum-bold pb-3 color-primary">THE CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="filson-pro-reg space-1 col-12 col-sm-12 col-lg-7 px-0" style={{fontSize:'14px'}}>Introducing the new Chirofoam<sup>TM</sup> XF Memory Foam mattress. An extra firm mattress designed for maximum support. Made in Toronto, ON.</p>
						<p className="filson-pro-reg space-1 col-12 col-sm-12 col-lg-7 px-0" style={{fontSize:'14px'}}>Upgrade your sleep today!</p>
						<p className="filson-pro-reg space-1 col-12 col-sm-12 col-lg-7 px-0" style={{fontSize:'14px'}}>Ideal for back and stomach sleepers.</p>
						<p className="filson-pro-reg space-1 col-12 col-sm-12 col-lg-7 px-0" style={{fontSize:'14px'}}>Firmness sacle: 10/10-Extra Firm</p>
						<div className="d-flex text-center pt-3 pl-sm-0 pl-lg-5 pl-0 facilities">
							<Col sm="4" className="px-2 px-sm-3">
								<Link to="/warranty/"><img src={warranty} alt="warranty" width="60px" className="mb-3"/></Link>
								<Link to="/warranty/"><span className="d-block erbaum-bold color-primary" style={{fontSize:'0.8rem'}}>15 YEAR WARRANTY</span></Link>
							</Col>
							<Col sm="4" className="px-2 px-sm-3">
								<img src={van} alt="van" width="60px" className="mb-3"/>
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
							<h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5">ONDIMENTUM QUISBIBENDUM SED</h4>
						</div>
						<Col sm="6">
							<Media className="px-lg-5 px-sm-0 px-0 pb-3 pb-sm-5">
								  <Media left middle>
										<img src={icon1} alt="icon1" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with data by the Sleep To Live Institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity, support, alignment, pressure relief and comfort.</p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-lg-5 px-sm-0 px-0 pb-3 pb-sm-5">
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
							<Media className="px-lg-5 px-sm-0 px-0 pb-3 pb-sm-5">
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
							<Media className="px-lg-5 px-sm-0 px-0 pb-3 pb-sm-5">
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
		<section className="mt-4 mb-4 py-3">
			<Container>
				<Row>
					<Col sm="6" className="position-relative" style={{zIndex:'9'}}>
						<h4 className="lead-text-font color-primary erbaum-bold display-5">ONDIMENTUM QUISBIBENDUM SED</h4>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
							<b className="proxima-eb">Our specilized layer of chirofoam<sup style={{fontSize:'7px'}}>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.
						</p>
						<p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
							<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">READ CUSTOMER REVIEWS</Link>
						</p>
					</Col>
					<Col sm="6">
						<img src={mattress1} alt="Mattress1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="rating bg-image">
			<div className="card-layer"></div>
			<Container>
				<Row>
					<div className="position-absolute card-content">
						<h4 className="px-3 px-sm-0 lead-text-font text-white erbaum-bold display-5 text-center">4 OUT OF 5 CONSUMERS SERVEYED SAID CHIROFOAM<sup>TM</sup> IS MORE COMFORTABLE COMPARED TO OTHER COMFORTABLE BEST SELLING MATTRESS BRANDS.</h4>
					</div>
				</Row>
			</Container>
		</section>
		<Footer />
	</>
  );
};