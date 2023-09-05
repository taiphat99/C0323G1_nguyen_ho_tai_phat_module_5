import axios from 'axios';


export const getAll = async (page,limit, searchName) => {
    const URL = `http://localhost:8000/customers?_page=${page}&_limit=${limit}&name_like=${searchName}`;

    try {
        const result = await axios.get(URL);
        console.log(result);
        const records = result.headers.get("x-total-count");

        console.log(records);
        const data =  result.data;
        console.log(data);
        console.log(result,records);
        return [data,records];
    } catch (error) {
        console.log(error);
    }
}


export const deleteCustomer = async (id) => {
    const URL = `http://localhost:8000/customers/${id}`
    try {
        await axios.delete(URL);
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerType = async () => {
    const URL = 'http://localhost:8000/customer_type'
}
