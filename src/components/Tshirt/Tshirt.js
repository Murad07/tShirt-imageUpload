import React, { useState } from 'react';
import bgImg from '../../images/tshirt.jpg';
import './Tshirt.css';
import Draggable from 'react-draggable';
import Modal from './Modal';

const Tshirt = () => {
    const [name, setName] = useState({
        modal: false,
        name: "",
        modalInputName: "",
    });

    const [myText, setMyText] = useState();

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setName({
            modal: true,
            name: value,
            modalInputName: value
        });
        console.log(name.modal)
    }

    const handleSubmit = (e) => {
        console.log(name.modalInputName, name.name)
        setMyText(name.name);
        modalClose();
    }

    const modalOpen = () => {
        setName({ modal: true });
    }

    const modalClose = () => {
        setName({
        modalInputName: "",
        modal: false
        });
    }

    return (
        <div className="container">
            <h1>Hello!! {name.name}</h1>
            <a href="javascript:;" onClick={modalOpen}>
                Open Modal
            </a>
            <Modal show={name.modal} handleClose={modalClose}>
            <h2>Hello Modal</h2>
            <div className="form-group">
                <label>Enter Name:</label>
                <input
                type="text"
                value={name.modalInputName}
                name="modalInputName"
                onChange={handleChange}
                className="form-control"
                />
            </div>
            <div className="form-group">
                <button onClick={handleSubmit} type="button">
                Save
                </button>
            </div>
            </Modal>
            <div className="bgImg" style={{ backgroundImage: bgImg, height: "400px"}}>
                <Draggable >
                    <div className="dragItem">{myText}</div>
                </Draggable>
            </div>
        </div>
    );
};

export default Tshirt;