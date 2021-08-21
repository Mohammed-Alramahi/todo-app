import React, { useState, useContext } from 'react'
import { Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';
function Auth() {
    const [user, setUser] = useState({});
    const context = useContext(AuthContext);
    console.log(context);
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const data = {
            email: user.email,
            password: user.password
        }
        context.login(data.email, data.password);
    }

    return (
        <If condition={!context.loggedIn}>
            <Then>
                <Nav>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={5}>
                                <Form.Control size="sm" className="mt-1" name="email" required onChange={e => handleChange(e)} type="text" placeholder="User Name" />
                            </Col>
                            <Col xs={5} className="mt-1">
                                <Form.Control size="sm" type="password" name="password" required onChange={e => handleChange(e)} placeholder="Password" />
                            </Col>
                            <Col xs={2} >
                                <Form.Control size="sm" className="btn btn-primary bg-dark" type="Submit" readOnly value="login" />
                            </Col>
                        </Row>
                    </Form>
                </Nav>
            </Then>
            <Else>
                <Row>
                    <Col xs={12}>
                        <Button size="sm" className="btn btn-primary bg-danger" onClick={() => context.logOut()}>Logout</Button>
                    </Col>
                </Row>
            </Else>
        </If>
    )
}

export default Auth;
