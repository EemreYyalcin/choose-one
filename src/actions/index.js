export const signState = (auth) => {
    return {
        type: 'SIGN_STATE',
        payload: auth
    };
};

export const signOptions = (user) => {
    return {
        type: 'SIGN_OPTIONS',
        payload: user
    };
};


export const selectRouter = (route) => {
    return {
        type: 'SELECT_ROUTE',
        payload: route
    };
};

