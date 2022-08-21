
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
   // Se vamos a tener codigo par alguna logia, si se usa el return e ves del implicito.
   const [images, setImages] = useState([]);
   //TODO: hacer que imprima los titulos en el un loop,
   //NOTE: no se puede usar fucnion async dentro del useEffect , 
   //Se puede crear una function para ser llamda dentro del useEffect , y esta si puede
   //ser async ó 
   const getImage = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);

   }

   // No debe llamarse directamente las funcinoes por que siempre que se renderiza lo hace varias
   // veces, no improta si actualiza vuelve y llama el api , para eso vamos a usar useEffect();
   useEffect(() => {
      // OJO esa funcion puede llamarse siendo ella misma async , y no se puede poner async dentro del useEffect
      getImage();
   }, [])

   return (
      <>
         <h3>{category}</h3>
         <div className='card-grid'>
            {
               // images.map(img => (
               //    <li key={img.id}>{img.title}</li>
               // ))
               // Aqui esta con destructuracion de los props id and title
               // images.map(({id, title}) => (
               images.map((image) => (
                  // <GifItem key={image.id} />
                  // Se puede enviar todo las propiedades de image usando ...image
                  <GifItem key={image.id} { ...image}/>
               ))
            }
         </div>
      </>
   )
}

