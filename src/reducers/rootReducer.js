import { combineReducers } from 'redux';
import authReducer from './authReducer';
import danhMucReducer from './danhMucReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	dm: danhMucReducer
});
export default rootReducer;
