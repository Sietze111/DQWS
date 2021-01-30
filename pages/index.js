import Head from 'next/head';
import Link from 'next/link';

import Map from '../comps/Map';
import styles from '../styles/Home.module.css';

const DEFAULT_CENTER = [51.936338644306026, 4.412689935744021];

export default function Home() {
    return (
        <>
            <Head>
                <title>DataQuint Webservices | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>DataQuint Webservice checker</h1>
                <p className={styles.text}>
                    This small application provides a list of WMTS layers that
                    can be used in GeoVisia.
                </p>
                <p className={styles.text}>
                    In below map, layers can be enabled and disabled to check
                    content and current status of operation.
                </p>
                <p className={styles.text}>
                    Only one layer can be enabled at a time.
                </p>
                <p className={styles.text}>
                    Some layers have either a minimum or maximum zoom level and
                    will disappear when zoomed beyond those.
                </p>

                <Link href="/wmts/">
                    <a className={styles.btn}>See WMTS Listing</a>
                </Link>
                <Map
                    className={styles.homeMap}
                    center={DEFAULT_CENTER}
                    zoom={12}
                    maxZoom={15}
                    minZoom={6}
                >
                    {({ TileLayer, Marker, Popup, LayersControl }) => (
                        <>
                            <LayersControl
                                position="topright"
                                collapsed={false}
                            >
                                <LayersControl.BaseLayer name="Opentopo">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/opentopo/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="BRT">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer
                                    checked
                                    name="Luchtfoto"
                                >
                                    <TileLayer
                                        attribution="komt nog"
                                        url="https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts/Actueel_ortho25/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="BAG">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/bag/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="Agrarisch Areaal Nederland">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/aan/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="AHN3">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/ahn3_05m_dsm/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="TOP250">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/top250raster/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="Top10NL">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/top10nlv2/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="BGT">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/bgtachtergrond/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="Natura2000">
                                    <TileLayer
                                        attribution="Nationaal Georegister"
                                        url="https://geodata.nationaalgeoregister.nl/tiles/service/wmts/natura2000/EPSG:28992/{z}/{x}/{y}.png"
                                    />
                                </LayersControl.BaseLayer>
                            </LayersControl>
                        </>
                    )}
                </Map>
            </div>
        </>
    );
}
