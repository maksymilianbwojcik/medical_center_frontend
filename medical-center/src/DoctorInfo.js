import React, {Component} from 'react';
import {getDoctor} from './utils/APIUtils';
import AvailableTimetable from './AvailableTimetable';

class DoctorInfo extends Component{
    _isMounted = false;

    state = {
        data: Object,
        user: Object,
        canRender: false
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
        this.setState({canRender: true});
        
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        //todo timetalbe!!!!!
        if (this.state.canRender){
            return (
            <div id="page">
                <div id="doctor-info-wrapper">
                 <div><span className="arrow-down"></span></div>
                 <br></br><br></br><br></br>
                 <div id="box1"><span><img className= "doctor-info-img" src="images/img_avatar.png" alt="" height="auto" width="auto"/></span></div>
                    <h1>{this.state.data.title}</h1><h2>{this.state.data.name + " " + this.state.data.surname}<br></br><span className="byline">{ this.state.data.specialization}</span></h2>
                    <hr class="new1"></hr>
                    <br></br><br></br>
                    <h3>Kalendarz przyjęć</h3>
                    <div>
                        <AvailableTimetable info={this.state.user.username}></AvailableTimetable>
                    </div>
                    <br></br><br></br>
                    <hr class="new1"></hr>    
                </div>
                </div>
            );
        }
        else{
            return (
                <div id="doctor-info-wraper">
                    <p>Brak danych o doktorze</p>
                </div>
            );
        }
    }
}


export default DoctorInfo;
