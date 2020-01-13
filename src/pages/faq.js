import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import run from "../assets/img/run.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="blue-bg faq height-400">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">Chirofoam™ Memory Foam Mattresses </h2>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>If you require any more information about the Chirofoam™ mattress, feel free to call or email us.</p>
			</Jumbotron>
		</section>
		<section className="mb-0 py-5 position-relative">
			<Container>
				<Row>
					<h4 className="text-center lead-text-font color-primary erbaum-bold text-uppercase w-100" style={{paddingBottom:'100px'}}>Frequently Asked Questions </h4>
					<div className="q-list w-100">
						<ul className="list-unstyled pl-0">
							<li>
								<div className="w-100 proxima-r" data-toggle="collapse" data-target="#ans">What is the difference in purchasing through you direct, or purchasing through a retail store?</div>
								<div id="ans" className="collapse show proxima-r color-secondary">
								    The Chirofoam mattress is only available to purchase through our online store.  When purchasing a mattress from a retailer, there are many more overhead costs associated with the sale of a mattress and the same quality mattress will most likely cost you double or even triple to what we charge.
								</div>
							</li>
							<li>
								<div className="w-100 proxima-r" data-toggle="collapse" data-target="#ans">What if my sleeping partner has different sleep issues than I do?</div>
								<div id="ans" className="collapse proxima-r color-secondary">
								   The Chirofoam mattress is designed to help most people get a better night’s sleep by providing proper support and spinal alignment while you sleep.  We offer a 100 night sleep trial to try the mattress and ensure that it is the right one for you and your partner.
								</div>
							</li>
						</ul>
					</div>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};