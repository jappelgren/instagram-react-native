const picture = (state = '', action) => {
    switch (action.type) {
        case 'SET_PICTURE':
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', action.payload);
            return action.payload;
        case 'SET_PRESIGNED':
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', action.payload);
            return action.payload.signedURL;

        default:
            return state;
    }
};

export default picture;