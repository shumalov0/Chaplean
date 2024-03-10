
import React, { useEffect } from 'react'
import MusicPlayer from '../../components/MusicPlayer';

import './Home.css'
const MusicSection = () => {

  return (
    <section className='bg-mainColor py-10 px-10 '>
        <div className="container mx-auto flex items-center flex-col md:flex-row md:justify-between ">
           <h2   className=' text-[20px]  md:text-[35px]  text-center md:text-start font-pop text-whiteColor max-w-[698px]'>The first music based social media in the world of music</h2>
            <MusicPlayer />
        </div>

    </section>
  )
}

export default MusicSection;