import React from 'react'

const VideoCard = ({videoInfo}) => {

    const {title, url} = videoInfo;

    return (
        <div className="w-full lg:w-1/2 mb-16 px-1">
            <div className="w-full">
                <h5 className="text-white font-bold text-2xl text-left">{title}</h5>
            </div>
            <div className="w-full">
                <iframe className="rounded shadow w-full" height="228px"   src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}



export default VideoCard;