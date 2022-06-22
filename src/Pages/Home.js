import React from "react";
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import facebook from '../Pictures/facebook.png'
import instagram from '../Pictures/instagram.png'
import logo from '../Pictures/logonoback.png'
import expressped from '../Pictures/feetwithflower.jpg'
import basicped from '../Pictures/lotionandTowel.jpg'
import wellnessped from '../Pictures/wellness.jpg'
const Home = () => {


    return (
        <div>
            <header>
                <div className="headerImage">
                    <div className="headerText">

                        <h1>Norfolk Foot Care</h1>
                    </div>

                </div>
            </header>

            <div className="aboutSection">
                <div className="sectionTitle">
                    <h1>About Norfolk Foot Care</h1>
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
                <CardGroup>
                    <Row className="justify-content-center">
                        <Col>
                            <Card border="info" style={{ width: '18em' }}>
                                <Card.Img src={expressped} />
                                <Card.Body>
                                    <Card.Title>Express Pedicure</Card.Title>
                                    <Card.Text>Express treatment starts with a foot exam and soaking of the feet followed by reduction of nail thickness</Card.Text>
                                    <Card.Text>Duration Varies $35</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="info" style={{ width: '18em' }}>
                                <Card.Img src={basicped} />
                                <Card.Body>
                                    <Card.Title>Basic Pedicure</Card.Title>
                                    <Card.Text>This basic foot care treatment starts with a foot exam and soaking of the feet followed by reduction of nails if</Card.Text>
                                    <Card.Text>Duration varies · $45</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="info" style={{ width: '18em', height:'31em' }}>
                                <Card.Body>
                                    <Card.Img src={wellnessped} />
                                    <Card.Title>Wellness Pedicure</Card.Title>
                                    <Card.Text>This treatment starts with an examination of the foot, followed with a Foot Soak and with hydrational</Card.Text>
                                    <Card.Text>Duration varies · $55</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </div>

            <div className="footer">
                <div className='socialLinks'>
                    <img src={facebook} style={{ width: '50px' }} alt='facebook ' />
                    <img src={logo} style={{ width: '200px' }} />
                    <img src={instagram} style={{ width: '50px' }} alt='instagram ' />
                </div>
            </div>

        </div>
    )
}

export default Home