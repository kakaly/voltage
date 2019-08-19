import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import TopBar from '../Components/TopBar'
import AboveFoldText from '../Components/AboveFoldText'
import Results from '../Containers/Results'
import BottomLogo from '../Components/BottomLogo'
import NavBottom from '../Components/NavBottom'

const subGenres = [
    'Future bass',
    'Bass house'
   ]

class Homepage extends Component {
    constructor(props) {
        super(props)
        // it rerenders here when it shouldn't be
        this.state = {
            genreIndex: 0,
            menuOpen: false
        }
    }

    toggleMenuHandler = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    changeCategoryHandler = (index) => {
        this.setState({
            genreIndex: index,
            menuOpen: false
        })
    }

    componentDidMount() {
        const {genreIndex} = this.state
        const {genre} = this.props.match.params
        if (this.props.match.params && genre) {
            if (genre === 'future-bass' && genreIndex !== 0) {
                this.setState({genreIndex: 0})
            } else if (genre === 'bass-house' && genreIndex !== 1) {
                this.setState({genreIndex: 1})
                console.log(genre, 'in', this.state.genreIndex)
            }
        }
    }

    render() {
        console.log('render')
        return (
            <React.Fragment>
                <TopBar />
                <AboveFoldText />
                <Results 
                    changeCategoryHandler={this.changeCategoryHandler}
                    subGenres={subGenres}
                    genreIndex={this.state.genreIndex}
                    toggleMenuHandler={this.toggleMenuHandler} 
                    menuOpen={this.state.menuOpen} 
                    genre={subGenres[this.state.genreIndex]}
                />
                <NavBottom />
                <BottomLogo />
            </React.Fragment>
        )
    }
}

export default withRouter(Homepage)
