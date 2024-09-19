"use client"
import ReactPlayer from "react-player";

export  function VideoComponent({url,width,height}) {
    return (
        <ReactPlayer width={width} height={height} url={url} playing />
    )
}