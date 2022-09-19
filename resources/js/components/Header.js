import React from "react";
import {Link} from "react-router-dom";
 function Header () {
    const pageUrl = [
        {
            "name":"Home","url":"/",
        },
        {
            "name":"About","url":"/about",
        },
        {
            "name":"Blog","url":"/blog",
        },
        {
            "name":"Contact","url":"/contact",
        }
    ];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <Link to="/" className="navbar-brand">Laravel</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        pageUrl.map((page, key) => {
                            return (
                                <li key={key}>
                                    <Link to={page.url} className="nav-link">{page.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}
export default Header;