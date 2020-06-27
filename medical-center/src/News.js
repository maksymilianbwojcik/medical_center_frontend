import React, {Component} from 'react';
import {Link} from "react-router-dom";

class News extends Component{

    componentDidMount() {
        fetch("http://localhost:8080/api/news/all")
            .then(response => response.json())
            .then(data => this.setState({data}));
        console.log(this.setState.data);
    }

    render(){
        return (
            <div id="home-wraper">
                <div id="page">
                    <div className="title">
                        <h2>Don't DUDAt</h2>
                        <span className="byline">Data i godzina</span> </div>
                    <p> Operacja się udała. Pacjent nie żyje. </p>
                    <a href="#" className="button">Rozwiń</a>
                </div>
                <div id="page">
                    <div className="title">
                        <h2>Nie chcem, ale muszem</h2>
                        <span className="byline">Data i godzina</span> </div>
                    <p>Mam dobre wieści. To Koronawirus. </p>
                    <a href="#" className="button">Rozwiń</a>
                </div>
            </div>
        );
    }
}

export default News;
