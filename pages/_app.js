import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/shared/Hero';
import '../styles/index.scss';
import App from 'next/app';

import Navbar from '../components/shared/Navbar';

function MyApp({ Component, pageProps }) {
return(
  <div className="portfolio-app">
  <Navbar/>
    {pageProps.appData}
    {Component.name === 'Home' &&  <Hero/> }
  <div className="container">
    <Component {...pageProps} />
  </div>
  </div>
)
}

MyApp.getInitialProps = async (context) => {
  const initialProps = App.getInitialProps && await App.getInitialProps(context);

  return {pageProps: {appData: '_App Component', ...initialProps.pageProps}}
}

export default MyApp
