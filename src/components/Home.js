import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap'
//  Components
import Tweets from './Tweets/Tweets';
import TopPanel from './TopPanelSearch/TopPanelSearch';
import SideProfile from './SideProfile/SideProfile';
import CreateATweet from './CreateATweets/CreateATweet';

const HomePage = () => {
    let [q, setQ] = useState('Colombia');
    let [count, setCount] = useState(100);
    let [datos, setDatos] = useState([]);

    useEffect(() => {
        getTweet()
    }, [])

    const getTweet = () => {
        axios.post('http://localhost:8080/tweets', {
            count
        })
            .then(data => {
                setDatos(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const checkIfGotData = () => {
        if(datos.length > 5){
            return (
                datos.map(data => {
                    return (
                        <Tweets
                            key={data.id}
                            text={data.text}
                            img={data.user.profile_image_url}
                            screen_name={data.user.screen_name}
                            user={data.user.name}
                            day={data.created_at}
                        />
                    )
                })

            )
        }
        else{
            return ( <h1>Excedimos el limite de Request</h1> )
        }
    }
    return (
        <div>
            <TopPanel tweets={getTweet} />
            <Row>
                <Col xs={4}>
                    <SideProfile />
                </Col>
                <Col xs={8}>
                    <CreateATweet />
                    {checkIfGotData()}
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;