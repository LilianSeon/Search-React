import React, {Component} from 'react';

const configuration = require('./AlgoliaConf');

/**
 * Menu component, Display a Menu/Footer from a JS file.
 */
class Menu extends Component{


    /**
     * Create <script> with the configuration for the menu/footer. And import the JS file menu loader.
     * @public
     */
    componentDidMount () {
        const scriptConf = document.createElement("script");
        scriptConf.type = 'text/javascript';
        scriptConf.async = true;
        scriptConf.innerText = 'var mosseConf = {'+configuration.menu.mosseConf+'};';
        this.instance.appendChild(scriptConf);

        const scriptMenu = document.createElement("script");
        scriptMenu.src = configuration.menu.linkMenu;
        scriptMenu.async = true;
        document.body.appendChild(scriptMenu);
    }

    render(){
        return(
            <div ref={el => (this.instance = el)} />
        )
    }


}

export default Menu;