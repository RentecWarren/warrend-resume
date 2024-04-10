import data from './portfolio.json'; 


const PortfolioList = () => {

  const portfolios = data.portfolios;

  return (  
    <div className="portfolio-list">
      {portfolios.map(portfolio => (
        <div className="portfolio-preview" key={portfolio.id}>
            <h2 id={ portfolio.anchor }>{ portfolio.name }</h2>
            <p className="portfolio-company"> <a href={ portfolio.companyLink } target="_new" alt="ds">{ portfolio.companies }, { portfolio.project }</a></p>
            <p>{ portfolio.description1 }</p>
            {portfolio.description2 &&  <p><br/> { portfolio.description2 }</p>}
            {portfolio.workflow && <img src={ portfolio.workflow } alt={ portfolio.project } />}
        </div>
      ))}      
    </div>
  );
}
 
export default PortfolioList;

