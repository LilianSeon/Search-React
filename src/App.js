import React, {Component} from 'react';
import algoliasearch from 'algoliasearch';
import './css/boosted.css';
import './css/swiper.min.css';
import './css/nouislider.min.css';
import './css/style.css';


import Menu from './component/Menu'




const searchClient = algoliasearch(
  'UQ5V1RCRHZ',
  '625dc522ad32d77e986d35fc93081394'
);

const index1 = searchClient.initIndex('orange.be_obel_shop_fr');
const indexSuggest = searchClient.initIndex('orange.be_obel_shop_fr_query_suggestions');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      hits: [],
      nbHits: 0,
      suggest: []
    };
  }

  getQuery(e){ // Get the query of the user

    this.setState({
      query: e.target.value
    });

    index1.search(e.target.value).then(({ hits, nbHits }) => {
      this.setState({
        hits: hits,
        nbHits: nbHits 
      });
    });

    indexSuggest.search(e.target.value).then(({hits}) => {
      this.setState({
        suggest: hits
      })
    })
  }


  render() {
  return (
    <div className="container">
      <Menu/>


      <form className="SearchForm" action="">
        <div className="SearchForm-inputWrapper">
            <input type="text" className="SearchForm-input" value={this.state.query} onChange={(e) => {this.getQuery(e)}}/>
            <div className="SearchForm-inputButton">
                <span className="SearchForm-inputClear">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <path fill-rule="evenodd" d="M29.732 25.462l-5.337-5.336 5.337-5.337a1.51 1.51 0 0 0 0-2.135l-2.135-2.134a1.51 1.51 0 0 0-2.135 0l-5.336 5.336-5.337-5.336a1.51 1.51 0 0 0-2.135 0l-2.134 2.134a1.51 1.51 0 0 0 0 2.135l5.336 5.337-5.336 5.336a1.51 1.51 0 0 0 0 2.135l2.134 2.135c.59.59 1.546.59 2.135 0l5.337-5.337 5.336 5.337c.59.59 1.546.59 2.135 0l2.135-2.135a1.51 1.51 0 0 0 0-2.135"></path>
                  </svg>
                </span>
                <span className="SearchForm-inputMicro">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <path fill-rule="evenodd" d="M32.875 22.4a1.12 1.12 0 0 0-1.125 1.114v1.115c0 3.692-3.022 6.685-6.75 6.685s-6.75-2.993-6.75-6.685v-1.115a1.12 1.12 0 0 0-1.125-1.114A1.12 1.12 0 0 0 16 23.514v1.115c-.002 4.499 3.382 8.294 7.89 8.847v2.295h-2.64c-.828 0-1.5.666-1.5 1.486V38h10.5v-.743c0-.82-.672-1.486-1.5-1.486h-2.64v-2.295c4.508-.553 7.893-4.348 7.89-8.847v-1.115a1.12 1.12 0 0 0-1.125-1.114zM25 12c-2.9 0-5.25 2.328-5.25 5.2v7.429c0 2.871 2.35 5.2 5.25 5.2s5.25-2.329 5.25-5.2V17.2c0-2.872-2.35-5.2-5.25-5.2zm-3.75 9.657V17.2c0-2.051 1.679-3.714 3.75-3.714 2.071 0 3.75 1.663 3.75 3.714v4.457h-7.5z"></path>
                  </svg>
                </span>
            </div>
        </div>
        <button type="submit" className="SearchForm-submit btn btn-primary">
            <span>
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.766 6.125a6.64 6.64 0 1 0 0 13.281 6.64 6.64 0 0 0 0-13.281M27.77 26.597l-1.174 1.174a.784.784 0 0 1-1.105 0l-7.055-7.055a9.721 9.721 0 0 1-5.671 1.815A9.764 9.764 0 0 1 3 12.766 9.766 9.766 0 0 1 12.766 3c5.393 0 9.765 4.372 9.765 9.766a9.72 9.72 0 0 1-1.815 5.671l7.055 7.055a.784.784 0 0 1 0 1.105" fill-rule="evenodd"></path>
              </svg>
            </span>
            Rechercher
        </button>
    </form>


    <div className="TopTendances">
      <h2 className="TopTendances-title">Top tendances</h2>
      <div className="TopTendances-date">13 novembre 2020</div>
      <ul className="TopTendances-items Autosearch-items">
      {
        this.state.suggest.slice(0, 6).map((suggest) => {
            return(
            <li data-autosearch="iphone">{suggest.query}</li>
            )
        })
      }
      </ul>
      <div className="SearchDetails" style={{display: "block"}}>
        <span className="SearchDetails-count">{this.state.nbHits}</span> résultats pour «&nbsp;<span className="SearchDetails-keyword">{this.state.query}</span>&nbsp;»
      </div>
    </div>


    <div className="SearchTabs-container container-lg">
      <div className="SearchTabs">
          <ul className="nav nav-tabs nav-tabs-light">
              <li className="SearchTabs-item nav-item" id="searchtab-products-services">Produits<span className="SearchTabs-resultsCount"> ({this.state.nbHits})</span></li>
              <li className="SearchTabs-item" id="searchtab-assistance">Assistance <span className="SearchTabs-resultsCount"></span></li>
          </ul>
          <div className="SearchTabs-line"></div>
          <div className="SearchTabs-gradient"></div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>


    <div className="PageSearch-mainContent">
      <div className="PageSearch-results">
        <div className="PageSearch-searchProducts" style={{display: 'block'}}>
          <div id="PageSearch-block-products">
              <div className="PageSearch-section GridChange">
                  <h2 className="PageSearch-title-h3">Produits</h2>
              </div>

              <ul className="Results-items SearchProduct-wrapper resultProductsWrapper isRow">
              {
                this.state.hits.slice(0, 6).map((hits) => {
                    return(
                      <li className="SearchProduct" key={hits.idProduct}>
                          <a target="_blank" href={hits.objectID}>
                              <div className="SearchProduct-imgWrapper">
                                  <img src={hits.productPictureUrl} alt="" />
                              </div>
                              <div className="SearchProduct-textWrapper">
                                <div className="SearchProduct-title">{hits.title}</div>
                                  <div className="SearchProduct-subtitle">
                                      <div className="SearchProduct-price">{hits.price} {hits.currencyPrice}</div>
                                  </div>
                                  <div className="SearchProduct-content" style={{display: "block"}}>{hits.content}</div>
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
      


    <div class="PageSearch-searchAssistance">
      <div class="PageSearch-section">
          <h2 class="PageSearch-title-h3">Assistance</h2>
      </div>
      <ul class="PageSearch-searchAssistance-Results-items resultAssistanceWrapper">
        <li class="SearchResult">
          <a target="_blank" href="5065250">
            <div class="SearchResult-title">J'ai bloqué ma carte <span class="SearchResult-highlightText">SIM</span>, comment...</div>
            <div class="SearchResult-content">Pour avoir votre code PUK, contactez le service client en cliquant ici. Vous...</div>
          </a>
        </li>
        <li class="SearchResult">
          <a target="_blank" href="5065190">
            <div class="SearchResult-title">Comment se passe le transfert d’argent...</div>
            <div class="SearchResult-content">o Vous pouvez faire des transferts d’argent, à partir de votre compte bancaire...</div>
          </a>
        </li>
      </ul>
        <button type="button" class="btn btn-secondary PageSearch-btn showMoreSearchResults" data-index="assistance">Afficher plus de résultats</button>
    </div>

    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/boosted@4.5.3/dist/js/boosted.bundle.min.js" integrity="sha384-hQFBUEXKv1tPjGNFpCctXthNheXFWEyT+cKHsR5+8VYwGoe2L0SIaDNXDpE1LlTK" crossorigin="anonymous"></script>
    </div>
  );
}
}

export default App;
