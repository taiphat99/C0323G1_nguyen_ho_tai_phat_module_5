import axios from "axios";

export const getAll = async () => {
    try {

        const result = await axios.get('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts');
        console.log(result);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}