let user = {
    username: "",
    token: ""
};

export const LoginReducer = (state = user, action) => {
    if (action.type === 'SIGN_OPTIONS') {
        return  action.payload;
    }
    return state;
};