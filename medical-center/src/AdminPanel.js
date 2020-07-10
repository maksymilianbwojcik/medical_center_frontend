import React, {Component} from 'react';
import {getAllClients, addDoctor, addAppointment, getAllDoctors} from './utils/APIUtils';
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList'
import DateTimePicker from 'react-datetime-picker';


class AdminPanel extends Component{
    _isMounted = false;

    state = {
        client: [],
        doctor: []
    }

    componentDidMount() {
        this._isMounted = true;

        getAllClients()
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        client: response,
                    });
                }
            })
            .catch(error => {
                console.log(error);
        });

        getAllDoctors()
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        doctor: response,
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

    // submitDoctor(){
    //     addDoctor(userId, name, surname, specialization, title)
    // }

    render(){
        let doctorName;
        let doctorSurname;
        let doctorTitle;
        let doctorSecialization;
        let selectedUserId;
        let selectedDoctorId;

        let startDate;
        let endDate;

        const client = this.state.client;
        const firstClientId = client.map(c => {
                return c.id
        });

        const doctor = this.state.doctor;
        const firstDoctorId = doctor.map(d => {
            return d.id
        });
        console.log(doctor[0]);
        return (
            <div id="admin-panel-wraper">
              <div><span className="arrow-down"/></div>
              <h2 className="title">Dodaj lekarza</h2>
                <form  onSubmit={() => {addDoctor(selectedUserId, doctorName, doctorSurname, doctorSecialization, doctorTitle); window.location.reload(false)}}>
                    <DropdownList className="list"
                        data={client}
                        valueField='id'
                        textField={'name'}
                        defaultValue={firstClientId[0]}
                        required
                        onChange={value => {selectedUserId = value.user.id}}
                    />
                    <input placeholder="Imię" name="docname" required onChange={(event) => {doctorName = event.target.value}}></input>
                    <br></br>
                    <input placeholder="Nazwisko" name="docsurname" required onChange={(event) => {doctorSurname = event.target.value}}></input>
                    <br></br>
                    <input placeholder="Specjaliazacja" name="specialization" required onChange={(event) => {doctorSecialization = event.target.value}}></input>
                    <br></br>
                    <input placeholder="Tytuły" required onChange={(event) => {doctorTitle= event.target.value}}></input>
                    <br></br>
                    <input className="button" type="submit" value="Stwórz lekarza"></input>
                </form>
                <div class="add-appointment-wrapper">
                    <br/>
                    <h2 className="title1">Cykliczne dodawanie wizyty</h2>
                    <DropdownList className="list"
                        data={doctor}
                        valueField='id'
                        textField={'name'}
                        defaultValue={firstDoctorId[0]}
                        required
                        onChange={value => {selectedDoctorId = value.user.id}}
                    />
                    <h1>Data rozpoczęcia:</h1>
                    <DateTimePicker required 
                        onChange={value => {startDate = value}}
                        value={this.state.date}
                    />
                    <h1>Data zakończenia:</h1>
                    <DateTimePicker required
                        onChange={value => {endDate = value}}
                        value={this.state.date}
                    />
                    <br></br>
                    <button class="button button1"onClick={()=>{addAppointment(selectedUserId, startDate, endDate, "month")}}>Dodaj wizyty</button>
                </div>
            </div>
        );
    }
}

export default AdminPanel;
