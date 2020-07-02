import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NewsDetails from "./NewsDetails";
import {getNews} from "./utils/APIUtils";

class News extends Component{

    _isMounted = false;

    state = {
        data: [],
    }

    componentDidMount() {
        this._isMounted = true;

        getNews()
            .then(response => {
                console.log(response);
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
        console.log(this.state.data);
        return (
            <div id="news-wraper">
                {this.state.data.map(news =>
                    <NewsDetails info={news}/>)}}
            </div>
        );
    }
}

export default News;
