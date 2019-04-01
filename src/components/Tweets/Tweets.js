import React from 'react'
import { Card, Container} from 'react-bootstrap'
import './Tweets.scss'

const Tweets = (props) => {
    return (
        <div key={props.id}>
            <Container className="m-top-between">
                <Card border="info" className="text-center" >
                    <Card.Header>
                        <img src={props.img} alt="profileImg" className="img-size-border"/>
                        <div className="m-span">
                            <span className="m-span">@{props.screen_name}</span> 
                        </div>
                        </Card.Header>
                    <Card.Body>
                        <Card.Title className="">{props.user}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.day}</Card.Footer>
                </Card>
            </Container>
        </div>
    )
}
export default Tweets;