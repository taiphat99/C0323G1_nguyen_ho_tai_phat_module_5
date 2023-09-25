import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL, DELETE_POST } from '../redux/Action';

const BASE_URL = 'http://localhost:8080/posts';
function* getAll() {
    try {
        const result = yield axios.get(BASE_URL);
        yield put({ type: GET_ALL, payload: result.data })
    } catch (error) {
        console.log(error);
    }
}

function* deletePost(action) {
    try {
        console.log(action);
        const newURL = BASE_URL + `/${action.payload}`
        yield axios.delete(newURL);
        console.log('del');
        yield call(getAll);
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_ALL, getAll);
    yield takeLatest(DELETE_POST, deletePost)
}