import React, {Component} from 'react';
import {getAllDoctors} from './utils/APIUtils';

class DoctorList extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getAllDoctors()
            .then(response => {
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
        return (
            <div id="doctor-wraper">
                {this.state.data.map(resp =>
                <span><a key={resp.id} href={"http://localhost:3000/doctor/" + resp.id}>{resp.title +" "+ resp.specialization +" "+ resp.name + " " + resp.surname}</a> <br></br></span>)}
            </div>
        );
    }
}

export default DoctorList;
