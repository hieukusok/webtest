import {
	danhmucRequestedAction,
	danhmucSucceedAction,
	danhmucFailedAction
} from '../actions/danhMucAction';
import axios from 'axios';

export const danhMucThunk = () => async (dispatch) => {
	try {
		dispatch(danhmucRequestedAction());
		const res = await axios.post(`http://127.0.0.1:8000/api/danhmuc`);
		if (res.data.success) {
			dispatch(danhmucSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(danhmucFailedAction(err.message));
	}
};
