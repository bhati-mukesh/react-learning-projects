import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            password: ""
        } 
    }
    login(){
        if(!this.state.name || !this.state.password){
            alert('Enter Details')
            return
        }
        fetch(`http://localhost:5000/login?q=${this.state.name}`).then((response)=>{
            response.json().then((data)=>{

                if(data.length > 0){
                    const check = data.filter((user)=>{
                        return user.name === this.state.name && user.password === this.state.password
                    })
                    if(check.length === 1){
                        localStorage.setItem('login',JSON.stringify(check))
                        this.props.history.push('list')
                    }else{
                        alert("Invalid Credentials")                        
                    }
                }else{
                    alert("Invalid Credentials")
                }
            })
        })
    }
    render() {
        return (
                localStorage.getItem('login')
                ?
                <Redirect to="/" />
                :
                <div className="container">
                    <h1>Login</h1>
                <div>
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Username" /><br/><br/>
                    <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Enter Password" /><br/><br/>
                    <button onClick={()=>this.login()}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
