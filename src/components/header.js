
import React, {useState, useEffect, useContext } from "react"
import {Link} from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import "../assets/css/bootstrap.min.css"
import logo from "../assets/img/logo-home.png"
import madeIn from "../assets/img/canadian-made.png"


const Header = (props) => {
	const {
    store: { checkout },
  } = useContext(StoreContext)
  const [cartCount, setCartCount] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navbarColor = (props.color)?props.color: 'light';
  const toggle = () => setIsOpen(!isOpen); 
  const openDropdown = (event) => {
  	if(document.querySelector(".dropdown.show")!==null){
	  	document.querySelector(".dropdown.show").classList.toggle("show")
  	}
  	if(document.querySelector(".dropdown-menu.show")!==null){
	  	document.querySelector(".dropdown-menu.show").classList.toggle("show")
	  }
  	event.target.parentElement.classList.toggle("show")
  	event.target.nextSibling.classList.toggle("show")
  }
  const closeDropdown = (event) => {
  	event.target.classList.toggle("show")
  	event.target.parentElement.classList.toggle("show")
  }
  const lineItems = checkout.lineItems;
  useEffect(() => {
  	if(checkout.lineItems.length > 0){
  		setCartCount(checkout.lineItems.length)
  	}
  	console.log(lineItems)
	})
  return (
    <div className="bg-white pt-sm-2 header-part">
	  <span className="position-absolute pt-2 pr-4" style={{fontSize:'10px',color:'#b2b2b2',right:'0',top:'0',zIndex:1}}>
	  	<img src={madeIn} className="img-fluid" alt="Canada"/>
	  	Developed & manufactured in Canada
	  </span>
      <Navbar color="light" light={true} expand="lg" className="bg-white pt-4 pt-sm-4 p-3 p-sm-0">
		<div className="container d-sm-flex d-lg-flex d-xl-flex">
			<Link to="/" className="navbar-brand"><img src={logo} alt="Chirofoam" width="200px"/></Link>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
			  <Nav className="mr-0 ml-auto pb-2" navbar>
			  <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="space-1 p-sm-0 p-lg-0 p-xl-0" onMouseEnter={(e) => openDropdown(e)} style={{color:'#b2b2b2'}}>
            ORIGINAL LUXURY FIRM
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-center border-0" onMouseLeave={(e) => closeDropdown(e)}>
          	<Link to="/5-key-features/" className="dropdown-item space-1">5 Key Features</Link>
          	<Link to="/design/" className="dropdown-item space-1">Design</Link>
          	<Link to="/comparison-chart/" className="dropdown-item space-1">Compare</Link>
				  	<Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="dropdown-item space-1">BUY NOW</Link>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="space-1 p-sm-0 p-lg-0 p-xl-0" onMouseEnter={(e) => openDropdown(e)} style={{color:'#b2b2b2'}}>
            XF EXTRA FIRM
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-center border-0" onMouseLeave={(e) => closeDropdown(e)}>
          	<Link to="/5-key-features-chirofoam-xf-extra-firm/" className="dropdown-item space-1">5 Key Features</Link>
          	<Link to="/design-chirofoam-xf-extra-firm-mattress/" className="dropdown-item space-1">Design</Link>
          	<Link to="/comparison-chart/" className="dropdown-item space-1">Compare</Link>
				  	<Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="dropdown-item space-1">BUY NOW</Link>
          </DropdownMenu>
        </UncontrolledDropdown>
				<NavItem>
				  <Link to="/our-guarentees/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>OUR GUARENTEES</Link>
				</NavItem>
				<NavItem>
				  <Link to="/reviews/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>REVIEWS</Link>
				</NavItem>
				<NavItem>
				  <Link to="/shop-chirofoam/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>SHOP CHIROFOAM</Link>
				</NavItem>
				<NavItem>
					<UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="space-1 p-sm-0 p-lg-0 p-xl-0 cart" style={{color:'#b2b2b2'}}>
            <i className="fa fa-shopping-cart"></i> 
				  	<span>({cartCount})</span>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-right border-0 rounded-0" style={{minWidth:'16rem'}}>          	
          	<ul className="list-group">
          		{checkout.lineItems.map((line_item, index) => (
						  	<li className="list-group-item border-0 rounded-0">
						  		<div
						  			className="media"
						  		>
							  		<div
							  			className="media-left"
							  		>
							  			<button>&times;</button>
							  		</div>
							  		<div
							  			className="media-left"
							  		>
							  			<img src={variant.image.src} alt="" className="img-fluid" style={{maxWidth:'70px'}}/>
							  		</div>
							  		<div
							  			className="media-body"
							  		>
							  			<span>{line_item.title}</span>
							  		</div>
						  		</div>
						  	</li>
          		))}
						  <li className="list-group-item text-center border-0 rounded-0">
							  <Link to="/cart/" className="btn btn-custom-primary btn-sm text-white">View Cart</Link>
						  </li>
						</ul>
          </DropdownMenu>
        </UncontrolledDropdown>
				</NavItem>
			  </Nav>
			</Collapse>
		</div>
	  </Navbar>
    </div>
  );
}

export default Header;
