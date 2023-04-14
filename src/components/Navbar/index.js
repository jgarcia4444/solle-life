
import React from 'react'

const Navbar = () => {

    const renderNavLinks = () => {
        let navObjects = [
            {text: "Health", to: "#health"},
            {text: "About", to: "#about"},
            {text: "Buy", to: "#buy"},
            {text: "Join", to: "#join"},
        ]
        return navObjects.map((navObject, i) => <a key={`${i}-${navObject.text}`} className="text-lg mr-16 text-white hover:text-lime-600 hover:animate-bounce active:animate-none" href={navObject.to}>{navObject.text}</a>)
    }

    return (
        <div className="w-full flex flex-row">
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