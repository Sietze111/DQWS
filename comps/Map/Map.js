import { useEffect } from 'react';
import L from 'leaflet';
import 'proj4leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
    let mapClassName = styles.map;

    if (className) {
        mapClassName = `${mapClassName} ${className}`;
    }

    var RD = new L.Proj.CRS(
        'EPSG:28992',
        '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs',
        {
            transformation: L.Transformation(-1, -1, 0, 0), // eslint-disable-line no-undef,
            origin: [-285401.92, 903401.92],
            resolutions: [
                3440.64,
                1720.32,
                860.16,
                430.08,
                215.04,
                107.52,
                53.76,
                26.88,
                13.44,
                6.72,
                3.36,
                1.68,
                0.84,
                0.42,
                0.21,
                0.105,
            ],
            bounds: L.bounds([-285401.92, 22598.08], [595401.92, 903401.92]),
        }
    );

    return (
        <MapContainer className={mapClassName} {...rest} crs={RD}>
            {children(ReactLeaflet)}
        </MapContainer>
    );
};

export default Map;
