declare module 'react-leaflet-measure' {
    // imports here...

    export interface ScriptProps {
        url: string;
        onLoad: () => void;
        // etc...
    }

    export default class Script extends React.Component<ScriptProps> {}
}
