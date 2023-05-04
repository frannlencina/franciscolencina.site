import { useState, useEffect } from 'react'

function ToggleDarkBtn() {

    const [ darkValue, setDarkValue ] = useState(false);
    
    const toggleDarkMode = () => {
        const newValue = !darkValue;
        setDarkValue(newValue);
        localStorage.setItem('isDarkMode', newValue);
        setTimeout(function(){
          location.reload()
      }, 500);
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
    <div>
        <button className='text-2xl hover:text-[var(--blue)] duration-200' aria-label='Dark Mode Button' onClick={toggleDarkMode} >{darkValue ? <i className="ri-moon-line hover:text-[var(--blue)]"></i> : <i className="ri-sun-line"></i> }</button>
    </div>
  )
}

export default ToggleDarkBtn