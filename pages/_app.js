import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
