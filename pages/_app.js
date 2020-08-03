import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/shared/Hero';
import '../styles/index.scss';
// import App from 'next/app';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

import Navbar from '../components/shared/Navbar';

function MyApp({ Component, pageProps }) {

  const isHomePage = () => Component.name === 'Home'

  return(

  <ApolloProvider client={client}>


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
  </ApolloProvider>
  )
}

// MyApp.getInitialProps = async (context) => {
//   console.log('GET INITIAL PROPS _APP')
//   const initialProps = App.getInitialProps && await App.getInitialProps(context);

//   return {pageProps: {appData: '_App Component', ...initialProps.pageProps}}
// }

export default MyApp
