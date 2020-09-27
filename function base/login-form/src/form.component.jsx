import React,{useState} from 'react';


function Form () {
  

    const  [username,setUsername] = useState("")
    const  [password,setPassword] = useState("")
    const  [usernameError,setUsernameError]= useState(null)
    const  [passwordError,setPasswordError] = useState(null)
  
  function  checkValidation(){
      if(username.length < 3 && password.length < 5){
          setUsernameError("Atleast 3 character Required!")
          setPasswordError("Atleast 5 character Required!")
      }
      else if(username.length < 3 ){
        setUsernameError("Atleast 3 character Required!")
        }
      else if(password.length < 3 ){
            setPasswordError("Atleast 5 character Required!")
            }
        else{
            return true
        }
        return false
  }
  const formSubmit = ()=>{
    if(checkValidation())
      console.log('form submitted')
  }
  return (
      <React.Fragment>
        <div className=" main-div custom" >
            <h1>Login Form</h1>
            <input type="text" name="username"  placeholder="Enter User Name" onChange={(e)=>{
              setUsername(e.target.value)
              setUsernameError(null)
            }}/>
            <p>{usernameError}</p>
            <input type="password" name="username"  placeholder="Enter Password" onChange={(e)=>{
              setPassword(e.target.value)
              setPasswordError(null)
            }} />
            <p>{passwordError}</p>
        <button onClick={ () => formSubmit() } >validate Form</button>
        </div>
      </React.Fragment>
    )
  }

export default Form;
