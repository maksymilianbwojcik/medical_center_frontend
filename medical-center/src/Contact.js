import React, {Component} from 'react';

class Contact extends Component{

    render(){
        return(
            <div id="faq-wrapper">
            <div><span className="arrow-down"></span></div>
            <div id="page">
                <div className="title"><h3>KONTAKT</h3><div className="byline"><h5>POniżej znajdziesz lokalizację naszej kliniki oraz drogi kontaktu. Zanim skontaktujesz się z nami, odwiedź zakładkę "FAQ", aby sprawdzić czy nie odpowiedzieliśmy już na interesujące Cię pytania </h5></div></div>
                        <br></br>
                <div id="box1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d640.2464430475247!2d19.9059182!3d50.0678281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bbb9d349ee7%3A0xde61b0cac160981e!2sPromyk%20-%20Student%20Dormitory%20(DS)%2012!5e0!3m2!1spl!2spl!4v1593886182219!5m2!1spl!2spl"
                        width="600" height="450" marginWidth={150}></iframe>
                </div>
                <div id="box2">
                    <h4>
                    <div><br></br> <p><br></br>ul. Josefa Mengele 1<br></br>11-111 Twin Peaks<br></br>
                        +48 11 111 11 11<br></br>twinpeaks@klinikascrubs.pl</p>
                    </div>
                    </h4>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;
