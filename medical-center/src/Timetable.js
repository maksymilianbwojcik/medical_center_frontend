import React, {Component} from "react";
import 'moment/locale/pl';
import moment from "moment";
import {removeAppointment, reserveAppointment} from "./utils/APIUtils";

class Timetable extends Component{
    render(props){
        return (
            <div>
                <div id="page">
                    <div id="box1">
                        <div className="title">
                            <p>
                                {  moment(this.props.info.date).format('MMMM - D - YYYY h:mm:ss') }
                            </p>

                            <button onClick={() => {removeAppointment(this.props.info.id); window.location.reload(false)}}>Usuń wizytę</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timetable;
