import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { Virtuoso } from 'react-virtuoso'
import { Link } from "gatsby"
import {Container,Jumbotron, Row, Col, Button, Media, Nav, NavItem, NavLink, TabContent, TabPane, Form} from 'reactstrap';



const GenerateItem = (index) =>{
  return (
      <Row>
                              <div className="w-100 m-auto">
                                <ul className="list-unstyled p-0 ratings">
                              <li className="border mb-4">
                                <h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Chirofoam™ XF Mattress – Extra Firm</h4>
                                    <div className="br-widget br-readonly pt-2">
                                      <Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
                                      <div className="br-current-rating d-none">5</div>
                                    </div>
                                    <p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Mina Ho–</b> September 4, 2019</p>
                                    <p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Supports your whole body comfortably and yet u won’t feel the hardness. The mattress is just amazing. I would recommend to all my friends.</p>
                              </li>
                                  <li className="border mb-4">
                                    <h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                                    <div className="br-widget br-readonly pt-2">
                                      <Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
                                      <div className="br-current-rating d-none">5</div>
                                    </div>
                                    <p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Emma –</b> June 1, 2016</p>
                                    <p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I am obsessed with this mattress! I've suffered from back pain for years and I couldn't tell you the last time I slept through the night without tossing and turning. Ever since I started sleeping on my new mattress I've been sleeping throughout the entire night without waking up and my back hasn't been bothering me nearly as much as it used to. Very pleased! Thank you Chirofoam! </p>
                                  </li>
                                  <li className="border mb-4">
                                    <h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                                    <div className="br-widget br-readonly pt-2">
                                      <Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
                                      <div className="br-current-rating d-none">5</div>
                                    </div>
                                    <p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Judy –</b> June 1, 2016</p>
                                    <p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I'm a busy mom and work full-time and although I've been in dire need of a new mattress I haven't had the time to shop around. I was so happy when my Chirofoam mattress showed up at my door. It was compact and so easy to carry into my bedroom. I honestly didn't even know what a difference this mattress would make in my life. I ordered it because I thought it would be quick and easy and cut out one of many chores on my to-do list. Since sleeping on it I feel more energized and so much happier in the mornings. Even my kids have noticed a difference in my energy levels I feel like I'm 10 years younger! </p>
                                  </li>
                                  <li className="border mb-4">
                                    <h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                                    <div className="br-widget br-readonly pt-2">
                                      <Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
                                      <div className="br-current-rating d-none">5</div>
                                    </div>
                                    <p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Hardeep –</b> June 1, 2016</p>
                                    <p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>I will recommend this mattress to everyone I know. I have had bad lower back pain for years now and Chirofoam was well worth the investment. My back pain is almost entirely gone. Best part is I haven't had to take a pain killer since my first week sleeping on this mattress. </p>
                                  </li>
                                  <li className="border mb-4">
                                    <h4 className="color-primary erbaum-bold text-uppercase" style={{fontSize:'16px'}}>The Original Chirofoam™ Mattress – Luxury Firm</h4>
                                    <div className="br-widget br-readonly pt-2">
                                      <Link to="#" data-rating-value="1" data-rating-text="1" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="2" data-rating-text="2" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="3" data-rating-text="3" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="4" data-rating-text="4" className="br-selected"><span className="color-primary fa fa-star"></span></Link>
                                      <Link to="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"><span className="color-primary fa fa-star"></span></Link>
                                      <div className="br-current-rating d-none">5</div>
                                    </div>
                                    <p className="filson-pro-reg pt-2" style={{ fontSize:'14px'}}><b className="color-primary">Steven Wright–</b> June 2, 2016</p>
                                    <p className="filson-pro-reg color-secondary mb-0 pb-0" style={{fontSize:'14px'}}>Surprised my wife on our anniversary and we absolutely love it. So do our kids which isn't necessarily a good thing :P</p>
                                  </li>
                            </ul>
          
                          </div>
                        </Row>
    )
}

const Review = (props) => {
  const [total, setTotal] = useState(0)
  const items = useRef([])
  const [loading, setLoading] = useState(false)

  // the setTimeout below simulates a network request.
  // In the real world, you can fetch data from a service.
  // the setTotal call will trigger a refresh for the list,
  // so make sure you call it last.
  const loadMore = useCallback(() => {
    setLoading(true)

    setTimeout(() => {
      for (let index = total; index < total+1; index++) {
        items.current = [...items.current, GenerateItem]
      }
      setLoading(false)
      setTotal(items.current.length)
    }, 500)
  }, [])

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <Virtuoso className="load" style={{height:'unset', overflow:'unset',position:'unset', outline:'none'}}
      totalCount={total}
      item={GenerateItem}
      footer={() => {
        return (
          
            <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
            <button disabled={loading} onClick={loadMore} className="btn-cta color-primary erbaum-bold space-1">
              {loading ? 'Loading...' : 'LOAD MORE'}
            </button>
            </p>
        )
      }}
    />
  )
}
export default Review;