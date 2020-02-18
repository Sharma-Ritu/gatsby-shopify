import React, { useState } from 'react';
import {
  Row, Col,Container,Media,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from "gatsby"
import "~/assets/css/bootstrap.min.css"
import "~/assets/css/animate.css"
import run from "~/assets/img/run.png"
import icon1 from "~/assets/img/ic1.png"
import icon2 from "~/assets/img/ic2.png"
import icon3 from "~/assets/img/ic3.png"
import icon4 from "~/assets/img/ic4.png"
import us from "~/assets/img/us.png"
import eco from "~/assets/img/eco.png"
import confidence from "~/assets/img/confidence.png"



const items = [
    {
      background: ""
    },
    {
      background: ""
    },
    {
      background: ""
    },
  ];

const HomePageSlider2 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
const slides = items.map((item, index) => {

      switch(index){
        case 0:
        return(
          <CarouselItem 
          onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        >
           <section className="py-5 pt-sm-5 pb-sm-4 approved bg-image">
                <div className="container">
                  <Row className="pt-3 no-gutters m-0">
                    <Col sm="12" className="align-middle col-lg-5 col-xl-5">
                      <img src={run} alt="run" width="75%" className="mt-sm-5 pt-sm-5 pl-sm-5 ml-sm-5"/>
                    </Col>
                    <Col sm="12" className="col-lg-7 col-xl-7">
                      <div className="text-white mb-4">
                        <h3 className="approved-title text-white erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">CHIROPRACTOR APPROVED</h3>
                        <p className="proxima-b space-1 p-0 pt-sm-1 sub-text sub-sm-text sub-md-text sub-lg-text sub-xl-text">Chirofoam<sup style={{fontSize:'8px'}}>TM</sup> mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
                        <p className="cta mt-3 mt-sm-0 mt-lg-0 mt-xl-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                          <Link to="#" className="btn-cta text-white erbaum-bold space-1">CALL TO ACTION </Link>
                        </p>
                      </div>
                      
                      <div className="text-white mb-4 pt-1 pr-0 pr-sm-5">
                        <h3 className="approved-title text-white erbaum-bold pt-0 pt-sm-4 lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">CUSTOMER APPROVED</h3>
                        <p className="proxima-b space-1 p-0 pt-sm-2 sub-text sub-sm-text sub-md-text sub-lg-text sub-xl-text">Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
                        <div className="ml-0 ml-sm-4 pt-0 pt-sm-3 pl-0 pr-sm-5">
                          <Media className="mt-3">
                            <Media left middle className="pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
                            97%
                            </Media>
                            <Media body middle className="proxima-r pl-sm-3" style={{fontSize:'1.1rem'}}>
                              Improvement in sleep comfort and quality
                            </Media>
                          </Media>
                          <Media className="pt-4">
                            <Media left middle className="pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
                            94%
                            </Media>
                            <Media body middle className="proxima-r pl-sm-3" style={{fontSize:'1.1rem'}}>
                              Increased energy in the morning and throughout the day
                            </Media>
                          </Media>
                          <Media className="pt-4">
                            <Media left middle className="pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
                            86%
                            </Media>
                            <Media body middle className="proxima-r pl-sm-3 pt-sm-1" style={{fontSize:'1.1rem'}}>
                              Improved muscle recovery and/or relief in daliy experienced back pain
                            </Media>
                          </Media>
                          <Media className="pt-3">
                            <Media left middle className="pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
                            82%
                            </Media>
                            <Media body middle className="proxima-r pl-sm-3 pt-sm-2" style={{fontSize:'1.1rem'}}>
                              Improvement in sleep comfort and quality
                            </Media>
                          </Media>
                        </div>
                        <p className="cta mt-3 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
                          <Link to="/reviews/" className="btn-cta text-white erbaum-bold space-1">READ CUSTOMER REVIEWS</Link>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
            </section>
        </CarouselItem>
          ) 
        break;
        case 1:
        return(
          <CarouselItem 
          onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        >
           <section>
                <div className="py-sm-5 feature bg-image">
                  <div className="card-layer"></div>
                  <Container className="py-0 py-sm-0 py-md-0 py-lg-5 py-xl-5">
                    <Row className="pt-sm-5 pt-3">
                      <div style={{width:'100%'}}>
                        <h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5 d-none">ONDIMENTUM QUISBIBENDUM SED</h4>
                      </div>
                      <Col sm="6">
                        <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                            <Media left middle>
                              <img src={icon1} alt="icon1" width="85px"/>
                            </Media>
                            <Media body middle className="pl-3 text-white">
                              <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BY SCIENCE</h4>
                              <p className="filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>Created by experts after testing it with data by the Sleep To Live Institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity, support, alignment, pressure relief and comfort.</p>
                            </Media>
                        </Media>
                      </Col>
                      <Col sm="6">
                        <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                            <Media left middle>
                              <img src={icon2} alt="icon2" width="85px"/>
                            </Media>
                            <Media body middle className="pl-3 text-white">
                              <h4 className="erbaum-bold" style={{fontSize:'18px'}}>COMFORT GUARANTEED</h4>
                              <p className="filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>Made with the highest quality materials and designed to help you get a better night’s sleep.  Our 97% customer satisfaction rate speaks for itself.</p>
                            </Media>
                        </Media>
                      </Col>
                      <Col sm="6">
                        <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                            <Media left middle>
                              <img src={icon4} alt="icon4" width="85px"/>
                            </Media>
                            <Media body middle className="pl-3 text-white">
                              <h4 className="erbaum-bold" style={{fontSize:'18px'}}>5 KEY FEATURES</h4>
                              <p className="filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>Designed by mattress experts with 5 key features that consumers voted most important for a comfortable sleep experience.</p>
                            </Media>
                        </Media>
                      </Col>
                      <Col sm="6">
                        <Media className="px-2 px-sm-2 px-md-3 px-lg-5 px-xl-5 pb-3 pb-sm-5">
                            <Media left middle>
                              <img src={icon3} alt="icon3" width="85px"/>
                            </Media>
                            <Media body middle className="pl-3 text-white">
                              <h4 className="erbaum-bold" style={{fontSize:'18px'}}>FREE EXPRESS DELIVERY & EASY RETURNS </h4>
                              <p className="filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>Delivered to your door free of charge, and you may return it within 100 nights if you are not 100% satisfied with full money back.</p>
                            </Media>
                        </Media>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>
        </CarouselItem>
          ) 
        break;
        case 2:
        return(
          <CarouselItem 
          onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        >
           <section>
                <div className="py-4 py-sm-5 feature bg-image">
                  <div className="card-layer"></div>
                  <Container className="position-relative" style={{zIndex:'9'}}>
                      <Row className="py-5 my-sm-5 my-0 mx-0">
                      <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
                          <Media left middle>
                          <h3 className="lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text text-uppercase text-white erbaum-bold pr-0 pr-lg-5 pr-xl-5 mr-0 mr-lg-5 mr-xl-5 pb-3 pb-lg-3 pb-xl-3">
                            Manufactured with your health and the environment in mind.
                        </h3>
                          <p className="text-white filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>CertiPUR-US® approved foams are made without ozone depleters, made without PBDE flame retardants made without mercury, lead and other heavy metals, made without formaldehyde. </p> 
                          </Media>
                          <Media body middle className="pl-sm-4 pl-0 pb-0">
                            <img src={us} alt="us" width="150px"/>
                          </Media>
                      </Media>
                      <Media className="px-3 px-sm-5 mb-0 d-block d-sm-flex">
                          <Media left middle>
                          <p className="text-white filson-pro-reg text-1 space-1 mb-0 pt-2 pt-lg-4 pt-xl-4" style={{lineHeight:'30px'}}>Eco institut tested for emission analysis in the test chamber according to ISO 16000. compound analyses for heavy metals. AOX/EOX, biocides, phthalates, flame retatdants etc... odour testing according to VDA, toxicological and ecological expertise.</p>  
                          </Media>
                          <Media body middle className="pl-sm-4 pl-0 pb-3">
                            <img src={eco} alt="eco" width="150px"/>
                          </Media>
                      </Media>
                      <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
                          <Media left middle>
                          <p className="text-white filson-pro-reg text-1 space-1" style={{lineHeight:'30px'}}>Confidence In Textile Oeko-Tex® standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to human. Oeko-Tex® standard 100 is an international certification that set limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>  
                          </Media>
                          <Media body middle className="pl-sm-4 pl-0 pb-3">
                            <img src={confidence} alt="confidence" width="150px"/>
                          </Media>
                      </Media>
                    </Row>
                  </Container>
                </div>
              </section>
        </CarouselItem>
          ) 
        break;
      }
});
 

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} ride="carousel">
        
        {slides}
     
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="btn-cta" />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="btn-cta" />
    </Carousel>
  );
}

export default HomePageSlider2;
