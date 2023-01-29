import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from '../Pictures/facebook.png'
import logo from '../Pictures/logonoback.png'
import SchoolLogo from '../Pictures/NASP_logo.png'
import footLogix from '../Pictures/footLogix.jpg'
const Footer = () => {
    return (
        <div className="footer">
            <Container style={{margin: '0 auto', maxWidth: "1000px"}}>
                <Row style={{alignItems: 'center', margin: '1em'}}>
                    <Col className="icons" align='center' sm>
                        <a href="https://northamericanschoolofpodology.com/about/" target="_blank">
                            <img src={SchoolLogo} style={{ width: "20em", borderRadius: '5px' }} alt='Foot Care Shool' />
                        </a>
                    </Col>
                    <Col align='center' sm>
                        <img className="logo" src={footLogix} style={{ width: '10em' }} alt="Norfolk Logo" />
                    </Col>
                </Row>
                <Row style={{margin: '1em'}}>
                    <Col className="icons" align="center" sm>
                        <div>
                            <a href="https://www.facebook.com/Norfolkinhomefootcare">
                                <img src={facebook} style={{ width: '5em' }} alt='facebook' />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer