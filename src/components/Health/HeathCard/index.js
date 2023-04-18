import React from 'react'

const HealthCard = ({cardInfo}) => {

    const {img, title, text} = cardInfo;

    return (
        <div className="lg:w-1/4 lg:m-4 flex lg:flex-col justify-start items-center">
            <img src={img} alt="Health Card" className="w-full h-44 rounded" />
            <h6 className="font-bold text-2xl text-left text-white">{title}</h6>
            <p className="text-lg text-left mt-2 text-white">{text}</p>
        </div>
    )
};

export default HealthCard;