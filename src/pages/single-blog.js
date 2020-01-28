import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import blogs1 from "../assets/img/blogs5.jpg"
import girl from "../assets/img/girl.jpg"



export default (props) => {
  return (
	<>
		<Header />
		<section className="single-blog py-5" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
			<div className="container-large">
				<h3 className="text-uppercase filson-pro-reg m-0" style={{fontSize:'22px'}}>4 Benefits of Juicing and How it Helps Improve Sleep</h3>
			</div>
		</section>
		<section className="mb-0 py-5 position-relative">
			<div className="container-large">
				<Row>
					<Col sm="12" className="align-middle">
						<div className="featured-image position-relative overflow-hidden">
							<img src={blogs1} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out', width:'100%'}}/>
						</div>
						<h2 className="mb-3 color-primary text-uppercase erbaum-bold pt-4 space-1">4 Benefits of Juicing and How it Helps Improve Sleep</h2>
						<Row>
							<Col sm="6">
								<p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span>June 15, 2019</span></p>
							</Col>
							<Col sm="6" className="text-right" style={{display:'ruby'}}>
								<p style={{color:'rgba(0,0,0,0.4)'}} className="ml-4"><i class="fa fa-share-alt"></i><span className="pl-2">2</span></p>
								<p className="px-2" style={{color:'rgba(0,0,0,0.4)'}} className="ml-4"><i class="fa fa-envelope"></i><span className="pl-2">2</span></p>
								<p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}} className="ml-4"><i class="fa fa-heart"></i><span className="pl-2">2</span></p>
							</Col>
						</Row>	
						<Row className="mt-3">
							<Col sm="9">
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									Sleep; the blissful seven to eight hours we spend every night resting cut off from the world sets the tone for the next day. A good rest is a must for having a productive day as sleep helps you rejuvenate and heal. In the previous blog, we talked about the benefits of sleep tracking devices and how our scientifically designed mattress helps you sleep better. Our mattresses are designed especially to increase comfort while providing the support you need so you don’t have to count sheep. While our mattresses help enhance your sleep, this is not a sure shot solution to your insomnia.
								</p>
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									Food is an integral part of a healthy lifestyle and in order to eliminate sleep problems, it is important to improve food habits. A well balanced nutritious diet, rich in proteins, vitamins, minerals, and natural fiber, will help you stay physically fit and improve your sleep.
								</p>
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									One of the best ways to include proteins, vitamins, and minerals in your diet is consuming fresh fruit and vegetable juices. Unlike canned juices, fresh fruit juices are loaded with essential vitamins and minerals that should be included in your diet.
								</p>
							</Col>
							<Col sm="3">
								<img src={girl} alt="" className="img-fluid" />
							</Col>
						</Row>
					</Col>
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
						<a href="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</a>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p> 
				</Row>
			</div>
		</section>

		<Footer />
	</>
  );
};
