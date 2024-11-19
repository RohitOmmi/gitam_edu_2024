import React from 'react'
import video from "../Assets/banner_video.mp4"
function Banner() {
  return (
    <>
    <section>
        <video  className='container w-100 mx-auto'autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
    </section>
    </>
  )
}

export default Banner