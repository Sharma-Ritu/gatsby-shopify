import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import StoreContext from "~/context/StoreContext";
import "../assets/css/bootstrap.min.css";
import logo from "../assets/img/logo-home.png";
import madeIn from "../assets/img/canadian-made.png";

const Header = props => {
  const {
    removeLineItem,
    store: { client, checkout }
  } = useContext(StoreContext)
  const [cartCount, setCartCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const getLineItemTotal = (quantity, variantPrice) => {
    const lineItemTotal = quantity * variantPrice
    return lineItemTotal.toFixed(2)
  }
  const getCartCount = () =>{
  	if(cartCount !== 0){
  		return "(" + cartCount + ")"
  	}else{
  		return ""
  	}
  }
  const handleRemove = (event, lineItemId) => {
    removeLineItem(client, checkout.id, lineItemId).then(() => {
      setCartCount(cartCount-1)
    });
  }
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  const lineItems = checkout.lineItems
  const subtotalPrice = checkout.subtotalPrice
  useEffect(() => {
    if (checkout.lineItems.length > 0) {
      setCartCount(checkout.lineItems.length)
    }
  }, [checkout])
  return (
    <div className="bg-white pt-sm-2 header-part">
      <span className="position-absolute pt-2 pr-4" style={{ fontSize: "10px", color: "#b2b2b2", right: "0", top: "0", zIndex: 1 }}>
        <img src={madeIn} className="img-fluid" alt="Canada" />
        Developed & manufactured in Canada
      </span>
      <Navbar color="light" light={true} expand="lg" className="bg-white pt-4 pt-sm-4 p-3 p-sm-0">
        <div className="container d-sm-flex d-lg-flex d-xl-flex">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Chirofoam" width="200px" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="text-center text-lg-left">
            <Nav className="mr-0 ml-auto pb-2" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{ color: "#b2b2b2" }}>
                  ORIGINAL LUXURY FIRM
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-center border-0 text-center">
                  <Link to="/5-key-features/" className="nav-link space-1">
                    5 Key Features
                  </Link>
                  <Link to="/design/" className="nav-link space-1">
                    Design
                  </Link>
                  <Link to="/comparison-chart/" className="nav-link space-1">
                    Compare
                  </Link>
                  <Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="nav-link space-1">
                    BUY NOW
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{ color: "#b2b2b2" }}>
                  XF EXTRA FIRM
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-center border-0 text-center">
                  <Link to="/5-key-features-chirofoam-xf-extra-firm/" className="nav-link space-1">
                    5 Key Features
                  </Link>
                  <Link to="/design-chirofoam-xf-extra-firm-mattress/" className="nav-link space-1">
                    Design
                  </Link>
                  <Link to="/comparison-chart/" className="nav-link space-1">
                    Compare
                  </Link>
                  <Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="nav-link space-1">
                    BUY NOW
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/our-guarentees/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{ color: "#b2b2b2" }}>
                  OUR GUARENTEES
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/reviews/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{ color: "#b2b2b2" }}>
                  REVIEWS
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/shop-chirofoam/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{ color: "#b2b2b2" }}>
                  SHOP CHIROFOAM
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="space-1 p-sm-0 p-lg-0 p-xl-0 cart" style={{ color: "#b2b2b2" }}>
                  <i className="fa fa-shopping-cart"></i>
                  <span>{getCartCount()}</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right rounded-0">
                  {lineItems.length > 0 ? (
                    <ul className="list-group">
                      {lineItems.map((lineItem, index) => (
                        <li key={index} className={index > 0 ? "list-group-item p-2 border-left-0 border-right-0 border-bottom-0 rounded-0" : "list-group-item p-2 border-0 rounded-0"}>
                          <div className="media">
                            <div className="media-left">
                              <button onClick={e => handleRemove(e, lineItem.id)} className="btn btn-link p-0 color-primary" title="Remove this item">
                                <i className="fa fa-remove"></i>
                              </button>
                            </div>
                            <div className="media-left">
                              <img src={lineItem.variant.image.src} alt="" className="img-fluid" style={{ maxWidth: "70px" }} />
                            </div>
                            <div className="media-body">
                              <span className="d-block color-primary fs-1">
                                {lineItem.title}
                              </span>
                              <span className="d-block color-primary fs-1">{lineItem.variant.title}</span>
                              <span className="color-primary fs-2 float-left">X&nbsp;{lineItem.quantity}</span>
                              <span className="color-primary fs-2 float-right">
                                CAD&nbsp;
                                <span className="color-primary fs-2">$&nbsp;</span>
                                <span className="color-primary fs-2">{getLineItemTotal(lineItem.quantity, lineItem.variant.price)}</span>
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                      <li className="list-group-item p-2 text-center border-left-0 border-right-0 mb-0 rounded-0">
                        <p className="text-center mb-0 color-primary">
                          <strong>Subtotal: </strong>
                          <span className="color-primary fs-2 font-weight-bold amount">
                            CAD&nbsp;
                            <span className="color-primary fs-2 font-weight-bold currencySymbol">$</span>
                            {subtotalPrice}
                          </span>
                        </p>
                      </li>
                      <li className="list-group-item p-2 text-center border-0 rounded-0">
                        <Link to="/cart/" className="btn btn-custom-secondary font-weight-bold btn-sm text-white mx-1">
                          View Cart
                        </Link>
                        <button onClick={handleCheckout} className="btn btn-checkout btn-sm font-weight-bold space-1 text-white mx-1">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  ) : (
                    <p className="text-center mb-0 color-primary">Cart is Empty!</p>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
