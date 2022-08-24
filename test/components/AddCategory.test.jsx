import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Probando componente <AddCategory/>', () => {

   test('Debe hacer match con el snapshot', () => {

      render(<AddCategory onNewCategory={() => { }} />);
      // Para disparar un evento necesito referencia al input
      const input = screen.getByRole('textbox'); //por que solo hay uno.
      //voy allamar el elemento input, el segundo arugmento es el evento donde se pasa un objeto
      //Se le pasa el argumento un objetyo con target : { y los values que debe tener}
      fireEvent.input(input, { target: { value: 'Saitama' } });

      expect(input.value).toBe('Saitama');

      // screen.debug();

   });

   test('Debe llamar onNewCategory si el input tiene un Valor', () => {

      const inputValue = 'Saitama';
      //TODO: ???
      const onNewCategory = jest.fn();

      // render(<AddCategory onNewCategory={() => {}}/>);
      render(<AddCategory onNewCategory={onNewCategory} />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: inputValue } });

      fireEvent.submit(form); //el form le manda la configuracion necesaria 
      // Despes dehacer submit el campo de texto debe quedar vcio
      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).not.toHaveBeenCalledTimes(2);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue); //ahi llama con el valor de la caja de text

   });

   test('No debe llamar el onNewCategory si el input esta vacio', () => {

      const inputValue = '';
      //TODO: ???
      const onNewCategory = jest.fn();

      // render(<AddCategory onNewCategory={() => {}}/>);
      render(<AddCategory onNewCategory={onNewCategory} />);

      const form = screen.getByRole('form');// Esto es por que se le agrego el aria-label='form'

      fireEvent.submit(form); //el form le manda la configuracion necesaria 
      // Despes dehacer submit el campo de texto debe quedar vcio
      expect(onNewCategory).not.toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(0);
      expect(onNewCategory).not.toHaveBeenCalledWith(inputValue); //ahi llama con el valor de la caja de text

   })

})