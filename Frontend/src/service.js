import axios from 'axios'

const list = "http://localhost:8080/todo"
const del = "http://localhost:8080//delete"
const add = "http://localhost:8080/add"
const getId = "http://localhost:8080//{id}"
const update = "http://localhost:8080/update"

class service {
    getAllTodo() {
        return axios.get(list);
    }
    deleteTodo(todo) {
        return axios.delete(del, {
            data: {
                id: todo.id
            }
        })
    }
    addTodo(todo) {
        return axios.post(add, todo)
    }
    getTodoById(id) {
        return axios.get(getId + id)
    }
    updateTodo(todo){
        return axios.post(update, todo)
    }
}

export default new service()