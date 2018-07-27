import React, {Component} from 'react';
import './SingleCharacterButton.css';

class SingleCharacterButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            myCharacter: this.props.character
        }
        this.returnMyCharacter = this.returnMyCharacter.bind(this);
    }

    returnMyCharacter(){
        console.log(this.state.myCharacter);
        return this.state.myCharacter;
    }
    render(){
        return(
            <button onClick={this.returnMyCharacter} className="Single-character-button">{this.state.myCharacter}</button>
        );
    }
    
}
export default SingleCharacterButton;