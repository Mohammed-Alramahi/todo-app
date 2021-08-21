import React, { useEffect, useContext, useState } from 'react';
import useForm from '../../hooks/form.js';
import TodoList from '../list/list.js';
import { v4 as uuid } from 'uuid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from '../form/form';
import Pagination from '../pagination/pagination'
import './todo.scss';
import { SettingsContext } from '../../context/settings'
import { AuthContext } from '../../context/auth';
import { If, Then, Else } from 'react-if';
import Signup from '../auth/signup';
const ToDo = () => {
  const settingsContext = useContext(SettingsContext);
  const authContext = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(settingsContext.itemsPerPage);
  const [showCompleted] = useState(settingsContext.showCompleted);
  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    let items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    if (!showCompleted) {
      items = list.filter(item => (!item.complete))

    }
    setList(items);

  }


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete);
    setIncomplete(incompleteCount.length);
    setList(incompleteCount);

    document.title = `To Do List: ${incomplete}`;

  }, [incomplete]);

  const indexOfLastTodo = currentPage * parseInt(todosPerPage);
  const indexOfFirstTodo = indexOfLastTodo - parseInt(todosPerPage);
  const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <If condition={authContext.loggedIn}>
        <Then>
          <section className="todo">
            <Container>
              <Row>
                <Col>
                  <Navbar bg="dark" variant="dark" className="my-4">
                    <Navbar.Brand className="mx-3">
                      To Do List Manager({list.filter(item => !item.complete).length})
                    </Navbar.Brand>
                  </Navbar>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TodoForm handleSubmit={addItem} />
                </Col>
                <Col>
                  <TodoList
                    list={currentTodos ? currentTodos : list}
                    handleChange={handleChange}
                    handleComplete={toggleComplete}
                    handleDelete={deleteItem}
                    handleSubmit={handleSubmit}
                  />
                  {currentTodos.length > 0 &&
                    <Pagination
                      todosPerPage={todosPerPage}
                      totalTodos={list.length}
                      paginate={paginate}
                    />
                  }
                </Col>
              </Row>
            </Container>
          </section>
        </Then>
        <Else>
          <Signup />
        </Else>
      </If>
    </>
  );
};

export default ToDo;
