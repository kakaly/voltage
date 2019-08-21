import React, {Component} from 'react'

export default class AboveFoldText extends Component {
    renderSubHeader = () => {
        if (this.props.page === 'About') {
            return (
                <p className='aboveFold_request padBottom'>Voltage is changing the way we discover new electronic music.</p>
            )
        } else {
            return (<p className='aboveFold_request'>Think this list is missing someone? <a href="https://forms.gle/3kqvaoAEH7hMw3qMA" target="blank"><span className='aboveFold_request_span'>Let us know.</span></a></p>)
        }
    }

    render() {
        return (
            <div className='aboveFold'>
                <h1>{this.props.page && this.props.page === 'About' ? "The days of spending hours browsing Soundcloud are over. " : "Find your new favorite electronic music producer."}</h1>
                {this.renderSubHeader()}
            </div>
        )
    }
}