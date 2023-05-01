import React from 'react'
import {FiFacebook, FiInstagram} from 'react-icons/fi';

const Header = () => {

    let icons = [
        {label: "Instagram", icon: <FiInstagram color={"#fff"} size={32} />, alt: "Instagram", style:"bg-amber-700", to: "https://www.instagram.com/solle_life_2/"},
        {label: "Facebook", icon: <FiFacebook color={'#fff'} size={32} />, style:"bg-blue-500", to: "https://www.facebook.com/profile.php?id=100092326391281"},
    ]
    const renderSocialIcons = () => {
        return icons.map((iconInfo, i) => (
            <div className={` flex items-center justify-center w-14 h-14 rounded-lg ${iconInfo.style} cursor-pointer hover:shadow bg-opacity-80 hover:bg-opacity-100 `}>
                <a href={iconInfo.to} target="_blank" key={`${i}-${iconInfo.label}`}>{iconInfo.icon}</a>
            </div>
        )
        )
    }

    return (
        <header className="w-full flex flex-row justify-between mt-20 flex-wrap">
            <div className="w-full lg:m-0  mb-4 lg:w-3/5 flex flex-col justify-start items-start">
                <h1 className="text-8xl text-left text-white font-bold">Solle Life</h1>
                <p className="text-left text-white text-2xl mb-4 lg:mb-0">Natural supplements for almost every need</p>
                <div className="w-full flex flex-row h-full justify-start items-end gap-4 ">
                    {renderSocialIcons()}
                </div>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col justify-start items-center ">
                <img className="lg:w-full rounded shadow hover:shadow-lg" src="https://cdn11.bigcommerce.com/s-zsd73psd0i/product_images/uploaded_images/herbal-supplement-guide2.jpg" />
            </div>
        </header>
    )
};

export default Header;