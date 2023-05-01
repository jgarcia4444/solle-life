import React from 'react'

import VideoCard from '../VideoCard'
import SectionTitle from '../SectionTitle'

const About = () => {

    const renderVideos = () => {
        let videoObjects = [
            {title: "AdaptAble", url: "https://www.youtube.com/embed/yo4Gm7cWRdI"},
            {title: "Excell", url: "https://www.youtube.com/embed/AvCY6MdeIiI?list=PLRKQYlyb_JcTb47ypu3s5DNcXiYKfzAwY"},
            {title: "ReNue", url: "https://www.youtube.com/embed/jDhEXKcCDos?list=PLRKQYlyb_JcTb47ypu3s5DNcXiYKfzAwY"},
            {title: "FasTract", url: "https://www.youtube.com/embed/_nb83dJmIzY?list=PLRKQYlyb_JcTb47ypu3s5DNcXiYKfzAwY"}
        ]

        return videoObjects.map((videoInfo, i) => <VideoCard videoInfo={videoInfo} key={`${i}-${videoInfo.title}`} />)
    }

    return (
        <div className="w-full mt-20" id="about">
            <SectionTitle text={"About"} />
            <div className="w-full flex flex-row flex-wrap mt-8 justify-center items-between">
                {renderVideos()}
            </div>
        </div>
    )
}

export default About;