
import axios from 'axios';


export const getAll = async () => {
    try {
        const result = (await axios.get('http://localhost:8000/tasks')).data
        return result
    } catch (error) {
        console.log(error);
    }  
};

export const addToDoList = async(task) => {

    try {
     await axios.post('http://localhost:8000/tasks',task)
    } catch (error) {
        console.log(error);
    }
}
