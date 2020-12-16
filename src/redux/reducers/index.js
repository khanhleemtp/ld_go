import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import learnReducer from './learnReducer';
import lessonReducer from './lessonReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    learn: learnReducer,
    lesson: lessonReducer,
})