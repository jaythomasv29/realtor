import Head from 'next/head';
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'

import React from 'react'
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>RealtorPal</title>
            </Head>
            <Box maxWidth="1080px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}

export default Layout