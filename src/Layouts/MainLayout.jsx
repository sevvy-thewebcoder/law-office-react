import { useState} from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "../Components/Navbar"
import Footer from "./Footer"

export default function MainLayout () {

    const [ toggle, setToggle ] = useState( false )
    
    function toggler() {   
        setToggle( !toggle )
        console.log(toggle)
    }

    return (
        <div className="w-full">
            <div className="fixed z-50 top-0 left-0 right-0">
                <Header click={ toggler } icon={ toggle === true ? "ri-close-fill" : "ri-apps-fill" } />
                <div className={ `w-full absolute ${toggle === true ? "top-[70px]" : "top-[-100vh]"} z-0 h-dynamicHeight max-w-[1200px] mx-auto px-clamp transition-all` }>
                    <Navbar styles="Navbar h-full flex flex-col justify-evenly items-center gap-4 lg:hidden bg-slate-800 bg-opacity-[0.95] text-white" />
                </div>
            </div>
            <main className="relative mt-[70px] w-full max-w-[1200px] mx-auto px-clamp pt-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}