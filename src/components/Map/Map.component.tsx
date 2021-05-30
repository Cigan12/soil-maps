import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'leaflet';
import { MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet';
import './Map.styles.scss';
import { Measure } from '../Mesure/Mesure.component';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

// Wrap our new variable and assign it to the one we used before. The rest of the codes stays the same.
interface IMapProps {
    onCreated: (map: LeafletMap) => void;
}

export const Map: React.FC<IMapProps> = ({ onCreated }) => {
    const state = useSelector((state: TStore) => state);

    return (
        <MapContainer
            zoom={17}
            className="Map"
            whenCreated={onCreated}
            attributionControl={true}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Measure />

            {!!state.AreasReducer.areas.length &&
                state.AreasReducer.areas.map((area) => (
                    <Polygon
                        key={area.id}
                        pathOptions={{ color: 'green' }}
                        positions={area.geometry.coordinates}
                    >
                        <Popup>
                            {area.properties.culture}
                            <br />
                            {`${area.geometry.coordinates[0][0].toFixed(
                                2
                            )} ${area.geometry.coordinates[0][1].toFixed(2)}`}
                        </Popup>
                    </Polygon>
                ))}
        </MapContainer>
    );
};
