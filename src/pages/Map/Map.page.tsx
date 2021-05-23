import React, { useState } from 'react';
import { Map } from '../../components/Map/Map.component';
import { Map as LeafletMap } from 'leaflet';
import { URectangle } from '../../utils/Rectangles.util';
import './Map.styles.scss';
import { Card, CardColumns, CardGroup, Navbar } from 'react-bootstrap';

export const MapPage: React.FC = () => {
    const [map, setMap] = useState<null | LeafletMap>(null);
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Карта слоев почвы</Navbar.Brand>
            </Navbar>
            <div className="main-map">
                <div
                    className="Layers"
                    onClick={() =>
                        map?.panTo([
                            (URectangle.coords[1][0] +
                                URectangle.coords[0][0]) /
                                2,
                            (URectangle.coords[1][1] +
                                URectangle.coords[0][1]) /
                                2,
                        ])
                    }
                >
                    <Navbar expand="sm" variant="light" bg="light">
                        <Navbar.Brand href="#">Слой университета</Navbar.Brand>
                    </Navbar>
                    <CardColumns className="mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{URectangle.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Тестовый слой на университете
                                </Card.Subtitle>
                                <Card.Text>
                                    {URectangle.coords[0][0]}{' '}
                                    {URectangle.coords[0][1]}
                                </Card.Text>
                                <Card.Link
                                    onClick={() =>
                                        map?.panTo([
                                            (URectangle.coords[1][0] +
                                                URectangle.coords[0][0]) /
                                                2,
                                            (URectangle.coords[1][1] +
                                                URectangle.coords[0][1]) /
                                                2,
                                        ])
                                    }
                                >
                                    Показать на карте
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{URectangle.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Тестовый слой на университете
                                </Card.Subtitle>
                                <Card.Text>
                                    {URectangle.coords[0][0]}{' '}
                                    {URectangle.coords[0][1]}
                                </Card.Text>
                                <Card.Link
                                    onClick={() =>
                                        map?.panTo([
                                            (URectangle.coords[1][0] +
                                                URectangle.coords[0][0]) /
                                                2,
                                            (URectangle.coords[1][1] +
                                                URectangle.coords[0][1]) /
                                                2,
                                        ])
                                    }
                                >
                                    Показать на карте
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                    <Navbar expand="sm" variant="light" bg="light">
                        <Navbar.Brand href="#">
                            Другой слой университета
                        </Navbar.Brand>
                    </Navbar>
                    <CardColumns className="mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{URectangle.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Тестовый слой на университете
                                </Card.Subtitle>
                                <Card.Text>
                                    {URectangle.coords[0][0]}{' '}
                                    {URectangle.coords[0][1]}
                                </Card.Text>
                                <Card.Link
                                    onClick={() =>
                                        map?.panTo([
                                            (URectangle.coords[1][0] +
                                                URectangle.coords[0][0]) /
                                                2,
                                            (URectangle.coords[1][1] +
                                                URectangle.coords[0][1]) /
                                                2,
                                        ])
                                    }
                                >
                                    Показать на карте
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{URectangle.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Тестовый слой на университете
                                </Card.Subtitle>
                                <Card.Text>
                                    {URectangle.coords[0][0]}{' '}
                                    {URectangle.coords[0][1]}
                                </Card.Text>
                                <Card.Link
                                    onClick={() =>
                                        map?.panTo([
                                            (URectangle.coords[1][0] +
                                                URectangle.coords[0][0]) /
                                                2,
                                            (URectangle.coords[1][1] +
                                                URectangle.coords[0][1]) /
                                                2,
                                        ])
                                    }
                                >
                                    Показать на карте
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
                <Map
                    onCreated={(map) => {
                        setMap(map);
                    }}
                />
            </div>
        </div>
    );
};
