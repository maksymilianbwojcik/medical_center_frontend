import React, {Component} from "react";
import moment from "moment";

class SingleResult extends Component{
    render(props){
        return (
            <div>
                <div id="page">
                    <div id="box3">
                        <div className="title">

                            <p>
                                { this.props.info.doctorName } {this.props.info.doctorSurname}
                            </p>

                            <p>
                                { moment(this.props.info.date).format('MMMM - D - YYYY h:mm:ss') }
                            </p>

                            <p>
                                { this.props.info.result.text }
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleResult;