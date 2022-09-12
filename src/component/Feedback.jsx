import React from 'react';
function Feedback() {
    return ( 
        <>
          <>
        <img className="banner" src="board2.jpg" ></img>
        <div className="foot">
        <h2 style={{textAlign:"left"}}>How Much You Can Make</h2>
        <div className="row">
            <input type="text" placeholder='Hours' />
            <input placeholder='city' type="text" />
            <button className="btn btn-info">CALCULATE</button>
        </div>
        </div>
        </>
        </>
     );
}

export default Feedback;