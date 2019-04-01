import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SideProfile.scss'
import { Card,Button } from 'react-bootstrap'

const SideProfile = (props) => {
    let [datos, setDatos] = useState([]);

    useEffect(()=>{
        getDatos()
    },[])

    const getDatos = ()=>{
        axios.get('http://localhost:8080/profile', { withCredentials: true })
        .then(data => {
            setDatos(data.data._json)
        })
        .catch(err => {
            console.log(err)
        })
 }
    return (
        <Card className="m-top-letf box-size fixed-side">
            <Card.Img src={datos.profile_banner_url}/>
            <Card.Body className="body-side-profile">
                <img src={datos.profile_image_url_https} alt="profileImg" className="img-border img-position"/>
                <Card.Title className="text-center">
                    <span className="my-username">{datos.name}</span><br/>
                    <span className="my-screen-name">@{datos.screen_name}</span>    
                </Card.Title>
                <span className="following">Siguiendo</span>
                <span className="followers">Seguidores</span>
                <Button variant="primary" className="size-button" size="sm" disabled={true}>
                    {datos.friends_count}
                </Button>
                <Button variant="primary" className="size-button" size="sm" disabled={true}>
                    {datos.followers_count}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default SideProfile;