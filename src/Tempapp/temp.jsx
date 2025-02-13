import React, { useEffect, useState } from "react";
import "./css/style.css";
 const Tempapp = () =>  {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect  (()=>{
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4999dda8cf63d1eec1b92ecd49bd8f1f `
             const response = await fetch(url);
            const resjson =  await response.json();
            //  console.log(resjson);
            setCity(resjson.main);



        };



        fetchApi();

    } ,[search])







    return(
        <>
       <div className="weather-box">
    <div className="inputdata">
        <input type="search"  value={search }className="inputfield" placeholder="Enter location" onChange={(Event) =>{ setSearch(Event.target.value) }} />
    </div>
  {!city ? (
    <p className="errorMsg">no data found</p>
  ) : (
    <div>
    <div className="info">
    <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
    <h1 className="temp">{city.temp}°Cel</h1>
    {/* <h3 className="temp_max">Min: { city.temp_min}°Cel || Max:{ city.temp_max}°Cel </h3> */}
</div>

<div className="wave -one"></div>
<div className="wave -two"></div>
<div className="wave -three"></div>
</div>
  )}
    
</div>


        </>
    )
 }
 export default Tempapp;