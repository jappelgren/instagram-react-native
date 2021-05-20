import { combineReducers } from 'redux';
import user from './user.reducer';
import error from './error.reducer';
import picture from './picture.reducer';


const rootReducer = combineReducers({
    user,
    error,
    picture
});

export default rootReducer;