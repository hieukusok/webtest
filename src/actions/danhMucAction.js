import { DANHMUC_REQUESTED, DANHMUC_SUCCEED, DANHMUC_FAILED } from '../constants/danhMucConstant';

export const danhmucRequestedAction = () => ({
	type: DANHMUC_REQUESTED
});
export const danhmucSucceedAction = (payload) => ({
	type: DANHMUC_SUCCEED,
	payload
});
export const danhmucFailedAction = (payload) => ({
	type: DANHMUC_FAILED,
	payload
});
