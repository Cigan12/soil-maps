import React, { useState } from 'react';
import { Button, Form, Modal, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.styles.scss';
import { APIPostCreateArea } from '../../api/AreaAPI/AreaAPI.util';

export const AdminPage: React.FC = () => {
    const [modal, setModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const r = await APIPostCreateArea(formData);
    };

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <div className="admin-page">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Панель администратора </Navbar.Brand>
                <Button variant="secondary" onClick={toggleModal}>
                    Добавить участок
                </Button>
            </Navbar>
            {modal && (
                <Modal.Dialog>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Загрузить участки</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group>
                                <Form.File
                                    name="shape"
                                    label="Выберите shape файл"
                                />
                                <Form.File
                                    name="dbf"
                                    label="Выберите dbf файл"
                                />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={toggleModal}>
                                Close
                            </Button>
                            <Button type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Dialog>
            )}
        </div>
    );
};
