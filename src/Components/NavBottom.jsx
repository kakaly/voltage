import React from 'react'
// import About from '../Resources/about@3x.png'
// import Contact from '../Resources/contact@3x.png'
// import Feedback from '../Resources/send-feedback@3x.png'
// import SuggestProducer from '../Resources/suggest-producer@3x.png'

/**<img src={About} alt='About us' className="navBottom_item_image"></img> */

export default function NavBottom(props) {
    return (
       <div className="container bg">
        <div className='navBottom'>
           <div onClick={() => props.aboutClickHandler()} className='navBottom_item'>
              <h1>About us</h1>
           </div>
           <div className='navBottom_item'>
           <a href='https://docs.google.com/forms/d/e/1FAIpQLSdt32_ev-XhfjyNobLyRuISEvqYIXY1Hd12dUiCqxLRkY6gVQ/viewform' target='blank'>
           <h1 >Give feedback</h1>
           </a>
           </div>
           <div className='navBottom_item'>
              <h1>Contact us</h1>
           </div>
           
           <div className='navBottom_item'>
           <a href="https://forms.gle/3kqvaoAEH7hMw3qMA" target="blank">
           <h1>Suggest a producer</h1>
           </a>
           </div>
        </div>  
        </div>
    )
}
