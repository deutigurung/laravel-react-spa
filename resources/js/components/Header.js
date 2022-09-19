import React ,{ useEffect } from "react";
import {Link ,useLocation} from "react-router-dom";
 function Header () {
    const location = useLocation();
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
    //useEffect is similar to componentDidMount and componentDidUpate
    useEffect(() => {
        pageUrl.map((page)=>{
            if(page.url == location.pathname) {
                document.title = page.name;
            }
        });
    }, [])
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/" className="navbar-brand">Laravel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
 
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {
                        pageUrl.map((page, key) => {
                            return (
                                <li key={key} className="nav-item">
                                    <Link to={page.url} className={`nav-link ${location.pathname == page.url ? 'active' : ''}`}>{page.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </nav>
        </div>
    );
}
export default Header;