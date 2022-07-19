import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button, Alert } from 'react-bootstrap'


const Book = () => {
    //setup validate state
    const [validate, setValidate] = useState(false)
    const [showMesg, setShowMesg] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setValidate(true)
        fetch('https://submit-form.com/Yqyk8lQW', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                FirstName: e.target[0].value,
                LastName: e.target[1].value,
                Email: e.target[3].value,
                Address1: e.target[4].value,
                Address2: e.target[5].value,
                City: e.target[6].value,
                Provence: e.target[7].value,
                PostalCode: e.target[8].value,
                Notes: e.target[9].value
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
                
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridFirstName'>
                        <Form.Label>First Name</Form.Label>
                        <FormControl name="firstName" type='firstName' placeholder='Enter Name' required />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridLastName'>
                        <Form.Label>Last Name</Form.Label>
                        <FormControl name="lastName" type='lastName' placeholder='Enter Last Name' required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <FormControl name="email" type='email' placeholder='Enter Email' required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress1'>
                        <Form.Label>Address</Form.Label>
                        <FormControl name="address" type='address1' placeholder='Enter Address' required />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress2'>
                        <Form.Label>Address 2</Form.Label>
                        <FormControl name="address2" type='address2' placeholder='Apartment #, Studio, or Floor' />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridCity'>
                        <Form.Label>City</Form.Label>
                        <FormControl name="city" type='city' placeholder='City' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridProvince'>
                        <Form.Label>Province</Form.Label>
                        <FormControl name="province" type='province' placeholder='Ontario' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridPostal'>
                        <Form.Label>Postal</Form.Label>
                        <FormControl name="postal" type='postal' placeholder='' />
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