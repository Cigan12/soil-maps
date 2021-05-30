import React, { useState } from 'react';
import { Button, Form, Modal, Navbar, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SAdmin from './Admin.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../store';
import { fetchAreasAction } from '../../reducers/Areas/Areas.reducer';
import {
    APIDeleteSoil,
    APIPostCreateSoil,
} from '../../api/SoilsAPI/SoilsAPI.util';
import { Link } from 'react-router-dom';

export const AdminSoilsPage: React.FC = () => {
    const [modal, setModal] = useState(false);
    const state = useSelector((state: TStore) => state);
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const r = await APIPostCreateSoil(formData);
        if (r.status >= 200) {
            dispatch(fetchAreasAction());
        }
    };

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    const handleDelete = async (id: number) => {
        try {
            const r = await APIDeleteSoil(id);
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
                <Link className={SAdmin.navlink} to="/admin">
                    Участки
                </Link>
                <Link className={SAdmin.navlink} to="/admin/soils">
                    Почвы
                </Link>
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
                    {state.SoilsReducer.soils.map((soil, index) => (
                        <tr key={soil.id}>
                            <td>{index + 1}</td>
                            <td>{soil.name}</td>
                            <td>{soil.properties.LOCATION}</td>
                            <td>
                                <Button
                                    onClick={handleDelete.bind(
                                        undefined,
                                        soil.id
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
