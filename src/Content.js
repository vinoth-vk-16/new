import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handlecheck,deleteitem}) => {
    
        
  return (
    <main>
      {(items.length)?( 
        < ItemsList
       items={items}
       handlecheck={handlecheck}
       deleteitem={deleteitem}
       />
       
      ): (
        <p style={{color:'blue'}}> List is empty</p>
      )

}
      
        
    </main>
    
  )
}

export default Content