// export const myaction = (name)=>{
//     return{
//         type: "CHANGE_NAME",
//         payload: name
//     }
// }

const myaction = ()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            dispatch({        
                type: "CHANGE_NAME",
                payload: data[0].name })
        })
    }
}

export default myaction;