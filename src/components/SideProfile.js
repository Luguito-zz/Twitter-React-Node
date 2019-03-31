import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SideProfile.scss'
import { Card, ButtonGroup, ToggleButton } from 'react-bootstrap'

const SideProfile = (props) => {
    let [datos, setDatos] = useState([]);

   const getDatos = ()=>{
    axios.get('http://localhost:8080/profile')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
   }
   
    return (
        <Card className="m-top-letf box-size fixed-side">
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title className="text-center">{datos.displayName}</Card.Title>
                <Card.Text className="text-center">
                    {datos.name}

                </Card.Text>
                <ButtonGroup toggle className="mt-3">
                    <ToggleButton type="radio" name="radio" defaultChecked value="1">
                        

                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="2">
                        {datos.name}
                    </ToggleButton>
                </ButtonGroup>
            </Card.Body>
            <button onClick={getDatos}>click</button>
        </Card>
    )
}

export default SideProfile;