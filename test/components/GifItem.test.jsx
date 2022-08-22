import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas con <GifItem/>', () => {

   const title = 'saitama';
   const url = 'htps://one-punch/saitama.jpg';

   test('Debe hacer match con el snapshot', () => {

      const { container } = render(<GifItem title={title} url={url} />);
      expect(container).toMatchSnapshot();
   });

   test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

      render(<GifItem title={title} url={url} />);
      // screen.debug();
      // console.log(screen.getByRole('img').src);
      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(title);

      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);

   })

   test('Debe de mostrar el titulo de mi componetne', () => {

      render(<GifItem title={title} url={url} />);

      // expect(screen.getByRole('p').innerHTML).toBe(title);
      // console.log(screen.getByRole('p').innerHTML);
      expect(screen.getByText( title)).toBeTruthy();

   })

})