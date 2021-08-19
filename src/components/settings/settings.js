import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { SettingsContext } from '../../context/settings.js';



const Settings = () => {

    const context = useContext(SettingsContext);
    function setShowCompleted(e) {
        context.setShowCompleted(e.target.value);
        localStorage.setItem("showCompleted", e.target.value)
    }
    function setSortBy(e) {
        context.setSortBy(e.target.value);
        localStorage.setItem("sortBy", e.target.value)
    }
    function setItemsPerPage(e) {
        context.setItemsPerPage(e.target.value);
        localStorage.setItem("itemsPerPage", e.target.value)
    }
    return (
        <>
            <Container className="mx-auto mt-5">
                <Form>
                    <Form.Group>
                        <Form.Label className="mb-0">Items per Page</Form.Label>
                        <Form.Control as="select" defaultValue={localStorage.getItem("itemsPerPage")} onChange={e => setItemsPerPage(e)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-2 mb-0">Sort By</Form.Label>
                        <Form.Control as="select" defaultValue={localStorage.getItem("sortBy")} onChange={e => setSortBy(e)}>
                            <option value="Easiest">Easiest</option>
                            <option value="Hardest">Hardest</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-2 mb-0">Completed Items</Form.Label>
                        <Form.Control as="select" defaultValue={localStorage.getItem("showCompleted")} onChange={e => setShowCompleted(e)}>
                            <option value="true">show</option>
                            <option value="false">hide</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Settings;