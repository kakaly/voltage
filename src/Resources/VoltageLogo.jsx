import React from 'react'
import Logo from './voltage-logo.png'


export default function VoltageLogo(props) {
    return (
        <div className='logo' onClick={() => props.goHomeHandler()}>
        <img className='logo_image' src={Logo} alt='VOLTAGE'/>
        </div>
    )
}

