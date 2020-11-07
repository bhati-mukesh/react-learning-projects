import React,{useContext} from 'react';
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <div className="container">
            <nav class="navbar navbar-dark bg-dark">
            <div className="row" style={{width:"100%",height:"30px",color:"#fff",margin:"auto 0"}}>
                <div className="col-6" >Mukesh</div>
                <div className="col-6">Total Movies : {movies.length}</div>
            </div>
            </nav>   
        </div>
    );
};

export default Nav;