import React from 'react'
// import About from '../Resources/about@3x.png'
// import Contact from '../Resources/contact@3x.png'
// import Feedback from '../Resources/send-feedback@3x.png'
// import SuggestProducer from '../Resources/suggest-producer@3x.png'

/**<img src={About} alt='About us' className="navBottom_item_image"></img> */

export default function NavBottom() {
    return (
       <div className="container bg">
        <div className='navBottom'>
           <div className='navBottom_item'>
              <h1>About us</h1>
           </div>
           <div className='navBottom_item'>
           <h1>Send feedback</h1>
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
