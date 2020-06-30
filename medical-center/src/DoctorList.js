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
            <div id="doctor-wraper">
                {this.state.data.map(username =>
                <a href={"http://localhost:3000/doctor/" + username}>{username}</a>)}
            </div>
        );
    }
}

export default DoctorList;
