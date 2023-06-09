const organizationReducer = (
    state = { organizationData: null, loading: false, error: false, updateLoading: false }, action
) => {
    switch (action.type) {
        case "REGISTRATION_START":
            return { ...state, loading: true, error: false };
        case "REGISTRATION_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, organizationData: action.data, loading: false, error: false };
        case "REGISTRATION_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default organizationReducer;