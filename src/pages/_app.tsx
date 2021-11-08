import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Header from '../components/atom/header/header';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
