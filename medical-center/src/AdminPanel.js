import React, {Component} from 'react';

class AdminPanel extends Component{
    _isMounted = false;

    state = {
        doctor: [],
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        return (
            <div id="admin-panel-wraper">
              <h2>Dodaj wizyty dla lekarza:</h2>
            </div>
        );
    }
}

export default AdminPanel;
