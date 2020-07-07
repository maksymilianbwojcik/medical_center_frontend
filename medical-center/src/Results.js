import React, {Component} from "react";
import {getAllResults} from "./utils/APIUtils";
import SingleResult from "./SingleResult";

class Result extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getAllResults()
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
        console.log(this.state.data)
        return (
            <div id={'page'}>
                <h3 className={'visit'}>Wszystkie wyniki</h3>

                {this.state.data.map(result =>
                    <SingleResult info={result}/>)}
            </div>
        );
    }
}

export default Result;