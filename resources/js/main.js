import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blog" element={<Blog/>}/>
                <Route element={<NotFound/>}/>

            </Routes>
        </BrowserRouter>
    );
}
export default Main;
if(document.getElementById('app')){
    ReactDOM.render(<Main></Main>,document.getElementById('app'));
}