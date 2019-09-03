import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';

export default class Producers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    renderProducers = () => {
        return this.props.producers.map((producer, index) => {
            return (
                <div key={index} className='producers_card'>
                  <div className='producers_card_photo'><img className='producers_card_photo-image' src={producer.image} alt={producer.name} /></div>
                  <div className='producers_card_content'> 
                  <p className='producers_card_content_text'>{producer.desc}</p>
                    <a href={producer.link} className='producers_card_content_link'>Listen to {producer.name}</a>
                  </div>
                </div>
            )
        })
        
    }

    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    subscribe = (e) => {
        e.preventDefault()
        var body = { "email" : this.state.email }
        const api = "https://us-central1-imfreefyi.cloudfunctions.net/voltage_api/append"
        fetch(api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            },
          }).then(function(response) {
            return "OK"
          }).then(function() {
            console.log('Posted email:', body.email)
          }).catch(error => {
            console.log(error)
          })
    }

    renderEmailInput = () => {
        return (
            <div className='emailCTA'>
            <p className='emailCTA_text'>Love Future Bass? Join our monthly future bass email list to find out about favorite new future bass tracks</p>
            <div className='emailCTA_input'>
            <input className='emailCTA_input_form' type='text' placeholder='Email' onChange={this.handleChange}></input>
            <button className='emailCTA_input_button' onClick={this.subscribe} >Subscribe</button>
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
