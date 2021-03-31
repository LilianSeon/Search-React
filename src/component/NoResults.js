import React, {Component} from 'react';


class NoResults extends Component{

    constructor(props) {
        super(props);
        this.state = {
            icon1: "",
            icon2: "",
            icon3: "",
            icon4: "",
        };   
    }

    componentDidMount(){
        this.setState({
            icon1: this.props.labels.banner.icon1,
            icon2: this.props.labels.banner.icon2,
            icon3: this.props.labels.banner.icon3,
            icon4: this.props.labels.banner.icon4
        })
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
                            <li><a href={this.props.labels.banner.url1} target="self"><span><img width="45" height="45" alt="" src={this.state.icon1}/></span><span className="NoResultBlock-item">{this.props.labels.banner.text1}</span></a></li> 
                            <li><a href={this.props.labels.banner.url2} target="_self"><span><img width="45" height="45" alt="" src={this.state.icon2}/></span><span className="NoResultBlock-item">{this.props.labels.banner.text2}</span></a></li> 
                            <li><a href={this.props.labels.banner.url3} target="_self"><span><img width="45" height="45" alt="" src={this.state.icon3}/></span><span className="NoResultBlock-item">{this.props.labels.banner.text3}</span></a></li> 
                            <li><a href={this.props.labels.banner.url4} target="_self"><span><img width="45" height="45" alt="" src={this.state.icon4}/></span><span className="NoResultBlock-item">{this.props.labels.banner.text4}</span></a></li> 
                        </ul> 
                    </div> 
                </div> 
            </div>
        )
    }
}

export default NoResults;