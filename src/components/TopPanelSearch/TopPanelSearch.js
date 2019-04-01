import React,{useState} from 'react'
import {Navbar,Nav,Button, Form, FormControl,Modal} from 'react-bootstrap'
import axios from 'axios';
import './TopPanelSearch.scss';

const TopPanel = (props) => {
    let [q, setQ] = useState();
    let [count, setCount] = useState();
    let [datos,setDatos] = useState([]);

    const sendQuery = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/get_tweets', {
           q,
           count
        })
            .then(response => {
                setDatos(response.data.statuses)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Navbar  bg="dark" variant="dark" className="">
                <Navbar.Brand href="/home">Tweets Fran</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={props.tweets}>Actualizar Tweets</Nav.Link>
                    <Nav.Link href="http://localhost:8080/logout">Cerrar Sesion</Nav.Link>
                </Nav>
                <Form inline onSubmit={sendQuery}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=> setQ(e.target.value)}/>
                    <FormControl type="number" placeholder="Count" className="mr-sm-2" onChange={(e)=> setCount(e.target.value)}/>
                    <Button type="submit" variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default TopPanel;