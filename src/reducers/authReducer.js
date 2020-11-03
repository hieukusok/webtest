import {
	DANGKY_REQUESTED,
	DANGKY_SUCCEED,
	DANGKY_FAILED,
	DANGNHAP_REQUESTED,
	DANGNHAP_SUCCEED,
	DANGNHAP_FAILED,
	DANGXUAT
} from '../constants/authConstant';

const initialState = {
	dangky: {
		user: {},
		isLoading: false,
		errorMessage: {}
	},
	dangnhap: {
		isAuthenticated: false,
		user: {},
		isLoangding: false,
		isError: false,
		errorMessage: {}
	}
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case DANGKY_REQUESTED:
			return {
				...state,
				dangky: {
					isLoading: true
				}
			};
		case DANGKY_SUCCEED:
			return {
				...state,
				dangky: {
					user: action.payload,
					isLoangding: false
				}
			};
		case DANGKY_FAILED:
			return {
				...state,
				dangky: {
					isLoangding: false,
					isError: true,
					errorMessage: action.payload
				}
			};
		case DANGNHAP_REQUESTED:
			return {
				...state,
				dangnhap: {
					isLoading: true
				}
			};
		case DANGNHAP_SUCCEED:
			return {
				...state,
				dangnhap: {
					isAuthenticated: action.payload.isAuthenticated,
					user: action.payload.user,
					isLoangding: false
				}
			};
		case DANGNHAP_FAILED:
			return {
				...state,
				dangnhap: {
					isLoangding: false,
					isError: true,
					errorMessage: action.payload
				}
			};
		case DANGXUAT:
			return {
				...state,
				dangnhap: {
					isAuthenticated: false,
					user: {}
				}
			};
		default:
			return state;
	}
};
export default authReducer;
