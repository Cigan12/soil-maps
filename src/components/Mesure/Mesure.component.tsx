import React, { useEffect, useState } from 'react';
import { Circle, Polyline, Tooltip, useMap } from 'react-leaflet';
import './Mesure.styles.scss';
import measure from '../../assets/measure.png';

function getDistance(coord: Array<number>, coord2: Array<number>) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
        0.5 -
        c((coord2[0] - coord[0]) * p) / 2 +
        (c(coord[0] * p) *
            c(coord2[0] * p) *
            (1 - c((coord2[1] - coord[1]) * p))) /
            2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

export const Measure: React.FC = () => {
    const map = useMap();
    const [firstCircle, setfirstCircle] = useState<Array<number> | boolean>(
        false
    );
    const [secondCircle, setsecondCircle] = useState<Array<number> | boolean>(
        false
    );
    const [isMeasurement, setisMeasurement] = useState(false);
    const [polyLine, setPolyLine] = useState<Array<number> | boolean>(false);
    const [distance, setDistance] = useState(0);
    useEffect(() => {
        if (map) {
            map.addEventListener('click', (e) => {
                if (isMeasurement) {
                    if (firstCircle && !secondCircle) {
                        setsecondCircle([
                            (e as any).latlng.lat,
                            (e as any).latlng.lng,
                        ]);
                    }
                    if (!firstCircle) {
                        console.log(
                            '🚀 ~ file: Map.component.tsx ~ line 93 ~ map.addEventListener ~ firstCircle',
                            firstCircle
                        );
                        setfirstCircle([
                            (e as any).latlng.lat,
                            (e as any).latlng.lng,
                        ]);
                    }
                } else {
                    setfirstCircle(false);
                    setsecondCircle(false);
                }
            });

            return () => {
                map.removeEventListener('click');
            };
        }
    }, [map, isMeasurement, firstCircle, secondCircle]);

    useEffect(() => {
        if (map) {
            map.addEventListener('mousemove', (e) => {
                if (isMeasurement) {
                    if (!secondCircle) {
                        setPolyLine([
                            (e as any).latlng.lat,
                            (e as any).latlng.lng,
                        ]);
                        if (typeof firstCircle === 'object') {
                            setDistance(
                                +getDistance(firstCircle, [
                                    (e as any).latlng.lat,
                                    (e as any).latlng.lng,
                                ]).toFixed(2)
                            );
                        }
                    }
                } else {
                    setPolyLine(false);
                    setfirstCircle(false);
                    setsecondCircle(false);
                }
            });

            return () => {
                map.removeEventListener('mousemove');
            };
        }
    }, [map, isMeasurement, secondCircle, firstCircle]);

    useEffect(() => {
        const keydownHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setisMeasurement(false);
        };
        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
        };
    }, []);
    return (
        <>
            <div
                className={isMeasurement ? 'measure mesure_active' : 'measure'}
                onClick={() => {
                    setisMeasurement((prev) => !prev);
                }}
            >
                <img className="measureIcon" src={measure} alt="measure" />
            </div>
            {secondCircle && <Circle center={secondCircle as any} radius={5} />}
            {firstCircle && <Circle center={firstCircle as any} radius={5} />}
            {polyLine && firstCircle && (
                <Polyline
                    pathOptions={{ color: 'blue' }}
                    positions={[firstCircle as any, polyLine]}
                >
                    <Tooltip
                        direction="bottom"
                        offset={[0, 20]}
                        opacity={1}
                        permanent
                    >
                        {`${distance} km`}
                    </Tooltip>
                </Polyline>
            )}
        </>
    );
};
