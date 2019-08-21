import React, { Component } from 'react'
import CategoryDropdown from '../Components/CategoryDropdown'
import Producers from '../Components/Producers'
import Data from '../Resources/Data'

export default class Results extends Component {

    getProducersArray = () => {
        switch(this.props.genre) {
            case 'Future bass':
                return Data.futureBass
            case 'Bass house':
                return Data.bassHouse
            default: 
               return Data.futureBass
        }
    }

    render() {
        return (
            <div className='results'>
              <CategoryDropdown changeCategoryHandler={this.props.changeCategoryHandler}
              subGenres={this.props.subGenres}
              genreIndex={this.props.genreIndex}
              toggleMenuHandler={this.props.toggleMenuHandler} 
              menuOpen={this.props.menuOpen} />
              <Producers producers={this.getProducersArray()}/>
            </div>
        )
    }
}
