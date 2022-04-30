import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const ragistered = () => {
        navigate('/registration')
    }
    return (
        <div>
            <div>
                <h1 className='text-center my-2 text-danger'>Please Login</h1>
                <Form className='w-50 mx-auto border border-info rounded p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className='text-center my-2'>
                <button className='bg-info' onClick={ragistered}>Haven't Any Account?</button>
            </div>
        </div>
    );
};

export default Login;