import { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
  const [title, setTitle] = useState('');
  const [message, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    const randomHex = Math.random().toString(16).slice(2);
    const id = timestamp.toString(16) + randomHex.replace(/(.{8})/g, "$1-") + "-4";

    const submitMessage = { id, title, message};

    setIsPending(true);

    fetch('https://00ydn8sj8g.execute-api.us-east-1.amazonaws.com/staging/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitMessage)
    }).then(() => {
      console.log('New Message added');
      setIsPending(false);
      // history.push('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add a new message</h2>
      <form onSubmit={handleSubmit}>
        <label>Message title:</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={e => setTitle(e.target.value)}    
        />
        <label>Message body:</label>
        <textarea 
          required
          value={message}
          onChange={e => setBody(e.target.value)}    
        >  
        </textarea>
        { !isPending && <button>Add Message</button>}
        { isPending && <button disabled>Adding a Message...</button>}
      </form> 
    </div> 
  );
}
 
export default Create;