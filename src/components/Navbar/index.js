
import React, {useState, useEffect} from 'react';

const Navbar = () => {

    const [showFixedNav, setShowFixedNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const renderNavLinks = () => {
        let navObjects = [
            {text: "Health", to: "#health"},
            {text: "About", to: "#about"},
            {text: "Buy", to: "#buy"},
            {text: "Join", to: "#join"},
        ]
        return navObjects.map((navObject, i) => <a key={`${i}-${navObject.text}`} className="text-lg mr-16 text-white hover:text-lime-600 hover:animate-bounce active:animate-none" href={navObject.to}>{navObject.text}</a>)
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
        <div className={`w-full flex flex-row transition-all ${showFixedNav === true && "bg-lime-600 fixed top-0 left-0 p-2 shadow"}`}>
            <div className="w-1/4 flex flex-row items-center justify-start">
                <h4 className="text-white font-bold text-4xl"><a href="#">Solle Life</a></h4>
            </div>
            <div className="w-3/4 flex flex-row items-center justify-end">
                {renderNavLinks()}
            </div>
        </div>
    )
}

export default Navbar;