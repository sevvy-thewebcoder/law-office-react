import PropTypes from "prop-types"

export default function ComingSoon ( { pageName } ) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-8">
      <h1 className="font-black text-6xl">
        { pageName }
      </h1>
      <h2 className="font-semibold text-5xl">Page Coming Soon</h2>
    </div>
  )
}

ComingSoon.propTypes = {
    pageName: PropTypes.string.isRequired
}
