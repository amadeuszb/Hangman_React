import React, {Component} from 'react'
import SingleCharacterButton from './SingleCharacterButton'
import './Keyboard.css'

class Keyboard extends Component{
    constructor(){
        super();

        this.fullfillTableOfCharacters = this.fullfillTableOfCharacters.bind(this);
        this.fullfillTableOfButtons = this.fullfillTableOfButtons.bind(this);
        this.createButton = this.createButton.bind(this);
        
        const helpfullTable = this.fullfillTableOfCharacters();

        this.state = {
            tableOfCharacters: this.fullfillTableOfCharacters(),
            tableOfButtons: this.fullfillTableOfButtons(helpfullTable)
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

    createButton(myCharacter){
        const singleButton = <SingleCharacterButton character={myCharacter}/>//this.state.tableOfCharacters[number]}/>
        return singleButton;
    }

    render(){
        return(
            <div className="Keyboard">
               {this.state.tableOfButtons}
            </div>
        );
    }

}
    

export default Keyboard