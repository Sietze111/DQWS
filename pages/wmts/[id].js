import dataset from './wmts.json';
import styles from './[id].module.css';

export const getStaticPaths = async () => {
    const paths = dataset.map((webservice) => {
        return {
            params: { id: webservice.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = dataset[id];

    return {
        props: { webservices: data },
    };
};

const Details = ({ webservices }) => {
    return (
        <div>
            <h1 className={styles.h1}>{webservices.name}</h1>
            <p>Add to GeoVisia:</p>
            <h2 className={styles.text}>{webservices.url}</h2>
            <p>Description:</p>
            <h2 className={styles.text}>{webservices.omschrijving}</h2>
            <p>Distributor:</p>
            <h2 className={styles.text}>{webservices.leverancier}</h2>
        </div>
    );
};

export default Details;
