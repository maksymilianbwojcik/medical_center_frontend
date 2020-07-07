
import React, {Component} from 'react';
import News from "./News";
class Home extends Component{

    render(){
        return (
        <div id="home-wraper">
            <div id="three-column" className="container">
                <span className="arrow-down"></span>
                <div id="tbox1"> <span className="icon icon-stethoscope"></span>
                    <div className="title"> <h2>Zakres usług</h2>
                    </div>
                    <p>Podstawowa opieka zdrowotna, specjalistyka, rehabilitacja, medycyna pracy, badania laboratoryjne, rtg, inne.</p>    
                    <a href="#portfolio" className="button">Zobacz więcej</a> </div>
                <div id="tbox2"> <span className="icon icon-user-md"></span>
                    <div className="title">
                    <h2>Nasz zespół</h2>
                    </div>
                    <p>Zespół MediShield tworzą osoby z wysokimi kwalifikacjami w swojej dziedzinie i ponadprzeciętnym zaangażowaniem w pracę. W nasze usługi wkładamy wiedzę, doświadczenie i profesjonalizm.</p>
                    <a href="/doctors" className="button">Zobacz więcej</a> </div>
                <div id="tbox3"> <span className="icon icon-hospital"></span>
                    <div className="title">
                        <h2>Rejestracja online</h2>
                    </div>
                    <p>System rejestracji MediShield pozwala na sprawne zaplanowanie wizyty, odebranie wyników oraz recept. </p>
                    <a href="/login" className="button">Zobacz więcej</a> </div>
            </div>

            <div id="page">
                <div><span className="arrow-down"></span></div>
                <br></br><br></br><br></br>
                <div className="title"><h2>OGŁOSZENIA</h2></div>
                <br></br>
                <div id="box1">
                    <p>Wykonujemy badania poziomu  <br></br>przeciwciał przeciw SARS-CoV-2<br></br>metodą ilościową</p> <br></br>
                    <a href="/news" className="button">Zobacz więcej</a> 
                </div>
                <div id="box2">
                <p>Zmiana godzin funkcjonowania  <br></br>przychodni od dnia <br></br> 4.06.2020 </p><br></br>
                    <a href="/news" className="button">Zobacz więcej</a> 
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
                        <div><br></br> <p><br></br>ul. Piastowska 15<br></br>11-741 Pcim Dolny<br></br>
                            +48 12 345 167 89<br></br>kontakt@klinikascrubs.pl</p>
                    </div>
                    
                    <a href="/faq" className="button">FAQ</a><br></br></div>
            </div>
        </div>
        );
    }
}

export default Home;