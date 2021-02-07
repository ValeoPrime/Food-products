// import logo from "./logo.svg";
import "./App.sass";
import { NavLink } from "react-router-dom";

function App({ children }) {
  return (
    <div className="App">
      <div className="App__message">
        <div className="App__message__title">
          Этот компонент создан для связывания и навигации между компонентом
          товара и корзины.
        </div>
        <div className="App__links">
          <NavLink to="/product" className="link">
            Продукт
          </NavLink>
          <NavLink to="/cart" className="link">
            Корзина
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
