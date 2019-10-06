// import React from "react"

// export default () => <div> works.</div>
import React from 'react'
import { Link } from "gatsby";
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="home" />
            <h1>Hello world</h1>
            <h2>this is me learning.</h2>
            <p>Need a devloper? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage