import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import sleep_child from "../assets/img/sleep-child.jpg"
import children from "../assets/img/children.jpg"
import bedkit from "../assets/img/bedkit.jpg"
import donate from "../assets/img/donate.jpg"
import dream from "../assets/img/dream.jpg"

export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg charity">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
				<h2 className="font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">Sleeping Children Around The World</h2>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>Chirofoam™ will donate 1 Bedkit for every mattress sold.</p>
			</Jumbotron>
		</section>
		<section className="mb-0 py-3 position-relative">
			<Container>
				<Row className="charity-inner text-center">
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-4">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">The Charity’s Purpose </h5>
						<p className="filson-pro-reg color-secondary pt-2">Since it’s founding in 1970, Sleeping Children Around The World (SCAW) has raised over $40 million to provide bedkits for children in 34 countries.  They have helped over one million children by 2009.</p>
						<p className="filson-pro-reg color-secondary pt-2">Their purpose is crystal clear: give every child the opportunity to have a good night’s sleep.  With sleep, the promise of a better tomorrow is realized.</p>
						<p className="filson-pro-reg color-secondary pt-2">The consequences of deprived sleep are well documented.  It is a fact that poor sleep leads to long term issues, especially in young children.  Sleep has tremendous effects on health, memory, emotions and academic potential.  No child should ever be deprived of a peaceful sleep.</p>
						<div className="charity-image text-center w-100">
							<img className="img-fluid" src={sleep_child} alt="Sleeping Child" />
						</div>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-4">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">Core Values</h5>
						<p className="filson-pro-reg color-secondary pt-2">Sleeping Children Around The World and their core values:</p>
						<ul className="filson-pro-reg color-secondary" style={{listStyle:'decimal', fontSize:'14px', lineHeight:'24px'}}>
							<li>It is the basic right of every child to have to have a comfortable night’s sleep.</li>
							<li>100% of all bedkit donations go directly to its contents.  No portion is used to pay for operating expenses.</li>
							<li>They provide hope and joy and aim to preserve the dignity of each child they help.</li>
							<li>They verify that each bedkit is received by a child in need.</li>
							<li>All donations are of “free will” giving.  They will not undertake telemarketing, door to door appeals, mass mailings or use professional fundraisers to help their cause.</li>
						</ul>
						<div className="charity-image text-center w-100">
							<img className="img-fluid" src={children} alt="Children" width="100%"/>
						</div>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-4">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">What is a Bedkit?</h5>
						<p className="filson-pro-reg color-secondary pt-2">Bedkits have benefited more than a million children in 34 developing countries around the world and are largely comprised of the following items:</p>
						<ul className="filson-pro-reg color-secondary" style={{fontSize:'14px', lineHeight:'24px'}}>
							<li>A mat or mattress/bedding</li>
							<li>A mosquito net to combat the threat of malaria & other vector-borne diseases</li>
							<li>Schoolbag and school supplies</li>
							<li>Clothing and footwear</li>
						</ul>
						<p className="filson-pro-reg color-secondary pt-2">All items are sourced locally where possible, with positive economic impact to the local community.</p>
						<div className="charity-image text-center w-100">
							<img className="img-fluid" src={bedkit} alt="Bedkit" width="100%"/>
						</div>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-4">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">Volunteers</h5>
						<p className="filson-pro-reg color-secondary pt-2">Volunteerism takes on a new definition at Sleeping Children, because it means more than just giving back. They believe their volunteers get a lot more than they give; they actually nourish their own humanity.</p>
						<p className="filson-pro-reg color-secondary pt-2">At Sleeping Children there are three distinct kinds of volunteers required to mount a global initiative such as ours.  More than 2000 volunteers are from all over the world.</p>
						<div className="charity-image text-center w-100">
							<img className="img-fluid" src={donate} alt="Donation" width="100%" />
						</div>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 mt-3 mt-sm-5 px-4">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">1 Bedkit for Every Chirofoam Mattress</h5>
						<p className="filson-pro-reg color-secondary pt-2">With every purchase of a Chirofoam mattress, we will donate a Bedkit to a child in need. A bedkit provides a child with the means to go on thriving and the promise that the world holds a brighter future.</p>
						<p className="filson-pro-reg color-secondary pt-2">These Bedkits provide a child with the basic necessities for sleep. This transforms the life of that child and these tools have a lasting effect on the entire family.</p>
						<div className="charity-image text-center w-100">
							<img className="img-fluid" src={dream} alt="Dream" width="100%"/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="pb-2 pb-sm-5">
			<Container className="pb-0 pb-sm-5">
				<Row className="pb-0 pb-sm-5">
					<h4 className="text-center color-primary erbaum-bold text-uppercase w-100 pt-2 pt-sm-5 mt-0 mt-sm-5">Thank you for helping to provide a child in need with better sleep. </h4>
					<p className="pt-0 text-uppercase text-center w-100 pt-2 pt-md-5" style={{color:'#ba2154'}}>For more information on Sleeping Children Around The World visit their website at <a href="www.scaw.org" style={{color:'#000'}}>www.scaw.org</a>.</p>
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
