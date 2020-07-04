import React, {Component} from "react";
import {Moment} from 'react-moment';
import 'moment/locale/pl';
import moment from "moment";
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

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timetable;
