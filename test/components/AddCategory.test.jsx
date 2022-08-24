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

})