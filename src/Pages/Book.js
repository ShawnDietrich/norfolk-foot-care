import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button, InputGroup, Alert } from 'react-bootstrap'

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
                Date: e.target[0].value,
                FirstName: e.target[1].value,
                LastName: e.target[2].value,
                Address1: e.target[3].value,
                Address2: e.target[4].value,
                City: e.target[5].value,
                Provence: e.target[6].value,
                PostalCode: e.target[7].value
            })
        }).then( () => {
            setShowMesg(true)
            e.target.map(item => item.value = null)
        })
    }

    return (
        <div className="bookForm">
            <Alert key='info' variant="info" show={showMesg}>Your Booking Has Been Sent</Alert>
            <Form id="bookingForm" validated={validate} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formGridDate'>
                        <Form.Label>Requested Date Of Appointment</Form.Label>
                        <FormControl name="date" type="date" required />
                    </Form.Group>
                </Row>
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
                        <Form.Label>Postal Code</Form.Label>
                        <FormControl name="postal" type='postal' placeholder='' />
                    </Form.Group>
                </Row>

                <Button className="btnForm" variant='outline-info' type='submit'>Submit</Button>
                <Button className="btnForm" variant="outline-danger" type="reset">Clear Form</Button>
            </Form>

        </div>
    )
}

export default Book