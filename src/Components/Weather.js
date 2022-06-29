import React, {useEffect, useState} from 'react'

import WeatherAction from "./action/WeatherAction"
export default function Weather() {
    const [value, setValue] = useState();
    const [status, setStatus] = useState();
    const [temp, setTemp] = useState();
    // useEffect(() => {
    //     getWeatherData();
    // }, [])

    const getWeatherData = async(e) => {
        e.preventDefault();
    
       const weatherData = await WeatherAction.getWeather(value)
       const {data , status} = weatherData;
       setStatus(status)
       let tempFar = data?.main?.temp;
       console.log(data)
       let tempCelsius = tempFar
       setTemp(tempCelsius);   
    }

    const handleChange = (e) => {
      setValue(e.target.value);
    }

    return (
        <div className="container">
            <h4 className="my-4">Search weather : {temp}</h4>
            <form onSubmit={getWeatherData}>
            <div className="mb-3">
                <label htmlFor="cityname" className="form-label">Enter City</label>
                <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        </div>
    )
}
