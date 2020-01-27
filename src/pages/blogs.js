import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import blogs1 from "../assets/img/blogs1.jpg"


export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg charity">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
				<h2 className="font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">Chirofoam™ Memory Foam Mattresses</h2>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>Sleep Education and Chirofoam™ News</p>
			</Jumbotron>
		</section>
		<section className="mb-0 py-5 position-relative">
			<div className="container-large">
				<Row>
					<Col sm="8" className="align-middle">
						<div className="blogs-section mb-5">
							<div className="featured-image position-relative overflow-hidden">
								<a href="#">
									<img src={blogs1} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
									<div className="card-layer">
										<div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
											<i class="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
										</div>
									</div>
								</a>
							</div>
							<div className="blogs-content d-flex mt-4 pb-4">
								<Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
									<p style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-share-alt"></i><span className="d-block">2</span></p>
									<p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-envelope"></i><span className="d-block">2</span></p>
									<p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-heart"></i><span className="d-block">2</span></p>
								</Col>
								<Col sm="11" className="pl-4">
									<p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span>June 15, 2019</span></p>
									<h3 className="mb-3"><a href="" className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>4 Benefits of Juicing and How it Helps Improve Sleep</a></h3>
									<p className="filson-pro-reg" style={{fontSize:'14px'}}>Sleep; the blissful seven to eight hours we spend every night resting cut off from the world sets the tone for the next day. A good rest is a must for having a productive day as sleep helps you [...]</p>
									<p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
										<a href="/single-blog/" className="btn-cta color-primary erbaum-bold space-1">READ MORE</a>
									</p>
								</Col>
							</div>
						</div>
						<div className="blogs-section mb-5">
							<div className="featured-image position-relative overflow-hidden">
								<a href="#">
									<img src={blogs1} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
									<div className="card-layer">
										<div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
											<i class="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
										</div>
									</div>
								</a>
							</div>
							<div className="blogs-content d-flex mt-4 pb-4">
								<Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
									<p style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-share-alt"></i><span className="d-block">2</span></p>
									<p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-envelope"></i><span className="d-block">2</span></p>
									<p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-heart"></i><span className="d-block">2</span></p>
								</Col>
								<Col sm="11" className="pl-4">
									<p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span>June 15, 2019</span></p>
									<h3 className="mb-3"><a href="" className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>4 Benefits of Juicing and How it Helps Improve Sleep</a></h3>
									<p className="filson-pro-reg" style={{fontSize:'14px'}}>Sleep; the blissful seven to eight hours we spend every night resting cut off from the world sets the tone for the next day. A good rest is a must for having a productive day as sleep helps you [...]</p>
									<p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
										<a href="/single-blog/" className="btn-cta color-primary erbaum-bold space-1">READ MORE</a>
									</p>
								</Col>
							</div>
						</div>
						<div className="blogs-section mb-5">
							<div className="featured-image position-relative overflow-hidden">
								<a href="#">
									<img src={blogs1} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
									<div className="card-layer">
										<div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
											<i class="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
										</div>
									</div>
								</a>
							</div>
							<div className="blogs-content d-flex mt-4 pb-4">
								<Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
									<p style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-share-alt"></i><span className="d-block">2</span></p>
									<p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-envelope"></i><span className="d-block">2</span></p>
									<p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i class="fa fa-heart"></i><span className="d-block">2</span></p>
								</Col>
								<Col sm="11" className="pl-4">
									<p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span>June 15, 2019</span></p>
									<h3 className="mb-3"><a href="" className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>4 Benefits of Juicing and How it Helps Improve Sleep</a></h3>
									<p className="filson-pro-reg" style={{fontSize:'14px'}}>Sleep; the blissful seven to eight hours we spend every night resting cut off from the world sets the tone for the next day. A good rest is a must for having a productive day as sleep helps you [...]</p>
									<p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
										<a href="/single-blog/" className="btn-cta color-primary erbaum-bold space-1">READ MORE</a>
									</p>
								</Col>
							</div>
						</div>
					</Col>
					<Col sm="4">
						<div className="recent-posts">
							<h5 className="filson-pro-reg">Recent Posts</h5>
							<ul className="list-unstyled">
								<li className="d-flex mb-3">
									<div className="recent-post-image col-4">
											<a href=""><img src={blogs1} alt="Blog 1" className="w-100" /></a>
									</div>
									<div className="recente-posts-data col-8 px-0">
										<p className="mb-0"><a href="" style={{fontSize:'12px', color:'#000'}} className="filson-pro-reg d-block mb-0">4 Benefits of Juicing and How it Helps Improve Sleep</a></p>
										<span style={{fontSize:'12px'}}>June 15, 2019</span>
									</div>
								</li>
								<li className="d-flex mb-3">
									<div className="recent-post-image col-4">
											<a href=""><img src={blogs1} alt="Blog 1" className="w-100" /></a>
									</div>
									<div className="recente-posts-data col-8 px-0">
										<p className="mb-0"><a href="" style={{fontSize:'12px', color:'#000'}} className="filson-pro-reg d-block mb-0">4 Benefits of Juicing and How it Helps Improve Sleep</a></p>
										<span style={{fontSize:'12px'}}>June 15, 2019</span>
									</div>
								</li>
								<li className="d-flex mb-3">
									<div className="recent-post-image col-4">
											<a href=""><img src={blogs1} alt="Blog 1" className="w-100" /></a>
									</div>
									<div className="recente-posts-data col-8 px-0">
										<p className="mb-0"><a href="" style={{fontSize:'12px', color:'#000'}} className="filson-pro-reg d-block mb-0">4 Benefits of Juicing and How it Helps Improve Sleep</a></p>
										<span style={{fontSize:'12px'}}>June 15, 2019</span>
									</div>
								</li>
							</ul>
						</div>
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
