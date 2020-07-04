import React, {Component} from 'react';

class Question extends Component{

    render(props){
        return (       
        <div id="page">
            <div className="title">
                <div id="question-wrapper">
                        <div className="quest">{this.props.info.id+ ". "+ this.props.info.question} </div> 
                        <p className="answer"> {this.props.info.answer}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Question;
