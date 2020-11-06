import { DANHMUC_REQUESTED, DANHMUC_SUCCEED, DANHMUC_FAILED } from '../constants/danhMucConstant';

const initialState = {
	danhmuc: {
		dsdm: [],
		isLoading: false,
		errorMessage: {}
	}
};
const danhMucConstant = (state = initialState, action) => {
	switch (action.type) {
		case DANHMUC_REQUESTED:
			return {
				...state,
				danhmuc: {
					isLoading: true
				}
			};
		case DANHMUC_SUCCEED:
			return {
				...state,
				danhmuc: {
					dsdm: action.payload,
					isLoangding: false
				}
			};
		case DANHMUC_FAILED:
			return {
				...state,
				danhmuc: {
					isLoangding: false,
					isError: true,
					errorMessage: action.payload
				}
			};
		default:
			return state;
	}
};

export default danhMucConstant;
