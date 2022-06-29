import axios from "axios"

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "1eef195e3a5c0820a311deedd4bba6a8"
const getWeather = async (city) => {
   
    try {
       const res = await axios.post(`${baseUrl}?q=${city}&appid=1eef195e3a5c0820a311deedd4bba6a8`);
 //      console.log(res)
       return res;
    } catch(err) {
        console.log(err)
    }
}

export default { getWeather}