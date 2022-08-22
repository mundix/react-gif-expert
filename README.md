# Git Expert App

Este es mi repositorio del proyect de GifExpertApp de React 

$ yarn run dev
$ yarn build 

Se esta utilizando jest y react/testing-library
Pasos para configurar Jest y testing-library
https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

Para los test es recomendable trazar la ruta critica , que es lo que necesita probar para salir a prod
empezar por los componetens qe menos dependencias tiene el GifItem, luego el getGifs 

## Para instalar PropTypes

$ yarn add prop-types


para hacer primeras pruebas usar render, e importar libreria 
luego creamso una 

const { container } = render(<GifItem title={title} url={url}>);
expect(container).toMathSnapShot();

