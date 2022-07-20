import React, {useEffect, useState} from 'react'
import {debounce} from 'lodash';
import axios from "axios"

export default function Weather() {
    const [value, setValue] = useState(null);
    const [list, setList] = useState([]);
    const [status, setStatus] = useState();
    const [temp, setTemp] = useState();
    console.log(value)
    useEffect(() => {
        console.log("use effect called")
        if(value != null) {
            getData();
        }
    }, [value])

    const getData = async() => {
    
       const weatherData = await getList()
       const {data , status} = weatherData;
       setStatus(status)
       setList(data)  
    }

    const baseUrl = "https://jsonplaceholder.typicode.com/albums?search=";

    const getList = async (item) => {
        try {
        const res = await axios.get(`${baseUrl}${value}`);
        return res;
        } catch(err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const debouceFunc = debounce(() => setValue(e.target.value), 1000);  
        debouceFunc()
    }

    return (
        <div className="container">
            <h4 className="my-4">Search weather : {temp}</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="cityname" className="form-label">Enter City</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)}></input>
                    </div>
           </form>
           <div className="book-list">
                <ul>
                {list.map(item => (
                    <li key={item.id}> {item.title}</li>
                ))}
            </ul>
         </div>
        </div>
    )
}
