const picture = (state = '', action) => {
    switch (action.type) {
        case 'SET_PICTURE': 
            return console.log(action.payload);

        default: 
            return state;
    }
} 