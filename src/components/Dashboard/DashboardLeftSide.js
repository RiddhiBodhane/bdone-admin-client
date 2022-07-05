import React from "react";
import { Link } from 'react-router-dom';
import "./dashboard.css";
import dashboardIcon from "../../images/dashboard.png";
import customerIcon from "../../images/customer.png";
import transactionIcon from "../../images/transaction.png";
import collectionIcon from "../../images/collection.png";

export default function DashboardLeftSide(){
  return(
    <div className="dashboardView">
      <div className="leftSide">
        <div className="leftSideListing">
          <ul>
          <li><Link to="/" ><img src={dashboardIcon} alt="DashboarIcon"/>Dashboard</Link></li>
            <li><Link to="/customer"><img src={customerIcon} alt="CustomerIcon"/>Customer</Link></li>
            <li><Link to="/transaction"><img src={transactionIcon} alt="transactionIcon"/>Transaction</Link></li>
            <li><Link to="/collection"><img src={collectionIcon} alt="collectionIcon"/>Collection</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}