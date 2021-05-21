import { all } from 'redux-saga/effects';
import postsSaga from './posts.saga';
import user from './user.saga';

export default function* rootSaga() {
    yield all([
        postsSaga(),
        user()
    ]);
}