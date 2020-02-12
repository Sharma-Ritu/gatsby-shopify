import React, { useState } from 'react';
import {
  Row, Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from "gatsby"
import "~/assets/css/bootstrap.min.css"
import "~/assets/css/animate.css"

const items = [
    {
      title1 : "CHIROFOAM MEMORY FOAM MATTRESS",
      title2 : "UPGRADE",
      title3 : "YOUR SLEEP",
      productLink : "/product/the-original-chirofoam™-mattress-luxury-firm/",
      background: ""
    },
    {
      title1 : "Chirofoam XF Extra Firm Memory Foam Mattress",
      title2 : "MAXIMUM",
      title3 : "SUPPORT",
      productLink : "/product/the-chirofoam™-xf-mattress-extra-firm/",
      background: ""
    },
    {
      title1 : "CHIROFOAM MEMORY FOAM MATTRESS",
      title2 : "UPGRADE",
      title3 : "YOUR SLEEP",
      productLink : "/product/the-original-chirofoam™-mattress-luxury-firm/",
      background: ""
    },
  ];
const HomePageSlider = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
 
      >
         <div className="home-banner bg-image">
        <div className="container-large position-relative">
          <div className="" style={{color: '#fff',right:'0', left:'0'}}>
            <div className="">
      <Row>
        <Col md="6">
        
        </Col>
        <Col md="6" className="text-center banner-home" style={{right:'0'}}>      
          <p className="leads filson-pro-reg space-4 pt-2 animated fadeInDown slow text-uppercase">{item.title1}</p>
          <h2 className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4 animated fadeInRight" style={{fontStyle:'italic'}}>{item.title2}</h2>
          <h3 className="erbaum animated fadeInUp slow">{item.title3}</h3>
          <p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0 animated fadeInLeft">
            <Link to={item.productLink} className="btn-cta text-white erbaum-bold space-1">BUY NOW</Link>
          </p>
        </Col>
      </Row>
      </div>
          </div>
        </div>
      </div>
        <CarouselCaption captionText={item.background} captionHeader={item.background} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      ride="carousel"
    >
     
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomePageSlider;
