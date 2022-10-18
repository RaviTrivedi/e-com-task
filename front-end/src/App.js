import './App.css';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import SingleProduct from './SingleProduct';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product/:id' exact element={<SingleProduct />} />
      </Routes>

    </div>
  );
}

export default App;
