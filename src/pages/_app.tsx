import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/uiParts/header/Header';
import Footer from '../components/uiParts/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Box background="#FAFAFA" minHeight="100vh" position="relative" paddingBottom="100px">
        <Head>
          <title>GLPro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
