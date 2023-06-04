import { AppProps } from 'next/app';
import '@styles/global.scss';
import store from '@store/store';
import { Provider } from 'react-redux';
function App({ Component, pageProps }:AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;