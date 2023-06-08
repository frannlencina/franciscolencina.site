import React from 'react'

const YoNoFondo = "https://res.cloudinary.com/dctldwa03/image/upload/v1686253685/yo-nofondo_erppxx.png"

function YoImg() {

  return (
    <div>
      <div>
        <div className='relative w-96 h-96 bg-[#ffff] dark:bg-[#1F293E] z-0 rounded-[50%]  duration-200'></div>
        <img className='relative w-96 h-full z-10 bottom-96' src={YoNoFondo} alt="" />
      </div>
    </div>
  )
}

export default YoImg