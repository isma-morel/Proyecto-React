
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import { ItemListContainer } from './assets/components/containers/ItemListContainer/ItemListContainer';
import { NavBar } from './assets/components/NavBar/NavBar';


function App() {

  const [productNumber, setProductNumber] = useState(1)

  const handleClick = () => setProductNumber(productNumber + 1)
  return (
    <>
      <NavBar/>
      <ItemListContainer click={handleClick} num={productNumber}/>
    </>
  );
}

export default App;
