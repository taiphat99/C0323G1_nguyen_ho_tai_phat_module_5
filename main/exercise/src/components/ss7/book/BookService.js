
import axios from 'axios';


export const getAll = async () => {
    try {
        const result = (await axios.get('http://localhost:8000/books')).data
        return result
    } catch (error) {
        console.log(error);
    }
};

export const addToList = async (book) => {
    try {
        await axios.post('http://localhost:8000/books', book)
    } catch (error) {
        console.log(error);
    }
}

