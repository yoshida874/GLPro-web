import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Header from '../components/atom/header/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Box background="#FAFAFA">
        <Header />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
