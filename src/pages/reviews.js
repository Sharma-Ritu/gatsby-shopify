import React, { useState } from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media, Nav, NavItem, NavLink, TabContent, TabPane, Form} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
//export default (props) => {
  return (
	<>
		<Header />
		<section>
			<Container>
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">Chirofoam™ Mattress Reviews </h2>
						<p className="filson-pro-reg color-primary space-2 pt-5" style={{fontSize:'24px'}}>97% Customer Satisfaction Rate </p>
					</Jumbotron>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<Row>
					<div className="review-inner">
						
					</div>
				</Row>
			</Container>
		</section>
		<section className="mb-0 py-5 position-relative">
			<Container>
				<div className="col-md-12">
					<Nav tabs id="tabs" className="d-block-ruby">
						<NavItem>
							<NavLink nav-link small color-secondary filson-pro-reg className={activeTab == '1' ? 'active' : ''}  onClick={() => setActiveTab('1')}>
								Customer Reviews
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink nav-link small color-secondary filson-pro-reg className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
								Leave A Review
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div id="tabsContent" className="tab-content border border-top-0">
                    			<div id="customer-revieew" className="tab-pane active show m-auto pb-5" style={{width:'85%'}}>
									<Row>
										<Col sm="6" className="text-center py-5">
											<p className="erbaum-bold color-secondary pt-5 mt-3">4.95 out of 5 stars</p>
											<p><span>175</span> reviews </p>
										</Col>
										<Col sm="6" className="py-5">
											<div className="p-0 list-unstyled review-details w-75 float-left float-sm-right float-lg-right float-xl-right">
												<div className="w-100 d-flex color-primary mb-4">5<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'100%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>166</div>
												<div className="w-100 d-flex color-primary mb-4">4<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'75%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>5</div>
												<div className="w-100 d-flex color-primary mb-4">3<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'50%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>1</div>
												<div className="w-100 d-flex color-primary mb-4">2<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'25%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>1</div>
												<div className="w-100 d-flex color-primary mb-4">1<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'5%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>2</div>
											</div>
										</Col>
									</Row>
									<Row>
                   						<div className="w-100 m-auto">
                   							<ul className="list-unstyled p-0 ratings">
           										<li className="border mb-4">
           											<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Chirofoam™ XF Mattress – Extra Firm</h4>
			                   						<div className="br-widget br-readonly pt-2">
				                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
				                   						<div className="br-current-rating d-none">5</div>
			                   						</div>
			                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Mina Ho–</b> September 4, 2019</p>
			                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends.</p>
           										</li>
			                   					<li className="border mb-4">
			                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
			                   						<div className="br-widget br-readonly pt-2">
				                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
				                   						<div className="br-current-rating d-none">5</div>
			                   						</div>
			                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Emma –</b> June 1, 2016</p>
			                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam! </p>
			                   					</li>
			                   					<li className="border mb-4">
			                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
			                   						<div className="br-widget br-readonly pt-2">
				                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
				                   						<div className="br-current-rating d-none">5</div>
			                   						</div>
			                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Judy –</b> June 1, 2016</p>
			                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger! </p>
			                   					</li>
			                   					<li className="border mb-4">
			                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
			                   						<div className="br-widget br-readonly pt-2">
				                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
				                   						<div className="br-current-rating d-none">5</div>
			                   						</div>
			                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Hardeep –</b> June 1, 2016</p>
			                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress. </p>
			                   					</li>
			                   					<li className="border mb-4">
			                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
			                   						<div className="br-widget br-readonly pt-2">
				                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
				                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
				                   						<div className="br-current-rating d-none">5</div>
			                   						</div>
			                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Steven Wright–</b> June 2, 2016</p>
			                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P</p>
			                   					</li>
           									</ul>
			                   				<p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
												<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">LOAD MORE</Link>
											</p>
           								</div>
           							</Row>
								</div>
							</div>
							</TabPane>
							<TabPane tabId="2">
								<div id="tabsContent" className="tab-content border border-top-0">
									<div id="leave-review" className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
										<Row className="m-0">
											<div className="col-12 col-sm-6 col-lg-6 col-xl-6 m-auto d-flex no-gutters select-mattress">
												<Col className="col-6">
													<div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
														<Link to="#" className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">Chirofoam Premium Mattress</Link>
														<p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our Premium Mattresses</p>
													</div>
												</Col>
												<Col className="col-6">
													<div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
														<Link to="#" className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">Chirofoam X-Firm mattress</Link>
														<p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our X Firm Mattresses</p>
													</div>
												</Col>
											</div>
                        				</Row>
                    				</div>
                				</div>
							</TabPane>
						</TabContent>
					</div>
				</Container>
		</section>
		<section className="py-4 d-none">
        <Container>
            <div className="col-md-12">
                <ul id="tabs" className="nav nav-tabs">
                    <li className="nav-item"><Link to="" data-target="#customer-revieew" data-toggle="tab" className="nav-link small color-secondary filson-pro-reg active">Customer Reviews</Link></li>
                    <li className="nav-item"><Link to="" data-target="#leave-review" data-toggle="tab" className="nav-link small color-secondary filson-pro-reg">Leave A Review</Link></li>
                </ul>
                <div id="tabsContent" className="tab-content border border-top-0">
                    <div id="customer-revieew" className="tab-pane fade active show m-auto pb-5" style={{width:'85%'}}>
                    	<Row>
                        	<Col sm="6" className="text-center py-5">
                        		<p className="erbaum-bold color-secondary pt-5 mt-3">4.95 out of 5 stars</p>
                        		<p><span>175</span> reviews </p>
                        	</Col>
                        	<Col sm="6" className="py-5">
                        		<div className="p-0 list-unstyled review-details w-75 float-right">
                        			<div className="w-100 d-flex color-primary mb-4">5<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'100%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>166</div>
                        			<div className="w-100 d-flex color-primary mb-4">4<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'75%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>5</div>
                        			<div className="w-100 d-flex color-primary mb-4">3<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'50%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>1</div>
                        			<div className="w-100 d-flex color-primary mb-4">2<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'25%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>1</div>
                        			<div className="w-100 d-flex color-primary mb-4">1<i className=" pl-1 pr-3 color-primary fa fa-star"></i><div className="progress rounded-0 bg-transparent w-75 mt-1"><div className="progress-bar rounded-0 mr-4" style={{width:'5%',backgroundColor:'rgb(186, 33, 84)'}}></div></div>2</div>
                        		</div>
                        	</Col>
                   		</Row>
                   		<Row>
                   			<div className="w-100 m-auto">
                   				<ul className="list-unstyled p-0 ratings">
                   					<li className="border mb-4">
                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Chirofoam™ XF Mattress – Extra Firm</h4>
                   						<div className="br-widget br-readonly pt-2">
	                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
	                   						<div className="br-current-rating d-none">5</div>
                   						</div>
                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Mina Ho–</b> September 4, 2019</p>
                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends.</p>
                   					</li>
                   					<li className="border mb-4">
                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                   						<div className="br-widget br-readonly pt-2">
	                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
	                   						<div className="br-current-rating d-none">5</div>
                   						</div>
                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Emma –</b> June 1, 2016</p>
                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam! </p>
                   					</li>
                   					<li className="border mb-4">
                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                   						<div className="br-widget br-readonly pt-2">
	                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
	                   						<div className="br-current-rating d-none">5</div>
                   						</div>
                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Judy –</b> June 1, 2016</p>
                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger! </p>
                   					</li>
                   					<li className="border mb-4">
                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                   						<div className="br-widget br-readonly pt-2">
	                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
	                   						<div className="br-current-rating d-none">5</div>
                   						</div>
                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Hardeep –</b> June 1, 2016</p>
                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress. </p>
                   					</li>
                   					<li className="border mb-4">
                   						<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                   						<div className="br-widget br-readonly pt-2">
	                   						<Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
	                   						<Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
	                   						<div className="br-current-rating d-none">5</div>
                   						</div>
                   						<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Steven Wright–</b> June 2, 2016</p>
                   						<p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P</p>
                   					</li>
                   				</ul>
                   				<p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
									<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">LOAD MORE</Link>
								</p>
                   			</div>
                   		</Row>
                    </div>
                    <div id="leave-review" className="tab-pane fade m-auto py-5" style={{width:'85%'}}>
                        <Row>
                        	<div className="w-50 m-auto d-flex no-gutters select-mattress">
                        		<Col sm="6">
                        			<div className="card card-body text-center border-0">
                        				<Link to="#" className="filson-pro-reg space-1">Chirofoam Premium Mattress</Link>
                        				<p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our Premium Mattresses</p>
                        			</div>
                        		</Col>
                        		<Col sm="6">
                        			<div className="card card-body text-center border-0">
                        				<Link to="#" className="filson-pro-reg space-1">Chirofoam X-Firm mattress</Link>
                        				<p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our X Firm Mattresses</p>
                        			</div>
                        		</Col>
                        	</div>
                        </Row>
                    </div>
                </div>
            </div>
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
export default Example;
