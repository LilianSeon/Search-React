import React, {Component} from 'react';
import playIcon from '../img/icon-playB.svg';
import NoResults from './NoResults';

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

    render(){
        if(this.props.hits.length){
            return(
                <div className="PageSearch-searchVideos" style={{ display: this.props.hits.length ? "block" : "none"}}>
                    <div className="PageSearch-section"> 
                        <h2 className="PageSearch-title-h3">{this.props.title}</h2> 
                    </div> 
                    <ul className="PageSearch-searchVideos-Results-items resultVideos6Wrapper">
                    {
                        this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                            return(
                                <li key={i} className="SearchVideo">
                                    <a target="_blank" href={hits.videoUrl} rel="noreferrer"> 
                                        <div className="SearchVideo-imgWrapper"> 
                                            <img className="SearchVideo-img" src={hits.img_medium} alt=""/> 
                                            <img className="SearchVideo-play" src={playIcon} alt=""/> 
                                        </div> 
                                        <div className="SearchVideo-textWrapper"> 
                                            <div className="SearchVideo-title">{hits.title}</div> 
                                            <div className="SearchVideo-content">{this.truncate(hits.content, this.props.contentMaxWords)}</div> 
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                    </ul> 
                <button type="button" className="btn btn-secondary PageSearch-btn showMoreSearchResults" onClick={this.showMore.bind(this)}>Afficher plus de résultats </button> 
                </div>
            )
        }else{
            return(
                <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
            )
        }
    }
}

export default Video;