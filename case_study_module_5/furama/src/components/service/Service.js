import axios from 'axios';



const URL = "http://localhost:8000/services"


export const getAll = async () => {
    try {        
        return (await axios.get(URL)).data
    } catch (error) {
        console.log(error);
    }
}

