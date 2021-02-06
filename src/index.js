import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductCategory from './components/productCategory/ProductCategory';
import Cart from './components/cart/Cart';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/product" component={ProductCategory} exact/>
      <Route path="/cart" component={Cart} exact/>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
