import moment from "moment";

// Format YYYY-MM-DD => DD/MM/YYYY
export const formatDate = (string) => {
    let array = string.split('-');
    let day = new Date(array[0], array[1] - 1, array[2]);
    let result = moment(day).format('DD/MM/YYYY');
    return result;
}

// Format DD/MM/YYYY => YYYY-MM-DD
export const formatDatePlus = (string) => {
    let array = string.split('/');
    let result = array[2] + '-' + array[1] + '-' + array[0];
    return result;
} 
