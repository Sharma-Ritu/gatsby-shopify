import React, { useState } from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Fade, Media, Nav, NavItem, NavLink, TabContent, TabPane, Form} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"

const Example = (props) => {
	//const [showTest, setShowTest] = useState(false);
  let selectedChoices = Array();
  const [activeTab, setActiveTab] = useState('1');
  const getElement = (seletor) => {
  	return document.querySelector(seletor)
  };
  const startTest = () => {
  	getElement("#start-test").classList.toggle("d-none")
  	getElement("#take-test").classList.toggle("d-none")
  }
  const handleChoiceSelect = (event, Step, Choice) => {
  	//selectedChoices[(Step)] = Choice;
  	selectedChoices.push(Choice)
  	console.log(selectedChoices, Step, Choice)
  }
  /*
  const toggle = tab => {
    if(activeTab !=== tab) setActiveTab(tab);
  }
  */
//export default (props) => {
  return (
	<>
		<SEO title="TAKE THE TEST" description="We understand that everyone has different needs and there is no such thing as the perfect mattress that works for everyone. This is why we have created the Chirofoam test to see if the Chirofoam mattress is the right fit for you." />
		<Header />
		<section className="mb-0 py-3 pb-lg-5 pb-xl-5" id="start-test">
			<Container className="pb-lg-5 pb-xl-5">
				<Row>
					<h4 className="text-center color-primary erbaum-bold text-uppercase w-100 pt-2 pt-sm-5 mt-0 mt-sm-5">See if the Chirofoam mattress is right for you. Take the test!</h4>
					<p className="pt-0 text-center w-100 pt-2 pt-lg-4 pt-xl-4 color-secondary" style={{fontSize:'15px'}}>We understand that everyone has different needs and there is no such thing as the perfect mattress that works for everyone. This is why we have created the Chirofoam test to see if the Chirofoam mattress is the right fit for you.</p>
					<p className="pt-0 text-center w-100 pt-2 color-secondary" style={{fontSize:'15px'}}>Our objective is to provide our customers with a better sleep and a more comfortable mattress than what they currently sleep on. Although the Chirofoam mattress works great for the majority of people, by taking this test you will be able to find out if the Chirofoam mattress is a good fit for you!</p>
					<p className="cta mt-0 pt-sm-4 pt-lg-5 pt-xl-5 w-100 text-center mt-4 mt-sm-0">
						<button onClick={startTest} className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0">START NOW</button>
					</p>
				</Row>
			</Container>
		</section>
		<section className="mb-0 py-5 bg-white position-relative d-none" id="take-test">
			<div className="container-large">
				<div className="col-md-12">
					<Nav tabs id="tabs" className="d-flex">
						<NavItem>
							<NavLink  className={activeTab === '1' ? 'active' : ''}  onClick={() => setActiveTab('1')}>
								<span>Step 1</span>
								Sleep Position
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
								<span>Step 2</span>
								Surface
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
								<span>Step 3</span>
								Body Type
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
								<span>Step 4</span>
								Temperature
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
								<span>Step 5</span>
								Exercise
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
								<span>Step 6</span>
								Back Pain
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent className="take-test-tab" activeTab={activeTab}>
						<TabPane tabId="1">
							<div className="tab-content">
                    			<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
												<div className="left-content">
													<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">1. In what position do you most frequently sleep at night?</h3>
													<div>
														<input type="radio" value="1" name="first_stepopt" id="radioa1" onChange={e => handleChoiceSelect(e, 1, 1)}/>
														<label className="opt_heading" htmlFor="radioa1">a. I sleep on my side.</label>
													</div>
													<div>
														<input type="radio" value="2" name="first_stepopt" id="radioa2" onChange={e => handleChoiceSelect(e, 1, 2)}/>
														<label className="opt_heading" htmlFor="radioa2">b. I sleep on my back and/or stomach.</label>
													</div>
													<div>
														<input type="radio" value="3" name="first_stepopt" id="radioa3" onChange={e => handleChoiceSelect(e, 1, 3)}/>
														<label className="opt_heading" htmlFor="radioa3">c. I toss and turn all the time.</label>
													</div>
												</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</TabPane>
						<TabPane tabId="2">
							<div className="tab-content border border-top-0">
								<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
											<div className="left-content">
												<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">2. On which surface do you think you would have the most comfortable sleep?</h3>
												<div>
													<input type="radio" value="1" name="second_stepopt" id="radiob1" onChange={e => handleChoiceSelect(e, 2, 1)} />
													<label className="opt_heading" htmlFor="radiob1">a. Soft – Like sleeping in a big pile of pillows that you sink into.</label>
												</div>
												<div>
													<input type="radio" value="2" name="second_stepopt" id="radiob2" onChange={e => handleChoiceSelect(e, 2, 2)} />
													<label className="opt_heading" htmlFor="radiob2">b. Medium – Like sleeping on the couch with regular cushions.</label>
												</div>
												<div>
													<input type="radio" value="3" name="second_stepopt" id="radiob3" onChange={e => handleChoiceSelect(e, 2, 3)} />
													<label className="opt_heading" htmlFor="radiob3">c. Firm – Like sleeping on the floor with a thick and fluffy comforter underneath.</label>
												</div>
												<div>
													<input type="radio" value="4" name="second_stepopt" id="radiob4" onChange={e => handleChoiceSelect(e, 2, 4)} />
													<label className="opt_heading" htmlFor="radiob4">d. Extra Firm – Like sleeping on the bare floor with just a carpet underneath.</label>
												</div>
											</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
                    				</Row>
                				</div>
            				</div>
						</TabPane>
						<TabPane tabId="3">
							<div className="tab-content border border-top-0">
								<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
											<div className="left-content">
												<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">3. What would you consider your body type?</h3>
												<div>
													<input type="radio" value="1" name="third_stepopt" id="radioc1"/>
													<label className="opt_heading" htmlFor="radioc1">a. Small – I am very small and/or very skinny. (Typically under 130lbs.)</label>
												</div>
												<div>
													<input type="radio" value="2" name="third_stepopt" id="radioc2"/>
													<label className="opt_heading" htmlFor="radioc2">b. Average – I am average height and average build. (Between 130lbs and 210lbs.)</label>
												</div>
												<div>
													<input type="radio" value="3" name="third_stepopt" id="radioc3"/>
													<label className="opt_heading" htmlFor="radioc3">c. Large – I am taller than average and/or a little heavier than average. (Between 210lbs and 280lbs.)</label>
												</div>
												<div>
													<input type="radio" value="4" name="third_stepopt" id="radioc4"/>
													<label className="opt_heading" htmlFor="radioc4">d. Extra Large – I have a very large frame and on the heavy side. (Over 280lbs.)</label>
												</div>
											</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
                    				</Row>
                				</div>
            				</div>
						</TabPane>
						<TabPane tabId="4">
							<div className="tab-content border border-top-0">
								<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
											<div className="left-content">
												<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">4. Do you get hot and sweaty or very cold when you sleep at night?</h3>
												<div>
													<input type="radio" value="1" name="forth_stepopt" id="radiod1" />
													<label className="opt_heading" htmlFor="radiod1">a. I sleep very cool and always need to wrap myself up to keep warm.</label>
												</div>
												<div>
													<input type="radio" value="2" name="forth_stepopt" id="radiod2" />
													<label className="opt_heading" htmlFor="radiod2">b. My sleep temperature is not a problem, I’m never too hot or too cold.</label>
												</div>
												<div>
													<input type="radio" value="3" name="forth_stepopt" id="radiod3" />
													<label className="opt_heading" htmlFor="radiod3">c. I get hot once in a while but nothing drastic.</label>
												</div>
												<div>
													<input type="radio" value="4" name="forth_stepopt" id="radiod4" />
													<label className="opt_heading" htmlFor="radiod4">d. I get hot and sweaty when I sleep and wake up in the middle of the night constantly.</label>
												</div>
											</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
                    				</Row>
                				</div>
            				</div>
						</TabPane>
						<TabPane tabId="5">
							<div className="tab-content border border-top-0">
								<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
											<div className="left-content">
												<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">5. How often to you play sports, work out, exercise, and/or go for a run?</h3>
												<div>
													<input type="radio" value="1" name="fifth_stepopt" id="radioe1" />
													<label className="opt_heading" htmlFor="radioe1">a. 3-7 times a week.</label>
												</div>
												<div>
													<input type="radio" value="2" name="fifth_stepopt" id="radioe2" />
													<label className="opt_heading" htmlFor="radioe2">b. 1-2 times a week.</label>
												</div>
												<div>
													<input type="radio" value="3" name="fifth_stepopt" id="radioe3" />
													<label className="opt_heading" htmlFor="radioe3">c. A few times a month.</label>
												</div>
												<div>
													<input type="radio" value="4" name="fifth_stepopt" id="radioe4" />
													<label className="opt_heading" htmlFor="radioe4">d. Never.</label>
												</div>
											</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
										
                    				</Row>
                				</div>
            				</div>
						</TabPane>
						<TabPane tabId="6">
							<div className="tab-content border border-top-0">
								<div className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
									<Row className="m-0">
										<Col className="col-12 col-lg-7 col-xl-7">
											<div className="left-content">
												<h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">6. Do you suffer from back pain?</h3>
												<div>
													<input type="radio" value="1" name="sixth_stepopt" id="radiof1" />
													<label className="opt_heading" htmlFor="radiof1">a. I suffer from severe back pain constantly.</label>
												</div>
												<div>
													<input type="radio" value="2" name="sixth_stepopt" id="radiof2" />
													<label className="opt_heading" htmlFor="radiof2">b. I get occasional back pain that is severe.</label>
												</div>
												<div>
													<input type="radio" value="3" name="sixth_stepopt" id="radiof3" />
													<label className="opt_heading" htmlFor="radiof3">c. I get occasional back pain that is mild.</label>
												</div>
												<div>
													<input type="radio" value="4" name="sixth_stepopt" id="radiof4" />
													<label className="opt_heading" htmlFor="radiof4">d. I do not suffer from back pain.</label>
												</div>
											</div>
										</Col>
										<Col className="col-12 col-lg-5 col-xl-5">
											<div>
												
											</div>
										</Col>
                    				</Row>
                				</div>
            				</div>
						</TabPane>
					</TabContent>
				</div>
			</div>
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
