const picture = (state = '', action) => {
    switch (action.type) {
        case 'SET_PICTURE': 
        console.log(action.payload);
            return action.payload;

        default: 
            return state;
    }
} 

export default picture;