import React from 'react'
import ReactPlayer from "react-player"
import { useParams } from 'react-router-dom'

const Video = () => {
    const param=useParams();
    console.log(param)
  return (
    <div className='videoPlayer'>
        <ReactPlayer url="https://www.youtube.com/watch?v=wafyhTpWpUs"/>
    </div>
  )
}

export default Video