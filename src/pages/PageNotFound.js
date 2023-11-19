import React from 'react';
import Error from '../components/Error';
import Layout from '../components/Layout';

function PageNotFound () {
  return (
    <Layout>
      <div>
        <Error />
      </div>
    </Layout>
  )
}

export default PageNotFound;