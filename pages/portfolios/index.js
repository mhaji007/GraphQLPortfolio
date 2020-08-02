import axios from 'axios'
import PortfolioCard from '@/components/portfolios/PortfolioCard';
import FadeIn from 'react-fade-in';
import Link from 'next/link';

const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolios)
}

const Portfolios = ({portfolios}) => {

  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          { portfolios.map((portfolio,index) =>{
            console.log(index);
            return (
            <div key={portfolio._id} className="col-md-4">
              <FadeIn delay= {(400 + index)*index}>
              <Link
                href='/portfolios/[id]'
                as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
              </FadeIn>
            </div>
          )
          }
          )
          }
        </div>
      </section>
    </>
  )
}

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { portfolios };
}



export default Portfolios;
