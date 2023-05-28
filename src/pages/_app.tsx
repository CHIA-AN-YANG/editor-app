import { Provider } from 'react-redux';
import store from '../shared/redux/store';
import { AppProps } from 'next/app';
import '@styles/global.scss';
import Layout from '@components/Layout';

function App({ Component, pageProps }:AppProps) {
  return (
        <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;