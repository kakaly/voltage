import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import TopBar from '../Components/TopBar'
import AboveFoldText from '../Components/AboveFoldText'
import BottomLogo from '../Components/BottomLogo'
import NavBottom from '../Components/NavBottom'

class About extends Component {

    goHomeHandler = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <React.Fragment>
                <TopBar goHomeHandler={this.goHomeHandler}/>
                <AboveFoldText page={'About'}/>
                <NavBottom aboutClickHandler={() => {}}/>
                <BottomLogo goHomeHandler={this.goHomeHandler}/>
            </React.Fragment>
        )
    }
}

export default withRouter(About)
