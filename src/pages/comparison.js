import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Form} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import logo from "../assets/img/logo2.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="mb-0 py-3 py-sm-3 py-md-3 py-lg-5 py-xl-5 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">Chirofoam™ Vs. Others</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>World-class mattresses, at the best price.</p>
				</Row>
			</Container>
		</section>
		<section className="py-3 py-sm-3 py-md-4 py-lg-5 py-xl-5">
			<Container>
				<Row className="mx-0">
					<p className="text-1 filson-pro-reg color-secondary text-center" style={{lineHeight:'30px'}}>
						See how Chirofoam™ compares with the best memory foam mattresses available online today.&nbsp; Chirofoam™ memory foam mattresses are the only chiropractor recommended major online brand to offer dual comfort layers of memory foam and Chirofoam™ support foam, and a lumbar support, and a choice of comfort providing the ideal balance between comfort and support. &nbsp;With <strong className="color-primary">all these features for less than the competition</strong>, we have your back! We have compared the best-selling luxury online mattress brands against Chirofoam™ mattresses for you to see for yourself!
					</p>
					<table className="comparison-chart d-none">
						<tr className="text-center">
							<td>GEL INFUSED MEMORY FOAM</td>
							<td className="pt-5"><img src={logo} alt="Chirofoam"/><p>Queen Size</p><strong>C$990</strong><span>✓</span></td>
							<td><img src={logo} alt="Chirofoam"/><p>XF - Queen Size</p><strong>C$840</strong><span>✓</span></td>
							<td><p className="filson-pro-reg color-secondary">Online Premium Brands (i.e. Leesa)</p><p>Queen Size</p><strong>C$1190</strong><span><i className="fa fa-times"></i></span></td>
							<td><p className="filson-pro-reg color-secondary">Online Popular Brands (i.e. Casper)</p><p>Queen Size</p><strong>C$1175</strong><span><i className="fa fa-times"></i></span></td>
							<td><p className="filson-pro-reg color-secondary">Brick & Mortar Premium Brands (i.e. Tempur-pedic)</p><p>Queen Size</p><strong>C$2000+ </strong><span>✓</span></td>
						</tr>
						<tr className="text-center">
							<td>TOTAL MEMORY FOAM</td>
							<td>2 Inches</td>
							<td>1 Inch</td>
							<td>2 Inches</td>
							<td>1 Inch</td>
							<td>Varies</td>
						</tr>
						<tr className="text-center">
							<td>COOLING FEATURES</td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
						</tr>
						<tr className="text-center">
							<td>LUMBAR SUPPORT</td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
						</tr>
						<tr className="text-center">
							<td>TOTAL THICKNESS 12" OR MORE</td>
							<td><span>✓</span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span>✓</span></td>
						</tr>
						<tr className="text-center">
							<td>FIRMNESS</td>
							<td>Luxury Firm</td>
							<td>Extra Firm </td>
							<td>Medium</td>
							<td>Medium-Soft</td>
							<td>Various Models</td>
						</tr>
						<tr className="text-center">
							<td>CHIROPRACTOR RECOMMENDED</td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
							<td><span><i className="fa fa-times"></i></span></td>
						</tr>
						<tr className="text-center">
							<td>FREE SHIPPING</td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span><i className="fa fa-times"></i></span></td>
						</tr>
						<tr className="text-center">
							<td>FULL MONEY BACK RETURNS</td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span>✓</span></td>
							<td><span><i className="fa fa-times"></i></span></td>
						</tr>
						<tr className="text-center">
							<td>SLEEP TRIAL</td>
							<td>100 Nights</td>
							<td>100 Nights </td>
							<td>100 Nights</td>
							<td>100 Nights</td>
							<td>90 Nights</td>
						</tr>
						<tr className="text-center">
							<td>WARRANTY</td>
							<td>15 Years</td>
							<td>15 Years</td>
							<td>10 Years</td>
							<td>10 Years</td>
							<td>10 Years</td>
						</tr>
						<tr className="text-center">
							<td><a href="">HONEST MATTRESS REVIEWS RATING</a></td>
							<td className="pb-5">World-Class</td>
							<td>World-Class</td>
							<td>Good</td>
							<td>Standard</td>
							<td>Standard</td>
						</tr>
					</table>
				</Row>
			</Container>
		</section>
		<section className="py-3 py-sm-3 py-md-4 py-lg-5 py-xl-5">
				<Container>
						<Row className="px-3">
							<div className="table-rows">
								<div className="row-list">
									<ul>
										<li></li>
										<li>GEL INFUSED MEMORY FOAM</li>
										<li>TOTAL MEMORY FOAM</li>
										<li>COOLING FEATURES</li>
										<li>LUMBAR SUPPORT</li>
										<li>TOTAL THICKNESS 12" OR MORE</li>
										<li>FIRMNESS</li>
										<li>CHIROPRACTOR RECOMMENDED</li>
										<li>FREE SHIPPING</li>
										<li>FULL MONEY BACK RETURNS</li>
										<li>SLEEP TRIAL</li>
										<li>WARRANTY</li>
										<li><a href="#" className="text-dark">HONEST MATTRESS REVIEWS RATING</a></li>
									</ul>
								</div>
								<div className="row-list">
									<ul>
										<li><img src={logo} alt="Chirofoam"/><p className="v-size">Queen Size</p><strong>C$990</strong></li>
										<li><span>✓</span></li>
										<li>2 Inches</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>Luxury Firm</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>100 Nights</li>
										<li>15 Years</li>
										<li>World-Class</li>
									</ul>
								</div>
								<div className="row-list">
									<ul>
										<li><img src={logo} alt="Chirofoam"/><p className="v-size">XF - Queen Size</p><strong>C$840</strong></li>
										<li><span>✓</span></li>
										<li>1 Inch</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="cut">X</span></li>
										<li>Extra Firm </li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>100 Nights </li>
										<li>15 Years</li>
										<li>World-Class</li>
									</ul>
								</div>
								<div className="row-list">
									<ul>
										<li><p className="filson-pro-reg color-secondary">Online Premium Brands (i.e. Leesa)</p><p className="v-size">Queen Size</p><strong>C$1190</strong></li>
										<li><span>✓</span></li>
										<li>2 Inches</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="cut">X</span></li>
										<li><span className="cut">X</span></li>
										<li>Medium</li>
										<li><span className="cut">X</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>100 Nights</li>
										<li>10 Years</li>
										<li>Good</li>
									</ul>
								</div>
								<div className="row-list">
									<ul>
										<li><p className="filson-pro-reg color-secondary">Online Popular Brands (i.e. Casper)</p><p className="v-size">Queen Size</p><strong>C$1175</strong></li>
										<li><span>✓</span></li>
										<li>1 Inch</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="cut">X</span></li>
										<li><span className="cut">X</span></li>
										<li>Medium-Soft</li>
										<li><span className="cut">X</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>100 Nights</li>
										<li>10 Years</li>
										<li>Standard</li>
									</ul>
								</div>
								<div className="row-list">
									<ul>
										<li><p className="filson-pro-reg color-secondary">Brick & Mortar Premium Brands (i.e. Tempur-pedic)</p><p className="v-size">Queen Size</p><strong>C$2000+</strong></li>
										<li><span className="correct-ic">✓</span></li>
										<li>Varies</li>
										<li><span className="correct-ic">✓</span></li>
										<li><span className="cut">X</span></li>
										<li><span className="correct-ic">✓</span></li>
										<li>Various Models</li>
										<li><span className="cut">X</span></li>
										<li><span className="cut">X</span></li>
										<li><span className="cut">X</span></li>
										<li>100 Nights</li>
										<li>10 Years</li>
										<li>Standard</li>
									</ul>
								</div>
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
		<section className="rating-and-review py-3">
			<Container className="pb-5 pb-lg-5 pb-xl-5">
				<Row>
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
