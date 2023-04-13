import React from 'react'

const Header = () => {

    return (
        <header className="w-full p-8 flex flex-row">
            <div className="lg:w-2/5 flex flex-col justify-evenly">
                <h1 className="text-8xl text-left text-white font-bold">Solle Life</h1>
                <p className="text-left text-white text-2xl">Natural supplements for almost every need</p>
            </div>
            <div className="lg:w-3/5 flex flex-col justify-center items-center">
                <img className="lg:w-3/4 rounded shadow hover:shadow-lg" src="https://cdn11.bigcommerce.com/s-zsd73psd0i/product_images/uploaded_images/herbal-supplement-guide2.jpg" />
            </div>
        </header>
    )
};

export default Header;