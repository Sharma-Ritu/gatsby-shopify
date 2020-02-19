import React from 'react';
import Slider from "react-slick";
import {Container, Row, Col, Media} from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider =()=> {
  const settings = {
      dots:false,
      infinite: true,
      speed:1000,
      autoplaySpeed:10000,
      centerMode: true,
      focusOnSelect: true,
     centerPadding: '0px',
     autoplay:true,
     slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]

    };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <div className="card-bg1 keys card-bg bg-image mb-4 mb-sm-0">
                <div className="card-layer">
                  <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">01</h3>
                  <div className="card-data text-white position-absolute p-3">
                    <h4 className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase"  style={{fontSize:'18px'}}>PRESSURE RELIEF FOAM</h4>
                    <p className="proxima-r text-1" style={{letterSpacing:'1px'}}>The Chirofoam™ memory foam mattress is designed to relieve pressure which is built up in your body from daily activities. This pressure build up is largely responsible for common back pain experienced by many people, and can be caused by improper sitting posture, heavy lifting, or other strenuous activities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-bg2 keys card-bg bg-image mb-4 mb-sm-0">
                <div className="card-layer">
                  <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">02</h3>
                  <div className="card-data text-white position-absolute p-3">
                    <h4 className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase" style={{fontSize:'18px'}}>PROPPER BACK SUPPORT AND ALIGNMENT</h4>
                    <p className="proxima-r text-1" style={{letterSpacing:'1px'}}>The majority of people go by their daily life with improper posture while sitting, standing, or lifting heavy objects. This improper posture puts unnecessary strain on your back which leads to back pain and potentially more serious health problems in the future.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-bg3 keys card-bg bg-image">
                <div className="card-layer">
                  <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">03</h3>
                  <div className="card-data text-white position-absolute p-3">
                    <h4 className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase" style={{fontSize:'18px'}}>BALANCED SLEEP TEMPERATURE</h4>
                    <p className="proxima-r text-1" style={{letterSpacing:'1px'}}>Sleeping at night when the body is too hot or too cold causes many people to wake up during the night and break their sleep cycle. It may be hard to fall back asleep when your body is uncomfortable which takes away precious hours of sleep during the night making you feel groggy and tired in the morning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-bg4 keys card-bg bg-image mb-4 mb-sm-0">
                <div className="card-layer">
                  <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">04</h3>
                  <div className="card-data text-white position-absolute p-3">
                    <h4 className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase" style={{fontSize:'18px'}}>Eliminates motion transfer </h4>
                    <p className="proxima-r text-1" style={{letterSpacing:'1px'}}>Partner movement while you sleep can be felt across a mattress with traditional coils. This is caused by tossing and turning during the night and can affect the sleep pattern of the person sleeping as well as the partner they are sleeping with.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-bg5 keys card-bg bg-image mb-4 mb-sm-0">
                <div className="card-layer">
                  <h3 className="pt-0 pt-sm-3 text-right text-white pr-3 erbaum-bold">05</h3>
                  <div className="card-data text-white position-absolute p-3">
                    <h4 className="erbaum-bold pr-0 pr-sm-0 pr-lg-2 pf-xl-5 text-uppercase" style={{fontSize:'18px'}}>Resists sagging</h4>
                    <p className="proxima-r text-1" style={{letterSpacing:'1px'}}>One of the most common problems people have which causes them to replace their mattress is sagging. These dips in the mattress are caused by years of use and often lead to great discomfort and irritable sleep.</p>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    );
  
}
export default SlickSlider;