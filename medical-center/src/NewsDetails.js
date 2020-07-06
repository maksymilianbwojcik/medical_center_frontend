import React, {Component} from 'react';

class NewsDetails extends Component{

    render(props){
        return (
                <div id="page">
                    <div id="news-wrapper">
                        <h2 className="title"> {this.props.info.title} </h2>
                        <p className="date">{this.props.info.date}</p>
                        <p className="text"> {this.props.info.text}</p>
                </div>
            </div>
        );
    }
}

export default NewsDetails;
