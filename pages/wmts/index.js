import styles from '../../styles/Wmts.module.css';
import Link from 'next/link';
import dataset from './wmts.json';
import Head from 'next/head';

export const getStaticProps = async () => {
    return {
        props: { webservices: dataset },
    };
};

const Tiles = ({ webservices }) => {
    // console.log(ninjas)

    return (
        <>
            <Head>
                <title>DataQuint Webservices | Listing</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>All WMTS layers</h1>
                {webservices.map((webservice) => (
                    <Link href={'/wmts/' + webservice.id} key={webservice.id}>
                        <a className={styles.single}>
                            <h3>{webservice.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Tiles;
