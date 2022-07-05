import React from 'react';
import { Link } from 'react-router-dom';
//import Customers from '../customers/customers';
//import Transaction from '../Transaction/Transaction';
import './Header.css';
export default function Header(props){
  // const [isActive, setActive] = React.useState(false);
  // function openMenu(){
  //   console.log('clicked', isActive);
  //   setActive(!isActive);
  // };
  return(
    <div className="header">
      <div id="navigation" >
        <div className="wsmobileheader clearfix">
          <div id="wsnavtoggle" className="animated-arrow" onClick={props.openMenu}><div className="relative"><span></span><span></span><span></span><span></span></div></div>
        </div>
        <div className="wsmain">
          <div className="wsmenu">
            <nav role="navigation">
            
    
            <ul>
              <li><Link to="/" onClick={props.openMenu}>Dashboard</Link></li>      
              <li><Link to="/customer" onClick={props.openMenu}>Customer</Link></li>
              <li><Link to="/transaction" onClick={props.openMenu}>Transaction</Link></li>
              <li><Link to="/collection" onClick={props.openMenu}>Collection</Link></li>
            </ul>
    
  
            </nav>
          </div>
          <div className="overlap" onClick={props.openMenu}></div>
        </div>
      </div>
    </div>
  )
}

