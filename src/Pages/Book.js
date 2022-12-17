import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button, Alert } from 'react-bootstrap'


const url = process.env.REACT_APP_EMAILURL;
//console.log(url)
const Book = () => {
    //setup validate state
    const [validate, setValidate] = useState(false)
    const [showMesg, setShowMesg] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setValidate(true)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                ExpresService: e.target[0].checked,
                BasicService: e.target[1].checked,
                WellnessService: e.target[2].checked,
                FirstName: e.target[3].value,
                LastName: e.target[4].value,
                Email: e.target[5].value,
                Phone: e.target[6].value,
                Address1: e.target[7].value,
                Address2: e.target[8].value,
                City: e.target[9].value,
                Province: e.target[10].value,
                PostalCode: e.target[11].value,
                Notes: e.target[12].value
            })
        }).then(() => {
            setShowMesg(true)
           document.getElementById('bookingForm').reset()
           
        })
    }

    return (
        <div className="bookForm">
            <Alert key='info' variant="info" show={showMesg}>Your Booking Has Been Sent</Alert>
            <Form id="bookingForm" validated={validate} onSubmit={handleSubmit}>

                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId='expressGrid'>
                        <Form.Check name="express" type="checkbox" label="Express Service"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='basicGrid'>
                        <Form.Check name="basic" type="checkbox" label="Basic Service"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='wellnessGrid'>
                        <Form.Check name="wellness" type="checkbox" label="Wellness Service"/>
                    </Form.Group>
                </Row>
                
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridFirstName'>
                        <FormControl name="firstName" type='firstName' placeholder='First Name' required />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridLastName'>
                        <FormControl name="lastName" type='lastName' placeholder='Last Name' required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <FormControl name="email" type='email' placeholder='Email' required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                        <FormControl name="Phone" type='phone' placeholder='Phone Number' required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress1'>
                        <FormControl name="address" type='address1' placeholder='Address' required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress2'>
                       
                        <FormControl name="address2" type='address2' placeholder='Apartment #, Studio, or Floor' />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridCity'>
                        
                        <FormControl name="city" type='city' placeholder='City' required/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridProvince'>
                       
                        <FormControl name="province" type='province' placeholder='Ontario' required />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridPostal'>
                       
                        <FormControl name="postal" type='postal' placeholder='Postal Code' required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="ControlTextarea">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                <Button className="btnForm" variant='outline-info' type='submit'>Submit</Button>
                <a className='btnForm btn btn-outline-info'  href='/' role='button'>Home</a>
                <Button className="btnForm" variant="outline-danger" type="reset">Clear Form</Button>
            </Form>

        </div>
    )
}

export default Book