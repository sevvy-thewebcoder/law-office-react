import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom'
import { navLinksHeader } from "../Constants/content"


export default function Navbar({ styles, reset }) {

  const activeLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#f1f1f1",
    textUnderlineOffset: "10px"
  }
  
  const navLinkElement = navLinksHeader.map( ( navLink ) => (
    <NavLink
      key={ navLink.id }
      to={ navLink.linkPath }
      style={ ( { isActive } ) => isActive ? activeLinkStyles : null }
      onClick={reset}
    >
      {navLink.linkName}
    </NavLink>
  ))

  return (
    <nav className={styles}>
     {navLinkElement}
    </nav>
  )
}

Navbar.propTypes = {
  styles: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
}