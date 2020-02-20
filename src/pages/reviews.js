import React, { useState } from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const [showReviews, setShowReviews] = useState(5);
  const reviewsData = [
  	{
  		title : "THE CHIROFOAM™ XF MATTRESS – EXTRA FIRM",
  		rating : 5,
  		ratedBy : "Mina Ho",
  		ratedOn : "September 4, 2019",
  		comment : "Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 5,
  		ratedBy : "Emma",
  		ratedOn : "June 1, 2016",
  		comment : "I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 5,
  		ratedBy : "Judy",
  		ratedOn : "June 1, 2016",
  		comment : "I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 5,
  		ratedBy : "Hardeep",
  		ratedOn : "June 1, 2016",
  		comment : "I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 5,
  		ratedBy : "Steven Wright",
  		ratedOn : "June 2, 2016",
  		comment : "Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P"
  	},
  	{
  		title : "THE CHIROFOAM™ XF MATTRESS – EXTRA FIRM",
  		rating : 4,
  		ratedBy : "Mina Ho",
  		ratedOn : "September 4, 2019",
  		comment : "Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 4,
  		ratedBy : "Emma",
  		ratedOn : "June 1, 2016",
  		comment : "I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 4,
  		ratedBy : "Judy",
  		ratedOn : "June 1, 2016",
  		comment : "I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 4,
  		ratedBy : "Hardeep",
  		ratedOn : "June 1, 2016",
  		comment : "I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 4,
  		ratedBy : "Steven Wright",
  		ratedOn : "June 2, 2016",
  		comment : "Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P"
  	},
  	{
  		title : "THE CHIROFOAM™ XF MATTRESS – EXTRA FIRM",
  		rating : 3,
  		ratedBy : "Mina Ho",
  		ratedOn : "September 4, 2019",
  		comment : "Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 3,
  		ratedBy : "Emma",
  		ratedOn : "June 1, 2016",
  		comment : "I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 3,
  		ratedBy : "Judy",
  		ratedOn : "June 1, 2016",
  		comment : "I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 3,
  		ratedBy : "Hardeep",
  		ratedOn : "June 1, 2016",
  		comment : "I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 3,
  		ratedBy : "Steven Wright",
  		ratedOn : "June 2, 2016",
  		comment : "Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P"
  	},
  	{
  		title : "THE CHIROFOAM™ XF MATTRESS – EXTRA FIRM",
  		rating : 2,
  		ratedBy : "Mina Ho",
  		ratedOn : "September 4, 2019",
  		comment : "Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 2,
  		ratedBy : "Emma",
  		ratedOn : "June 1, 2016",
  		comment : "I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 2,
  		ratedBy : "Judy",
  		ratedOn : "June 1, 2016",
  		comment : "I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 2,
  		ratedBy : "Hardeep",
  		ratedOn : "June 1, 2016",
  		comment : "I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 2,
  		ratedBy : "Steven Wright",
  		ratedOn : "June 2, 2016",
  		comment : "Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P"
  	},
  	{
  		title : "THE CHIROFOAM™ XF MATTRESS – EXTRA FIRM",
  		rating : 1,
  		ratedBy : "Mina Ho",
  		ratedOn : "September 4, 2019",
  		comment : "Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 1,
  		ratedBy : "Emma",
  		ratedOn : "June 1, 2016",
  		comment : "I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 1,
  		ratedBy : "Judy",
  		ratedOn : "June 1, 2016",
  		comment : "I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger!"
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 1,
  		ratedBy : "Hardeep",
  		ratedOn : "June 1, 2016",
  		comment : "I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress."
  	},
  	{
  		title : "THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM",
  		rating : 1,
  		ratedBy : "Steven Wright",
  		ratedOn : "June 2, 2016",
  		comment : "Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P"
  	}
  ];

  const handleLoadMore = () => {
  	if(reviewsData.length !== showReviews){
  		setShowReviews(showReviews+5)
  	}
  }
  /*
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  */
//export default (props) => {
  return (
	<>
		<SEO title="CHIROFOAM™ MATTRESS REVIEWS" />
		<Header />
		<section>
			<Container>
				<Row className="mx-0">
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">Chirofoam™ Mattress Reviews </h2>
						<p className="filson-pro-reg color-primary space-2 pt-5" style={{fontSize:'24px'}}>97% Customer Satisfaction Rate </p>
					</Jumbotron>
				</Row>
			</Container>
		</section>
		
		<section className="mb-0 py-5 position-relative">
			<Container>
				<div className="col-md-12">
					<Nav tabs id="tabs" className="d-block">
						<NavItem>
							<NavLink className={activeTab === '1' ? 'active' : ''}  onClick={() => setActiveTab('1')}>
								Customer Reviews
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
								Leave A Review
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div id="tabsContent" className="tab-content border border-top-0">
                    			<div id="customer-revieew" className="tab-pane active show m-auto pb-5" style={{width:'85%'}}>
									<Row className="mx-0">
										<Col sm="6" className="text-center py-0 py-sm-5 py-lg-5 py-xl-5">
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
									<Row className="mx-0">
                   	<div className="w-100 m-auto">
                   		<ul className="list-unstyled p-0 ratings">
                   			{
                   				reviewsData.slice(0, showReviews).map((review, index) => (
		           							<li className="border mb-4" key={index}>
		           								<h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>{review.title}</h4>
					                   	<div className="d-inline-block br-widget br-readonly pt-2" title={"Rating: "+review.rating}>
					                   		{
					                   			[...Array(review.rating)].map((elem, i) => (
					                   				<button
					                   					data-rating-value={i}
					                   					data-rating-text={i}
					                   					className={((review.rating-1) === i)? "br-selected p-0 border-0 bg-transparent p-0 border-0 bg-transparent br-current":"br-selected p-0 border-0 bg-transparent p-0 border-0 bg-transparent"}
					                   					key={i}
					                   				>
					                   					<span className="color-primary fa fa-star"></span>
					                   				</button>
					                   			))
					                   		}
						                  	<div className="br-current-rating d-none">{review.rating}</div>
					                   	</div>
					                   	<p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">{review.ratedBy}–</b> {review.ratedOn}</p>
					                   	<p className="filson-pro-reg text-1 color-secondary mb-0 pb-0">{review.comment}</p>
		           							</li>
                   				))
                   			}
           						</ul>
			                <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
												<button className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0 p-0" onClick={handleLoadMore} style={{outline:'none'}}>LOAD MORE</button>
											</p>
           					</div>
           				</Row>
								</div>
							</div>
							</TabPane>
							<TabPane tabId="2">
								<div id="tabsContent" className="tab-content border border-top-0">
									<div id="leave-review" className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
										<Row className="mx-0">
											<div className="col-12 col-sm-12 col-lg-6 col-xl-6 m-auto d-flex no-gutters select-mattress">
												<Col className="col-6">
													<div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
														<button className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">Chirofoam Premium Mattress</button>
														<p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our Premium Mattresses</p>
													</div>
												</Col>
												<Col className="col-6">
													<div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
														<button className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">Chirofoam X-Firm mattress</button>
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
export default Example;
