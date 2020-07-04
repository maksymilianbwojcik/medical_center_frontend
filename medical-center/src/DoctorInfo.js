import React, {Component} from 'react';
import {getDoctor} from './utils/APIUtils';
import AvailableTimetable from './AvailableTimetable';

class DoctorInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: Object,
            user: Object,
            canRender: false,
            client: props.client,
            doctor: props.doctor,
        }
    }
    _isMounted = false;

    componentDidMount() {
        const {match: {params}} = this.props;
        this._isMounted = true;

        getDoctor(params.doctorId)
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        data: response,
                        user: response.user
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
        //todo timetable!!!!!, dont show if not auth availabletimetable
        if (this.state.canRender){
            return (
            <div id="page">
                <div id="doctor-info-wrapper">
                 <div><span className="arrow-down"/></div>
                 <br/><br/>
                 <div id="box1"><span><img className= "doctor-info-img" src="images/img_avatar.png" alt="" height="auto" width="auto"/></span></div>
                    <h1>{this.state.data.title}</h1><h2>{this.state.data.name + " " + this.state.data.surname}<br/><span className="byline">{ this.state.data.specialization}</span></h2>
                    <hr className="new1"/>
                    <br/>
                    <h4>Aby umówić się na wizytę z naszym specjalistą, upewnij się, że jesteś zarejestrowany oraz zalogowany w naszym systemie. Poniżej znajdziesz dostępne terminy, w jakich przyjmuje wybrany specjalista. <br/> Aby zarezerwować wybrany termin - kliknij na jedną z poniższych pozycji:</h4>
                    { this.state.client == true && (
                        <div>
                            <AvailableTimetable info={this.state.user.username}/>
                        </div> 
                    )}
                </div>
                </div>
            );
        }
        else{
            return (
                <div id="doctor-info-wraper">
                    <p>Brak danych o doktorze</p>
                </div>
            );
        }
    }
}


export default DoctorInfo;
