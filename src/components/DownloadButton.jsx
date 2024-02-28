
import React from 'react'
import downloadBtn from '../assets/icons/download-icon.svg';
const DownloadButton = () => {
  return (
    <div className="flex items-center gap-2">
    <button className="flex items-center gap-1 py-[12px] md:py-[17px] px-[30px] md:px-[50px] rounded-full bg-mainColor ">
     <a > 
       <img src={downloadBtn} alt="iconD" />
     </a>
     <span className="text-16 font-pop  text-grayColor">Download</span>
    </button>
    <p className="text-16 font-pop text-grayColor">Coming soon on all platforms...</p>
</div>
  )
}

export default DownloadButton