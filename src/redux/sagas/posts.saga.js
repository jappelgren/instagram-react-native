import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


function* addPost(action) {
    try {
        const newPost = action.payload;
        yield axios.post('/api/posts', { newPost });
        // yield put({ type: 'FETCH_FEED' });
    } catch (error) {
        console.log('error in the saga adding new post', error);
    }
}

function* postsSaga() {
    yield takeEvery('ADD_A_POST', addPost);
}

export default postsSaga;