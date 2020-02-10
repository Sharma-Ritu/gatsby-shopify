import React from "react"
import {Link} from "gatsby"
import {Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Footer = () => (
	<footer className="footer py-0 py-sm-5" style={{ backgroundColor: '#243b6a', borderRadius: '0', color: '#fff' }}>
		<div className="container-large px-0 px-sm-4 pt-0 pt-sm-2">
			<Row className="proxima-r pt-5 pb-3 px-0 px-sm-2">
				<Col md="3" className="widget-1 pt-0 pt-sm-1">
					<strong className="proxima-r space-1">CONNECT WITH US</strong>
					<ul style={{
						listStyle:'none',
						display:'flex',
						paddingLeft:'0px',
						paddingTop:'18px'
					}} >
						<li className="mr-2 pr-1"><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/chirofoam"><i className="fa fa-facebook color-primary"></i></a></li>
						<li className="mr-2 pr-1"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chirofoam/"><i className="fa fa-instagram color-primary"></i></a></li>
						<li className="mr-2 pr-1"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/chirofoam"><i className="fa fa-twitter color-primary"></i></a></li>
						<li className="mr-2 pr-1"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDjVpHGDY4fapKu4TnuKu6w"><i className="fa fa-youtube color-primary"></i></a></li>

					</ul>
					<p className="proxima-r space-1 pt-3 mb-0" style={{color:'#b2b2b2',fontSize:'11px'}}>Chirofoam<sup>TM</sup> Memory Foam Mattress </p>
					<p className="proxima-r space-1 m-0 pt-2" style={{color:'#b2b2b2',fontSize:'11px'}}>Rated 5/5</p>
					<p className="proxima-r space-1 m-0 pt-2" style={{color:'#b2b2b2',fontSize:'11px',lineHeight:'20px'}}>Based on 160 retings and reviews by actual Chirofoam<sup>TM</sup> mattress owners. </p>


				</Col>
				<Col md="3" className="pl-3 pl-sm-3 pt-4 pt-sm-0 widget-2">
					<p className="pb-0 pb-sm-4 m-0" style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px', margin:'0px',lineHeight:'30px'}}>Have any Inquiries? Give us a call:</p>
					<strong className="pt-3 d-block space-3 text-white" style={{fontSize:'13px'}}>1 (888) CHIRO-31</strong>
					<p className="m-0 pb-0 pb-sm-3 space-1 pt-2" style={{color:'#b2b2b2',fontSize:'12px',lineHeight:'30px'}}>1 (888)244-7631</p>
					<p className="m-0 pb-0 pt-2 space-1" style={{color:'#b2b2b2',fontSize:'12px'}}>Our sleep experts are on call</p>
					<p className="m-0 space-1 pt-0 pt-sm-0 pt-lg-0 pt-xl-0" style={{color:'#b2b2b2',fontSize:'12px'}}>Mon-Fri 10am - 6pm(EST)</p>
				</Col>
				<Col md="3" className="widget-3 m-0 pt-sm-4">
					<ul className="pl-0 pb-0" style={{
						listStyle:'none',
					}} >
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/charity/" style={{color:'#b2b2b2',fontSize:'12px'}}>Charity</Link></li>
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/our-story/" style={{color:'#b2b2b2',fontSize:'12px'}}>Our Story</Link></li>
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/chiropractor-recommended/" style={{color:'#b2b2b2',fontSize:'12px'}}>Chiropractor Recommended</Link></li>
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/customer-service/" style={{color:'#b2b2b2',fontSize:'12px'}}>Customer Service</Link></li>
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/locations/" style={{color:'#b2b2b2',fontSize:'12px'}}>Locations</Link></li>
						<li className="mr-2 pb-sm-2 pb-1"><Link to="/faq/" style={{color:'#b2b2b2',fontSize:'12px'}}>Frequently Asked Questions</Link></li>
					</ul>
				</Col>
				<Col md="3" className="widget-4 pt-0 m-0 pl-xl-5 pl-lg-5">
					<ul className="pl-0 pl-lg-5 pl-xl-5 pb-0" style={{
						listStyle:'none',
					}} >
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/mattress-sizes/" style={{color:'#b2b2b2',fontSize:'12px'}}>Mattress Sizes</Link></li>
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/return-policy/" style={{color:'#b2b2b2',fontSize:'12px'}}>Return Policy</Link></li>
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/warranty/" style={{color:'#b2b2b2',fontSize:'12px'}}>Warranty</Link></li>
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/privacy-policy/" style={{color:'#b2b2b2',fontSize:'12px'}}>Privacy Policy</Link></li>
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/term-and-conditions/" style={{color:'#b2b2b2',fontSize:'12px'}}>Terms And Conditions</Link></li>
						<li className="mr-2 pb-sm-2 pb-lg-2 pb-xl-2 pb-1 m-0 pt-0"><Link to="/blogs/" style={{color:'#b2b2b2',fontSize:'12px'}}>Blog</Link></li>
					</ul>
				</Col>
			</Row>
		</div>
	</footer>
)

export default Footer;
