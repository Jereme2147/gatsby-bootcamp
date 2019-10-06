import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
    return (
        <Layout>
            <Head title="contact"/>
            <h1>Contact me using the following resources:</h1>
            <h3>jereme@jeremedaniels.com</h3>
            <p><Link to="https://twitter.com/JD2147">@jereme2147</Link></p>
            <p><a href="https://twitter.com/JD2147">@jereme2147</a></p>
        </Layout>
       
    )
}

export default Contact;