import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Extra = () => {
    return (
        <div className="row my-5">
            <div className="col-md-6 border border-dark p-2">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="enter name" />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your Query</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="do you agree?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="col-md-6 px-4">
                <h1>Our Goal</h1>
                <p>This growing interest in wildlife tourism, and the economic benefits that come along with it, can change community attitudes towards conservation. Without tourism, local communities may merely view wild animals as a danger to their farms and families, and only value natural resources for consumption. But when animals and natural areas bring tourism dollars and jobs to their community, it can help residents see the importance of keeping their natural assets intact and healthy.</p>
            </div>
        </div>
    );
};

export default Extra;