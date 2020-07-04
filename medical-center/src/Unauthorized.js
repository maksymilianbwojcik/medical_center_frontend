import React, {Component} from 'react';

class Unauthorized extends Component{

    render(props){
        return (
        <div id="unauthorized-wraper">
            <h2>Nie masz uprawnień aby widzieć tę zawartość!</h2>
        </div>
        );
    }
}

export default Unauthorized;