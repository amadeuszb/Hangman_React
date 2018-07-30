import React, {Component} from 'react'
import './Keyboard.css'



export default class CounterOfAnswers extends Component{
    
    constructor(props){
        super(props);
        this.isCorrect = this.isCorrect.bind(this);
        this.isGivenEalier = this.isGivenEalier.bind(this);
        this.state = {
            amountOfCorrectAnswers: -1,
            amountOfIncorrectAnswers: -1,
            givenCharacters: ''
        }
    }


    isGivenEalier(nextCharacter){
        for(var i = 0; i < this.state.givenCharacters.length; i++){
            if(this.state.givenCharacters.charAt(i) === nextCharacter) return false;
        }
        var helpfullString = this.state.givenCharacters + nextCharacter;
        this.setState({
            givenCharacters: helpfullString
        })
        return true
    }

    isCorrect(nextCharacter){
        for(var i = 0; i < this.props.correctString.length; i++){
            if(this.props.correctString.charAt(i) === nextCharacter && this.isGivenEalier(nextCharacter)) 
            return true;
        }
        return false;
    }

    componentWillReceiveProps(nextProps){
        if(this.isCorrect(nextProps.typedCharacter)){
            this.setState({
                amountOfCorrectAnswers: this.state.amountOfCorrectAnswers + 1
            })
        }
        else{
            this.setState({
                amountOfIncorrectAnswers: this.state.amountOfIncorrectAnswers + 1
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.amountOfIncorrectAnswers}
            </div>
        )
    }

}