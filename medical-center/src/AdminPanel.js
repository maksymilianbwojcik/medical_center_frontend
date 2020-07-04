import React, {Component} from 'react';
import {getAllClients} from './utils/APIUtils';
import Combobox from 'react-widgets/lib/Combobox'
import 'react-widgets/dist/css/react-widgets.css';

class AdminPanel extends Component{
    _isMounted = false;

    state = {
        client: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getAllClients()
            .then(response => {
                if(this._isMounted === true) {
                    this.setState({
                        client: response
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
        const client = this.state.client;
        const firstId = this.state.client[0];
        console.log(firstId);
        return (
            <div id="admin-panel-wraper">
              <h2>Dodaj lekarza</h2>
              <Combobox
                data={client}
                valueField='id'
                textField={'name'}
                defaultValue={firstId}
                />
            </div>
        );
    }
}

export default AdminPanel;
