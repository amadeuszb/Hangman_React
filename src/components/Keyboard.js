import React, {Component} from 'react'
import './Keyboard.css'
import './SingleCharacterButton.css';
import TypedInLetters from './TypedInLetters'

class Keyboard extends Component{
    constructor(){
        super();

        this.fullfillTableOfCharacters = this.fullfillTableOfCharacters.bind(this);
        this.fullfillTableOfButtons = this.fullfillTableOfButtons.bind(this);
        this.createButton = this.createButton.bind(this);
        this.onPressedKey = this.onPressedKey.bind(this);
        const helpfullTable = this.fullfillTableOfCharacters();

        this.state = {
            tableOfCharacters: this.fullfillTableOfCharacters(),
            tableOfButtons: this.fullfillTableOfButtons(helpfullTable),
            pressedKey: ""
        }
    }

    fullfillTableOfCharacters(){
        var helpfullTable = new Array(34);
        for( var i = 0; i < 27 ; i++ ){
            helpfullTable[i] = String.fromCharCode(65+i);
        }
        helpfullTable[26] = "Ą";
        helpfullTable[27] = "Ć";
        helpfullTable[28] = "Ę";
        helpfullTable[29] = "Ł";
        helpfullTable[30] = "Ń";
        helpfullTable[31] = "Ó";
        helpfullTable[32] = "Ś";
        helpfullTable[33] = "Ż";
        helpfullTable[34] = "Ź";

        return helpfullTable;
    }

    fullfillTableOfButtons(tableOfCharacters){
        var helpfullTable = new Array(34);
        for( var i = 0; i < 35 ; i++ ){
            helpfullTable[i] = this.createButton(tableOfCharacters[i])
        }
        return helpfullTable;
    }

    onPressedKey(characterPressed){
        this.setState({
            pressedKey: characterPressed
        })
    }

    createButton(myCharacter, myKey){
        const singleButton = <button onClick={() => this.onPressedKey(myCharacter)} className="Single-character-button">{myCharacter}</button>
        return singleButton;
    }

    randSomeText(){
        const someAnswers = ["Siała Baba Mak", "Nie wiedziała jak", "Dziadek wiedział nie powiedział", "A to było tak heh"];
        return someAnswers[Math.floor(Math.random()*4)]

    }

    render(){
        return(
            <div>
            <div className="Keyboard">
               {this.state.tableOfButtons}
            </div>
            <div className="Answer">
            <TypedInLetters answer={this.randSomeText().toUpperCase()} newCharacter={this.state.pressedKey}/>
            </div>
            </div>
        );
    }

}



export default Keyboard