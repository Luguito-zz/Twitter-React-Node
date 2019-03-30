import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweets from './Tweets';
import TopPanel from './TopPanelSearch';
import SideProfile from './SideProfile';
import {Col,Row} from 'react-bootstrap'

const HomePage = () => {
    let [q, setQ] = useState('Colombia');
    let [count, setCount] = useState(10);
    let [datos,setDatos] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:8080/get_tweets',{
            q,
            count
        })
        .then(data=>{
            setDatos(data.data.statuses)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    console.log(datos)
    return (
        <div>
            <TopPanel />
            <Row>
                <Col xs={4}>
                    <SideProfile
                        name={'Francisco'}
                        screen_name={'@Francisco23545'}
                        following={12434}
                        followers={21}
                        text={'Hola, Probando el SideProfile'}
                    />
                </Col>

            <Col xs={8}>
            {
               datos.map(data =>{
                   return (
                   <Tweets
                    key={data.id}
                    text={data.text}
                    screen_name={data.user.screen_name}
                    user={data.user.name}
                    day={data.created_at}
                    />)
               })
            }
            </Col>
            </Row>
        </div>
    )
}

export default HomePage;