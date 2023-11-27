import { useParams, Navigate } from 'react-router-dom';
import Data from '../data/data.json';
import Layout from '../components/Layout';
import SlideShow from '../components/SlideShow';
import InformationOfferFile from '../components/InformationOfferFile';

function OfferFile() {
    
    const { id } = useParams();

    const offerId = Data.find((element) => element.id === id);

    if (!offerId) {
        return <Navigate to='/*' replace />;
    }
    return(
        <Layout>
            <SlideShow />
            <InformationOfferFile />
        </Layout>
    )
}
    export default OfferFile