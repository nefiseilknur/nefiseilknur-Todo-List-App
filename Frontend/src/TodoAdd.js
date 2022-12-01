import { useState } from "react"
import service from "./service"
import { useHistory } from 'react-router-dom';
import alertify from "alertifyjs"

export default function TodoAdd() {
    const [description, setDescription] = useState("")
    let history = useHistory();

    const addTodo = () => {
        let todo = { description: description }
        service.addTodo(todo).then(() => alertify.success("Saved", 1.5), history.push("/")).catch(() => alertify.danger("Error", 1.5), history.push("/"))
    }

    return (
        <div className="container card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
                <form>
                    <div className="text-center">Add to do </div>
                    <br />
                    <input
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Description"
                        className="form-control"
                    />
                    <br />
                    <button className="btn btn-success" onClick={() => addTodo()}>Add</button>
                </form>
            </div>

        </div>
    )
    
}