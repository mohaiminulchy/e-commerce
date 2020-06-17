import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/notFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop' component={Shop}></Route>
          <Route path='/review' component={Review}></Route>
          <Route path='/inventory' component={Inventory}></Route>
          <Route exact path='/' component={Shop}></Route>
          <Route path='/product/:productKey'>
            <ProductDetail />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
