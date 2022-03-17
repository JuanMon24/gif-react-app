import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

const GiftExpertApp = () => {

    // const categories =['One','Dragon', 'Naruto']
    const [categories, setcategories] = useState(['Dragon Ball'])
    
    const handleAdd =()=>{
        // setcategories([...categories,'Nacho'])
        setcategories(cats=>[...cats,'Sins'])
        
    }
  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr />

        {/* <button onClick={handleAdd}>AGREGAR</button> */}
        <ol >
            {
                categories.map(category=>{
                     // return <li key={category}>{category} </li>
                     return <GifGrid 
                     category={category}
                     key ={category} />
                }
                   
                
                   
                 /*Puedo hacerlo de dos formas con el return o sin el */  
                 /*categories.map(category=>(
                    // return <li key={category}>{category} </li>
                    <GifGrid category={category} />*/
                )  

                
                
            }
        </ol>
    </>
  )
}

export default GiftExpertApp