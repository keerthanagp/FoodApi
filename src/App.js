import './App.css';
import SearchBar from './components/SearchBar';
import Receipe from './components/Receipe';
import { useState, useEffect } from 'react';
import logo from '../src/assets/foodlogo.png'
import Footer from './Footer';


const ApiUrl= "https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [receipe, setReceipe] = useState([]);

  const searchReceipe = async()=>{
    setLoading(true);
    const url = ApiUrl + query;
    const res = await fetch(url);
    const data = await res.json()
    setReceipe(data.meals);
    setLoading(false);

  };

useEffect(()=>{
searchReceipe()
},[])

const handleSubmit = event =>{
  event.preventDefault()
  searchReceipe()
}

  return (
    <>
    <div className='main'>
    <div className='navbar'>
     <h3>My Kitchen</h3>
     <img src={logo}/>
    </div>
   <div className="containerh">
   <h2>Welcome to our menu</h2>
   <SearchBar
    handleSubmit={handleSubmit}
    value={query}
    onChange={event =>setQuery(event.target.value)}
    loading={loading}/>
   <div className='receipe'>
   {receipe ? receipe.map(receipe => (
  <Receipe 
  key={receipe.idMeal}
  receipe={receipe}/>
 )) : "No Food found"}
   </div>
   </div>
   </div>
   <Footer/>
   </>
  )
 }

 

export default App;




