import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Card, CardBody, UncontrolledCollapse} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const FaqPage = (props) => {

	return (
	<>
		<Header />
		<section className="blue-bg faq height-400">
			<Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
				<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2">Chirofoam™ Memory Foam Mattresses </h2>
				<p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{width:'90%',fontSize:'26px'}}>If you require any more information about the Chirofoam™ mattress, feel free to call or email us.</p>
			</Jumbotron>
		</section>
		<section className="mb-0 py-5 mt-lg-3 mt-xl-3 position-relative">
			<Container>
				<Row>
					<h4 className="text-center lead-text-font color-primary erbaum-bold text-uppercase w-100 pb-3 pb-sm-3 pb-lg-5 pb-xl-5">Frequently Asked Questions </h4>
					<div className="q-list w-100 pt-0 pt-sm-0 pt-lg-2 pt-xl-2">
						<ul className="list-unstyled pl-0 qs-ans">
							<li>
								<div id="toggler0" className="qs w-100 proxima-r">What is the difference in purchasing through you direct, or purchasing through a retail store?</div>
								<UncontrolledCollapse toggler="#toggler0" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is only available to purchase through our online store.  When purchasing a mattress from a retailer, there are many more overhead costs associated with the sale of a mattress and the same quality mattress will most likely cost you double or even triple to what we charge.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler1" className="qs w-100 proxima-r">What if my sleeping partner has different sleep issues than I do?</div>
								<UncontrolledCollapse toggler="#toggler1" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is designed to help most people get a better night’s sleep by providing proper support and spinal alignment while you sleep.  We offer a 100 night sleep trial to try the mattress and ensure that it is the right one for you and your partner.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler2" className="qs w-100 proxima-r">How do I know if my items are available or if they’re back ordered?</div>
								<UncontrolledCollapse toggler="#toggler2" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">
									  		The Chirofoam mattress usually ships to your door within 3-10 business days.  If there is a backorder or a delay in delivery, we will be sure to let you know right away.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler3" className="qs w-100 proxima-r">How will I know that you’ve received my order?</div>
								<UncontrolledCollapse toggler="#toggler3" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">
									  		You will receive an order confirmation from us as soon as the order is made.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler4" className="qs w-100 proxima-r">If I live outside Canada, can I order online?</div>
								<UncontrolledCollapse toggler="#toggler4" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We ship the Chirofoam mattress across Canada as well as the United States except for the states of Alaska and Hawaii.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler5" className="qs w-100 proxima-r">How/Can I do I ship to an address other than my billing address?</div>
								<UncontrolledCollapse toggler="#toggler5" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">If you would like to ship to a different address other than your billing address, simply input the shipping address in the shipping section of the checkout process.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler6" className="qs w-100 proxima-r"> How do I make changes to my order?</div>
								<UncontrolledCollapse toggler="#toggler6" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">If you would like to make changes to your order, simply reply to your confirmation email or give us a call and we will be able to assist you right away.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler7" className="qs w-100 proxima-r">How do I cancel my order completely?</div>
								<UncontrolledCollapse toggler="#toggler7" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">If you have placed your order and would like to cancel, simply reply to your confirmation email or give us a call and we will be able to assist you right away.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler8" className="qs w-100 proxima-r">How do I remove items from my shopping cart?</div>
								<UncontrolledCollapse toggler="#toggler8" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Simply click on the “x” to remove items from your shopping cart.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler9" className="qs w-100 proxima-r">Are Chirofoam mattresses recommended for kids?</div>
								<UncontrolledCollapse toggler="#toggler9" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Although the Chirofoam mattress was designed for adults, it is highly recommended for kids as they are growing and developing their backs to have proper support and alignment as they grow.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler10" className="qs w-100 proxima-r">What’s the proper way to turn or rotate a mattress and how often should it be done?</div>
								<UncontrolledCollapse toggler="#toggler10" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress can be rotated from head to toe.  This is recommended every 2-3 months in order to distribute wear and tear on the mattress evenly and make the mattress more comfortable for a longer period of time.  It is easiest to do with two people as you grab the mattress from both sides and rotate it around.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler11" className="qs w-100 proxima-r">How long can I keep the mattress in the box?</div>
								<UncontrolledCollapse toggler="#toggler11" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress can be compressed for up to 6 months.  Each mattress is made to order and we ship out the mattresses as soon as they are ready.  By the time it arrives to your door it is most likely compressed for less than a week or two.  We do not spray down our foam with toxic chemicals which increase the life span of the mattress being compressed.  This is common with mattresses shipped compressed from overseas because their journey from warehouse to consumer could be as long as 2 years.  At Chirofoam we use the best quality foams and avoid using unnecessary chemicals in order for our customers to enjoy the best quality healthy sleep.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler12" className="qs w-100 proxima-r">Do you allow exchanges?</div>
								<UncontrolledCollapse toggler="#toggler12" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">If you like your Chirofoam mattress but it arrived with a defect, we will exchange it for you free of charge.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler13" className="qs w-100 proxima-r">What happens to returned mattresses?</div>
								<UncontrolledCollapse toggler="#toggler13" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We try our best to donate returned mattress to local charities, churches, or persons in need who cannot afford a new mattress.  We deal with each return on a one by one individual basis.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler14" className="qs w-100 proxima-r">Do I need anything else with my Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler14" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We try our best to donate returned mattress to local charities, churches, or persons in need who cannot afford a new mattress.  We deal with each return on a one by one individual basis.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler15" className="qs w-100 proxima-r">How does your referral program work?</div>
								<UncontrolledCollapse toggler="#toggler15" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We have various levels or referral programs available to friends and family as well as for Chiropractor clinics.  For more information please contact us at info@chirofoam.com and inquire about our referral programs.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler16" className="qs w-100 proxima-r">Why is Chirofoam expensive?</div>
								<UncontrolledCollapse toggler="#toggler16" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is actually very inexpensive when compared to other premium memory foam mattresses. The Chirofoam mattress is built using the highest quality materials available on the market and similar mattress usually retail for double and even triple the price of the Chirofoam mattress.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler17" className="qs w-100 proxima-r">How thick is Chirofoam?</div>
								<UncontrolledCollapse toggler="#toggler17" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is approximately 12 inches thick in all sizes.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler18" className="qs w-100 proxima-r">Are there chemical fire retardants in the Chirofoam?</div>
								<UncontrolledCollapse toggler="#toggler18" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is wrapped with a fire retardant sock under the top cover to ensure the best protection against open flame as per the requirements of the United States of America.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler19" className="qs w-100 proxima-r">Does it transfer movements?</div>
								<UncontrolledCollapse toggler="#toggler19" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Since the Chirofoam mattress does not have any springs or coils, you will feel absolutely zero motion transfer when sleeping with a partner.  The Chirofoam mattress is as good as it gets when it comes to motion transfer.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler20" className="qs w-100 proxima-r">How much weight can Chirofoam Mattress hold?</div>
								<UncontrolledCollapse toggler="#toggler20" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is designed to hold a maximum combined weight of 600lbs as it may feel too soft and not offer enough support for any weight over this limit.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler21" className="qs w-100 proxima-r">Do I need to be at home to receive my Chirofoam?</div>
								<UncontrolledCollapse toggler="#toggler21" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We do require a signature to ensure that you have received your mattress.  If you would like to receive it without a signature and let the courier leave it at your front door, please let us know in the order comments.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler22" className="qs w-100 proxima-r">Can I specify a delivery date, and/or approximate time?</div>
								<UncontrolledCollapse toggler="#toggler22" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">If you would like to delay the delivery of your Chirofoam mattress you may put in your comments on the checkout page.  We will try our best to accommodate you as best as we can.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler23" className="qs w-100 proxima-r">Should I wash my bed cover when it arrives?</div>
								<UncontrolledCollapse toggler="#toggler23" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">It is not necessary to wash the cover of your Chirofoam mattress when it arrives.  You may wash it in the future if it happens to get stained, however you should watch out not to shrink the cover as it may be difficult to put it back on after washing.  Dry cleaning is most recommended if necessary.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler24" className="qs w-100 proxima-r">Should I wash my bed cover when it arrives?</div>
								<UncontrolledCollapse toggler="#toggler24" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">It is not necessary to wash the cover of your Chirofoam mattress when it arrives.  You may wash it in the future if it happens to get stained, however you should watch out not to shrink the cover as it may be difficult to put it back on after washing.  Dry cleaning is most recommended if necessary.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler25" className="qs w-100 proxima-r"> How is it for those intimate moments?</div>
								<UncontrolledCollapse toggler="#toggler25" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress feels just as good if not better than your average mattress for those intimate moments.  Whatever you do in bed, we are sure that you will be more than pleased with your Chirofoam mattress.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler26" className="qs w-100 proxima-r">Do you offer financing?</div>
								<UncontrolledCollapse toggler="#toggler26" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We do not offer any financing terms at the moment.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler27" className="qs w-100 proxima-r">Is Chirofoam available on Ebay?</div>
								<UncontrolledCollapse toggler="#toggler27" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Unfortunately, the Chirofoam mattress is only available for purchase through our official website and nowhere else.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler28" className="qs w-100 proxima-r">Is Chirofoam available on Amazon?</div>
								<UncontrolledCollapse toggler="#toggler28" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Unfortunately, the Chirofoam mattress is only available for purchase through our official website and nowhere else.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler29" className="qs w-100 proxima-r">How does Chirofoam compare to a memory foam mattress?</div>
								<UncontrolledCollapse toggler="#toggler29" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress offers the contouring and conforming properties of a memory foam mattress, combined with the support necessary to keep your back in optimal alignment while you sleep.  Just the right combination of both support and comfort!</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler30" className="qs w-100 proxima-r">How does Chirofoam compare to a latex foam mattress?</div>
								<UncontrolledCollapse toggler="#toggler30" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is less bouncy than a typical latex mattresses, and combines the contouring and conforming properties of a memory foam mattress.  Just the right combination of both support and comfort!</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler31" className="qs w-100 proxima-r">Can you ship internationally?</div>
								<UncontrolledCollapse toggler="#toggler31" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress currently ships to all of Canada as well as the United States except for the states of Hawaii and Alaska.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler32" className="qs w-100 proxima-r">Can I pick up my mattress?</div>
								<UncontrolledCollapse toggler="#toggler32" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">There is no need to pick up your Chirofoam mattress.  We ship directly to your door free of charge.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler33" className="qs w-100 proxima-r">What does the warranty cover?</div>
								<UncontrolledCollapse toggler="#toggler33" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Our warranty covers any defects which may occur aside from regular wear and tear.  This would typically include any sagging or unusual bumps in the mattress.  For full information on our warranty please visit the warranty page.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler34" className="qs w-100 proxima-r">How does the mattress feel to sleep on?</div>
								<UncontrolledCollapse toggler="#toggler34" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress has a medium-firm feel which provides enough cushion to be comfortable in many different sleeping positions, while providing proper support on the core for postural alignment.  Most people find this combination to be ideal for sleeping with both support and comfort.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler35" className="qs w-100 proxima-r">Does Chirofoam offer gift cards?</div>
								<UncontrolledCollapse toggler="#toggler35" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We do not offer gift cards at the moment, however you pay purchase the Chirofoam mattress for someone as a gift.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler36" className="qs w-100 proxima-r">Is my credit card information secured?</div>
								<UncontrolledCollapse toggler="#toggler36" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Our website is equipped with a secure server which offers the highest level of security for purchases online.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler37" className="qs w-100 proxima-r">Does Chirofoam ever offer mattress sales?</div>
								<UncontrolledCollapse toggler="#toggler37" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Unfortunately we do not offer gimmicky mattress sales ever!  The Chirofoam mattress is shipped directly from our Toronto factory, with no salesperson or regular retail overhead which drives prices up.  Similar mattresses to the Chirofoam mattress retail for double and even triple our price.  Be assured that you are always getting the best price on your Chirofoam mattress.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler38" className="qs w-100 proxima-r">What steps do I take when I go mattress shopping?</div>
								<UncontrolledCollapse toggler="#toggler38" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Mattress shopping can be very tedious and annoying to deal with commissioned salespersons.  Chirofoam takes the stress out of mattress shopping by offering one product which is designed to be suitable for most people and also proving a 100 night sleep trial in the comfort of your own home.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler39" className="qs w-100 proxima-r">Can I order a Chirofoam mattress over telephone?</div>
								<UncontrolledCollapse toggler="#toggler39" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">You may call us directly to ask any questions and purchase the mattress through one of our sleep experts.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler40" className="qs w-100 proxima-r">What is the best way to protect my Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler40" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We recommend protecting your Chirofoam mattress with a waterproof mattress protector.  Mattress protectors will protect your mattress from any spills or stains which may happen due to accidents, sweat, or other bodily fluids which may penetrate the mattress and degrade the foam over time.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler41" className="qs w-100 proxima-r">How often should I replace my Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler41" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is covered with a 15 year warranty against any defects in materials or craftsmanship.  However, it is recommended that you replace your mattress every 8-10 years even though it may feel comfortable for many years after this period.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler42" className="qs w-100 proxima-r">What size should I purchase?</div>
								<UncontrolledCollapse toggler="#toggler42" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Twin – Best for average height adults and children. This size typically fits trundle and bunk beds. Best suitable for one person sleeping. <br/>
Twin XL – Recommended for taller youth and adults. This size is commonly seen in college dorms. Two Twin-XL side by side will equal a King size mattress.
Full – A spacious, comfortable sleeping space for a single adult, but a tight sleeping space for two. Also may be comfortable for two children sleeping side by side.<br/>
Queen – The most popular size for two adult sleepers.<br/>
King – The most space available width-wise. Great for two sleepers that like to spread out, or for sleeping with kids or pets.<br/>
California King – The most space available length-wise. Great for two sleepers, or for sleeping with kids or pets</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler43" className="qs w-100 proxima-r">What forms of payment are accepted?</div>
								<UncontrolledCollapse toggler="#toggler43" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We accept Visa, Mastercard or payment with Paypal.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler44" className="qs w-100 proxima-r">What kind of sheets should I use for my Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler44" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Any normal sheets will work with your Chirofoam mattress.  For the best night’s sleep, make sure your sheets breathable and offer the right amount of warmth and comfort for the summer and winter months.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler45" className="qs w-100 proxima-r">Does Chirofoam offer warranties?</div>
								<UncontrolledCollapse toggler="#toggler45" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Your Chirofoam mattress comes with 15 year warranty.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler46" className="qs w-100 proxima-r">Can I use Chirofoam on a sofa bed?</div>
								<UncontrolledCollapse toggler="#toggler46" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">No. Unfortunately, Chirofoam is not made to be able to fold in half after taken out of the box.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler47" className="qs w-100 proxima-r">I do not remember the last time I changed my pillow, how do I know if I need to change it?</div>
								<UncontrolledCollapse toggler="#toggler47" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">You need a new pillow if your head does not feel that it is getting proper support. Your pillow should always be under your head, no matter which position you are lying in. There should be a thickness that allows your head to be in normal position, similar to the position it would be in when you are standing.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler48" className="qs w-100 proxima-r">My mattress feels uneven, what do I do?</div>
								<UncontrolledCollapse toggler="#toggler48" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">This is usually due to the surface the Chirofoam is lying on. The first step we recommend is testing the evenness of the Chirofoam directly on the floor. If you find that this corrects the unevenness, you should assess if your foundation, slats or box-spring are damaged or out of line.
									  	<br/>If that does not work and Chirofoam is still uneven, call us!</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler49" className="qs w-100 proxima-r">Are there different models of the Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler49" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Unlike most mattress brands, we’ve only got one model of the Chirofoam mattress. Rather than confuse you with different models, we decided to build one mattress that is comfortable for the majority of people.  The Chirofoam mattress is medium-firm in feel and provides a great night’s sleep to people of all shapes, sizes, and preferences.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler50" className="qs w-100 proxima-r">Don’t I need to test out the bed before buying it?</div>
								<UncontrolledCollapse toggler="#toggler50" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Nope! We are 99% confident that you will love the quality and sleep of the Chirofoam mattress. With so many choices of mattresses on the market, we do not want to confuse you by having multiple choices, that is why Chirofoam made the perfect mattress for you.  If you are not completely satisfied within 100 nights of trying the Chirofoam mattress in your home, you may return it for a full refund.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler51" className="qs w-100 proxima-r">What can I do with my old mattress when Chirofoam comes?</div>
								<UncontrolledCollapse toggler="#toggler51" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Call us and we can help recommend a charity or recycling program in your area to help you with the disposal of your old mattress.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler52" className="qs w-100 proxima-r">When can I start sleeping on my Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler52" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">You can start to sleep on your Chirofoam mattress within 2-3 hours of unpacking it from the box.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler53" className="qs w-100 proxima-r">Why is Chirofoam unique?</div>
								<UncontrolledCollapse toggler="#toggler53" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Chirofoam is the only mattress designed to specifically target back pain, and also maintain to be a great mattress for ones with no back pain as well.  Our mattress is designed with 5 key features to ensure proper support and comfort while you sleep.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler54" className="qs w-100 proxima-r">Do you need to flip the mattress?</div>
								<UncontrolledCollapse toggler="#toggler54" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">No, the Chirofoam mattress is designed with a top and a bottom side and there is no need for flipping.  However, you may rotate it from head to toe on occasion.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler55" className="qs w-100 proxima-r">Does it have a break in period?</div>
								<UncontrolledCollapse toggler="#toggler55" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">There is no break-in necessary. Most people enjoy their Chirofoam mattress from the very first night.  However we do recommend to sleep on the Chirofoam mattress for up to 21 days for your body to get used to and adjust to the new mattress.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler56" className="qs w-100 proxima-r">What type of bed frame should I use with Chirofoam?</div>
								<UncontrolledCollapse toggler="#toggler56" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Chirofoam is designed to work with many types of frames, including box springs, platform beds, or with it sitting on the floor.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler57" className="qs w-100 proxima-r"> Does the foam smell?</div>
								<UncontrolledCollapse toggler="#toggler57" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Likewise with any new item, there’s a slight aroma after unpacking. Any fragrance will dissipate within a couple of hours in an all around ventilated room</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler58" className="qs w-100 proxima-r">I have specific medical problems, how will the Chirofoam work for me?
								</div>
								<UncontrolledCollapse toggler="#toggler58" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is designed to help relieve pressure from your body by contouring to your back and providing adequate back support and postural alignment.  Most people report an improvement in back pain relief once sleeping on their Chirofoam mattress within a month.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler59" className="qs w-100 proxima-r">Who will remove my mattress if I am unsatisfied with it?</div>
								<UncontrolledCollapse toggler="#toggler59" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We take responsibility of each return on an individual basis.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler60" className="qs w-100 proxima-r"> Can I get the Chirofoam back in the box?</div>
								<UncontrolledCollapse toggler="#toggler60" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Once you expand your Chirofoam mattress, you cannot get it back in the box.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler61" className="qs w-100 proxima-r">How do I unbox Chirofoam?</div>
								<UncontrolledCollapse toggler="#toggler61" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Chirofoam mattresses are compressed and packed in multiple layers of protective packaging. It expands quickly when removed from packaging. When you open the box drop the rolled mattress on your bedframe or floor near your bed, use cutting tools to remove the layers of protective packaging. Once the packaging is opened the mattress will start to develop back to its original size.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler62" className="qs w-100 proxima-r"> Once I take the mattress out of the box, how long does it take to be used?</div>
								<UncontrolledCollapse toggler="#toggler62" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is ready for use within 2-3 hours of unpacking.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler63" className="qs w-100 proxima-r">Will my mattress form dents overtime?</div>
								<UncontrolledCollapse toggler="#toggler63" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The materials we use are developed to survive years of sleeping without distortion. In the extremely unlikely happening that a dent does form, our 15 year total warranty protection covers it.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler64" className="qs w-100 proxima-r"> What material is Chirofoam made of?</div>
								<UncontrolledCollapse toggler="#toggler64" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattresses is composed of 5 different layers of foams which include the biofoam support core, lumbar support, firm support Chirofoam, and gel infused memory foam.  Please look at our design page for more information.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler65" className="qs w-100 proxima-r">What are the dimensions of the Chirofoam mattress once it is out of the box?</div>
								<UncontrolledCollapse toggler="#toggler65" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Single/Twin – 39 inches x 75 inches (99cm x 191cm)<br/>
Twin XL – 39 inches x 80 inches (99cm x 203cm)<br/>
Double/Full – 54 inches x 75 inches (137cm x 191cm)<br/>
Queen – 60 inches x 80 inches (152cm x 203cm)<br/>
King – 76 inches x 80 inches (193cm x 203cm)<br/>
Cali King – 72 inches x 84 inches (183cm x 213cm)</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler66" className="qs w-100 proxima-r">How big is the box that the mattress comes in?</div>
								<UncontrolledCollapse toggler="#toggler66" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Deepening on the size you choose the shipping box comes in the following dimensions:<br/>

Single/Twin – 45 inches x 14.5 inches x 14.5 inches<br/>
Twin XL – 61 inches x 14.5 inches x 14.5 inches<br/>
Double/Full – 61 inches x 14.5 inches x 14.5 inches<br/>
Queen – 65 inches x 14.5 inches x 14.5 inches<br/>
King – 81 inches x 14.5 inches x 14.5 inches<br/>
Cali King – 81 inches x 14.5 inches x 14.5 inches</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler67" className="qs w-100 proxima-r"> Do I need a box spring or platform?</div>
								<UncontrolledCollapse toggler="#toggler67" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The mattress is suitable to work with any solid box spring foundation, platform bed, or slats.  As long as you rest the mattress on a solid flat surface, it will work just fine.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler68" className="qs w-100 proxima-r">How do I clean my mattress?</div>
								<UncontrolledCollapse toggler="#toggler68" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress has a soft luxurious and breathable removable cover, which is easy to remove and wash.  We recommend cleaning the cover in a way that would not make the fabric shrink (such as dry cleaning) so it is easy to put the cover back on after washing.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler69" className="qs w-100 proxima-r">How does the Trial Period work?</div>
								<UncontrolledCollapse toggler="#toggler69" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">We offer a 100 night trial for you to try the Chirofoam mattress in the comfort of your own home.  If for whatever reason you are not completely satisfied with the Chirofoam mattress within the 100 night trial period, you may return it and we will refund you full money back.  Please note that we do not accept any returns within the first 21 days of receiving your mattresses to allow your body to adjust to the mattress.  The National Sleep Institute recommends this period of time for your body to adjust to a new mattress and get used to the new feeling and health benefits.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler70" className="qs w-100 proxima-r">When do I expect to receive my mattress?</div>
								<UncontrolledCollapse toggler="#toggler70" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">As soon as your mattress ships, you will receive a shipping confirmation email with a tracking number. The Chirofoam mattress usually takes 3-10 business days to ship depending on your location. Please permit one additional day for customs if applicable.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler71" className="qs w-100 proxima-r"> Do I need to pay for tax?</div>
								<UncontrolledCollapse toggler="#toggler71" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Unfortunately, we do charge sales tax in Canada (13% HST).</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler72" className="qs w-100 proxima-r">Do I pay for shipping?</div>
								<UncontrolledCollapse toggler="#toggler72" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">No, shipping and returns are always free.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler73" className="qs w-100 proxima-r">Does the Chirofoam Mattress offer warranty?</div>
								<UncontrolledCollapse toggler="#toggler73" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Yes! Chirofoam mattress offers 15 years of total warranty protection.  The Chirofoam mattress is designed to last for a very long time and made with the highest quality foams and materials used in the industry.  If for whatever reason there is a defect in materials or craftsmanship during the 15 year period from the date of purchase, we will repair or replace the mattress.  Please read our full warranty terms for more information.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler74" className="qs w-100 proxima-r">Will the mattress be too warm?</div>
								<UncontrolledCollapse toggler="#toggler74" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress is designed to be breathable and also to whisk heat away from the body.  Our gel infused memory foam stays cooler and dissipates heat away from your body while you sleep.  The specialty layer of firm support memory foam is highly breathable and adds to the cooling effects of the mattress.  Many people have the impression that foam and memory foam mattresses are too hot to sleep on, therefor our engineers designed the Chirofoam mattress to be as cool and as breathable as possible using the latest technologies and highest quality materials.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler75" className="qs w-100 proxima-r">How does the mattress feel?</div>
								<UncontrolledCollapse toggler="#toggler75" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam mattress has a luxury firm feel designed to support your body while providing comfort at the same time.  The mattress is made to put your body in correct postural alignment to give you a superior and more beneficial night’s relaxation. The Chirofoam mattress is designed to meet the standard of healthy resting without sleeping issues.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler76" className="qs w-100 proxima-r"> Where is the Chirofoam mattress made?</div>
								<UncontrolledCollapse toggler="#toggler76" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">Our mattress is proudly made at our manufacturing plant in Toronto, Canada with the highest quality materials sourced from Canadian suppliers.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
							<li>
								<div id="toggler77" className="qs w-100 proxima-r">Why choose the Chirofoam mattress?</div>
								<UncontrolledCollapse toggler="#toggler77" className="ans">
									<Card>
									  <CardBody>
									  	<p className="color-secondary pt-2 px-3">The Chirofoam Mattress is designed with 5 key important elements that relieve/prevent certain types of back pain, and give you a healthy restful sleep. Our mattress was invented by chiropractors and mattress experts to not only provide a comfortable and enjoyable night’s rest, but to also support and conform to your body while providing adequate back support and proper postural alignment.</p>
									  </CardBody>
									</Card>
								</UncontrolledCollapse>
							</li>
						</ul>
					</div>
				</Row>
			</Container>
		</section>
		<section>
			<div className="container-fluid">
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
			</div>
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
}
export default FaqPage
