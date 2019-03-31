import React from 'react'
import { Card, Container,Col} from 'react-bootstrap'
import './Tweets.scss'

const Tweets = (props) => {
    return (
        <div key={props.id}>
            <Container className="m-top-between less-width">
                <Card border="info" className="text-center" >
                    <Card.Header><img src={props.img} alt="profileImg" className="img-size-border"/> @{props.screen_name}</Card.Header>
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