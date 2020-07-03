import React, {Component} from "react";
import {Moment} from 'react-moment';
class Timetable extends Component{

    render(props){
        return (
            <div id="faq-wraper">
                <div id="page">
                    <div id="box1">
                        <div className="title">
                            <h2> {this.props.info.timetable} </h2>
                            <p>SIEMA</p>
                            {console.log(this.props.info)}
                            <p className="answer"> {this.props.info.date}</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timetable;
