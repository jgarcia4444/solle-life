
import React, {useState, useEffect} from 'react';

import {FiMenu} from 'react-icons/fi';

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
        return navObjects.map((navObject, i) => <a key={`${i}-${navObject.text}`} className={`text-lg ${showMiniNav === true ? "text-lime-300 bg-lime-300 bg-opacity-30 py-1 mt-2" : "mr-16 text-white"}  ${showFixedNav === true ? "hover:text-black hover:shadow" : "hover:text-lime-600"}  hover:animate-bounce active:animate-none `} href={navObject.to}>{navObject.text}</a>)
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
                <h4 className="text-white font-bold text-lg md:text-4xl"><a href="#">Solle Life</a></h4>
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