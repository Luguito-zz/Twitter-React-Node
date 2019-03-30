import React from 'react'
import './SideProfile.scss'
import { Card, ButtonGroup, ToggleButton } from 'react-bootstrap'
const SideProfile = (props) => {
    return (
        <Card className="m-top-letf box-size fixed-side">
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title className="text-center">{props.name}</Card.Title>
                <Card.Text className="text-center">
                    {props.text}
                </Card.Text>
                <ButtonGroup toggle className="mt-3">
                    <ToggleButton type="radio" name="radio" defaultChecked value="1">
                        {props.following}
                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="2">
                        {props.followers}
                    </ToggleButton>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default SideProfile;