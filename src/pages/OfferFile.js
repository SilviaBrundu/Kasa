import { useParams, Navigate } from 'react-router-dom';
import Data from '../data/data.json';
import Layout from '../components/Layout';

function OfferFile() {
    
    const { id } = useParams();
    const offerId = Data.find((element) => element.id === id);

    if (!offerId) {
        return <Navigate to="/*" replace />;
    }
    return(
        <Layout>

        </Layout>
    )
}
    export default OfferFile