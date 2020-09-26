import React from 'react';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameError: null,
      passwordError:null
    }
    console.log('constructor')
  }
  checkValidation(){
      if(this.state.username.length < 3 && this.state.password.length < 5){
          this.setState({usernameError:"Atleast 3 character Required!",passwordError:"Atleast 5 character Required!"})
      }
      else if(this.state.username.length < 3 ){
        this.setState({usernameError:"Atleast 3 character Required!"})
        }
      else if(this.state.password.length < 3 ){
            this.setState({passwordError:"Atleast 5 character Required!"})
            }
        else{
            return true
        }
        return false
  }
  formSubmit(){
    if(this.checkValidation())
      console.log('form submitted')

  }
  render() {
      console.log(this.state)
    return (
      <React.Fragment>
        <div className=" main-div custom" >
            <h1>Login Form</h1>
            <input type="text" name="username"  placeholder="Enter User Name" onChange={(e)=>this.setState({username:e.target.value,usernameError:null})}/>
            <p>{this.state.usernameError}</p>
            <input type="password" name="username"  placeholder="Enter Password" onChange={(e)=>this.setState({password:e.target.value,passwordError:null})}/>
            <p>{this.state.passwordError}</p>
        <button onClick={ () => this.formSubmit() } >validate Form</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Form;
