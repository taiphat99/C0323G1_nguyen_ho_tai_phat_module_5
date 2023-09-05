import axios from 'axios';

export const getAll = async (searchName, page, limit) => {
    const URL = `http://localhost:8080/cloths?searchName=${searchName}&page=${page}&limit=${limit}`;

    try {
        const result = await axios.get(URL);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getTypes = async () => {
    const URL = `http://localhost:8080/types`;

    try {
        const result = await axios.get(URL);
        return result.data.content;
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    const URL = `http://localhost:8080/cloths/${id}`;
    try {
        const result = await axios.get(URL);
        console.log(result);
        return result.data.content;
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async (product) => {
    const URL = `http://localhost:8000/cloths/${product.id}`
    try {
        await axios.put(URL, product);
    } catch (error) {
        console.log(error);
    }
}

