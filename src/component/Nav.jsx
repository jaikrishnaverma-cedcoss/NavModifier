import React from 'react';
import './../BaseUI.css'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';
function Nav() {
    const [navstyle,setNavStyle]=useState(true)
    const NavlinkStyles=(flag)=>{
        if(flag)
         setNavStyle(false)
         else{
         setNavStyle(true)
         }
         return ""
     }
     if(navstyle)
     {
    return ( 
        <>
 <div className="nav" >
 <img src="logo.png" alt=""/>
 <div className="row">
 <button className='btn' ><NavLink onClick={()=>NavlinkStyles(false)} to='/'>Home</NavLink></button>
 <button className='btn'><NavLink onClick={()=>NavlinkStyles(true)} to='/Products'>Our Products</NavLink></button>
 <button className='btn'><NavLink onClick={()=>NavlinkStyles(true)} to='/Contact'>Contact Us</NavLink></button>
 </div>
 </div>
        </>
     );
    }
    else{
        return (    <>
        <div className="nav navSmall">
        <img src="logo.png" alt=""/>
        <div className="row">
        <button className='btn' ><NavLink onClick={()=>NavlinkStyles(false)}to='/'>Home</NavLink></button>
        <button className='btn'><NavLink onClick={()=>NavlinkStyles(true)} to='/Products'>Our Products</NavLink></button>
        <button className='btn'><NavLink onClick={()=>NavlinkStyles(true)} to='/Contact'>Contact Us</NavLink></button>
        </div>
        </div>
               </>);

    }
}

export default Nav;