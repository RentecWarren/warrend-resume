import ItemList from "./ItemList";
import useFetch from './useFetch';


const Portfolio = () => {
  const { data: items, isPending, error } = useFetch('https://00ydn8sj8g.execute-api.us-east-1.amazonaws.com/staging/items');

  return (  
    <nav className="home">
      { error && <div>{ error }</div> }
      {isPending && <p>Loading...</p>}     
      {items && <ItemList items={items} title="All Items!" />}     
     </nav>
  );
}
 
export default Portfolio;

