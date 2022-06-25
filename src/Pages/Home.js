import React from "react";
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import expressped from '../Pictures/feetwithflower.jpg'
import basicped from '../Pictures/lotionandTowel.jpg'
import wellnessped from '../Pictures/wellness.jpg'


const Home = () => {

    const navigate = useNavigate()

    function handleRoute() {
        navigate('/Book')
    }

    return (
        <div>
            <div className="aboutSection">
                <div className="sectionTitle">
                    <h1>About Norfolk Home Foot Care</h1>
                </div>
                <div className="sectionText">
                    <p>
                        Quality foot care that comes to you in your own home.
                        I am a certified PSW/Master Pedicures that provides foot care throughout Norfolk County,
                        I provide all COVID-19 Protocols for you in your place for a safe visit.
                    </p>
                </div>
            </div>

            <div className="services">
                <CardGroup >
                    <Row className="justify-content-center">
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em' }}>
                                <Card.Img src={expressped} alt='https://unsplash.com/@runejohs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'/>
                                <Card.Body>
                                    <Card.Title>Express Pedicure</Card.Title>
                                    <Card.Text>Express treatment starts with a foot exam and soaking of the feet followed by reduction of nail thickness</Card.Text>
                                    <Card.Text>Duration Varies $35</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em' }}>
                                <Card.Img src={basicped} alt='https://unsplash.com/@kmile_ch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'/>
                                <Card.Body>
                                    <Card.Title>Basic Pedicure</Card.Title>
                                    <Card.Text>This basic foot care treatment starts with a foot exam and soaking of the feet followed by reduction of nails if</Card.Text>
                                    <Card.Text>Duration varies · $45</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em' }}>
                            <Card.Img src={wellnessped} alt="https://unsplash.com/photos/kXQ3J7_2fpc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
                                <Card.Body>
                                    <Card.Title>Wellness Pedicure</Card.Title>
                                    <Card.Text>This treatment starts with an examination of the foot, followed with a Foot Soak and with hydrational</Card.Text>
                                    <Card.Text>Duration varies · $55</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </div>

           <div className="bookBtn">
                <Button variant="outline-info" size="lg" onClick={handleRoute}>Book Appointment</Button>
           </div>

        </div>
    )
}

export default Home