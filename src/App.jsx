import { useRef, useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CountryCard from './components/CountryCard';

function App() {
const [country, setCountry] = useState();
const [search, setSearch] = useState('colombia');
const [hasError, setHasError] = useState(false);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
const url = `https://restcountries.com/v3.1/name/${search}`;

axios.get(url)
.then(res => {
  setHasError(false);
  setCountry(res.data[0]);

})
.catch(err => {
 setHasError(true);
console.log(err);
})
.finally(() => {
  // setTimeout(() =>{
    setIsLoading(false);
  // }, 2000);
  
});
}, [search]);

const textInput = useRef();

const handleSubmit = event => {
event.preventDefault();
 setSearch(textInput.current.value.toLowerCase().trim());
//  console.log(textInput.current.value.toLowerCase().trim());
}


  return (
    
      <div className='app'>
        <h1>Api de paises</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' ref={textInput}/>
          <button>Buscar</button>
        </form>
        <br/>
        {
          isLoading ? 
          <h2>Loading...</h2>
          :
        
          hasError ?
          <h2>{search} Este pais no existe</h2>
          :
          <CountryCard
        country={country}
         />
        }

        
        </div>
   
 
  )
}

export default App;
