import React, {Component} from 'react';
import '../css/index.css';
import NoResults from './NoResults';
import pub from '../img/pub.jpg'

class AssistanceTest extends Component{

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
                <div className="container PageSearch-resultsContainer" style={{ display: this.props.hits.length ? "flex" : "none"}}>
                    <div className="PageSearch-results">
                            <h2 className="PageSearch-title-h3">{this.props.title}</h2> 
                            <ul className="PageSearch-searchAssistance-Results-items">
                            {
                                this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                                    return(
                                        <li className="SearchResult" key={i}>
                                            <a target="_blank" href={hits.objectID} rel="noreferrer" style={{marginBottom:0}}> 
                                                <div className="assistance-title">{hits.title}</div> 
                                            </a>
                                            <div className="assistance-content">{this.truncate(hits.content, this.props.contentMaxWords)}</div>
                                            <hr/>
                                        </li>
                                    )
                                })
                            }
                            </ul> 
                        <button type="button" className="btn btn-secondary PageSearch-btn showMoreSearchResults" onClick={this.showMore.bind(this)}>Afficher plus de résultats </button>
                    </div>
                    <div className="PageSearch-sidebar"> 
                        <div className="SearchAdvertisment"> 
                            <a href={this.state.url}><img src={pub} alt="Go Plus - res - FR"/></a> 
                        </div> 
                    </div>
                </div>
            )
        }else{
            return(
                <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
            )
        }    
    }
}

export default AssistanceTest;