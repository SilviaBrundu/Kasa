import { useParams, Navigate } from 'react-router-dom';
import Data from '../data/data.json';
import Layout from '../components/Layout';
import SlideShow from '../components/SlideShow';

function OfferFile() {
    
    const { id } = useParams();
    const offerId = Data.find((element) => element.id === id);

    if (!offerId) {
        return <Navigate to="/*" replace />;
    }
    return(
        <Layout>
            <SlideShow />
        </Layout>
    )
}
    export default OfferFile