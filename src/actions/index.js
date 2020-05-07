export const signState = (auth) => {
    return {
        type: 'SIGN_STATE',
        payload: auth
    };
};
