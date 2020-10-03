import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'


class RestaurantUpdate extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
        fetch(`http://localhost:5000/restaurant/${this.props.match.params.id}`).then((response)=>{
            response.json().then((data)=>{
                this.setState({...data})
            })
        })
    }
    updateResto(){
        fetch(`http://localhost:5000/restaurant/${this.props.match.params.id}`,{
            method: "PUT",
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
            <>
            <NavBarMenu />
            <div className="container">
                <h1>RestaurantUpdate</h1>
                <div>
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Resto Name" value={this.state.name} /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter Resto Email" value={this.state.email} /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Enter Resto Rating" value={this.state.rating} /><br/><br/>
                    <input type="text" onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Enter Resto Address" value={this.state.address} /><br/><br/>
                    <button onClick={()=>this.updateResto()}>Updata Resto</button>
                </div>
            </div>
            </>
        );
    }
}

export default RestaurantUpdate;