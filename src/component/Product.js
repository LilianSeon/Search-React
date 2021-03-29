import React, {Component} from 'react';


class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
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

    render(){
        return(
            <div className="PageSearch-searchProducts" style={{ display: this.props.hits.length ? "block" : "none"}}>
              <div id="PageSearch-block-products">
                  <div className="PageSearch-section GridChange">
                      <h2 className="PageSearch-title-h3">{this.props.title}</h2>
                  </div>

                  <ul className="Results-items SearchProduct-wrapper resultProductsWrapper isRow">
                  {
                    this.props.hits.slice(0, this.props.hitsToShow).map((hits) => {
                        return(
                          <li className="SearchProduct" key={hits.idProduct}>
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

                  <button type="button" className="btn btn-secondary PageSearch-btn showMoreSearchResults" data-index="products">Afficher plus de résultats</button>
              </div>
            </div>
        )
    }
}

export default Product