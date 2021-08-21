import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth';
import superagent from 'superagent';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const API = 'https://auth-server-401.herokuapp.com';
function Signup() {
    const [user, setUser] = useState({});
    const authContext = useContext(AuthContext);
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await superagent.post(`${API}/signup`).send(user);
            console.log(response);
            console.log(user);
            authContext.login(user.username, user.password);
        }
        catch (error) {
            console.log(error.message);
        }
        e.target.reset();
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs={4}>
                        {/*Just to take space*/}
                    </Col>
                    <Col xs={5} className=" my-auto">
                        <Form onSubmit={handleSubmit}>
                            <h2 className="mb-3">Sign Up</h2>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required value={user.username} autoComplete="off" type="text" name="username" onChange={e => handleChange(e)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required value={user.password} type="password" autoComplete="off" name="password" onChange={e => handleChange(e)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Signup;
