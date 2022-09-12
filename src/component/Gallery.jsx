import React from 'react';

function Gallery() {
    return (
        <>
           <img className="banner" src="board.jpg"></img>
            <div className=" foot">
                <h2 style={{ textAlign: "left" }}>How Much You Can Make</h2>
                <div className="row">
                    <input type="text" placeholder='Hours' />
                    <input placeholder='city' type="text" />
                    <button className="btn btn-warninggit ">Our Products</button>
                </div>
            </div>
        </>
    );
}

export default Gallery;