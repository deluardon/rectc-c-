

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Country from './componets/Country';
function App() {
  const [country,setCountry]=useState([])
  console.log(country);

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
     .then(res=>res.json())
     .then(data=>setCountry(data))
  },[])
  return (
  <>
 <div className='grid grid-cols-3 gap-8'>
 {

country.map(country=><Country key={country.id} country={country}></Country>)

}
 </div>
  <h1>Hello Wrold</h1>
  <h1 className='pt-3'>country:  {country.length}</h1>
  </>
   
  )
}

export default App
