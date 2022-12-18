import React from 'react'
import { useContext } from 'react'
import ReactPlayer from "react-player"
import { AuthContext } from '../Context/AuthContextProvider'

const Video = () => {
    const {authState}=useContext(AuthContext);
    console.log(authState.url)    
  return (
    <div className='videoPlayer'>
        <ReactPlayer url={`${authState.url}`} controls={true} />
    </div>
  )
}

export default Video