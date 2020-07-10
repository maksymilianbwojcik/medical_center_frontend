import React, {Component} from "react";
import 'moment/locale/pl';
import moment from "moment";
import {removeAppointment, addResult} from "./utils/APIUtils";

class Timetable extends Component{
    constructor(props){
        super(props)

        this.state ={
            reasultText: "",
            doctor: props.doctor
        }
    }
    render(props){
        console.log(this.state.doctor);
        return (
            <div>
                <div id="page">
                    <div id="box3">
                        <div className="title">
                            <p>
                                {  moment(this.props.info.date).format('MMMM - D - YYYY h:mm:ss') }
                            </p>
                            <button onClick={() => {removeAppointment(this.props.info.id); window.location.reload(false)}}>Usuń wizytę</button>
                            { this.state.doctor == true && (
                            <div>
                                <textarea cols="68" onChange={event => {this.setState({reasultText: event.target.value})}}></textarea>
                                <button onClick={() => {addResult(this.state.reasultText,this.props.info.id)}}>Dodaj wynik</button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timetable;
