import React, {Component} from 'react';
import Question from "./Question";
import { getUserTimetable } from './utils/APIUtils';
import Timetable from "./Timetable";

class UserTimetable extends Component{
    _isMounted = false;

    state = {
            data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getUserTimetable()
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
            <div>
                <h3>Wizyty</h3>
                {this.state.data.map(timetable =>
                    <Timetable info={timetable}/>)}
            </div>
        );
    }
}

export default UserTimetable;
