import { Link } from "react-router-dom";

const ItemList = ({items, title}) => {
  return (
    <div className="item-list">
      <h2>{ title }</h2>
      {items.map(item => (
        <div className="item-preview" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <h2>{ item.title }</h2>
            <p>Written by { item.message }</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

 
export default ItemList;
