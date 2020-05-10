
export const RouterReducer = (state = 1, action) => {
    if (action.type === 'SELECT_ROUTE') {
        return  action.payload;
    }
    return state;
};