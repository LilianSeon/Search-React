import React, {Component} from 'react';
import NoResults from './NoResults';
import pub from '../img/pub.jpg'
import ReactHtmlParser from 'react-html-parser';

class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            hitsToShow: this.props.hitsToShow,
            image: "",
            url: "",
            selected: "",
            isRow: true
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

    handleRow(){
        this.setState({
            isRow: !this.state.isRow
        })
    }

    handleClick(position){
        this.props.clickPosition(position)
    }

    render(){
        if(this.props.hits.length){
            return(
                <div className="container PageSearch-resultsContainer" style={{ display: this.props.hits.length ? "flex" : "none"}}>
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
                                <div className="GridChange-changeMode"> 
                                    <button data-mode="grid" className={!this.state.isRow ? "isActive" : null} onClick={this.handleRow.bind(this)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                            <path fillRule="evenodd" d="M26.778 24.222H37V14H26.778v10.222zm-12.778 0h10.222V14H14v10.222zM26.778 37H37V26.778H26.778V37zM14 37h10.222V26.778H14V37z"></path>
                                        </svg>
                                    </button> 
                                    <button data-mode="row" className={this.state.isRow ? "isActive" : null} onClick={this.handleRow.bind(this)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                            <path fillRule="evenodd" d="M14 17.833h23V14H14v3.833zm0 6.39h23v-3.834H14v3.833zm0 6.388h23v-3.833H14v3.833zM14 37h23v-3.833H14V37z"></path>
                                        </svg>
                                    </button> 
                                </div>
                            </div>

                            <ul className={this.state.isRow ? "Results-items SearchProduct-wrapper resultProductsWrapper isRow" : "Results-items SearchProduct-wrapper resultProductsWrapper"}>
                            {
                                this.props.hits.slice(0, this.state.hitsToShow).map((hits, i) => {
                                    return(
                                    <li className="SearchProduct" key={i} onClick={this.handleClick.bind(this, i)}>
                                        <a target="_blank" href={hits.objectID} rel="noreferrer">
                                            <div className="SearchProduct-imgWrapper">
                                                <img src={hits.productPictureUrl} alt="" />
                                            </div>
                                            <div className="SearchProduct-textWrapper">
                                                <div className="SearchProduct-title">{ReactHtmlParser(hits._highlightResult.title.value)}</div>
                                                <div className="SearchProduct-subtitle">
                                                    <div className="SearchProduct-price">{hits.price} {hits.currencyPrice}</div>
                                                </div>
                                                <div className="SearchProduct-content" style={{display: this.state.isRow ? "block" : "none"}}>{ReactHtmlParser(this.truncate(hits._highlightResult.content.value, this.props.contentMaxWords))}</div>
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