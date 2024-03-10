
import React, { useEffect } from 'react'
import MusicPlayer from '../../components/MusicPlayer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Home.css'
const MusicSection = () => {
  useEffect(() => {
    AOS.init({
      disable: 'mobile', // Disable AOS on mobile devices
      duration: 800, // Adjust duration
      offset: 100, // Adjust offset
      easing: 'ease-in-out', // Adjust easing
    });
  }, []);
  return (
    <section data-aos="zoom-out-left" className='bg-mainColor py-10 px-10 '>
        <div className="container mx-auto flex items-center flex-col md:flex-row md:justify-between md:flex-wrap">
           <h2  data-aos="fade-up-right" className=' text-[20px]  md:text-[39px]  text-center md:text-start font-pop text-whiteColor max-w-[698px]'>The first music based social media in the world of music</h2>
            <MusicPlayer data-aos="fade-up-left"/>
        </div>

    </section>
  )
}

export default MusicSection;