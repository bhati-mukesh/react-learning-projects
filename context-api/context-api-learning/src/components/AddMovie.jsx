import React, { useState,useContext } from 'react';
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [movies,setMovies] = useContext(MovieContext)
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const  updateName = (e)=>{
        setName(e.target.value)
    }
    const  updatePrice = (e)=>{
        setPrice(e.target.value)
    }
    const addMovie = (e) =>{
        e.preventDefault();
        setMovies( preMovies => ([...preMovies,{name,price,id:Math.floor(Math.random()*10*4)}]))

    }
    return (
        <form onSubmit={e=>{addMovie(e)}}>
            <input type="text" name="name" onChange={e=>updateName(e)} value={name} placeholder="Movie Name" /> <br/>
            <input type="text" name="price" onChange={e=>updatePrice(e)} value={price} placeholder="Movie Price" /><br/>
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;