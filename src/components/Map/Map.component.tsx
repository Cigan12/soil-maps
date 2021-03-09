import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet, { Map as LeafletMap } from 'leaflet';
import {
    MapContainer,
    Marker,
    Popup,
    Rectangle,
    TileLayer,
} from 'react-leaflet';
import './Map.styles.scss';
import { URectangle } from '../../utils/Rectangles.util';

interface IMapProps {
    onCreated: (map: LeafletMap) => void;
}

// TODO: Линейка, лупа, информация, поиск, работа с таблицами гис вычисления, вычисление биоклиматичского потенциала

export const Map: React.FC<IMapProps> = ({ onCreated }) => {
    const MarkerIcon = Leaflet.icon({
        iconUrl: '/logo192.png',
        className: 'Icon',
    });

    return (
        <MapContainer
            center={[55.034242, 82.928757]}
            zoom={17}
            className="Map"
            whenCreated={onCreated}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[55.034242, 82.928757]} icon={MarkerIcon}>
                <Popup>Маркер на нашем Университете</Popup>
            </Marker>
            <Rectangle
                bounds={URectangle.coords}
                pathOptions={{ color: '#FF0000' }}
                eventHandlers={{
                    click: () => console.log('click on layer'),
                    mouseover: () => console.log('hover'),
                }}
            >
                <Popup>
                    {URectangle.title}
                    <br />
                    {(
                        (URectangle.coords[1][0] + URectangle.coords[0][0]) /
                        2
                    ).toFixed(4)}{' '}
                    {(
                        (URectangle.coords[1][1] + URectangle.coords[0][1]) /
                        2
                    ).toFixed(4)}
                </Popup>
            </Rectangle>
        </MapContainer>
    );
};
