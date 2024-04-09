
const MessageList = ({items, title}) => {
  return (
    <div className="message-list">
      <h2>{ title }</h2>
      {items.map(item => (
        <div className="message-preview" key={item.id}>
            <h2>{ item.title }</h2>
            <p>{ item.message }</p>
        </div>
      ))}
    </div>
  )
}

 
export default MessageList;
