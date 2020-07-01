import React, {Component} from 'react';
import Question from './Question';
import {getQuestions, getAvailableTimetable} from './utils/APIUtils';

class AvailableTimetable extends Component{
    _isMounted = false;

    state = {
        timetable: Object,
    }

    componentDidMount() {
        this._isMounted = true;

        getAvailableTimetable(this.props.info.username)
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        timetable: response
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
        return (
            <div id="timetable-element-wraper">
                {/* {this.state.data.map(timetable =>
                <div>
                    <h3>Wizyta</h3>
                    <p>{timetable.time}</p>
                    //todo link to 
                </div>)} */}
            </div>
        );
    }
}

export default AvailableTimetable;
