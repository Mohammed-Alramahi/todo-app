import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
function TodoList(props) {
    return (

        <>

            {props.list.map(item => (
                < Card className="mb-4" style={{ width: '28rem' }} key={item._id}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <>
                                <Badge pill bg={item.complete ? "danger" : "success"} className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>
                                    {item.complete ? "Complete" : " Pending "}
                                </Badge>
                                <b className="item-asignee">{item.assignee}</b>
                                <b className="close" aria-label="Close" onClick={() => props.handleDelete(item._id)}>&times;</b>
                            </>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item>
                            <p className="item-text">{item.text}</p>
                            <p className="item-difficulty">{`Difficulty: ${item.difficulty}`}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Card >


            ))
            }
        </>
    );
}
export default TodoList;