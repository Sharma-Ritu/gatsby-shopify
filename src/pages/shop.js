import React from 'react';
import Banner from "../components/banner"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import { Link } from "gatsby"
import Products from '~/components/Products'


export default (props) => {
  return (
	<>
		<main>
		<Banner />
		
		<section>
			<Products />
		</section>
		<Footer />
		</main>
	</>
  );
};