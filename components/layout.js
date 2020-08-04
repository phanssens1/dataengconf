import PropTypes from "prop-types";
import React from 'react';
import Navbar from '../components/navbar'
import FooterClass from '../components/footer'
import Head from 'next/head';

function Layout ({ children }) {

    return (
        <>
            <Head>
                <title>DataEngBytes - DataEngConfAU</title>
                <meta property="og:title" content="DataEngBytes - DataEngConfAU" key="title" />
                <meta name="description" content="DataEngBytes, a community conference hosted on the 20th to the 21st of August!" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="DataEngBytes" />
                <meta property="og:url" content="https://dataengconf.com.au" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="DataEngBytes" />
                <meta name="twitter:site" content="https://dataengconf.com.au" />
                <meta name="twitter:creator" content="DataEngConfAU" />
                <link rel="icon" type="image/png" href="/public/favicon.ico" />
                <link rel="apple-touch-icon" href="/public/favicon.ico" />
                <link rel="stylesheet" href="" />
                <meta property="og:image" content="https://dataengconf.com.au/images/logos/dataeng/bytes_center.svg" />
                <meta name="twitter:image" content="https://dataengconf.com.au/images/logos/dataeng/bytes_center.svg" />
            </Head>
        <Navbar />
            <div  className="">
                <main className="w-4/5 container mx-auto p-6">
                    {children}
                </main>
            </div>
        <FooterClass />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
