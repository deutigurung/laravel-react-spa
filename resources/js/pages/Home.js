import React from 'react'
import Layouts from "../components/Layouts"
import Header from '../components/Header'
  
function Home() {
 
    return (
        <Layouts>
            <Header/>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Home Page</h2>
            </div>
        </Layouts>
    );
}
  
export default Home;;