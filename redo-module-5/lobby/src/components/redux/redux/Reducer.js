import { GET_ALL } from '../redux/Action';
const initialState = {
    posts: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return { posts: action.payload };
        default:
            return state;
    }
}
export default rootReducer;