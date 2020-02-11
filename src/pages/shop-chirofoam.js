import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner-shop-chirofoam"
import {Container, Row, Col, Media} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"
import mattress1 from "../assets/img/mattress1.jpg"
import run from "../assets/img/run.png"
import Products from '~/components/Products'


export default (props) => {
  return (
	<>
		<SEO title="SHOP CHIROFOAM™" />
		<Header />
		<Banner/>
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
				<Row className="no-gutters">
					<Col sm="4" className="card1 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0 m-lg-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>AENEAN SEMPER EST URNA</span>
						</div>
					</Col>
					<Col sm="4" className="card2 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>SIT AMET GRAVIDA TORTO</span>
						</div>
					</Col>
					<Col sm="4" className="card3 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>DONEC EROS EX</span>
						</div>
					</Col>
				</Row>
		</section>

		<section>
			<Products />
		</section>
		
		<section className="mt-4 mb-4 py-5 approved bg-image">
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={run} alt="run" width="70%"/>
					</Col>
					<Col sm="8">
						<div className="text-white mb-4 mt-4 pt-3 pl-3">
							<h4 className="lead-text-font text-white erbaum-bold display-5">CUSTOMER APPROVED</h4>
							<p className="proxima-b space-1 col-12 col-sm-7 p-0" style={{fontSize:'16px'}}>Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
							<div className="pt-3">
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									97%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									94%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Increased energy in the morning and throughout the day
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									86%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improved muscle recovery and/or relief in daliy experienced back pain
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									82%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="py-sm-5 py-4">
			<Container>
				<Row>
					<Col sm="6" className="position-relative" style={{zIndex:'9'}}>
						<h4 className="lead-text-font color-primary erbaum-bold display-5">ONDIMENTUM QUISBIBENDUM SED</h4>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
							<b className="proxima-eb">Our specilized layer of chirofoam<sup style={{fontSize:'7px'}}>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.
						</p>
						<p className="cta erbaum pt-3">
							<Link to="#" className="color-primary">CALL TO ACTION <i className="fa fa-caret-right ic1"></i><i className="fa fa-caret-right ic2"></i><i className="fa fa-caret-right ic3"></i></Link>
						</p>
					</Col>
					<Col sm="6">
						<img src={mattress1} alt="Mattress1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>

		

		<Footer />
	</>
  );
};