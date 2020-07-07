import React, {Component} from 'react';
import { getUserTimetable } from './utils/APIUtils';
import Timetable from "./Timetable";

class UserTimetable extends Component{
    _isMounted = false;

    state = {
        data: [],
        doctor: this.props.doctor
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
                <a href={'/results'}>Moje wyniki</a>

                {this.state.data.map(timetable =>
                    <Timetable key={timetable.id} info={timetable} doctor={this.state.doctor}/>)}
            </div>
        );
    }
}

export default UserTimetable;
