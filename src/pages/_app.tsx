import { AppProps } from 'next/app';
import '@styles/base.scss';
import '@styles/global.scss';

function App({ Component, pageProps }:AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default App;