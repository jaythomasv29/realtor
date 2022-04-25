import Head from 'next/head';
import { Box } from '@chakra-ui/react'

import React from 'react'

function Layout({ children }) {
  return (
    <>
        <Head>
            <title>RealtorPal</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                Navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </Box>
    </>
  )
}

export default Layout