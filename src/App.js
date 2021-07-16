import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function kelvinToFarienheit(temp){
  temp = (temp - 273.15) * 9/5 + 32;
  temp = temp.toFixed(1);
  return temp;


}

function Weather() {

  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState(null)
  
  
  const fetchWeather = async (event) => {
    event.preventDefault()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target[0].value},us&APPID=6a3a8ab31b4ba456f41f09e629f5be1f`;
    const response = await axios.get(url)
    console.log(response);
    const data = response.data;
    
    // console.log(data);
   
    setWeather(data.main);
    setCity(data.name)
  
    console.log("This is some new code change that works")

  
   
  };
  console.log(weather)

  const message = city ? <div>Current temperature in {city}</div> : <div>Please enter a zip code!</div>
  return ( 
   
    
      <h1 className = "weather">
       
        <div>Temp: {kelvinToFarienheit(weather.temp)}</div>
        <div>Low:  {kelvinToFarienheit(weather.temp_min)}</div>
        <div>High: {kelvinToFarienheit(weather.temp_max)}</div>
        <div> <form onSubmit={fetchWeather}><input
        name="Search..." 
        type="text" 
        />
        </form> </div>
        {
          message
        }
     
      
    </h1>
             
//   <div>{JSON.stringify(weather.description)}</div>
  );
 
}

export default Weather;
