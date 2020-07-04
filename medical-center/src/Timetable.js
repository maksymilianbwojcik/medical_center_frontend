import React, {Component} from "react";
import {Moment} from 'react-moment';
class Timetable extends Component{

    render(props){
        //console.log(this.props.info.date)
        return (
            <div id="faq-wraper">
                            <p className="answer"> {this.props.info.date}</p>
                            {/* <Moment format="DD.MM.YYYY HH:mm">{this.props.info.date}</Moment> */}
            </div>
        );
    }
}

export default Timetable;
