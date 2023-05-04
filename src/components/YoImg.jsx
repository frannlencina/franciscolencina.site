import React, { useEffect, useState } from 'react'

function YoImg() {

    const imgDark = 'https://res.cloudinary.com/dctldwa03/image/upload/v1683223243/yo-dark_vflhki.png';
    const imgLight = 'https://res.cloudinary.com/dctldwa03/image/upload/q_auto:good/v1678214385/Logo3_qjp3au.png';
    
    const [ darkValue, setDarkValue ] = useState(false);

    useEffect(() => {
        const savedValue = localStorage.getItem('isDarkMode');
        if (savedValue !== null) {
          setDarkValue(JSON.parse(savedValue));
        }
      }, []);

    return (
        <div>
            {
               darkValue ? <img className='w-96 h-full' src={imgDark} alt="" /> : <img className='w-96 h-full' src={imgLight} alt="" />
            }
        </div>
    )
}

export default YoImg