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
            <div id="page">
                <h3 className="visit" >Wizyty</h3>
                <a href={'/results'} className="button">Moje wyniki</a><br></br>

                {this.state.data.map(timetable =>
                    <Timetable key={timetable.id} info={timetable} doctor={this.state.doctor}/>)}
            </div>
        );
    }
}

export default UserTimetable;
