import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={banner} className="App-banner" alt="banner"/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/strains">Strains</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/edibles">Edibles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="http://example.com"
                                    id="dropdown01"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">Products</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;