import React from 'react'
import LineItem from './LineItem';
const ItemsList = ({items,handlecheck,deleteitem}) => {
  return (
    <ul>
    {items.map((item)=>(
        <LineItem 
        item={item}
        key={item.id}
       handlecheck={handlecheck}
       deleteitem={deleteitem}
        />
        
    ))}
  </ul>
  )
}

export default ItemsList