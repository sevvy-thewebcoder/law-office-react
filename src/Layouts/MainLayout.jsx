import { useState, useRef } from "react"
import { Outlet } from "react-router-dom"
import { useDynamicValue } from "../Hooks/useDynamicValue"
import Header from "./Header"
import Navbar from "../Components/Navbar"
import Footer from "./Footer"

export default function MainLayout () {

    const refHeader = useRef(null)
    const refFooter = useRef(null)
    const {elementHeight: headerHeight} = useDynamicValue(refHeader)
    // const {elementHeight: footerHeight} = useDynamicValue(refFooter)

    const [ toggle, setToggle ] = useState( false )
    
    function toggler() {   
        setToggle( !toggle )
        console.log(toggle)
    }

    function resetToggleStateOnClick () {
        if (toggle) {
            setToggle(prev => !prev)
        }
    }

    console.log(toggle)

    const stylesMobileNavbar = {
        height: `calc(100vh - ${ headerHeight }px)`,
        top: (toggle === true ? `${headerHeight}px` : "-110vh")
    }

    return (
        <div className="w-full">
            <div className="fixed z-50 top-0 left-0 right-0">
                <Header reset={resetToggleStateOnClick} elRef={ refHeader } click={ toggler } icon={ toggle === true ? "ri-close-fill" : "ri-apps-fill origin-center rotate-[-360deg] transition-all" } />
                <div style={stylesMobileNavbar} className={ `w-full absolute z-0 max-w-[1200px] mx-auto px-clamp transition-[top] ease-in duration-300 delay-300` }>
                    <Navbar reset={resetToggleStateOnClick} styles="Navbar h-full flex flex-col justify-evenly items-center gap-4 lg:hidden bg-slate-800 bg-opacity-[0.95] text-white" />
                </div>
            </div>
            <main
                style={ { marginTop: `${ headerHeight }px`, minHeight: `calc(100vh - ${headerHeight}px)` } }
                className="relative grid w-full"
            >
                <Outlet />
            </main>
            <Footer elRef={ refFooter } />
        </div>
    )
} 