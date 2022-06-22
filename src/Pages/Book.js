import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap'

const Book = () => {
    //setup validate state
    const [validate, setValidate] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setValidate(true)
    }

    return (
        <div className="bookForm">
            <Form validated={validate} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formGridDate'>
                        <Form.Label>Requested Date Of Appointment</Form.Label>
                        <FormControl type="date" required/>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridFirstName'>
                        <Form.Label>First Name</Form.Label>
                        <FormControl type='firstName' placeholder='Enter Name' required />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridLastName'>
                        <Form.Label>Last Name</Form.Label>
                        <FormControl type='lastName' placeholder='Enter Last Name' required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress1'>
                        <Form.Label>Address</Form.Label>
                        <FormControl type='address1' placeholder='Enter Address' required/>
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridAddress2'>
                        <Form.Label>Address 2</Form.Label>
                        <FormControl type='address2' placeholder='Apartment #, Studio, or Floor' />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId='formgridCity'>
                        <Form.Label>City</Form.Label>
                        <FormControl type='city' placeholder='City' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridProvince'>
                        <Form.Label>Province</Form.Label>
                        <FormControl type='province' placeholder='Ontario' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formgridPostal'>
                        <Form.Label>Postal Code</Form.Label>
                        <FormControl type='postal' placeholder='' />
                    </Form.Group>
                </Row>

                <Button className="btn" variant='outline-info' type='submit'>Submit</Button>
                <Button className="btn" variant="outline-danger" type="reset">Clear Form</Button>
            </Form>

        </div>
    )
}

export default Book