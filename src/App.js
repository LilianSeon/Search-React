
import React, {Component} from 'react';
import Menu from './component/Menu';
import Product from './component/Product';
import Assistance from './component/Assistance';
import AssistanceTest from './component/AssistanceTest';
import Video from './component/Video';
import NoResults from './component/NoResults';
import './App.css';
import './css/boosted.css';
import './css/style.css';
import './index.css'
import './conf/AlgoliaConfTest';

import algoliasearch from 'algoliasearch';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const searchClient = algoliasearch( // Connexion à Algolia API
  window.searchAlgoliaConfig.algolia.applicationId,
  window.searchAlgoliaConfig.algolia.apiKey
);


window.searchAlgoliaConfig.indices.map((indices, i) => { // Init Algolia pour chaque index
  window['index'+i] = searchClient.initIndex(indices.indiceKey);
  window['nbHits'+i] = 0;
  return true
})


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      hits0: [],
      hits1: [],
      hits2: [],
      hits3: [],
      hits4: [],
      hits5: [],
      hits6: [],
      hits7: [],
      count: 0,
      suggest: [],
      algoliaConf: window.searchAlgoliaConfig
    };
    
  }

  componentDidMount(){
    window.searchAlgoliaConfig.indices.map((indices, i) => {
      if(indices.template === "suggestion" ){
        window['index'+i].search(" ").then(({hits}) => {
          this.setState({
            suggest: hits
          })
        })
      }
      return true;
    })
  }

  getQuery(e){ // Get the query of the user

    this.setState({
      query: e.target.value
    });

    window.searchAlgoliaConfig.indices.map((indices, i) => {
      if(indices.template === "suggestion" ){
        window['index'+i].search(e.target.value).then(({hits}) => {
          this.setState({
            suggest: hits
          })
        })
      }
      return true;
    })

    try{
      window.index0.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+0] = nbHits;
        this.setState({
          hits0: hits
        })
      });
    }catch(e){
      console.log(e);
    }

    try{
      window.index1.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+1] = nbHits;
        this.setState({
          hits1: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index2.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+2] = nbHits;
        this.setState({
          hits2: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index3.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+3] = nbHits;
        this.setState({
          hits3: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index4.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+4] = nbHits;
        this.setState({
          hits4: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index5.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+5] = nbHits;
        this.setState({
          hits5: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index6.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+6] = nbHits;
        this.setState({
          hits6: hits
        })
      });
    }catch(e){
      return e;
    }

    try{
      window.index7.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+7] = nbHits;
        this.setState({
          hits7: hits
        })
      });
    }catch(e){
      return e;
    }


  }

  count(){
    
    let count = 0;
    window.searchAlgoliaConfig.indices.map((indices, i) => {
      if(indices.template !== "suggestion" ){
        count += window['nbHits'+i];  
      }
      return true;
    })

    return count;
    
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="container">
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
            {window.searchAlgoliaConfig.label.searchButton}
        </button>
        </form>

        <div className="TopTendances">
      <h2 className="TopTendances-title">{window.searchAlgoliaConfig.label.topTrends}</h2>
      <ul className="TopTendances-items Autosearch-items">
      {
        this.state.suggest.slice(0, 6).map((suggest) => {
            return(
            <li>{suggest.query}</li>
            )
        })
      }
      </ul>
      <div className="SearchDetails" style={{display: "block"}}>
        <span className="SearchDetails-count">{this.count()}</span> {window.searchAlgoliaConfig.label.resultsFor} «&nbsp;<span className="SearchDetails-keyword">{this.state.query}</span>&nbsp;»
      </div>
    </div>

        <Tabs>
          <TabList>
            <ul className="nav nav-tabs nav-tabs-light">
              {
                window.searchAlgoliaConfig.indices.map((indices, i) => {
                  if(indices.template !== "suggestion" ){
                    return(<Tab key={i} disabled={window['nbHits'+i] === 0 ? true : false}><li className="SearchTabs-item nav-item" id="searchtab-products-services" style={{color: window['nbHits'+i] === 0 ? "#ddd" : "#000", cursor: window['nbHits'+i] === 0 ? "not-allowed" : "pointer"}}>{indices.tabTitle} <span id={"count"+i} className="SearchTabs-resultsCount"> ({window['nbHits'+i]})</span></li></Tab>)
                  }
                  return true;
                })
              }
            </ul>
          </TabList>
          {
            window.searchAlgoliaConfig.indices.map((indices, i) => {
              if(indices.template === "Product"){
                if(eval("this.state.hits"+i+".length > 0")){
                  return(
                    <TabPanel key={i}>
                      <Product hits={eval("this.state.hits"+i)} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                    </TabPanel>
                  )
                  }else{
                    if(this.state.query !== ""){
                      return(
                        <TabPanel key={i}>
                          <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
                        </TabPanel>
                      )
                    }
                }
              }else if(indices.template === "Assistance"){
                if(eval("this.state.hits"+i+".length > 0")){
                  return(
                    <TabPanel key={i}>
                      <Assistance hits={eval("this.state.hits"+i)} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                    </TabPanel>
                  )
                }else{
                  if(this.state.query !== ""){
                    return(
                      <TabPanel key={i}>
                        <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
                      </TabPanel>
                    )
                  }
                }
              }else if(indices.template === "Video"){
                if(eval("this.state.hits"+i+".length > 0") && this.state.query !== ""){
                  return(
                    <TabPanel key={i}>
                      <Video hits={eval("this.state.hits"+i)} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                    </TabPanel>
                  )
                }else{
                  if(this.state.query !== ""){
                    return(
                      <TabPanel key={i}>
                        <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
                      </TabPanel>
                    )
                  }
                }
              }else if(indices.template === "AssistanceTest"){
                if(eval("this.state.hits"+i+".length > 0") && this.state.query !== ""){
                  return(
                    <TabPanel key={i}>
                      <AssistanceTest hits={eval("this.state.hits"+i)} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                    </TabPanel>
                  )
                }else{
                  if(this.state.query !== ""){
                    return(
                      <TabPanel key={i}>
                        <NoResults labels={window.searchAlgoliaConfig.label.noResults}/>
                      </TabPanel>
                    )
                  }
                }
              }
              return true;
            })
          }
          
        </Tabs>
        </div>
      </div>
    )
  }

}

export default App;
