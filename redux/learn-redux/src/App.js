import React from 'react';
import {connect} from 'react-redux'
import myaction from './actions/myaction'

function App(props) {
  return (
    <>
    <h1> I am App component!</h1>
    <h1> Name from store {props.myname} </h1>
    <button onClick={()=>{props.changeName()}} >Change Name</button>
    </>
  );
}

const mapStateToProps = (state)=>{
  return {
    myname: state.name,
  }
}
const mapDispatchProps = (dispatch)=>{
  return {
    changeName: ()=>{dispatch(myaction())}
  }
}

export default connect(mapStateToProps,mapDispatchProps)(App);
