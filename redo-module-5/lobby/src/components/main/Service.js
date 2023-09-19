import axios from "axios"

export const getPosts = async () => {
    try {
        const result = await axios.get('http://localhost:8000/posts');
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const add = async (target) => {
    try {
        await axios.post('http://localhost:8000/posts', target)
    } catch (error) {
        console.log(error);
    }
}

export const getCategories = async () => {
    try {
        const result = await axios.get('http://localhost:8000/categories');
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const editPost = async (target) => {
    try {
        await axios.patch('http://localhost:8000/posts', target)
    } catch (error) {
        console.log(error);
    }
}