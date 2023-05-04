import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function ImageTooltip({ name, image }) {

    return (
        <Tippy content={name}>
            <img className='hover:scale-105  w-20 md:w-full' src={image} alt={name} />
        </Tippy>
    )
}

export default ImageTooltip