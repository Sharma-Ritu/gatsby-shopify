import React from "react"
import {Link} from "gatsby"
import {Row, Col} from 'reactstrap';

const Stickytest = () => {
	const toggleTakeTest = () => {
		console.log('here')
	}
	return(
		<div className="sticky-test position-fixed">
			<div className="test-content-slider-tab">
				<div className="test-content-slider-title">
					<button className="fs-2" onClick={toggleTakeTest}>Take The Chirofoam Test</button>
				</div>
				<div className="test-slider-content hidden">
					<div className="test-slider-content-inner-wrap mCustomScrollbar _mCS_1 mCS_no_scrollbar">
						<div id="mCSB_1" className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside">
							<div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y">
								<h4><span>Take The Chirofoam Test</span></h4>
								<p><span>See if Chirofoam is right for you.</span></p>
								<p className="start_noww">
									<span>
										<a href="https://chirofoam.com/chirofoam-test/">START NOW</a>
									</span>
								</p>
							</div>
						</div>
					</div>
				<span className="test-close-slider-content">x</span>
				</div>
			</div>
		</div>
	)
}

export default Stickytest;
