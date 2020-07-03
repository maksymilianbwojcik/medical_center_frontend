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
            <div id="page"><div className="title"><br></br><h2>Nasi lekarze</h2>
            <div className="title"></div><span className="byline">Kliknij na pozycję z listy, aby umówić się na wizytę z wybranym lekarzem:</span><br></br><br></br></div>
                <div id="doctor-wrapper">
                <div><span className="arrow-down"></span></div>
                <br></br>
                    {this.state.data.map(resp =>
                <span><img className= "doctor-img" src="images/img_avatar.png" alt="" height="auto" width="auto" />
                <a key={resp.id} href={"http://localhost:3000/doctor/"+ resp.id}>{resp.title +" "+ resp.name + " " + resp.surname}</a><span className="byline">{resp.specialization }</span></span>)}
                </div>
            </div>
        );
    }
}

export default DoctorList;
