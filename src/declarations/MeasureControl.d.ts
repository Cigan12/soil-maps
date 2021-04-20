declare module 'react-leaflet-measure' {
    import React from 'react';
    const MeasureControl: React.FC<{
        position: string;
        primaryLengthUnit: string;
        secondaryLengthUnit: string;
        primaryAreaUnit: string;
        secondaryAreaUnit: string;
        activeColor: string;
        completedColor: string;
    }>;
    export default MeasureControl;
}

declare module 'leaflet-measure';
