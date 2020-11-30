import React, {Component} from 'react';

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <header role="banner">
                <nav role="navigation" className="navbar navbar-dark navbar-expand-md">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="https://boosted.orange.com/docs/4.5/dist/img/orange_logo.svg" alt="Back to homepage" title="Back to homepage" width="50" height="50" loading="lazy"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsing-navbar" aria-controls="collapsing-navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-between collapse" id="collapsing-navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" href="#" aria-current="page">Discover</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">My Orange</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-icon svg-buy">
                                        <span className="sr-only">open basket</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link nav-icon svg-search">
                                        <span className="sr-only">open search bar</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }


}

export default Menu;