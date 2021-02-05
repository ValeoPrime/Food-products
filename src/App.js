// import logo from "./logo.svg";
import "./App.sass";
import ProductCategory from './components/productCategory/ProductCategory';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
        <ProductCategory/>
    </div>
  );
}

export default App;
