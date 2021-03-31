import React, {Component} from 'react';
import NoResults from './NoResults';
import pub from '../img/pub.jpg'
class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            hitsToShow: this.props.hitsToShow,
            image: "",
            url: "",
            selected: ""
        };
    }

    componentDidMount(){
        this.setState({
            image: window.searchAlgoliaConfig.advertising.image,
            url: window.searchAlgoliaConfig.advertising.url,
        })
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

    handleChange(event) {
        this.setState({selected: event.target.value});
        this.props.callback(event.target.value)
    }

    render(){
        if(this.props.hits.length){
            return(
                <div className="container PageSearch-resultsContainer" style={{ display: this.props.hits.length ? "flex" : "none"}}>
                <div className="PageSearch-results">
                    <div className="PageSearch-results">
                    <div className="SearchSort"> 
                        <select className="custom-select PageSearch-customSelect" onChange={this.handleChange.bind(this)}>
                            <option value={this.props.index}>{this.props.select.sortByRelevance}</option>
                            <option value={this.props.index+"_by_price_asc"}>{this.props.select.sortByAscendingPrice}</option>
                            <option value={this.props.index+"_by_price_desc"}>{this.props.select.sortByDescendingPrice}</option>
                        </select> 
                    </div>
                        <div id="PageSearch-block-products">
                            <div className="PageSearch-section GridChange">
                                <h2 className="PageSearch-title-h3">{this.props.title}</h2>
                            </div>

                            <ul className="Results-items SearchProduct-wrapper resultProductsWrapper isRow">
                            {
                                this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                                    return(
                                    <li className="SearchProduct" key={i}>
                                        <a target="_blank" href={hits.objectID} rel="noreferrer">
                                            <div className="SearchProduct-imgWrapper">
                                                <img src={hits.productPictureUrl} alt="" />
                                            </div>
                                            <div className="SearchProduct-textWrapper">
                                                <div className="SearchProduct-title">{hits.title}</div>
                                                <div className="SearchProduct-subtitle">
                                                    <div className="SearchProduct-price">{hits.price} {hits.currencyPrice}</div>
                                                </div>
                                                <div className="SearchProduct-content" style={{display: "block"}}>{this.truncate(hits.content, this.props.contentMaxWords)}</div>
                                            </div>
                                        </a>
                                    </li>
                                    )
                                })
                            }
                            </ul>

                            <button type="button" className="btn btn-secondary PageSearch-btn showMoreSearchResults" onClick={this.showMore.bind(this)}>Afficher plus de résultats</button>
                        </div>
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

export default Product