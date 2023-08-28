
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

export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/books/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8000/books/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async (book) => {
    try {
        await axios.put(`http://localhost:8000/books/${book.id}`,book);

    } catch (error) {
        
    }
}


