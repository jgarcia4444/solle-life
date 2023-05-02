
import React, {useState, useEffect} from 'react';

import {FiMenu} from 'react-icons/fi';

import Logo from '../../media/logo/Solle-Life.png';

const Navbar = () => {

    const [showFixedNav, setShowFixedNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMiniNav, setShowMiniNav] = useState(false);

    const renderNavLinks = () => {
        let navObjects = [
            {text: "Health", to: "#health"},
            {text: "About", to: "#about"},
            {text: "Join", to: "#join"},
            {text: "Buy", to: "#buy"},
        ]
        return navObjects.map((navObject, i) => <a onClick={() => setShowMiniNav(!showMiniNav)}  key={`${i}-${navObject.text}`} className={`text-lg ${showMiniNav === true ? "text-lime-300 bg-lime-300 bg-opacity-30 py-1 mt-2" : "mr-16 text-white"}  ${showFixedNav === true ? "hover:text-black hover:shadow lg:hover:shadow-none" : "hover:text-lime-600"}  hover:animate-bounce active:animate-none `} href={navObject.to}>{navObject.text}</a>)
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > 14) {
            setShowFixedNav(true); 
          } else if (window.scrollY < 15) { 
            setShowFixedNav(false);  
          }
          setLastScrollY(window.scrollY); 
        }
      };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    },[lastScrollY]);

    return (
        <div className={`w-full flex flex-row transition-all ${showFixedNav === true && "bg-lime-600 fixed top-0 left-0 p-2 shadow z-10"}`}>
            <div className="w-1/4 flex flex-row items-center justify-start">
                <a href="#">
                    <img className={`rounded-2xl ${showFixedNav === true ? "w-1/4 " : "lg:w-1/3"} transition-all duration-700`} src={Logo} alt="Company Logo" />
                </a>
            </div>
            <div className="w-3/4 md:flex flex-row items-center justify-end hidden">
                {renderNavLinks()}
            </div>
            <div className="w-3/4 flex flex-row items-center justify-end md:hidden relative">
                <div onClick={() => setShowMiniNav(!showMiniNav)} className=" p-1 bg-white rounded hover:shadow transition-all cursor-pointer hover:scale-105">
                    <FiMenu color={"#bef263"} size={24} />
                </div>
                {showMiniNav === true &&
                    <div className="absolute flex flex-col flex-wrap left-1/2 top-8 w-1/2 rounded bg-white z-10 shadow">
                        {renderNavLinks()}
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;