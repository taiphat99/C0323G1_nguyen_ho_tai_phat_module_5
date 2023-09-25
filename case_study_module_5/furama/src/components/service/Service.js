import axios from 'axios';



export const getAll = async (page, limit) => {
    try {
        const result = await axios.get(`http://localhost:8080/services?_page=${page}&_limit=${limit}`);
        console.log([result.data, result.headers.get('x-total-count')]);
        return [result.data, result.headers.get('x-total-count')];
    } catch (error) {
        console.log(error);
    }
}


