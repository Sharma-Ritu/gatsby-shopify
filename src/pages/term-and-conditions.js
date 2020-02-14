import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"


export default (props) => {
  return (
	<>
		<Header />
		<section className="mb-0 position-relative">
			<Container className="our-focus">
				<Row className="mb-2 mb-sm-5 pb-0 pb-sm-5 mx-0">
					<div>
						<h1 className="font-weight-bold display-5 erbaum-bold mt-0 mt-sm-2 mt-lg-4 mt-xl-4 py-2 py-sm-2 py-lg-5 py-xl-5 space-2 color-primary">Terms and Conditions</h1>
						<p className="filson-pro-reg text-1 color-secondary">Welcome to the Chirofoam™ website (the “Website” or Site”) maintained and operated by and on behalf of Chirofoam Mattress Company Inc. (“the Company”). This site is maintained as a service to our customers. By using this site, you are communicating with the Company electronically and agree to comply with and be bound by the following terms and conditions of use. Please review these terms and conditions carefully. If you do not agree to these terms and conditions, you should not use this website.</p>
						<p className="filson-pro-reg text-1 color-secondary">
							<ol>
								<li>
									Agreement <br/> 
									This Agreement (“the” Agreement”) specifies the Terms and Conditions for access to and use of the Website and describes the terms and conditions applicable to your access to and use of the Website. This Agreement may be modified at any time by the Company upon posting of the modified agreement. Any such modifications shall be effective immediately. You can view the most recent version of these terms at any time at https://chirofoam.com/terms-and-conditions. Each use by you shall constitute and be deemed your unconditional acceptance of this Agreement.
								</li>
								<li>
									Privacy <br/>
									Your visit to our site is also governed by our Privacy Policy. Please review our Privacy Policy at [www.chirofoam.com/privacy-policy].
								</li>
								<li>
									Ownership 
									<ol>
										<li>Website. All content included on this Website is and shall continue to be the property of the Company or its affiliates and content suppliers and is protected under applicable copyright, patent, trademark, and other proprietary rights. Any copying, redistribution, use or publication by you of any such content or any part of the Website is prohibited, except as expressly permitted in this Agreement. Under no circumstances will you acquire any ownership rights or other interest in any content by or through your use of this Website. </li>
										<li>Feedback. You agree that submission of any ideas, suggestions, documents, and/or proposals to Company through its suggestion, feedback, wiki, forum or similar pages (“Feedback”) is at your own risk and that Company has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback. You represent and warrant that you have all rights necessary to submit the Feedback. You hereby grant to Company a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sub licensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights.</li>
									</ol>
								</li>
								<li>
									Intended Audience <br/>
									This Website is intended for use by adults only, and is not intended for persons under the age of 18. The Company does not knowingly seek to collect information from children under the age of 13, if such information is discovered, it will be deleted.
								</li>
								<li>
									Trademarks <br/>
									Certain trademarks, trade names, service marks and logos used or displayed on this Website are registered and unregistered trademarks, trade names and service marks of the Company or its affiliates. Other trademarks, trade names and service marks used or displayed on this Website are the registered and unregistered trademarks, trade names and service marks of their respective owners. Nothing contained on this Website grants or should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademarks, trade names, service marks or logos displayed on this Website without the written permission of the Company or such other owner.
								</li>
								<li>
									Website Use <br/>
									The Company grants you a limited, revocable, nonexclusive license to use this Website solely for your own personal use and not for republication, distribution, assignment, sublicense, sale, preparation of derivative works, or other use. You agree not to copy materials on the Website, reverse engineer or break into the Website, or use materials, products or services in violation of any law. The use of this Website is at the discretion of the Company and the Company may terminate your use of this Website at any time.
								</li> 
								<li>
									Purchase Terms
									<ol>
										<li>Making Purchases. If you wish to purchase any products or services through the Website (“Products”), you shall be required to supply certain information applicable to your purchase, including payment, contact, and other information. Any such information will be treated as described in our Privacy Policy. All information that you provide to us or our third party payment processor must be accurate, current, and complete. Unless otherwise stated, the purchase price for the Product, excludes taxes and shipping charges (the “Purchase Price”). No contract will exist between you and the Company for the purchase of a Product until the Company accepts your order by confirmatory email, SMS/MMS message or other appropriate means. YOU REPRESENT AND WARRANT THAT YOU HAVE THE LEGAL RIGHT TO USE ANY CREDIT CARDS OR OTHER PAYMENT MEANS USED TO INITIATE ANY TRANSACTION. You agree to pay all charges incurred by you or any users of your account and credit card (or other applicable payment mechanism) at the prices in effect when such charges are incurred. You will also be responsible for paying any applicable taxes relating to your purchases. Verification of information applicable to a purchase may be required prior to our acceptance of any order.
										</li>
										<li>Product Descriptions. Descriptions, images, references, features, content, specifications, products, prices, and availability of any Products are subject to change without notice, and our current prices can be found on the Website. We make reasonable efforts to accurately display the attributes of our Products, including the applicable colors; however, the actual color you see will depend on your computer system, and we cannot guarantee that your computer will accurately display such colors. The inclusion of any Products on the Website at a particular time does not imply or warrant that these products or services will be available at any time. It is your responsibility to ascertain and obey all applicable local, state, federal, and international laws (including minimum age requirements) in regard to the possession, use, and sale of any item purchased through the Website. By placing an order, you represent that the Products ordered will be used only in a lawful manner. We reserve the right, with or without prior notice, to limit the available quantity of or discontinue any Product; to honor or impose conditions on the honoring of, any coupon, coupon code, promotional code, or other similar promotions; to bar any user from making any or all purchases; and to refuse to provide any user with any product or service
										</li>
										<li>Product Acceptance. A Product is deemed irrevocably accepted upon your use of the Product.
										</li>
										<li>Orders. Title and risk of loss for any purchases pass to you upon our delivery to our carrier. Orders will be fulfilled by us or our third-party designee and our Products are expected to ship within three (3) to five (5) business days unless otherwise stated. Company reserves the right to ship partial orders (at no additional cost to you), and the portion of any order that is partially shipped may be charged at the time of shipment.
										</li>
										<li>Product Warranty. Products are subject to the written limited warranty accompanying the Product or the specific limited warranty we identify on the Website (e.g., FAQ), if any.
										</li>
									</ol>
								</li>
								<li>Third-Party Websites & Ads <br/>
									The Website may contain links or otherwise provide you with access to third-party websites and services (“Third-Party Websites”) and advertisements for third parties (collectively, “Third-Party Websites & Ads”). When you click on a link to or otherwise access a Third-Party Website or Ad, we will not warn you that you have left the Website and are subject to the terms and conditions (including privacy policies) of another website or destination. Such Third-Party Websites are not under the control of Company. Company is not responsible for any Third-Party Websites & Ads. Company does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites & Ads, or their products or services. You use all links in Third-Party Websites & Ads at your own risk. When you leave our Website, our Terms and policies no longer govern. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party.
								</li>
								<li>Compliance with Laws <br/>
									You agree to comply with all applicable laws regarding your use of the Website. You further agreed that information provided by you is truthful and accurate to the best of your knowledge.
								</li>
								<li>Indemnification <br/>
									You agree to indemnify, defend and hold the Company and our partners, employees, and affiliates, harmless from, any liability, loss, claim and expense, including reasonable attorney’s fees, related to or arising from your (i) violation of the terms and conditions of this Agreement or the Company’s Privacy Policy, or (ii) use of the Website.
								</li>
								<li>Disclaimer <br/>
									THIS WEBSITE, THE INFORMATION AND CONTENT ON THIS WEBSITE, AND THE PRODUCTS ARE PROVIDED ON AN “AS IS,” “AS AVAILABLE” BASIS, EXCEPT FOR THE LIMITED PRODUCT WARRANTY DESCRIBED IN SECTION 7.5 AS AND IF APPLICABLE TO A PRODUCT. YOU AGREE THAT USE OF THIS WEBSITE IS AT YOUR SOLE RISK. EXCEPT AS STATED HEREIN, THE COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND, INCLUDING BUT NOT LIMITED TO ANY EXPRESS WARRANTIES, STATUTORY WARRANTIES, AND ANY IMPLIED WARRANTIES OF: MERCHANT-ABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. TO THE EXTENT YOUR JURISDICTION DOES NOT ALLOW LIMITATIONS ON WARRANTIES, THIS LIMITATION MAY NOT APPLY TO YOU. YOUR SOLE AND EXCLUSIVE REMEDY RELATING TO YOUR USE OF THE WEBSITE SHALL BE TO DISCONTINUE USING THE WEBSITE. YOUR SOLE AND EXCLUSIVE REMEDY RELATING TO THE PRODUCTS YOU PURCHASE THROUGH THE SITE ARE AS SET FORTH IN SECTION 7.5.
								</li>
								<li>Limitation of Liability <br/>
									UNDER NO CIRCUMSTANCES WILL THE COMPANY BE LIABLE OR RESPONSIBLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL (INCLUDING DAMAGES FROM LOSS OF BUSINESS, LOST PROFITS, LITIGATION, OR THE LIKE), SPECIAL, EXEMPLARY, PUNITIVE, OR OTHER DAMAGES, UNDER ANY LEGAL THEORY, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, ARISING OUT OF OR IN ANY WAY RELATING TO THE WEBSITE OR YOUR USE THEREOF, OR THE CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR SOLE REMEDY FOR DISSATISFACTION WITH THE WEBSITE AND/OR CONTENT IS TO CEASE ALL OF YOUR WEBSITE USE. WITH RESPECT TO THE PRODUCTS OR SERVICES THAT YOU HAVE PURCHASED ON OR THROUGH THIS WEBSITE, YOU AGREE THAT YOUR SOLE REMEDY, IF ANY, FROM THE COMPANY AND ITS AFFILIATES AND SUPPLIERS IS IN ACCORDANCE WITH THE LIMITED WARRANTY DESCRIBED IN SECTION 7.5 APPLICABLE TO THAT PRODUCT, OR TO SEEK A RETURN AND REFUND FOR SUCH PRODUCT OR SERVICES IN ACCORDANCE WITH THE RETURNS AND REFUNDS POLICIES POSTED ON THIS WEBSITE. IN NO EVENT SHALL COMPANY’S OR ITS AFFILIATES OR SUPPLIERS TOTAL LIABILITY TO YOU EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU FOR THE APPLICABLE PRODUCTS OR SERVICES PURCHASED ON THE WEBSITE; OR (B) FIFTY DOLLARS ($50).<br/>
									You may have additional rights under certain laws (including consumer laws) which do not allow the exclusion of implied warranties, or the exclusion or limitation of certain damages. If these laws apply to you, the exclusions or limitations in this Agreement that directly conflict with such laws may not apply to you.
								</li>
								<li>Use of Information <br/>
								The Company reserves the right, and you authorize the Company, to use all information provided by you in any manner consistent with our Privacy Policy. Except as provided for in our Privacy Policy, any suggestions, ideas, concepts, know-how, techniques, questions, comments or other communication you transmit or post to this Website in any manner (“User Communications”) is and will be considered non-confidential and non-proprietary. The Company and its affiliates may use any or all User Communications for any purpose whatsoever, including, without limitation, reproduction, transmission, disclosure, publication, broadcast, development, manufacturing and/or marketing in any manner whatsoever for any or all commercial or non-commercial purposes. The Company will have no liability related to the content of any such User Communications, whether or not arising under the laws of copyright, libel, privacy, or otherwise. The Company reserves the right to remove any or all User Communications that includes any material the Company deems inappropriate.
								</li>
								<li>Copyright <br/>
								The design of this Website, including text, graphics, information, content, and other material displayed are protected by copyright, trademark and other laws and may not be used except as permitted in these Terms and Conditions without prior written permission by the Company. Any unauthorized use of any such information or materials may violate copyright laws, trademark laws, laws of privacy and publicity, and other laws and regulations. If you believe that the Company has posted or displayed content on the Website in violation of your copyright or other intellectual property rights please notify the Company immediately.
								</li>
								<li>Applicable Law; Jurisdiction <br/>
								You agree that the laws of the province of Ontario, Canada, without regard to any conflicts of law provisions, will govern these Terms and Conditions of Use and any dispute that may arise between you and the Company or its affiliates. You agree that any action seeking legal or equitable relief arising out of or relating to this Website will be brought only in the courts of the province of Ontario or Canadian Federal Court for the province of Ontario. A printed version of these Terms and Conditions will be admissible in any judicial and/or administrative proceedings based upon, arising out of, or relating to these Terms and Conditions to the same extent and subject to the same conditions as other business records originally generated and kept in printed form.
								</li>
								<li>Sever-ability<br/>
								If any provision of this Agreement shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect.
								</li>
								<li>Termination<br/>
								The Company may terminate this Agreement at any time, with or without notice, for any reason, and applicable provisions of this Agreement survive, including, without limitation, Product warranties, disclaimers and limitations of liability.
								</li>
								<li>Additional Assistance<br/>
								If you need additional information regarding the foregoing Terms and Conditions or if you have any questions or comments, we invite you to contact the Company at info@chirofoam.com.
								</li>
							</ol>
						</p>
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
		<section className="rating-and-review py-3 py-sm-5">
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
