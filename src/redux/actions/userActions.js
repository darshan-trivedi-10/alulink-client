import * as userApi from '../../api/userApi';

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "USER_REGISTRATION_START" });
        const { data } = await userApi.register(userData);
        console.log("User Data :- ", data);
        dispatch({ type: "USER_REGISTRATION_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "USER_REGISTRATION_FAIL" });
    }
}