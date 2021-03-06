import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // is logged in
    const isLogged = isLoggedIn();

    // sign out button Handle 
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/home">Fast Ride</a>
            <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav fw-bold ms-auto">
                    <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                        <p className="nav-link text-dark">Home </p>
                    </li></Link>
                    <li className="nav-item mr-3 p-1">
                        <a className="nav-link text-dark" href="/destination/:veh">Destination</a>
                    </li>
                    <li className="nav-item mr-3 p-1">
                        <a className="nav-link text-dark" href="/home">Blog</a>
                    </li>
                    <li className="nav-item mr-3 p-1">
                        <a className="nav-link text-dark" href="/home">Contects</a>
                    </li>
                    {
                        loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn bg-secondary mb-2" onClick={signOut}> {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                        <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn bg-secondary mt-2">Sign In</button></Link>
                    }       
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;