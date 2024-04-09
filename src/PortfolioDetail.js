import { useState } from 'react';
import portfolio from './portfolio.json'; // Assuming data.json is in the same directory


const PortfolioDetail = () => {
  const [portfolios] = useState(portfolio);

  return (  
    <div className="portfolio-list">
      {portfolios.map(portfolio => (
        <div className="portfolio-preview" key={portfolio.id}>
            <h2>{ portfolio.name }</h2>
            <p>{ portfolio.message }</p>
        </div>
      ))}      
    </div>
  );
}
 
export default PortfolioDetail;


