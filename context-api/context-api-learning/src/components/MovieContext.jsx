import React,{useState,createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props)=>{
    const [movies,setMovies] = useState([
        {
            name:"Harry Potter",
            price: "$10",
            id: 21321
        },{
            name:"Game of thrones",
            price: "$10",
            id: 21329
        },{
            name:"Inception",
            price: "$10",
            id: 21367
        }
    ]);

    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}