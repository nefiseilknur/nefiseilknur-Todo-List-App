import { Button, Table } from 'reactstrap';
import React, { useState, useEffect } from 'react'
import service from './service'
import alertify from "alertifyjs"
import { useHistory } from 'react-router-dom';

function TodoList() {
  const [todo, setTodo] = useState([])
  let history = useHistory();
  useEffect(() => {
    service.getAllTodo().then(result => {setTodo(result.data)
    })
  })

  const deleteTodo = (id) => {
    let del = { id }
    service.deleteTodo(del).then(() => alertify.success("Deleted", 1.5)).catch(() => alertify.danger("Error", 1.5));
  }

  const addTodo = () => {
    history.push('/add');
  }

  const updateTodo = (id) => {
    history.push(`/update/${id}`)
  };

  
  return (
    <div >
      <Button onClick={() => addTodo()} className="btn btn-success"> Add todo </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((todo, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>{todo.description} </td>
                <td> <button onClick={() => updateTodo(todo.id)} className="btn btn-success">Edit</button></td>
                <td> <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default TodoList;