import { useState, useEffect } from 'react'

function ToggleDarkBtn() {

    const [ darkValue, setDarkValue ] = useState(false);

    const toggleDarkMode = () => {
        const newValue = !darkValue;
        setDarkValue(newValue);
        localStorage.setItem('isDarkMode', newValue);
      };
    
      useEffect(() => {
        const savedValue = localStorage.getItem('isDarkMode');
        if (savedValue !== null) {
          setDarkValue(JSON.parse(savedValue));
        }
      }, []);

    useEffect(() => {
        if (darkValue) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkValue]);

  return (
    <div className=''>
        <button className='text-2xl hover:text-[var(--blue)] duration-200 ' onClick={toggleDarkMode} >{darkValue ? <i class="ri-moon-line"></i> : <i class="ri-sun-line"></i> }</button>
    </div>
  )
}

export default ToggleDarkBtn