import React, {Component} from 'react';
import {getAllDoctors} from './utils/APIUtils';

class DoctorList extends Component{
    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getAllDoctors()
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        data: response
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        //todo dont show if not client
        return (
            <div id="page">
                <div id="faq-wrapper">
                <div><span className="arrow-down"></span></div></div>
                <div className="title">
                    <br></br>
                    <h2>Nasi lekarze</h2>

            <span className="byline">Zespół MediShield tworzą osoby z wysokimi kwalifikacjami w swojej dziedzinie i ponadprzeciętnym zaangażowaniem w pracę. Codziennie spotykamy się z ludźmi, którzy cierpią i nasze kontakty z nimi opierają się na słuchaniu i rozumieniu. Wkładamy w naszą pracę wiedzę, doświadczenie i serce.</span><br></br><br></br><span className="byline"><strong>Kliknij na pozycję z listy, aby umówić się na wizytę z wybranym lekarzem:</strong></span><br></br><br></br>
            </div>
                <div id="doctor-wrapper">
                <div><span className="arrow-down"></span></div>
                <br></br>
                    {this.state.data.map(resp =>
                <span key={resp.id}><img className= "doctor-img" src="images/img_avatar.png" alt="" height="auto" width="auto" />
                <a href={"http://localhost:3000/doctor/"+ resp.id}>{resp.title +" "+ resp.name + " " + resp.surname}</a><span className="byline">{resp.specialization }</span></span>)}
                </div>

            </div>
        );
    }
}

export default DoctorList;
