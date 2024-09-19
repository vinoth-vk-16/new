import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("todo-list")))  
    const[newItem,setNewItem] =useState('')
    const handlecheck=(id)=>{
      const listItems =items.map((item)=>item.id===id ? {...item,checked:!item.checked} :item)
      setItems(listItems)
      localStorage.setItem("todo-list",JSON.stringify(listItems))
    } 
    const deleteitem=(id)=>{
      const listItems= items.filter((item)=>item.id!==id)
      setItems(listItems)
      localStorage.setItem("todo-list",JSON.stringify(listItems))
    }
    const handleSubmit= (e) =>{
      e.preventDefault()
      if (!newItem) return;
      addItem(newItem)
      setNewItem('')
    }
    const addItem =(item)=>{
      const id= items.length ? items[items.length -1].id +1 :1
      const addNewItem={id, checked:false,item}
      const listItems =[...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo-list",JSON.stringify(listItems))
    }
    
  return (
    <div className='App'>
      <Header title=" welcome everyone" />
      <AddItem
  newItem={newItem}
  setNewItem={setNewItem}
  handleSubmit={handleSubmit}
/>
      <Content
      items={items}
      handlecheck={handlecheck}
      deleteitem={deleteitem}
      />
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
