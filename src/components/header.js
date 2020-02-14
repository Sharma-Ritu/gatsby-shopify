
import React, {useState} from "react"
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
  DropdownItem,
} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import logo from "../assets/img/logo-home.png"
import madeIn from "../assets/img/canadian-made.png"


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarColor = (props.color)?props.color: 'light';
  const toggle = () => setIsOpen(!isOpen); 

  return (
    <div className="bg-transparent pt-sm-2 header-part">
	  <span className="position-absolute pt-2 pr-4" style={{fontSize:'10px',color:'#b2b2b2',right:'0',top:'0'}}>
	  	<img src={madeIn} className="img-fluid" />
	  	Developed & manufactured in Canada
	  </span>
      <Navbar color={navbarColor} light={(navbarColor==='light')} dark={(navbarColor==='dark')} expand="lg" className="bg-transparent pt-4 pt-sm-4 p-3 p-sm-0">
		<div className="container d-sm-flex d-lg-flex d-xl-flex">
			<Link to="/" className="navbar-brand"><img src={logo} alt="Chirofoam" width="200px"/></Link>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
			  <Nav className="mr-0 ml-auto pb-2" navbar>
			  <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            ORIGINAL LUXURY FIRM
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
				<NavItem>
				  <Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>ORIGINAL LUXURY FIRM</Link>
				</NavItem>
				<NavItem>
				  <Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>XF EXTRA FIRM</Link>
				</NavItem>
				<NavItem>
				  <Link to="/our-guarentees/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>OUR GUARENTEES</Link>
				</NavItem>
				<NavItem>
				  <Link to="/reviews/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>REVIEWS</Link>
				</NavItem>
				<NavItem>
				  <Link to="/shop-chirofoam/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link" style={{color:'#b2b2b2'}}>SHOP CHIROFOAM</Link>
				</NavItem>           
			  </Nav>
			</Collapse>
		</div>
	  </Navbar>
    </div>
  );
}

export default Header;
