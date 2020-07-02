import React, {Component} from 'react';
import {getDoctor} from './utils/APIUtils';
import AvailableTimetable from './AvailableTimetable';

class DoctorInfo extends Component{
    _isMounted = false;

    state = {
        data: Object,
        user: Object,
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this._isMounted = true;

        getDoctor(params.doctorId)
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        data: response,
                        user: response.user
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
        //todo timetalbe
        return (
            <div id="doctor-info-wraper">
                <h2>{this.state.data.title +" "+ this.state.data.specialization +" "+ this.state.data.name + " " + this.state.data.surname}</h2>
                <div>
                    <AvailableTimetable info={this.state.user.username}></AvailableTimetable>
                </div>
            </div>
        );
    }
}

export default DoctorInfo;
