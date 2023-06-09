import * as organizationApi from '../../api/organizationApi';

export const register = (organizationData) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTRATION_START" });
        const { data } = await organizationApi.register(organizationData);
        dispatch({ type: "REGISTRATION_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "REGISTRATION_FAIL" });
    }
}