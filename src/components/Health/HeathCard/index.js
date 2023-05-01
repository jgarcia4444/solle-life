import React, {useEffect, useState} from 'react';

const HealthCard = ({cardInfo}) => {

    const {img, title, text} = cardInfo;

    const [fade, setFade] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFade(true);
        }, 250)   
    })

    return (
        <div className={`w-full lg:w-1/4 lg:m-4 flex flex-col justify-start items-start lg:items-center ${fade === true ? "opacity-100 scale-100" : "scale-0 opacity-0"} transition-all duration-500 mb-8 lg:mb-0`}>
            <img src={img} alt="Health Card" className="w-full h-44 rounded mb-2 lg:mb-0" />
            <h6 className="font-bold text-2xl text-left text-white">{title}</h6>
            <p className="text-lg text-left lg:mt-2 text-white">{text}</p>
        </div>
    )
};

export default HealthCard;