import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/shared/Hero';
import '../styles/index.scss';
// import App from 'next/app';

import Navbar from '../components/shared/Navbar';

function MyApp({ Component, pageProps }) {

  const isHomePage = () => Component.name === 'Home'

  return(

    <div className="portfolio-app">

    <Navbar/>

      {/* {pageProps.appData} */}

      {isHomePage() &&  <Hero/> }

    <div className="container">
      <Component {...pageProps} />
    </div>

    {isHomePage() &&
    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
          <div className="container text-center">
            <small>Copyright &copy; Mehdi Hajikhani</small>
          </div>
    </footer>
    }
    </div>
  )
}

// MyApp.getInitialProps = async (context) => {
//   console.log('GET INITIAL PROPS _APP')
//   const initialProps = App.getInitialProps && await App.getInitialProps(context);

//   return {pageProps: {appData: '_App Component', ...initialProps.pageProps}}
// }

export default MyApp
