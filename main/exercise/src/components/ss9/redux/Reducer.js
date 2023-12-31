import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./Action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = {
  users: [],
  userlogined: {}
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {

  // Handle các actions gửi lên
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(4);
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default rootReducer;