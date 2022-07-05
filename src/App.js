import {React } from "react";

import './App.css';
import './css/style.css';
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./Pages/Customer";
import TransactionPage from "./Pages/Transaction";
import CollectionPage from "./Pages/Collection";
import DashboardRightSidePage from "./Pages/DashboardPage";
import DashboardLeftSide from "./components/Dashboard/DashboardLeftSide";

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <DashboardLeftSide />
      </div>
      <Routes>
        <Route path="/" element={<DashboardRightSidePage />}/>
        <Route path="/customer" element={<CustomerPage />} />
        {/* <Route path="/customer" component={CustomerPage} /> */}
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
