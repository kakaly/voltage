import React, { Component } from 'react'
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

    render() {
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

export default Homepage
