import React, {Component} from 'react';
import { getUserTimetable } from './utils/APIUtils';
import Timetable from "./Timetable";

class UserTimetable extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            doctor: props.doctor
        }
    }
    _isMounted = false;

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
        console.log(this.state.doctor);
        return (
            <div id="page">
                {this.state.doctor != true && (
                    <span><a href={'/results'} className="button">Moje wyniki</a><br></br></span>
                )}
                <h3 className="visit" >Wizyty</h3>
                
                {this.state.doctor == true && (
                    <span><a href={'/results'} className="button">Wystawione wyniki</a><br></br></span>
                )}

                {this.state.data.map(timetable =>
                    <Timetable key={timetable.id} info={timetable} doctor={this.state.doctor}/>)}
            </div>
        );
    }
}

export default UserTimetable;
