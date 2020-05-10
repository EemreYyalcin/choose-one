let user = {
    username: "",
    token: ""
};

export const LoginReducer = (state = null, action) => {
    if (action.type === 'SIGN_OPTIONS') {
        user = action.payload;
        return {...state, user};
    }
    return state;
};