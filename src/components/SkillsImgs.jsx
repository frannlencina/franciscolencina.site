import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'

import { Tooltip } from 'react-tooltip'

function SkillsImgs(props) {
    return (
        <div>
            <img className='hover:scale-110 w-24 md:w-48' id={`not-clickable-${props.name}`}  src={props.image} alt={props.name} />
            <Tooltip anchorSelect={`#not-clickable-${props.name}`}>
                {props.name}
            </Tooltip>
        </div>
    )
}

export default SkillsImgs