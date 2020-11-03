import {
	dangnhapRequestedAction,
	dangnhapSucceedAction,
	dangnhapFailedAction,
	dangxuatAction
} from '../actions/authAction';
import axios from 'axios';

export const dangnhapThunk = (user, history) => async (dispatch) => {
	try {
		dispatch(dangnhapRequestedAction());
		const res = await axios.post(`http://127.0.0.1:8000/api/dangnhap`, user);
		if (res.data.success) {
			const { token } = res.data;
			localStorage.setItem('jwtToken', JSON.stringify(token));
			dispatch(dangnhapSucceedAction(true, token));
			history.push('/');
		} else {
			dispatch(dangnhapFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(dangnhapFailedAction(err.message));
	}
};
export const dangxuatThunk = (history) => (dispatch) => {
	localStorage.removeItem('jwtToken');
	dispatch(dangxuatAction());
	history.push('/dangnhap');
};
