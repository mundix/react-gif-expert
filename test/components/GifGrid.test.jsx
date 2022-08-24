import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

   test('Debe de mostrar el loading incialmente', () => {

      const category = 'One Punch';

      //se usa mockReturnValue para enviar a al hook useFetchGifs 
      useFetchGifs.mockReturnValue({
         images: [],
         isLoading: true
      });

      render(<GifGrid category={category} />);
      //Evaluando el estado incial
      expect(screen.getByText('Loading ...'));
      expect(screen.getByText(category));
      // render().debug();


   })

   test('Debe de mostrarlas imagenes de fetchGifs', () => {

      //debo hacer el mock de hook , par apoder renderizar l componetne
      // useFetchGifs
      const category = 'Saitama';

      const gifs = [
         {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
         },
         {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
         }
      ];
      useFetchGifs.mockReturnValue({
         images: gifs,
         isLoading: false
      });

      render(<GifGrid category={category}/>);
      expect(screen.getAllByRole('img').length).toBe(2);
      // render().debug();

   });


})