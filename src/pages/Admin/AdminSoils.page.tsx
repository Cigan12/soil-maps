import React, { useState } from 'react';
import { Button, Form, Modal, Navbar, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SAdmin from './Admin.module.scss';
import {
    APIDeleteArea,
    APIPostCreateArea,
} from '../../api/AreaAPI/AreaAPI.util';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../store';
import { fetchAreasAction } from '../../reducers/Areas/Areas.reducer';

export const AdminSoilsPage: React.FC = () => {
    const [modal, setModal] = useState(false);
    const state = useSelector((state: TStore) => state);
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const r = await APIPostCreateArea(formData);
        if (r.status >= 200) {
            dispatch(fetchAreasAction());
        }
    };

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    const handleDelete = async (id: number) => {
        try {
            const r = await APIDeleteArea(id);
            if (r.status === 200) {
                dispatch(fetchAreasAction());
            }
        } catch (error) {
            console.log(
                '🚀 ~ file: Admin.page.tsx ~ line 27 ~ handleDelete ~ error',
                error
            );
        }
    };

    return (
        <div className="admin-page">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Панель администратора </Navbar.Brand>
                <Button variant="secondary" onClick={toggleModal}>
                    Добавить почвы
                </Button>
            </Navbar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Местоположение</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {state.AreasReducer.areas.map((area, index) => (
                        <tr key={area.id}>
                            <td>{index + 1}</td>
                            <td>{area.name}</td>
                            <td>{area.properties.culture}</td>
                            <td>
                                <Button
                                    onClick={handleDelete.bind(
                                        undefined,
                                        area.id
                                    )}
                                >
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {modal && (
                <Modal.Dialog className={SAdmin.modal}>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Загрузить почвы</Modal.Title>
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
