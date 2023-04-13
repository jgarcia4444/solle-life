import React from 'react'

const Header = () => {

    return (
        <header className="w-full flex flex-row justify-between mt-20">
            <div className="lg:w-2/5 flex flex-col justify-around items-center">
                <h1 className="text-8xl text-left text-white font-bold">Solle Life</h1>
                <p className="text-left text-white text-2xl">Natural supplements for almost every need</p>
            </div>
            <div className="lg:w-2/5 flex flex-col justify-start items-center ">
                <img className="lg:w-full rounded shadow hover:shadow-lg" src="https://cdn11.bigcommerce.com/s-zsd73psd0i/product_images/uploaded_images/herbal-supplement-guide2.jpg" />
            </div>
        </header>
    )
};

export default Header;