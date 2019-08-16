import React, { Component } from 'react'
import CategoryDropdown from '../Components/CategoryDropdown'
import Producers from '../Components/Producers'

const futureBass = ['Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.', 'Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.', 'Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.', 'Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.', 'Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.', 'Simon White, better known as Duskus is a British, London-based electronic music producer and DJ. He is known for his cute sound and formant shifted vocal processing.' ]

const bassHouse = ['With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.', 'With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.', 'With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.', 'With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.', 'With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.', 'With an eclectic mix of influences, Born Dirty has created a signature hybrid sound resting on a solid backbone of Hip-Hop, House and Techno.']

export default class Results extends Component {

    getProducersArray = () => {
        switch(this.props.genre) {
            case 'Future bass':
                return futureBass
            case 'Bass house':
                return bassHouse
            default: 
               return futureBass
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
