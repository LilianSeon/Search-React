import React, {Component} from 'react';
import Product from './Product';
import Menu from './Menu';
import Assistance from './Assistance'
import Video from './Video';
import Brand from './Brand';
import '../css/boosted.css';
import '../css/style.css';
import '../css/index.css';

import algoliasearch from 'algoliasearch';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ReactGA from 'react-ga';

import ScrollContainer from 'react-indiana-drag-scroll'

import TagManager from 'react-gtm-module';

const configuration = require('./AlgoliaConf');

const searchClient = algoliasearch( // Connexion to Algolia API
  configuration.algolia.applicationId,
  configuration.algolia.apiKey
);

configuration.indices.map((indices, i) => { // Init Algolia for every index
  window['index'+i] = searchClient.initIndex(indices.indiceKey);
  window['nbHits'+i] = 0;
  return true
})

/**
 * Connexion to Google Analytics
 */
ReactGA.initialize('UA-108488354-23', {
  debug: false
});

const tagManagerArgs = {
  gtmId: 'GTM-W8VKDK9'
}
TagManager.initialize(tagManagerArgs)



/**
 * Parent component that display the search page.
 * @version 1.0
 * @author Séon Lilian, Orange Groupe
 * 
 *GitHub : https://github.com/LilianSeon/Search-React/tree/master 
 */
class SearchPage extends Component {

/**
 * Set up all the variables that we need in the state.
 * @constructor
 * @param {*} props 
 */
  constructor(props) {
    super(props);

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    const kw = urlParams.get('kw')

    this.state = {
      query: kw ? kw : "",
      hits0: [],
      hits1: [],
      hits2: [],
      hits3: [],
      hits4: [],
      hits5: [],
      hits6: [],
      hits7: [],
      tabIndex: 0,
      nbIndex: 0,
      count: 0,
      suggest: [],
      algoliaConf: configuration,
      index: "",
      listening: false,
      voice: "",
      typingTimeout: 0,
    };
    this.setQuery(kw ? {target:{value: kw}} : {target:{value: " "}})
    
  }

  componentDidMount(){
    configuration.indices.map((indices, i) => {
      if(indices.template === "Suggestion" ){
        window['index'+i].search(" ").then(({hits}) => {
          this.setState({
            suggest: hits
          })
        })
      }
      this.setState({
        nbIndex: i
      })
      return true;
    })

    if (!window.SpeechRecognition) {
      if (!window.webkitSpeechRecognition) {
        // Implement graceful fail if browser doesn't support SpeechRecognition API
        console.log('Speech To Text not supported')
        return
      }

      window.SpeechRecognition = window.webkitSpeechRecognition
    }

    this.recognition = new window.SpeechRecognition()
    this.recognition.interimResults = true

  }

  /**
   * Set the query of the user and search this query into Algolia indexs. (8 indexs max.)
   * @async
   * @param {Object} e - User's query 
   * @public
   */
  async setQuery(e){

    this.setState({
      query: e.target.value
    })

    try{
      await window.index0.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+0] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 0){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits0: hits
        })
      });
    }catch(e){
      console.log(e);
    }

    try{
      await window.index1.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+1] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 1){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits1: hits
        })
      });
    }catch(e){
      
    }

    try{
      await window.index2.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+2] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 2){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits2: hits
        })
      });
    }catch(e){
      
    }

    try{
      await window.index3.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+3] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 3){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits3: hits
        })
      });
    }catch(e){
      
    }
    
    try{
      await window.index4.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+4] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 4){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
           })
        }
        this.setState({
          hits4: hits
        })
      });
    }catch(e){
      
    }
    
    try{
      await window.index5.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+5] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 5){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits5: hits
        })
      });
    }catch(e){
      
    }

    try{
      await window.index6.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+6] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 6){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits6: hits
        })
      });
    }catch(e){
      
    }

    try{
      await window.index7.search(e.target.value, {hitsPerPage: 100}).then(({ hits, nbHits }) => {
        window['nbHits'+7] = nbHits;
        if(nbHits === 0 && this.state.tabIndex === 7){
          this.setState({
            tabIndex: this.state.tabIndex === this.state.nbIndex-1 ?  0 : this.state.tabIndex + 1
          })
        }
        this.setState({
          hits7: hits
        })
      });
    }catch(e){
      
    }


    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
   }

    configuration.indices.map((indices, i) => {
      if(indices.template === "Suggestion" ){
        window['index'+i].search(e.target.value).then(({hits}) => {
          this.setState({
            suggest: hits
          })
        })
      }
      return true;
    })
    
    let count = 0;
    configuration.indices.map((indices, i) => {
      if(indices.template !== "Suggestion" ){
        count += window['nbHits'+i];  
      }
      return true;
    })

    this.setState({
      count: count,
      typingTimeout: setTimeout(function () {
        if(e.target.defaultValue){
          ReactGA.ga('send', 'event', 'site_search', 'request', e.target.value)
          TagManager.dataLayer({
            dataLayer: {
              'event': 'request',
              'value': e.target.value
            }
        })
        }
      }, 5000)
    })

    this.sendGANoResult(count)
  }

  /**
   * Send to GA when no result
   * @param {number} count 
   * @public
   */
  sendGANoResult(count){
    if(count === 0 && this.state.query !== ""){
      ReactGA.ga('send', 'event', 'site_search', 'no_results', this.state.query)
    }
  }
/**
 * Clear the query when cross is clicked
 * @public
 */
  clearQuery(){
    this.setQuery({target:{value: ""}})
  }

/**
 * Apply the right sort for Product indexs
 * @param {string} result - Index name
 * @public
 */
  getFilter(result){
    this.setState({index: result});
    configuration.indices.map((indices, i) => { // Init Algolia pour index product sorted
      if(indices.template === "Product"){
        window['index'+i] = searchClient.initIndex(result);
        window['index'+i].search(this.state.query, {hitsPerPage: 100}).then(() => {
          this.setQuery({target:{value: this.state.query}})
        });
      }
      return true
    })
}
/**
 * Send to GA the possition click or if the advertising has been clicked
 * @param {number} position 
 * @param {string} eventAction
 * @public
 */
getPosition(position, eventAction){
  if(eventAction === "click_advertising"){
    ReactGA.ga('send', 'event', 'site_search', eventAction, this.state.query ? this.state.query : "Empty query")
  }else{
    ReactGA.ga('send', 'event', 'site_search', eventAction, this.state.query ? this.state.query : "Empty query", position+1, this.state.tabIndex+1)
  }
  
}
/**
 * Reset the query when a suggestion has been clicked
 * @param {string} query
 * @public 
 */
suggestCliked(query){
  this.setQuery({target:{value: query}})
}

microClicked(){
  this.setState({
    listening: !this.state.listening
  }, this.handleListen)
  
}
/**
 * Handle Speech recognition start and stop + Send to GA the 'vocal_search' query
 * @public
 */
handleListen(){
  if (this.state.listening) {
    this.recognition.start()
    this.recognition.onend = () => {
      console.log('No more speech detected')
      this.setState({
        listening: false
      })
      ReactGA.ga('send', 'event', 'site_search', 'vocal_search', this.state.query ? this.state.query : "Empty query")
    }
  } else {
    this.recognition.stop()
    this.recognition.onend = () => {
      console.log('Stopped Mic on Click')
    }
  }
  this.recognition.onstart = () => {
    console.log('Mics on')
  }

  this.recognition.onresult = event => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
    this.setState({
      query: transcript
    })
    this.setQuery({target:{value: transcript}})
    this.recognition.onerror = event => {
      console.log(event.error)
    }
  }
}

  setTabIndex(index){
    this.setState({
      tabIndex: index
    })
  }

  
/**
 * Display the whole page. You can change the templates's name in here
 * @returns
 */
  render() {
    return (
      <div>
        {
          configuration.menu.linkMenu !== "" ?
          <Menu/>
          : null
        }
        <div id={configuration.menu.menuDivId}></div>
        <div className="PageSearch">
        <div className="container">
        <form className="SearchForm" action="">
        <div className="SearchForm-inputWrapper">
            <input type="text" className="SearchForm-input" value={this.state.query} onChange={(e) => {this.setQuery(e)}}/>
            <div className="SearchForm-inputButton">
                <span onClick={this.clearQuery.bind(this)} className="SearchForm-inputClear" style={{display: this.state.query !== "" ? "block" : "none"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <path fillRule="evenodd" d="M29.732 25.462l-5.337-5.336 5.337-5.337a1.51 1.51 0 0 0 0-2.135l-2.135-2.134a1.51 1.51 0 0 0-2.135 0l-5.336 5.336-5.337-5.336a1.51 1.51 0 0 0-2.135 0l-2.134 2.134a1.51 1.51 0 0 0 0 2.135l5.336 5.337-5.336 5.336a1.51 1.51 0 0 0 0 2.135l2.134 2.135c.59.59 1.546.59 2.135 0l5.337-5.337 5.336 5.337c.59.59 1.546.59 2.135 0l2.135-2.135a1.51 1.51 0 0 0 0-2.135"></path>
                  </svg>
                </span>
                {
                  navigator.userAgent.indexOf("Chrome") !== -1 ?
                  <span id="micro" className="SearchForm-inputMicro" onClick={this.microClicked.bind(this)} style={{fill: this.state.listening ? "green" : "black"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                      <path fillRule="evenodd" d="M32.875 22.4a1.12 1.12 0 0 0-1.125 1.114v1.115c0 3.692-3.022 6.685-6.75 6.685s-6.75-2.993-6.75-6.685v-1.115a1.12 1.12 0 0 0-1.125-1.114A1.12 1.12 0 0 0 16 23.514v1.115c-.002 4.499 3.382 8.294 7.89 8.847v2.295h-2.64c-.828 0-1.5.666-1.5 1.486V38h10.5v-.743c0-.82-.672-1.486-1.5-1.486h-2.64v-2.295c4.508-.553 7.893-4.348 7.89-8.847v-1.115a1.12 1.12 0 0 0-1.125-1.114zM25 12c-2.9 0-5.25 2.328-5.25 5.2v7.429c0 2.871 2.35 5.2 5.25 5.2s5.25-2.329 5.25-5.2V17.2c0-2.872-2.35-5.2-5.25-5.2zm-3.75 9.657V17.2c0-2.051 1.679-3.714 3.75-3.714 2.071 0 3.75 1.663 3.75 3.714v4.457h-7.5z"></path>
                    </svg>
                  </span>
                : null
                }
            </div>
        </div>
        <button type="submit" className="SearchForm-submit btn btn-primary">
            <span>
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.766 6.125a6.64 6.64 0 1 0 0 13.281 6.64 6.64 0 0 0 0-13.281M27.77 26.597l-1.174 1.174a.784.784 0 0 1-1.105 0l-7.055-7.055a9.721 9.721 0 0 1-5.671 1.815A9.764 9.764 0 0 1 3 12.766 9.766 9.766 0 0 1 12.766 3c5.393 0 9.765 4.372 9.765 9.766a9.72 9.72 0 0 1-1.815 5.671l7.055 7.055a.784.784 0 0 1 0 1.105" fillRule="evenodd"></path>
              </svg>
            </span>
            {configuration.label.searchButton}
        </button>
        </form>

      <div className="TopTendances">
        <h2 className="TopTendances-title">{configuration.label.topTrends}</h2>
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
          <ul className="TopTendances-items swiper-wrapper SearchTabs">
            <ScrollContainer vertical={false} className="scroll">
          {
            this.state.suggest.slice(0, 6).map((suggest, i) => {
                return(
                <li className="SearchTabs-item" key={i} onClick={() => this.suggestCliked(suggest.query)}>{suggest.query}</li>
                )
            })
          }
          </ScrollContainer>
          </ul>
        </div>
        <div className="SearchDetails" style={{display: "block"}}>
          <span className="SearchDetails-count">{this.state.count}</span> {configuration.label.resultsFor} «&nbsp;<span className="SearchDetails-keyword">{this.state.query}</span>&nbsp;»
        </div>
    </div>
      
        <Tabs direction={configuration.direction} selectedIndex={this.state.tabIndex} onSelect={index => this.setTabIndex(index)}>
          <TabList>
            <div className="SearchTabs-container">
              <div className="SearchTabs swiper-container swiper-container-initialized swiper-container-horizontal">
                <ul className="SearchTabs-list swiper-wrapper">
                  <ScrollContainer vertical={false} className="scroll">
                    {
                      configuration.indices.map((indices, i) => {
                        if(indices.template !== "Suggestion" ){
                          return(<Tab key={i} disabled={window['nbHits'+i] === 0 ? true : false} selectedClassName="selected" className="SearchTabs-item" style={{color: window['nbHits'+i] === 0 ? "#ddd" : "#000", cursor: window['nbHits'+i] === 0 ? "not-allowed" : "pointer"}}>{indices.tabTitle} <span id={"count"+i} className="SearchTabs-resultsCount"> ({window['nbHits'+i]})</span></Tab>)
                        }
                        return true;
                      })
                    }
                    </ScrollContainer>
                </ul>
              </div>
            </div>
          </TabList>
          {
            configuration.indices.map((indices, i) => {
              if(indices.template === "Product"){
                return(
                  <TabPanel key={i}>
                    <Product clickPosition={this.getPosition.bind(this)} callback={this.getFilter.bind(this)} hits={this.state[`hits${i}`]} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow} index={indices.indiceKey} select={indices}/>
                  </TabPanel>
                )
              }else if(indices.template === "Video"){
                return(
                  <TabPanel key={i}>
                    <Video clickPosition={this.getPosition.bind(this)} hits={this.state[`hits${i}`]} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                  </TabPanel>
                )
              }else if(indices.template === "Assistance"){
                return(
                  <TabPanel key={i}>
                    <Assistance clickPosition={this.getPosition.bind(this)} hits={this.state[`hits${i}`]} contentMaxWords={indices.contentMaxWords} title={indices.title} hitsToShow={indices.hitsToShow}/>
                  </TabPanel>
                )
              }else if(indices.template === "Brand"){
                return(
                  <TabPanel key={i}>
                    <Brand clickPosition={this.getPosition.bind(this)} hits={this.state[`hits${i}`]} title={indices.title} hitsToShow={indices.hitsToShow}/>
                  </TabPanel>
                )
              }
              return true;
            })
          }
          
        </Tabs>
        </div>
        </div>
        <div id={configuration.menu.footerDivId}></div>
      </div>
    )
  }

}

export default SearchPage;