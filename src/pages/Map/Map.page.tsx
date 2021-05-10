import React, { useState } from 'react';
import { Map } from '../../components/Map/Map.component';
import { Map as LeafletMap } from 'leaflet';
import { URectangle } from '../../utils/Rectangles.util';
import './Map.styles.scss';

export const MapPage: React.FC = () => {
    const [map, setMap] = useState<null | LeafletMap>(null);
    return (
        <div className="main-map">
            <div
                className="Layers"
                onClick={() =>
                    map?.panTo([
                        (URectangle.coords[1][0] + URectangle.coords[0][0]) / 2,
                        (URectangle.coords[1][1] + URectangle.coords[0][1]) / 2,
                    ])
                }
            >
                <h5>{URectangle.title}</h5>
                <p>
                    {URectangle.coords[0][0]} {URectangle.coords[0][1]}
                </p>
            </div>

            <Map
                onCreated={(map) => {
                    setMap(map);
                }}
            />
        </div>
    );
};
