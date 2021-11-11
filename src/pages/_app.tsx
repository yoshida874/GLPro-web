import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Header from '../components/atom/header/Header';
import Footer from '../components/atom/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Box background="#FAFAFA">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
