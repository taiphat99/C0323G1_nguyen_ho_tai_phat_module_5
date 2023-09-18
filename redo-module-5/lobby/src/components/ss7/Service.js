import axios from "axios";

export const getAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts');
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const adding = async (blog) => {
    try {
        await axios.put('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts', blog)
    } catch (error) {

    }
}