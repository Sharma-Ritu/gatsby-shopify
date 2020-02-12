import React from 'react';
import Header from '../components/header'
import {Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import "../assets/css/animate.css"
import HomePageSlider from '../components/HomePageSlider'

const Banner = () => {

	return(
	<header className="header-outer home-page">
		<div className="banner-slider position-relative">
			<HomePageSlider />
		</div>
		<Header/>
	</header>
	)
}

export default Banner;
