import React, {Component} from 'react';


class TypedInLetters extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            answer: this.props.answer,
            answerLook: ""
        }
        this.changeLetterInAnswerLook = this.changeLetterInAnswerLook.bind(this);
    } 

    componentDidMount(){
        var helpfullString = "";
        for( var i = 0 ; i < this.state.answer.length ; i++ ){
           if(this.state.answer.charAt(i) === " "){
            helpfullString += " ";
           }
           else{
            helpfullString += "_";  
           }

        }
        this.setState({
            answerLook: helpfullString
        });
        
    }
    
    changeLetterInAnswerLook(){
        var helpfullString = this.state.answerLook;

        for( var i = 0 ; i < this.state.answerLook.length ; i++ )
            if(this.state.answer.charAt(i) === this.props.newCharacter)
             helpfullString = helpfullString.substr(0, i) + this.props.newCharacter + helpfullString.substr(i + 1 , this.state.answerLook.length);
        this.setState({
                answerLook: helpfullString
            });
    }

    componentWillReceiveProps(){
        this.changeLetterInAnswerLook()
    }

    render(){
        return(
            <p>{this.state.answerLook}</p>
        );
    }


}
export default TypedInLetters;