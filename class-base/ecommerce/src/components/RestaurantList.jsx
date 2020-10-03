import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'

class RestaurantList extends Component {
    constructor(){
        super()
        this.state = {
            RestoList : null
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        fetch('http://localhost:5000/restaurant').then((response)=>{
            response.json().then((data)=>{
                this.setState({RestoList : data})
            })
        })
    }
    delete(id){
        fetch(`http://localhost:5000/restaurant/${id}`,{
            method:"Delete"
        }
        ).then((response)=>{
            response.json().then((data)=>{
                this.fetchData()
            })
        })
    }
    render() {
        return (
            <>
            <NavBarMenu />
            <div className="container">
                <h1>RestaurantList</h1>
                {
              this.state.RestoList ? 
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Resto Name</th>
                            <th>Rating</th>
                            <th>Address</th>
                            <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.RestoList.map((item)=>(
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td><Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} color="orange" /></Link> &nbsp;&nbsp;&nbsp;
                                    <span onClick={()=>{this.delete(item.id)}}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>   
                </div>
                :
                    <p>Data Loading...</p>      
                }
            </div>
            </>
        );
    }
}

export default RestaurantList;