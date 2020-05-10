import React, {Component} from 'react';

class Question extends Component{

    render(props){
        return (
        <div id="faq-wraper">
            <div id="page">
                <div id="box1">
                    <div className="title">
                        <h2> {this.props.info.question} </h2>
                        <p className="answer"> {this.props.info.answer}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Question;
