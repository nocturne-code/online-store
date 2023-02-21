import './assets/style.scss'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages'
import { useEffect, useState } from 'react';
import Cart from './components/Cart'
import Footer from './components/Footer';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from './assets/firebase'
import Checkout from './pages/Checkout';

function App() {
  const [shopItems,setShopItems] = useState([]);
  const [cartItem, setCartItem]=useState([]);

  // get products from database
  const getProducts = async() =>{
    const q = query(collection(db, "products"))
    const products = await getDocs(q);
    const prodarr=[];
    for(var snap of products.docs){
      var data = snap.data();
      data.id = snap.id;
      prodarr.push({
        ...data
      })
      if(prodarr.length===products.docs.length){
        setShopItems(prodarr);
      }
    }
  }
  useEffect(()=>{
    getProducts();
  },[])

  // cart functions
  const addToCart = (product) =>{
    const productExist = cartItem.find((item)=>item.id === product.id)

    if(productExist){
      setCartItem(cartItem.map((item)=>(item.id === product.id?{...productExist, qty:productExist.qty+1}:item)))
    }else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  }

  const decreaseQty = (product)=>{
    const productExist = cartItem.find((item)=>item.id === product.id)
    if(productExist.qty ===1){
      setCartItem(cartItem.filter((item)=>item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item)=>(item.id===product.id?{...productExist, qty:productExist.qty-1}:item)))
    }
  }
  return (
    <>      
      <Router>
      <Header cartItem={cartItem}/>
        <Routes>
          <Route path='/' element={<Pages addToCart={addToCart} shopItems={shopItems}/>} exact/>
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} exact/>
          <Route path='/checkout' element={<Checkout cartItem={cartItem}/>} exact/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
