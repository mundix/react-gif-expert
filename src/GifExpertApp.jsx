import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Jo jo Bizarre']);
   // const apiKey = 'eLExLPtDE06VxhwSZ4ZpRpaBss0IWc48';

   const onAddCategory = () => {
      setCategories([...categories, ' Ninja Gaiden']); //ok 
      // setCategories(cat => [...cat, 'Ninja Gaiden']); //another way
   }

   return (
      <>
         {/* Title */}
         <h1>GifExpertApp</h1>
         <AddCategory setCategories={ setCategories }/>

         {/* Input */}
         
         {/* Listado de Gif */}
         <button onClick={onAddCategory}>Agregar</button>
         <ol>
            {categories.map(category => {
               return (<li key={category} >{category}</li>);
            })}
         </ol>

            {/* Gif Item */}
      </>
   )
}
