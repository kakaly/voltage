import React, { Component } from 'react'
import DownArrow from '../Resources/DownArrow'

// const subGenres = [
//     'Future bass',
//     'Bass house'
//    ]


export default class CategoryDropdown extends Component {

    renderDropdownRequest = () => {
        // allows them to request new sub genre at the bottom of the dropdown 
        return (
            <React.Fragment>
              <p className='dropdown_menu_item dropdown_menu_item-suggest'>Suggest a new genre</p>
            </React.Fragment>
        )
    }

    

    renderDropdownOptions = () => {
        return (
        this.props.subGenres.map((subGenre, index) => {
                return (
                    <React.Fragment>
                    <p className='dropdown_menu_item' onClick={() => this.props.changeCategoryHandler(index)}>{subGenre}</p>
                    <div className='dropdown_menu_line'></div>
                    {index === this.props.subGenres.length - 1 && this.renderDropdownRequest(index)}
                    </React.Fragment>
                )
        })
        )
    }

    renderDropdownMenu = () => {
        return (
            <div className='dropdown_menu'>
              {this.renderDropdownOptions()} 
            </div>
        )
    }

    render() {
        return (
            <div className='dropdown'>
                <div className='dropdown_input' onClick={() => this.props.toggleMenuHandler()}>
                  <p className='dropdown_selected'>{this.props.subGenres[this.props.genreIndex]}</p>
                  <div className={`dropdown_arrow ${this.props.menuOpen ? 'dropdown_arrow_open' :  'dropdown_arrow_closed'}`}>
                  <DownArrow />
                  </div> 
                </div>
                {this.props.menuOpen && this.renderDropdownMenu()}
            </div>
        )
    }
}
