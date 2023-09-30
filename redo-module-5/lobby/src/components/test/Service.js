import axios from "axios"

export const getProducts = async (searchName, type) => {
    try {
        if (type !== '') {
            const res = await axios.get(`http://localhost:8080/products?name_like=${searchName}&type.id=${type}`);
            return res.data;
        }
        const res = await axios.get(`http://localhost:8080/products?name_like=${searchName}`);
        return res.data;

    } catch (error) {
        console.log(error);
    }
}

export const getTypes = async () => {
    try {
        const res = await axios.get('http://localhost:8080/types');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (product) => {
    try {
        await axios.post('http://localhost:8080/products', product)
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/products/${id}`)
    } catch (error) {
        console.log(error);
    }
}