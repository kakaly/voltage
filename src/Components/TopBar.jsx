import React from 'react'
import VoltageLogo from '../Resources/VoltageLogo'

export default function TopBar(props) {
    return (
        <div className="container">
        <div className='topbar'>
            <VoltageLogo />
            <div className='topbar_links'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdt32_ev-XhfjyNobLyRuISEvqYIXY1Hd12dUiCqxLRkY6gVQ/viewform' target='blank' className='topbar_link'>Give feedback</a>
              <a href="https://forms.gle/bRW7xogpKoFZE9nr5" target='blank'>
              <button className='topbar_submit'>Suggest producer</button>
              </a>
            </div>
        </div>
        </div>
    )
}
