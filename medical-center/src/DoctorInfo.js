import React, {Component} from 'react';
import {getDoctor} from './utils/APIUtils';
import AvailableTimetable from './AvailableTimetable';

class DoctorInfo extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this._isMounted = true;

        getDoctor(params.doctorId)
            .then(response => {
                //console.log(response);
                if(this._isMounted === true) {
                    this.setState({
                        data: response
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });

        //todo getAvailableTimetalbe
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        //todo timetalbe
        return (
            <div id="doctor-info-wraper">
                <h2>{this.state.data.titles +" "+ this.state.data.specialization +" "+ this.state.data.name + " " + this.state.data.surname}</h2>
                <AvailableTimetable></AvailableTimetable>
            </div>
        );
    }
}

export default DoctorInfo;
