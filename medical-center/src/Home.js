import React, {Component} from 'react';
import News from "./News";
class Home extends Component{

    render(){
        return (
        <div id="home-wraper">
            <News/>
            <div id="three-column" className="container">
                <div><span className="arrow-down"></span></div>
                <div id="tbox1"> <span className="icon icon-wrench"></span>
                    <div className="title">
                        <h2>Maecenas luctus</h2>
                    </div>
                    <p>Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris. Proin eu wisi suscipit nulla suscipit interdum.</p>
                    <a href="#" className="button">Learn More</a> </div>
                <div id="tbox2"> <span className="icon icon-cogs"></span>
                    <div className="title">
                        <h2>Integer gravida</h2>
                    </div>
                    <p>Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper suscipit eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris.</p>
                    <a href="#" className="button">Learn More</a> </div>
                <div id="tbox3"> <span className="icon icon-legal"></span>
                    <div className="title">
                        <h2>Praesent mauris</h2>
                    </div>
                    <p>Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem suscipit semper eleifend.</p>
                    <a href="#" className="button">Learn More</a> </div>
            </div>

            <div id="portfolio">
                <div><span className="arrow-down"></span></div>
                <div className="title">
                    <h2>Plan Budynku</h2>
                    <span className="byline">Integer sit amet pede vel arcu aliquet pretium</span> </div>

                    <img className="current_item" className="image image-full" src="images/Niski%20Parter.png" alt="" height="auto" width="auto" />

                <div className="content">
                    <p>Aliquam sem leo, vulputate sed, convallis at, ultricies quis, justo. Donec nonummy magna quis risus. Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris nec lorem. Vestibulum suscipit volutpat nulla.</p>
                    <div className="actions"> <a href="#" className="button button-big">Get Started</a> <a href="#" className="button button-big button-alt">Learn More</a> </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;
