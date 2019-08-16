import React from 'react'
import VoltageLogo from '../Resources/VoltageLogo'

export default function TopBar(props) {
    return (
        <div className='topbar'>
            <VoltageLogo />
            <div className='topbar_links'>
              <a href='#' className='topbar_link'>Give feedback</a>
              <button className='topbar_submit'>Suggest producer</button>
            </div>
        </div>
    )
}
