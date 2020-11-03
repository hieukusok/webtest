import {
	DANGKY_REQUESTED,
	DANGKY_SUCCEED,
	DANGKY_FAILED,
	DANGNHAP_REQUESTED,
	DANGNHAP_SUCCEED,
	DANGNHAP_FAILED,
	DANGXUAT
} from '../constants/authConstant';

export const dangkyRequestedAction = () => ({
	type: DANGKY_REQUESTED
});
export const dangkySucceedAction = (payload) => ({
	type: DANGKY_SUCCEED,
	payload
});
export const dangkyfailedAction = (payload) => ({
	type: DANGKY_FAILED,
	payload
});
export const dangnhapRequestedAction = () => ({
	type: DANGNHAP_REQUESTED
});
export const dangnhapSucceedAction = (isAuthenticated, user) => ({
	type: DANGNHAP_SUCCEED,
	payload: {
		isAuthenticated: isAuthenticated,
		user: user
	}
});
export const dangnhapFailedAction = (payload) => ({
	type: DANGNHAP_FAILED,
	payload
});
export const dangxuatAction = () => ({
	type: DANGXUAT
});
