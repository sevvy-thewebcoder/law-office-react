import PropTypes from "prop-types"

export default function Button({text, styles, link}) {
  return (
      <a href={link} className={styles}>{ text }</a>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}