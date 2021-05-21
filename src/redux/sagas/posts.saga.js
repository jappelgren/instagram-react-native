import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


function* addPost(action) {
    try {
        const newPost = action.payload;
        const preSignedUrl = yield axios.get('/api/preSigned', newPost.url)
        yield axios.put(preSignedUrl, newPost.url)
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