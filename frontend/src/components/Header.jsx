import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header(){

    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><Link to="/Mof">MoF</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header;