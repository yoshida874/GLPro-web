import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Header from '../components/uiParts/header/Header';
import Footer from '../components/uiParts/Footer';

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
