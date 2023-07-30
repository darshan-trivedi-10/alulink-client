const userReducer = (
    state = { userData: null, loading: false, error: false, updateLoading: false }, action
) => {
    switch (action.type) {
        case "USER_REGISTRATION_START":
            return { ...state, loading: true, error: false };
        case "USER_REGISTRATION_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, userData: action.data, loading: false, error: false };
        case "USER_REGISTRATION_FAIL":
            return { ...state, loading: false, error: true };
        case "UPDATE_USER_DATA":
            console.log(action.payload);
            return {...state, userData: action.payload};
        default:
            return state;
    }
};

export default userReducer;