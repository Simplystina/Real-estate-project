import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './footer'

const Layout =({children}) =>{
    return (
        <>
           <Head>
               <title>Real Estate</title>
           </Head>
           <Box maxWidth="1280px" margin="0 auto">
               <header>
                   <Navbar></Navbar>
               </header>
               <main>{children}</main>
           </Box>
           <Footer></Footer>
        </>
    )
}  

export default Layout