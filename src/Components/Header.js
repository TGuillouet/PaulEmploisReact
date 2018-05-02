import React from 'react';
//import ReactDOM from 'react-dom';
import logo from './../Imgs/ufo.png';

import { Link } from 'react-router-dom';
import './../Styles/Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.burgerOpen = false;
        this.needResizing = false;
    }

    componentDidMount() {
        document.getElementsByTagName("header")[0].style.minHeight = "50px";
        document.getElementsByTagName("header")[0].style.maxHeight = "50px";
        /* To avoid overriding of resize event */
        var addEvent = function (object, type, callback) {
            if (object == null || typeof (object) == 'undefined') return;
            if (object.addEventListener) {
                object.addEventListener(type, callback, false);
            } else if (object.attachEvent) {
                object.attachEvent("on" + type, callback);
            } else {
                object["on" + type] = callback;
            }
        };

        /* Check if the screen width is > 425px */
        /* addEvent(window, "resize", (evt) => {
             if (window.innerWidth <= 425) {
                 document.getElementsByTagName("ul")[0].style.display = "";
             }
             if (window.innerHeight < 400) {
                 document.getElementsByClassName("headerSearch")[0].style.position = "absolute";
             } else {
                 document.getElementsByClassName("headerSearch")[0].style.position = "";
             }
         }); */

        /*addEvent(window, "scroll", (evt) => {
            if (window.innerWidth <= 425) {
                document.getElementsByClassName("headerSearch")[0].style.display = "none";
            }
        });*/
    }

    clickOnBurger() {
        if (window.screen.width <= 425) {
            if (this.burgerOpen) {
                document.getElementsByTagName("header")[0].style.minHeight = "50px";
                document.getElementsByTagName("header")[0].style.maxHeight = "50px";
                document.getElementsByClassName("headerSearch")[0].style.display = "none";
            } else {
                document.getElementsByTagName("header")[0].style.minHeight = "240px";
                document.getElementsByTagName("header")[0].style.maxHeight = "240px";
                document.getElementsByTagName("ul")[0].style.display = "block";
                document.getElementsByClassName("headerSearch")[0].style.display = "flex";
            }
            this.burgerOpen = !this.burgerOpen;
        }
    }

    render() {
        return (
            <header>
                <img src={logo} className="logo" alt="Ufo" />
                <nav>
                    <ul>
                        <li><Link to="/" className="headerLink">Accueil</Link></li>
                        <li>Connexion</li>
                        <li><Link to="/" className="headerLink">Déposer un CV</Link></li>
                        <li><Link to="/" className="headerLink">Déposer une offre</Link></li>
                        <li><Link to="/" className="headerLink">Liste des offres</Link></li>
                    </ul>
                    <div className="headerSearch">
                        <input type="text" placeholder="Recherche..." />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </nav>
                <button className="burger" onClick={this.clickOnBurger.bind(this)}><i className="fa fa-bars"></i></button>
            </header>
        );
    }
}
export default Header;