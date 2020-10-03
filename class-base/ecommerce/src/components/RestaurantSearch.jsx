import React, { Component } from 'react';
import { Table,Form,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'

class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: null,
            RestoList: []
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    search(){
        this.fetchData()
    }
    fetchData(){
        fetch(`http://localhost:5000/restaurant?q=${this.state.query}`).then((response)=>{
            response.json().then((data)=>{
                this.setState({RestoList : data})
            })
        })
    }
    render() {
        return (
            <>
            <NavBarMenu />
            <Container>
                <h1>RestaurantSearch</h1>
                <div>
                <Form.Control type="text" placeholder="Readonly input here..." onChange={(event)=>{
                    this.setState({query:event.target.value})
                    this.search()
                    }} />
                    <br/>
                
                {/* <button onClick={()=>{this.search()}}>Search</button> */}
                </div>
                <div>
                {
              (this.state.RestoList.length > 0 && this.state.query) ? 
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
                  <p>No data Found</p>
                }
                </div>
            </Container>
            </>
        );
    }
}

export default RestaurantSearch;