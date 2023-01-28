import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from '../Pictures/facebook.png'
import logo from '../Pictures/logonoback.png'
import SchoolLogo from '../Pictures/NASP_logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <Container style={{margin: '0 auto', maxWidth: "1000px"}}>
                <Row style={{alignItems: 'center'}}>
                    <Col className="icons" align='start' sm>
                        <a href="https://northamericanschoolofpodology.com/about/" target="_blank">
                            <img src={SchoolLogo} style={{ width: "20em", borderRadius: '5px' }} alt='Foot Care Shool' />
                        </a>
                    </Col>
                    <Col align='center' sm>
                        <img className="logo" src={logo} style={{ width: '5em' }} alt="Norfolk Logo" />
                    </Col>
                    <Col className="icons" align='end' sm>
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