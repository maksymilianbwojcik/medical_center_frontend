import React, {Component} from 'react';
import {getAvailableTimetable} from './utils/APIUtils';

class AvailableTimetable extends Component{
    constructor(props){
        super(props)
        this.state = {
            timetable: Object,
        }
    }
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate(){
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

        this._isMounted = false;
    }

    render(){
        console.log(this.state.timetable);
        return (
            <div id="timetable-element-wraper">
                {/* {this.state.data.map(timetable =>
                <div>
                    <h3>Wizyta</h3>
                    <p>{timetable.time}</p>
                    //todo link to 
                </div>)} */}
            </div>
        )
    }
}

export default AvailableTimetable;
