import React, { useState } from 'react';
import { Map } from '../../components/Map/Map.component';
import { Map as LeafletMap } from 'leaflet';
import './Map.styles.scss';
import { Card, CardColumns, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

export const MapPage: React.FC = () => {
    const state = useSelector((state: TStore) => state);

    const [map, setMap] = useState<null | LeafletMap>(null);
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Карта слоев почвы</Navbar.Brand>
            </Navbar>
            <div className="main-map">
                <div className="Layers">
                    <Navbar expand="sm" variant="light" bg="light">
                        <Navbar.Brand href="#">Участки</Navbar.Brand>
                    </Navbar>
                    <CardColumns className="mt-3">
                        {state.AreasReducer.areas.map((area) => (
                            <Card key={area.id} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{area.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {area.properties.culture}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {`${area.geometry.coordinates[0][0].toFixed(
                                            2
                                        )} ${area.geometry.coordinates[0][1].toFixed(
                                            2
                                        )}`}
                                    </Card.Text>
                                    <Card.Link
                                        onClick={() => {
                                            map?.panTo(
                                                area.geometry.coordinates[0]
                                            );
                                        }}
                                    >
                                        Показать на карте
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardColumns>
                    <Navbar expand="sm" variant="light" bg="light">
                        <Navbar.Brand href="#">Слой почв</Navbar.Brand>
                    </Navbar>
                    <CardColumns className="mt-3"></CardColumns>
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
