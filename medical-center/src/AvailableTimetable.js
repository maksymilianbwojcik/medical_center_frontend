import React, {Component} from 'react';
import {getAvailableTimetable, reserveAppointment} from './utils/APIUtils';
import { formatDate } from './utils/Helpers';
import Moment from 'react-moment';

class AvailableTimetable extends Component{
    constructor(props){
        super(props)
        this.state = {
            timetable: [],
            canRender: false
        }
    }
    _isMounted = false;
    count = 0;

    componentDidMount() {
        this._isMounted = true;

        // getAvailableTimetable(this.props.info)
        // .then(response => {
        //     if(this._isMounted === true) {
        //         this.setState({
        //             timetable: response
        //         });
        //     }
        // })
        // .catch(error => {
        //     console.log(error);
        // });

        // this.setState({canRender: true});
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
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
        this.count ++;

        if (this.count == 2) {
            this._isMounted = false;
            this.setState({canRender: true});
        }
    }

    render(){
        if(this.state.canRender){
			return (
				<div className="timetable-element-wraper">
					{this.state.timetable.map(timetable =>
					<div key={timetable.id} className="timetable-element">
						<h3>Wizyta</h3>
						<p><Moment>{timetable.date}</Moment></p>
						<button className="timetable-element-button" onClick={() => {reserveAppointment(timetable.id);window.location.reload(false)}}>Umów się na wizytę</button>
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
