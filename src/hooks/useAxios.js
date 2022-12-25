import {useState, useEffect} from "react"
import axios from "axios"

// const dotenv = require('dotenv')

// dotenv.config({path: './../../config.env'})
// console.log(process.env.REACT_URL)

const makeRequest = axios.create({
    baseURL: process.env.REACT_URL || 'http://localhost:3000/',
    headers: {
        "Authorization": "Bearer 6f77053714a32d3d7fd40d2244b0ff49fff8055ca84e0c507f89f21b324ad279848ec137daaf95b6d2a63e060dc03d707af43f199d10d13e24cd65dfc3595edc74880d20216a498ca64baec368e1aba6539897540a97741bac3f1ad6757e172086491058cb09f90e48d878a65d92980ccd615b73efdcb97f912e36ff3dfb91b6"
    },
})

const useAxios = (url) => {
    console.log("useAxiois")
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await makeRequest.get(url)
                setData(response?.data)
                setLoading(false)
            } catch(err) {
                console.log(err)
                setError(err)
            }
        }
        fetchData()
       
    },[url])
    return {data, loading, error}
}

export default useAxios;