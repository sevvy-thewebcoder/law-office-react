import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom'


export default function Navbar({ styles }) {

  const activeLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#f1f1f1",
    textUnderlineOffset: "10px"
}

  return (
    <nav className={styles}>
     <NavLink to="office" style={({isActive}) => isActive ? activeLinkStyles : null}>Our Office</NavLink>
     <NavLink to="services" style={({isActive}) => isActive ? activeLinkStyles : null}>Services</NavLink>
     <NavLink to="partners" style={({isActive}) => isActive ? activeLinkStyles : null}>Partners</NavLink>
     <NavLink to="contact" style={({isActive}) => isActive ? activeLinkStyles : null}>Contact Us</NavLink>
    </nav>
  )
}

Navbar.propTypes = {
  styles: PropTypes.string.isRequired
}