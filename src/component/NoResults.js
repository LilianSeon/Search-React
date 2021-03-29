import React, {Component} from 'react';

class NoResults extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div> 
                <div className="container"> 
                    <span className="NoResultBlock-title">{this.props.labels.mainText}</span> 
                    <ul className="NoResultBlock-info"> 
                        <li>{this.props.labels.list1}</li> 
                        <li>{this.props.labels.list2}</li> 
                        <li>{this.props.labels.list3}</li> 
                    </ul> 
                </div> 
                <div className="NoResultBlock-yellowSection"> 
                    <div className="container"> 
                        <div className="NoResultBlock-yellowSection-title">
                        {this.props.labels.banner.mainText} 
                        </div> 
                        <ul className="NoResultBlock-yellowSection-items"> 
                            <li><a href={this.props.labels.banner.url1} target="self"> <span></span> <span className="NoResultBlock-item">{this.props.labels.banner.text1}</span> </a> </li> 
                            <li><a href={this.props.labels.banner.url2} target="_self"> <span></span> <span className="NoResultBlock-item">{this.props.labels.banner.text2}</span> </a> </li> 
                            <li><a href={this.props.labels.banner.url3} target="_self"> <span></span> <span className="NoResultBlock-item">{this.props.labels.banner.text3}</span> </a> </li> 
                            <li><a href={this.props.labels.banner.url4} target="_self"> <span></span> <span className="NoResultBlock-item">{this.props.labels.banner.text4}</span> </a> </li> 
                        </ul> 
                    </div> 
                </div> 
            </div>
        )
    }
}

export default NoResults;