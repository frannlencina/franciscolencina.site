import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function ImageTooltip(props) {

    return (
        <Tippy content={props.name}>
            <img className='hover:scale-105  w-20 md:w-full' src={props.image} alt={props.name} />
        </Tippy>
    )
}

export default ImageTooltip