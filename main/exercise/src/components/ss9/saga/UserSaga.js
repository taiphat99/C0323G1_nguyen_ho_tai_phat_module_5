import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  DELETE_USER
} from "../redux/Action";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function* getUser() {
  // console.log(5);
  try {
    const response = yield axios.get(BASE_URL
    );
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
    const newURL = BASE_URL
   + `/${action.payload}`;
    const object = yield axios.delete(newURL);
    yield call(getUser);

    alert(object.status);
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