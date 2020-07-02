
import React, {Component} from 'react';
import News from "./News";
class Home extends Component{

    render(){
        return (
        <div id="home-wraper">
            <News/>
            <div id="three-column" className="container">
                <span className="arrow-down"></span>
                <div id="tbox1"> <span className="icon icon-stethoscope"></span>
                    <div className="title"> <h2>Zakres usług</h2>
                    </div>
                    <p>Podstawowa opieka zdrowotna, specjalistyka, rehabilitacja, medycyna pracy, badania laboratoryjne, rtg, inne.</p>    
                    <a href="/about" className="button">Zobacz więcej</a> </div>
                <div id="tbox2"> <span className="icon icon-user-md"></span>
                    <div className="title">
                    <h2>Nasz zespół</h2>
                    </div>
                    <p>Zespół MediScrubs tworzą osoby z wysokimi kwalifikacjami w swojej dziedzinie i ponadprzeciętnym zaangażowaniem w pracę. W nasze usługi wkładamy wiedzę, doświadczenie i profesjonalizm.</p>
                    <a href="#" className="button">Zobacz więcej</a> </div>
                <div id="tbox3"> <span className="icon icon-hospital"></span>
                    <div className="title">
                        <h2>Rejestracja online</h2>
                    </div>
                    <p>System rejestracji MediScrubs pozwala na sprawne zaplanowanie wizyty, odebranie wyników oraz recept. </p>
                    <a href="#" className="button">Zobacz więcej</a> </div>
            </div>

            <div id="page">
                <div><span className="arrow-down"></span></div>
                <div className="title"><h2>OGŁOSZENIA</h2></div>
                <div id="box1">
                    <h2>Wykonujemy badania poziomu  <br></br>przeciwciał przeciw SARS-CoV-2<br></br>metodą ilościową</h2> <br></br>
                    <a href="#" className="button">Zobacz więcej</a> 
                </div>
                <div id="box2">
                    <h2>Zmiana godzin funkcjonowania  <br></br>przychodni od dnia <br></br> 4.06.2020 </h2><br></br>
                    <a href="#" className="button">Zobacz więcej</a> 
                </div>
            </div>

            <div id="portfolio">
            <div><span className="arrow-down"></span></div>
                <div className="title">
                    <h2>Plan Budynku</h2></div>
                    <img className="current_item" className="image image-full" src="images/Niski%20Parter.png" alt="" height="auto" width="auto" />
                <div className="content">
                </div>
            </div>
            <div id="portfolio">
                    <div className="title">
                        <h2>MASZ PYTANIE?</h2><br></br><br></br>
                        <span className="byline">Przejdź do sekcji Najczęstszych Pytań lub skontaktuj się z nami:</span> 
                    <div><br></br> <p><strong>KONTAKT:</strong><br></br>ul. Josefa Mengele 1<br></br>11-111 Twin Peaks<br></br>
                        +48 11 111 11 11<br></br>twinpeaks@klinikascrubs.pl</p>
                    </div>
                    
                    <a href="/faq" className="button">FAQ</a><br></br></div>
            </div>
        </div>
        );
    }
}

export default Home;