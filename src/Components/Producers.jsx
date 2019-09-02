import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';

export default class Producers extends Component {
    renderProducers = () => {
        return this.props.producers.map((producer, index) => {
            return (
                <div key={index} className='producers_card'>
                  <div className='producers_card_photo'></div>
                  <div className='producers_card_content'> 
                  <p className='producers_card_content_text'>{producer.desc}</p>
                    <a href={producer.link} className='producers_card_content_link'>Listen to {producer.name}</a>
                  </div>
                </div>
            )
        })
        
    }

    renderEmailInput = () => {
        return (
            <div className='emailCTA'>
            <p className='emailCTA_text'>Love Future Bass? Join our monthly future bass email list to find out about favorite new future bass tracks</p>
            <div className='emailCTA_input'>
            <input className='emailCTA_input_form' type='text' placeholder='Email'></input>
            <button className='emailCTA_input_button' >Subscribe</button>
            </div>
            </div>
        )
     
    }

    render() {
        return (
            <div className='containProdEmail'>
            <div className='producers'>
                {this.renderProducers()}
            </div>
            {this.renderEmailInput()}
            </div>
        )
    }
}
