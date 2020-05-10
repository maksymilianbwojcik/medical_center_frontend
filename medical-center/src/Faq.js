import React, {Component} from 'react';
import Question from './Question';

class Faq extends Component{

    state = {
        data: []
    }

    // async componentDidMount(){
    //     const url = "http://localhost:8080/api/faq/all";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState({data});
    // }

    componentDidMount() {
        fetch("http://localhost:8080/api/faq/all")
        .then(response => response.json())
        .then(data => this.setState({data}));
        console.log(this.setState.data);
    }

    render(){
        return (
        <div id="faq-wraper">
            {this.state.data.map(question => 
                <Question info={question}/>)}
        </div>
        );
    }
}

export default Faq;
