import React, {Component} from 'react';
import {getAllClients, addDoctor} from './utils/APIUtils';
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList'

class AdminPanel extends Component{
    _isMounted = false;

    state = {
        client: []
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

        const client = this.state.client;
        const firstClientId = client.map(c => {
                return c.id
        });
        console.log(firstClientId[0]);
        return (
            <div id="admin-panel-wraper">
              <h2>Dodaj lekarza</h2>
                <form onSubmit={() => {addDoctor(selectedUserId, doctorName, doctorSurname, doctorSecialization, doctorTitle); window.location.reload(false)}}>
                    <DropdownList
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
                    <input type="submit" value="Stwórz leakrza"></input>
                </form>
                {/* <button onClick={() => {addDoctor(selectedUserId, doctorName, doctorSurname, doctorSecialization, doctorTitle); window.location.reload(false)}}>Stwórz lekarza</button> */}
            </div>
        );
    }
}

export default AdminPanel;
