import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";


function* addPost(action) {
    try {;
        const preSignedUrl = yield axios.get('/api/signedUrl', action.payload.newPost.url);
        yield put({ type: 'SET_PRESIGNED', payload: preSignedUrl });
        yield axios.put(preSignedUrl, action.payload.newPost.url);
        console.log('whatup');
        // yield axios.post('/api/posts', { newPost });
        // yield put({ type: 'FETCH_FEED' });
    } catch (error) {
        console.log('error in the saga adding new post', error);
    }
}

export default function* postsSaga() {
    yield takeLatest('ADD_A_POST', addPost);
}

