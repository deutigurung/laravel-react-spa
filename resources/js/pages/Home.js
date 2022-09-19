import React from 'react'
import Layouts from "../components/Layouts"
import Header from '../components/Header'
import Banner from '../components/Banner'
import banner1 from "../img/banner-1.jpg";

  
function Home() {
 
    return (
        <Layouts>
            <Header/>
            <Banner></Banner>
            <div className="container px-4" id="featured-3">
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="award"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="briefcase"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="command"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="flag"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="gift"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                        <i data-feather="heart"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                    
                </div>
            </div>
            <div className="cover-container px-3" style={{  backgroundImage: `url("${banner1}")` }}>
                <h1>Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </div>
        </Layouts>
    );
}
  
export default Home;;