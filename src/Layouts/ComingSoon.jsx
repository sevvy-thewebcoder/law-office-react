import PropTypes from "prop-types"

export default function ComingSoon ( { pageName } ) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2">
      <h1 className="font-vollkorn font-black text-headingTxtClamp">
        { pageName }
      </h1>
      <h2 className="font-montserrat font-semibold text-specializationTxtClamp">Page Coming Soon...</h2>
    </div>
  )
}

ComingSoon.propTypes = {
    pageName: PropTypes.string.isRequired
}
