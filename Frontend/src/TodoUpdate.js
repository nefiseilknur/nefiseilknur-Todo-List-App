import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from "react-modal"
import { GrFormClose } from "react-icons/gr";
import service from './service'
import alertify from "alertifyjs"

export default function TodoUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [modalIsOpen, setModalIsOpen] = useState(true)
    let history = useHistory();
    const [description, setDescription] = useState("")

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
        history.push("/")
    }

    useEffect(() => {
        service.getTodoById(id).then(res => {
            let todo = res.data
            setDescription(todo.description)
        })
    }, [])

    const updateTodo = () => {
        let todo = { id: id, description: description}
        service.updateTodo(todo).then(() => alertify.success("Edited", 1.5), history.push("/")).catch(() => alertify.danger("Error", 1.5), history.push("/"))
    }

    return (
        <div className="container card col-md-6 offset-md-3 offset-md-3">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <button onClick={toggleModal} className="modal-close-btn">
                    <GrFormClose />
                </button>
                <div className="card-body">
                    <form>
                        <div className="text-center">Edit</div>
                        <br />
                        <input
                            placeholder="Edit todo"
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            className="form-control"
                        />
                        <br />
                        <button onClick={() => updateTodo()} className="btn btn-success">Update</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}