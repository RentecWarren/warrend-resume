import MessageList from "./MessageList";
import useFetch from './useFetch';


const Messages = () => {
  const { data: items, isPending, error } = useFetch('https://00ydn8sj8g.execute-api.us-east-1.amazonaws.com/staging/posts');

  return (  
    <nav className="home">
      { error && <div>{ error }</div> }
      {isPending && <p>Loading...</p>}     
      {items && <MessageList items={items} title="Messages" />}     
     </nav>
  );
}
 
export default Messages;

