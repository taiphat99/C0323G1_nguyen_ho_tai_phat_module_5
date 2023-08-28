import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  DELETE_USER
} from "../redux/Action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
  // console.log(5);
  try {
    const response = yield axios.get(BaseURL);
    console.log(response);
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* authSagaFun(action) {
  // console.log(3);
  console.log(action);
  const user = action.payload;
  if (user.username === "admin" && user.password === "letmein") {
    yield put({ type: LOGIN_SUCCESS, payload: user });
    yield put({ type: FETCH_USER, payload: {} });
  }
}

function* deleteUser(action) {
  try {
    // console.log(7)
    console.log(action);
    const newURL = BaseURL + `/${action.payload}`;
    const status = yield axios.delete(newURL);
    alert(status.status);
  } catch (e) {
    console.log('delete function : ' + e);
  }
}


export default function* rootSaga() {
  // console.log(2);
  yield takeLatest(LOGIN, authSagaFun);
  yield takeLatest(FETCH_USER, getUser);
  yield takeLatest(DELETE_USER, deleteUser);
}