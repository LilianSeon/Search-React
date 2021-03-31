import React, {Component} from 'react';
import NoResults from './NoResults';
import pub from '../img/pub.jpg'
import ReactHtmlParser from 'react-html-parser';

class Brand extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            hitsToShow: this.props.hitsToShow
        };
        
    }

    render(){
        if(this.props.hits.length){
            return(
                <div className="container PageSearch-resultsContainer" style={{ display: this.props.hits.length ? "flex" : "none"}}>
                    <div className="PageSearch-results">
                        <div className="PageSearch-searchBrands">
                            <div className="PageSearch-section">
                                <h2 className="PageSearch-title-h3">{this.props.title}</h2>
                            </div>
                            <ul className="PageSearch-searchBrands-Results-items resultBrandsWrapper">
                            {
                                this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                                    return(
                                        <li key={i} className="SearchBrand">
                                        <a href={hits.url} target="_blank" rel="noreferrer">
                                            <div className="SearchBrand-imgWrapper">
                                                <img className="SearchBrand-img" src={hits.image} alt=""/>
                                            </div>
                                            <div className="SearchBrand-content">{ReactHtmlParser(hits._highlightResult.brand.value)}</div>
                                        </a>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
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

export default Brand;