import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Pruebas en <GifGrid/>', () => { 

   test('Debe de mostrar el loading incialmente', () => { 

      const category = 'One Punch';

      render(<GifGrid category={category}/>);
      //Evaluando el estado incial
      expect(screen.getByText('Loading ...'));
      expect(screen.getByText(category));
      // render().debug();


    })


 })