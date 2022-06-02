
import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

const about = () => {
    return (
        <Layout>
            <h2>This is The About Page</h2>
            <Link to="/">Go back Home </Link>
        </Layout>
    );
}

export default about;
