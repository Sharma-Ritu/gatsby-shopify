import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Jumbotron, Row} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"
import Blogs from "../components/Blogs"
import RecentBlogs from "../components/Blogs/RecentBlogs"


export default (props) => {
  return (
	<>
		<SEO title="Chirofoam™ Memory Foam Mattresses" description="Sleep Education and Chirofoam™ News" />
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
					<Blogs />
					<RecentBlogs />
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
