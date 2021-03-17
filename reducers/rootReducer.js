const initialState = {
    
    userList: [],
    loading: true,
    
    
}



export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GETPOSTS':
            return {...state, users: action.payload}
        case 'LOADING':
            return {...state, loading: action.payload}
        
        default:
            return state;
    }
}