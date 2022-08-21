// Ojo con eso 
//los custom hoks si no devuele un jsx no importa ponerle la extension js 
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';

export const useFetchGifs = (category) => {

  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


   const getImage = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);

   }

   useEffect(() => {
      getImage();
   }, [])

  return {
    // images: images,
    // Si son iguales se manda  el state images solo
    images,
    isLoading
  }

}
