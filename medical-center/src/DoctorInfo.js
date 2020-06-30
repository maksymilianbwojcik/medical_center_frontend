import React, {Component} from 'react';
import {getDoctor} from './utils/APIUtils';

class DoctorInfo extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getDoctor()
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
        return (
            <div id="doctor-wraper">
                <br></br>
                {this.state.data.map(username =>
                <a href={"http://localhost:3000/doctor/" + username}>{username}</a>)}
                <br></br>
            </div>
        );
    }
}

export default DoctorInfo;
