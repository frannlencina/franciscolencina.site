import React from 'react'

import Curriculum from '/curriculum.pdf'

function DvButton() {
    return (
        <div className='hover:scale-105 transition duration-400'>
            <a
                className="cvButton flex items-center gap-2 px-5 py-4 rounded-xl bg-[#344FA0] font-medium text-white sm:px-6 sm:py-3 sm:rounded-lg "
                href={Curriculum} download
            >Descargar CV <i className="ri-file-download-line"></i>
            </a>

        </div>
    )
}

export default DvButton