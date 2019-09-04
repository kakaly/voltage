import React, { Component } from 'react'

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Producers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            registered: false,
            emailError: false
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
        var genre = this.props.genre
        console.log(genre)
        var api = "https://us-central1-imfreefyi.cloudfunctions.net/voltage/"
        var route = genre === "Future bass" ? 'appendFutureBass' : 'appendBassHouse'
        api = api + route
        console.log(regexp.test(this.state.email))
        if (regexp.test(this.state.email)) {
          fetch(api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            },
          }).then(function(response) {
            return "OK"
          }).then(() => {
            console.log('registered')
            this.setState({registered: true})
          }).catch((error) => {
            console.log(error)
            this.setState({registered: true, emailError: true})
          })
        }
    }

    renderSignupSuccessText = () => {
      const {emailError} = this.state;
      const {genre} = this.props
      if (emailError) {
        return (
          `Thanks for signing up to the mailing list! Stay tuned for more ${genre}.`
        )
      } else {
        return ('Sorry, we encountered an error processing your email. Please refresh and try again. If this problem persists, please let us know using the send feedback form.')
      }
    }

    renderEmailInput = () => {
        const {registered} = this.state;
        const {genre} = this.props
        return (
            <div className='emailCTA'>
            <p className='emailCTA_text'>{registered ? `Thanks for signing up to the mailing list! Stay tuned for more ${genre}.` : `Love ${genre}? Join our monthly future bass email list to find out about favorite new future bass tracks`}</p>
            {!registered && <div className='emailCTA_input'>
            <input className='emailCTA_input_form' type='text' placeholder='Email' onChange={this.handleChange}></input>
            <button className='emailCTA_input_button' onClick={this.subscribe}>Subscribe</button>
            </div>}
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
