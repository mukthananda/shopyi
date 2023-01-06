
import React,{ useState,useEffect } from 'react';
import Navbar from './component/navbar';
import Cart from "./component/cart";
import Page from './component/page';




const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

   useEffect(() => {
    console.log("cart change");
 }, [cart])

 return (
  <React.Fragment>
    <Navbar setShow={setShow} size={cart.length} />
    {show ? (
      <Page handleClick={handleClick} />
    ) : (
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    )}
  </React.Fragment>
);
};


export default App;

