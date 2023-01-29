import React from "react";
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import expressped from '../Pictures/feetwithflower.jpg'
import basicped from '../Pictures/lotionandTowel.jpg'
import wellnessped from '../Pictures/wellness.jpg'
import express from '../Pictures/ExpressPackage.jpg'

const Home = () => {

    const navigate = useNavigate()

    function handleRoute() {
        navigate('/Book')
    }

    return (
        <div>
            <div className="aboutSection">
                <div className="sectionTitle">
                    <h2>About Norfolk Home Foot Care</h2>
                </div>
                <div className="sectionText">
                    <p>
                        Quality foot care that comes to you in your own home.
                    </p>
                    <p>I am a certified Podologist / PSW that provides foot care throughout Haldimand-Norfolk County</p>
                </div>
            </div>

            <div className="services">
                <CardGroup >
                    <Row className="justify-content-center">
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em', height: '40em' }}>
                                <Card.Img src={express} alt='https://unsplash.com/photos/7AcMUSYRZpU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' />
                                <Card.Body>
                                    <Card.Title>Express Pedicure</Card.Title>
                                    <Card.Title>$35</Card.Title>
                                    <Card.Text>Express treatment starts with a foot exam followed by clipping, filing nails, and a mini foot massage</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em', height: '40em' }}>
                                <Card.Img src={basicped} alt='https://unsplash.com/@kmile_ch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText' />
                                <Card.Body>
                                    <Card.Title>Basic Pedicure</Card.Title>
                                    <Card.Title>$45</Card.Title>
                                    <Card.Text>This basic foot care treatment starts with a foot exam and soaking of the feet followed by reduction of nails if
                                        needed, cuticle work, clipping and filing the nail, callus removal completed with hydrating leg and foot massage
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="colServices">
                            <Card border="info" style={{ width: '16em', height: '40em' }}>
                                <Card.Img src={wellnessped} alt="https://unsplash.com/photos/kXQ3J7_2fpc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" />
                                <Card.Body>
                                    <Card.Title>Wellness Pedicure</Card.Title>
                                    <Card.Title>$55</Card.Title>
                                    <Card.Text>This treatment starts with an examination of the foot, followed with a Foot Soak and with hydrational exfoliating seaweed scrub.
                                        Reduction of nails if needed, cuticle work, clipping and filing the nail, callus removal.
                                        The skin is further hydrated with a foot mousse followed by a massage lotion to the legs. 
                                        Recommended for clients that have dry skin, are diabetic, and seniors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </CardGroup>
                <div className="serviceNotes">
                    <p>*I provide all COVID-19 Protocols for you in your place for a safe visit.</p>
                    <p>**A Travel Fee of $10 will apply for services 17km outside of Simcoe, Ontario</p>
                </div>
            </div>

            <div className="bookBtn">
                <Button variant="outline-info" size="lg" onClick={handleRoute}>Book Appointment</Button>
            </div>

        </div>
    )
}

export default Home