import './App.css';
import {Routes,Route} from 'react-router-dom';
// import Header from './components/header/header';
// import SignUp from './components/signup/signup';
// import Login from './components/login/login';
import Product from './components/product/product';
import LoginArea from './components/login/loginarea';
import FruitList from './components/product/fruits/fruitlist';
import MasalaList from './components/product/masala/masalalist';
import FoodgrainList from './components/product/foodgrains/foodgrainlist';
import AppContext from './context';
import { useState } from 'react';
import CartItem from './components/cartitem/cartItem';
import Slideshow from './components/slider/slider'
import HaircareList from './components/product/haircare/haircarelist';
import Delivery from './components/images/delivery.jpg'


function App() {
  const [cartItem, setCartItem] = useState([]);

const addCartItem = (data)=>{
  setCartItem((prev)=>{
    return [data,...prev]
  });
}
  return (
    <div className="App">
      <AppContext.Provider value={{cartItem, addCartItem}}>
       <LoginArea/>
       <Slideshow/>
       <Product/>
      <Routes>
        <Route path='/Fruits' element={<FruitList/>}></Route>
        <Route path='/CoolDrinks' element={<FoodgrainList/>}></Route>
        <Route path='/Staples' element={<MasalaList/>}></Route>
        <Route path='/Snacks' element={<HaircareList/>}></Route>
        <Route path='/cart' element={<CartItem/>}></Route>
      </Routes>
      <img src={Delivery} width={1365}/>
      <div className='p'>
      <p>Copyrights</p>
      <p>Presented By PrakashPraveen7</p>
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
