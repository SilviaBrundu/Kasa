import { useParams, Navigate } from 'react-router-dom';
import data from '../data/data.json';
import Layout from '../components/Layout';
import SlideShow from '../components/SlideShow';
import InformationOfferFile from '../components/InformationOfferFile';

function OfferFile() {
    
    const { id } = useParams();

    const offerId = data.find((element) => element.id === id);

    if (!offerId) {
        return <Navigate to='/404' replace />;
    }
    return(
        <Layout>
            <SlideShow />
            <InformationOfferFile />
        </Layout>
    )
}
    export default OfferFile