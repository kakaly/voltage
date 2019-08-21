import React from 'react'
import VoltageLogoWhite from 'Resources/VoltageLogoWhite'

export default function BottomLogo(props) {
    return (
        <div className='bottomLogo'>
            <VoltageLogoWhite goHomeHandler={props.goHomeHandler}/>
        </div>
    )
}
