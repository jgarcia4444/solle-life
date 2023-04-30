import React from 'react'

import SectionTitle from '../SectionTitle';

import Urls from '../../config/Urls';

const Join = () => {

    const {solleEnrollmentUrl} = Urls;

    return (
        <div id="join" className="mb-16">
            <SectionTitle text="Join"/>
            <div className="mt-4 bg-white p-4 rounded shadow flex flex-row flex-wrap">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-lime-300 text-left text-4xl font-bold">Become a Solle Specialist</h3>
                    <div className="text-white bg-lime-300 px-4 py-1 rounded shadow animate-pulse cursor-pointer font-bold hover:animate-none"><a href={solleEnrollmentUrl} target="_blank">Tap Here to Join</a></div>
                </div>
                <p className="text-lime-300 font-bold text-left text-base">Share and Earn – If you have a desire to help others by sharing the countless health benefits of Solle’s amazing formulas, and be financially compensated for it, becoming a Specialist is for you. Whether you want to share the products via social media, become an affiliate, be a health coach, or build a team of business builders, becoming a specialist is your starting point.</p>
                <p className="text-lime-300 mt-4 font-bold text-lg">To join tap the button at the top right of this section and scroll to Solle Specialist and join my team!</p>
            </div>
        </div>
    )
}

export default Join;