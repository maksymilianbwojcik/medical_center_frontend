import React, {Component} from 'react';
import Question from './Question';
import {getQuestions} from './utils/APIUtils';

class Faq extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getQuestions()
            .then(response => {
                console.log(response);
                if(this._isMounted === true) {
                    this.setState({
                        data: response
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        console.log(this.state.data);
        return (
            <div id="page">
            <div id="faq-wrapper">
                <div><span className="arrow-down"></span></div>
                <div className="title"><h3>NAJCZĘŚCIEJ ZADAWANE PYTANIA</h3><br></br>
                <h5><strong>W tej sekcji znajdziesz najczęściej zadawane pytania przez naszych Pacjentów oraz odpowiedzi 
                    ułatwiające korzystanie z Naszych usług. Jeżeli nie znalazłeś tutaj odpowiedzi na swoje pytanie - skontaktuj się z nami!</strong></h5></div>
                <br></br>
                {this.state.data.map(question =>
                <Question info={question}/>)}
            </div>
            </div>
        );
    }
}

export default Faq;
