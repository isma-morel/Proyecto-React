
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import { ItemListContainer } from './assets/components/itemlistcontainer/ItemListContainer';
import { NavBar } from './assets/components/navbar/NavBar';


function App() {

  const [productNumber, setProductNumber] = useState(1)

  const nextProduct = () => setProductNumber(productNumber + 1)
  return (
    <>
      <NavBar/>
      <ItemListContainer click={nextProduct} num={productNumber}/>
    </>
  );
}

export default App;
