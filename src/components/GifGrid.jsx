
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
   // Se vamos a tener codigo par alguna logia, si se usa el return e ves del implicito.

   // No debe llamarse directamente las funcinoes por que siempre que se renderiza lo hace varias
   // veces, no improta si actualiza vuelve y llama el api , para eso vamos a usar useEffect();
   getGifs(category);

   return (
      <>
         <h3>{category}</h3>
         <p>Hola Mundo</p>
      </>
   )
}

