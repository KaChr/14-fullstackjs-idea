// Import from redux
import { combineReducers } from 'redux';
// Import reducers
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

// Combine reducers
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  user: userReducer
});
