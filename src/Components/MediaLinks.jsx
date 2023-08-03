import PropTypes from "prop-types"
import "remixicon/fonts/remixicon.css"

export default function MediaLinks ({ icon }) {
  return (
    <i className={icon}></i>
  )
}


MediaLinks.propTypes = {
    icon: PropTypes.string.isRequired
}