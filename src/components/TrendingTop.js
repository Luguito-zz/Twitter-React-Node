import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './TrendingTop.scss'
import { Card} from 'react-bootstrap'

const SideProfile = (props) => {
    return (
        <Card className="m-top-rigth trending-box-size">
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title className="text-center">Hi</Card.Title>
                <Card.Text className="text-center">
                    Here are the trending toping
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SideProfile;