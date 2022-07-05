import React from "react";
import "./dashboard.css";
import customerIcon from "../../images/customer.png";
import transactionIcon from "../../images/transaction.png";
import collectionIcon from "../../images/collection.png";
import DashboardGraph from "./DashboardGraph";

export default function DashboardRightSide(){
  return(
    <div className="DashboardRightSide">
        <div className="allListingBox">
          <div className="listingBox">
            <div className="boxImg"><img src={customerIcon} alt="Customer Icon" /></div>
            <div className="boxData">
              <h3>Customer</h3>
              <span className="boxAmountOrCount">34562</span>
            </div>
          </div>
          <div className="listingBox">
            <div className="boxImg"><img src={transactionIcon} alt="Transaction Icon" /></div>
            <div className="boxData">
              <h3>Transaction</h3>
              <span className="boxAmountOrCount">34562</span>
            </div>
          </div>
          <div className="listingBox">
            <div className="boxImg"><img src={collectionIcon} alt="Collection Icon" /></div>
            <div className="boxData">
              <h3>Collection</h3>
              <span className="boxAmountOrCount">34562</span>
            </div>
          </div>
          <div className="listingBox">
            <div className="boxImg"><img src={customerIcon} alt="Customer Icon" /></div>
            <div className="boxData">
              <h3>Pending</h3>
              <span className="boxAmountOrCount">34562</span>
            </div>
          </div>
        </div>
        <div className="graphListing" id="graphListing">
          <DashboardGraph />
        </div>
    </div>
  )
}