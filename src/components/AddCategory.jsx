import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

   const [inputValue, setInputValue] = useState('')

   const onInputChange = ({ target }) => {
      // console.log(event.target.value)
      // setInputValue(event.target.value);
      setInputValue(target.value);
   }

   const onSubmit = (event) => {
      // no quiero que se haga refreshc uando se hace enter
      event.preventDefault();
      // console.log(inputValue);
      // Cuando usas el setCategory del useState, el mantiene los valores de por si 
      // es comoel ejemplo del setCounter( (c) => c + 1); hace referencia a sus valores si lo volvemos como argumento 
      // de funcion de flecha 

      if(inputValue.trim().length <= 1) return;

      setCategories((categories) => [inputValue, ...categories]);
      setInputValue(''); //limpia la caja de texto
   }

   return (
      // <form onSubmit={(event) => onSubmit(event)}>
      <form onSubmit={onSubmit}>
         <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
         />
      </form>
   )
}
