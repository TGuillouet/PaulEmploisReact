import React from 'react';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';

/* StyleSheet */
import './../Styles/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="page">
                    <div className="homeSearch">
                        <input type="text" placeholder="Recherche..." />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className="tagsContainer">
                    <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Alternance
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        <Link to="/" className="homeLink blue">
                            Stage
                            <span className="badge">9</span>
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;