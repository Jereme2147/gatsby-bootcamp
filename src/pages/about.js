import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

import { Link } from "gatsby";
const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>Jereme Daniels - Developer</h1>
            <p>
                I'm a freelance web developer learning to use Gatsby.js and hope to include wordpress as my CMS.
            </p>
            <p><Link to="/contact">Conact me here</Link></p>
        </Layout>
    )
}

export default About;