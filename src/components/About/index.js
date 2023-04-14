import React from 'react'
import VideoCard from '../VideoCard'

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
            <h2 className="text-white text-6xl font-bold text-left">About</h2>
            <div className="w-full flex flex-row flex-wrap mt-12">
                {renderVideos()}
            </div>
        </div>
    )
}

export default About;