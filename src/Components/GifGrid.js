import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifst'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs( category )
            .then ( setImages)
    }, [ category ])
 
    
    
    // const getGist= async()=>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=VfDrNuOVWv6j98lyTAmgj3FRVN9BZfZm`
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();
        
    //     const gifs = data.map(img =>{
    //         return {
    //             id: img.id,
    //             title: img.title, 
    //             url: img.images?.downsized_medium.url,
    //         }
    //     })
    //     console.log(gifs);
    //     setImages( gifs)
        
        
    // }
    
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map(img=>(
                    <GifGridItem 
                        { ...img }
                        key ={img.id}
                    />
                ))
            }       
      
        </div>
       
    </>
  )
}
