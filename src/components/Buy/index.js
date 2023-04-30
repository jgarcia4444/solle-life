import React from 'react'

import SectionTitle from '../SectionTitle';

import Urls from '../../config/Urls';

const Buy = () => {

    const {solleEnrollmentUrl} = Urls

    return (
        <div id="buy" className="">
            <SectionTitle text={"Buy"} />
            <div className="mt-4 bg-white p-4 rounded shadow flex flex-row flex-wrap">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-lime-300 text-left text-4xl font-bold">Become a Solle Member</h3>
                    <div className="text-white bg-lime-300 px-4 py-1 rounded shadow animate-pulse cursor-pointer font-bold hover:animate-none"><a href={solleEnrollmentUrl} target="_blank">Tap Here to Buy</a></div>
                </div>
                <p className="text-lime-300 font-bold text-left text-base">Shop and Save - To start enjoying the world's finest adaptogen powered supplements all you need to do is start shopping! We refer to our customers as Members, and keep track of all the product credit you earn by placing orders. We call these SolleRewards and you earn them with every purchase. We also keep track of your order history as well.</p>
                <p className="text-lime-300 mt-4 font-bold text-lg">To buy tap the button at the top right of this section and scroll to Solle Member and buy the best products!</p>
            </div>
        </div>
    )
};

export default Buy;