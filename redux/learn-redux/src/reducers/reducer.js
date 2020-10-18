const initialState = {
    name: "mukesh",
    wishesh: ['eat','code']
}

const reducer = (prevState=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case 'CHANGE_NAME' : return {
            ...prevState, name: action.payload
        } 
        default:
            return prevState
    }
}

export default reducer;