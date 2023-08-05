import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import Navbar from "../Components/Navbar"

export default function Header({ click, icon, elRef, reset }) {
	return (
		<header ref={ elRef } className='Header flex absolute z-20 w-full shadow-sm shadow-[#999999] top-0 left-0 right-0 bg-slate-600 text-white'>
			<div className='w-full max-w-[1200px] mx-auto px-clamp py-5 flex justify-between items-center gap-2'>
				<Link
					to='/'
					className="uppercase font-bold text-[1.1rem]"
					onClick={reset}
				>
					Smith, Nguyen & Singh
				</Link>
				<Navbar styles="Navbar hidden lg:flex justify-between gap-4 basis-2/5" />
				<button onClick={ click } className="text-[1.8rem] p-0 lg:hidden leading-5 w-fit" >
					<i className={ icon }></i>
				</button>
			</div>
		</header>
	);
}

Header.propTypes = {
	click: PropTypes.func.isRequired,
	icon: PropTypes.string.isRequired,
	elRef: PropTypes.string.isRequired,
	reset: PropTypes.func.isRequired
}