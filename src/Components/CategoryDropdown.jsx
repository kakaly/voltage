import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import DownArrow from '../Resources/DownArrow'

export default class CategoryDropdown extends Component {

    constructor(props) {
        super(props)
        this.dropdown = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    renderDropdownRequest = () => {
        // allows them to request new sub genre at the bottom of the dropdown 
        return (
            <React.Fragment>
              <a className='dropdown_suggest' href='https://forms.gle/1gnaDbqZLeQmGxoRA' target='blank'>
              <p className='dropdown_menu_item dropdown_menu_item-suggest'>Suggest a new genre</p>
              </a>
            </React.Fragment>
        )
    }

    

    renderDropdownOptions = () => {
        return (
        this.props.subGenres.map((subGenre, index) => {
                return (
                    <React.Fragment key={index}>
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

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if ((!domNode || !domNode.contains(event.target)) && this.props.menuOpen) {
            this.props.toggleMenuHandler()
        }
    }

    render() {
        return (
            <div ref={this.dropdown} className='dropdown'>
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
