import axios from 'axios';


export const getAll = async (page, limit, searchName) => {
    const URL = `http://localhost:8080/customers?_page=${page}&_limit=${limit}&name_like=${searchName}`;

    try {
        const result = await axios.get(URL);
        const records = result.headers.get("x-total-count");
        const data = result.data;
        return [data, records];
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (values) => {
    try {
        await axios.post('http://localhost:8080/customers', values);
    } catch (error) {
        console.log(error);
    }
}


export const deleteCustomer = async (id) => {
    const URL = `http://localhost:8080/customers/${id}`
    try {
        await axios.delete(URL);
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerTypes = async () => {
    const URL = 'http://localhost:8080/customer_types'
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerById = async (id) => {
    const URL = `http://localhost:8080/customers/${id}`
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const editCustomer = async (customer) => {
    const URL = `http://localhost:8080/customers/${customer.id}`;
    try {
        console.log(customer);
        await axios.patch(URL, customer)
    } catch (error) {
        console.log(error);
    }
}