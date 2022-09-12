import React from 'react';
function Home() {
    return ( 
        <>
        <img className="banner" src="cd.jpg" ></img>
        <div className="foot">
        <h2 style={{textAlign:"left"}}>How Much You Can Make</h2>
        <div className="row">
            <input type="text" placeholder='Hours' />
            <input placeholder='city' type="text" />
            <button className="btn btn-danger">CALCULATE</button>
        </div>
        </div>
        
        </>
     );
}

export default Home;