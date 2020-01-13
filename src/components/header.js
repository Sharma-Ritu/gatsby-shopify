
import React, {useState} from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import logo from "../assets/img/logo-home.png"


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); 

  return (
    <div className="bg-transparent pt-sm-2">
      <Navbar color="faded" light expand="lg" className="bg-transparent pt-3 pt-sm-4">
		<div className="container-large d-sm-flex d-lg-flex d-xl-flex">
			<NavbarBrand href="/"><img src={logo} alt="Chirofoam" width="200px"/></NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
			  <Nav className="mr-0 ml-auto pb-2" navbar>
			  	<span className="pr-4">Developed & manufactured in Canada</span>
				<NavItem>
				  <NavLink href="/original-luxury-firm/" className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{color:'#b2b2b2'}}>ORIGINAL LUXURY FIRM</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/xf-extra-firm/" className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{color:'#b2b2b2'}}>XF EXTRA FIRM</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/our-guarentees" className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{color:'#b2b2b2'}}>OUR GUARENTEES</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/reviews" className="space-1 p-sm-0 p-lg-0 p-xl-0" style={{color:'#b2b2b2'}}>REVIEWS</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/shop-chirofoam" className="space-1 p-sm-0 p-lg-0 p-xl-0 shop-chir position-relative" style={{color:'#b2b2b2'}}>SHOP CHIROFOAM</NavLink>
				</NavItem>           
			  </Nav>
			</Collapse>
		</div>
	  </Navbar>
    </div>
  );
}

export default Header;