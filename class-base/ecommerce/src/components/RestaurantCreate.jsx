import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class RestaurantCreate extends Component {
    constructor(){
        super()
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    addResto(){
        fetch('http://localhost:5000/restaurant',{
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((data)=>{
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>RestaurantCreate</h1>
                <div>
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Resto Name" /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter Resto Email" /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Enter Resto Rating" /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Enter Resto Address" /><br/><br/>
                    <button onClick={()=>this.addResto()}>Add Resto</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;