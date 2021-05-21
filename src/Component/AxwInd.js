import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './style.css';

const AxwInd = () => {
   const[temperature,setTemperature]=useState("");
   const[humidity,setHumidity]=useState("")  
   const[city,setCity]=useState("");
   const[description,setDescription]=useState("")
   const[country,setCountry]=useState("")
   const getweatherData=(city)=>{ 
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f947f7e94f4456388049aaab1737b815`).then(response=>{
        console.log(response.data.main.temp)
       setTemperature(response.data.main.temp -273.15)
       setHumidity(response.data.main.humidity)
       setDescription(response.data.weather[0].description)

 })
    .catch(er=>console.log(er))
    
}
    
    return ( <div className='weather'>
    <img src='/weather.jpg'></img>
    <div>
    <p>COUNTRY: {country}</p>
    <p>City: {city}</p>
   <p>Temperature: {Math.floor (temperature)}°C</p>
   <p>Humidity: {humidity}</p>
   <p>Description: {description}</p>
   <div className='inputs'>
    <input type='text' class='input'  placeholder='City ...'  value={city}onChange={(e)=>setCity(e.target.value)}/>
    <input type='text' class='input' placeholder='Country ...' value={country}onChange={(e)=>setCountry(e.target.value)}/>
    </div></div>
    <div >
   <button onClick={()=>{
       getweatherData(city);
   }}>GET</button></div>


   </div> 
)
}
export default AxwInd