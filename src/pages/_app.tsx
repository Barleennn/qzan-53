import { useState } from 'react';
import { Header } from '../components/Header';
import type { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';

type AppPropsWithLayout = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isContractFullscreen, setIsContractFullscreen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Header 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        isContractFullscreen={isContractFullscreen}
      />
      <Component 
        {...pageProps} 
        onFullscreenChange={setIsContractFullscreen}
      />
    </>
  );
}

export default MyApp;
