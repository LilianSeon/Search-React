import React, {Component} from 'react';
import playIcon from '../img/icon-playB.svg';
import NoResults from './NoResults';
import pub from '../img/pub.jpg'
import ReactHtmlParser from 'react-html-parser';

const configuration = require('./AlgoliaConf');

/**
 * Video template
 */
class Video extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            hitsToShow: this.props.hitsToShow
        };
    }

    componentDidMount(){
        
    }
    /**
     * Truncate sentences
     * @param {string} str 
     * @param {number} no_words 
     * @returns {string}
     * @public
     */
    truncate(str, no_words) {
        if(str.split(" ").length > no_words){
            return str.split(" ").splice(0,no_words).join(" ")+"...";
        }else{
            return str;
        }
    }

    showMore(){
        this.setState({
            hitsToShow: this.state.hitsToShow + this.props.hitsToShow
        });
    }

    handleClick(position, eventAction){
        this.props.clickPosition(position, eventAction)
    }

    render(){
        if(this.props.hits.length){
            return(
                <div className="container PageSearch-resultsContainer" style={{ display: this.props.hits.length ? "flex" : "none"}}>
                    <div className="PageSearch-results">
                        <div className="PageSearch-section"> 
                            <h2 className="PageSearch-title-h3">{this.props.title}</h2> 
                        </div> 
                        <ul className="PageSearch-searchVideos-Results-items resultVideos6Wrapper">
                        {
                            this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                                return(
                                    <li key={i} className="SearchVideo" onClick={this.handleClick.bind(this, i, "click_position")}>
                                        <a target="_blank" href={hits.videoUrl} rel="noreferrer"> 
                                            <div className="SearchVideo-imgWrapper"> 
                                                <img className="SearchVideo-img" src={hits.img_medium} alt=""/> 
                                                <img className="SearchVideo-play" src={playIcon} alt=""/> 
                                            </div> 
                                            <div className="SearchVideo-textWrapper"> 
                                                <div className="SearchVideo-title">{ReactHtmlParser(hits._highlightResult.title.value)}</div> 
                                                <div className="SearchVideo-content">{ReactHtmlParser(this.truncate(hits._highlightResult.description.value, this.props.contentMaxWords))}</div> 
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul> 
                        <button type="button" className="btn btn-secondary PageSearch-btn showMoreSearchResults" onClick={this.showMore.bind(this)}>Afficher plus de résultats </button>
                    </div>
                    <div className="PageSearch-sidebar"> 
                        <div className="SearchAdvertisment" onClick={this.handleClick.bind(this, 1, "click_advertising")}> 
                            <a href={configuration.advertising.url} target="_blank" rel="noreferrer"><img src={pub} alt="Go Plus - res - FR"/></a> 
                        </div> 
                    </div>
                </div>
            )
        }else{
            return(
                <NoResults labels={configuration.label.noResults}/>
            )
        }
    }
}

export default Video;