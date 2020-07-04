import React, {Component} from 'react';

class NewsDetails extends Component{

    render(props){
        return (
            <div id="news-wraper">
                <div id="page">
                    <div id="box1">
                        <div className="title">
                            <h2> {this.props.info.title} </h2>

                            <p className="date">{this.props.info.date}</p>
                            <p className="text"> {this.props.info.text}</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetails;
