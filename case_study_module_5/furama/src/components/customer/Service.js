import axios from 'axios';



const URL = "http://localhost:8000/customers?_start=0&_end=5"


export const getAll = async () => {
    try {        
        return (await axios.get(URL)).data
    } catch (error) {
        console.log(error);
    }
}

