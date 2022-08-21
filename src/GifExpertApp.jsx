import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);
   // const apiKey = 'eLExLPtDE06VxhwSZ4ZpRpaBss0IWc48';

   const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories]); //ok 
      // setCategories(cat => [...cat, 'Ninja Gaiden']); //another way
   }

   return (
      <>
         <h1>GifExpertApp</h1>
         <AddCategory
            // setCategories={ setCategories }
            onNewCategory={(event) => onAddCategory(event)}
         />

         <button onClick={onAddCategory}>Agregar</button>
         {/* Return implicito se quita y se ponen ( ) y se remueven las { }  */}
         {
            categories.map(category => (
               <GifGrid key={category} category={category} />
            ))
         }
      </>
   )
}
