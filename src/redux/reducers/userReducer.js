const userReducer = (
    state = { userData: null, loading: false, error: false, updateLoading: false }, action
) => {
    switch (action.type) {
        case "REGISTRATION_START":
            return { ...state, loading: true, error: false };
        case "REGISTRATION_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, userData: action.data, loading: false, error: false };
        case "REGISTRATION_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default userReducer;