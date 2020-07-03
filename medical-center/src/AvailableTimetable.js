import React, {Component} from 'react';
import {getAvailableTimetable, reserveAppointment} from './utils/APIUtils';
import { formatDate } from './utils/Helpers';

class AvailableTimetable extends Component{
    constructor(props){
        super(props)
        this.state = {
            timetable: [],
            canRender: false
        }
        console.log(this.props.info);
    }
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;

        getAvailableTimetable(this.props.info)
        .then(response => {
            if(this._isMounted === true) {
                this.setState({
                    timetable: response
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
        if(this.state.canRender){
			return (
				<div className="timetable-element-wraper">
					{this.state.timetable.map(timetable =>
					<div className="timetable-element">
						<h3>Wizyta</h3>
						<p>{formatDate(timetable.date)}</p>
						<button className="timetable-element-button" onClick={() => {reserveAppointment(this.timetable.id); window.location.reload(false)}}>Umów się na wizytę</button>
					</div>)}
				</div>
            )
        }
        else{
            return (
                <h2>Brak wizyt!</h2>
            )
        }
	}
}

export default AvailableTimetable;
