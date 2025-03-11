# React + Vite

Se ha hecho carga de datos asíncrona, utilizando fetch, llamando a una API pública, que es: https://fakestoreapi.com/products,
utlizando useEffect y gestionando errores indicando cual es el error en caso de que la peticion fallara.

 
Se ha realizado diseño de este proyecto mediante un framework de CSS, utilizando las clases y componentes de bootstrap react, además se ha realizado el diseño responsive también mediante bootstrap.
 
Se ha utilizado useState para actualizar dinámicamente la interfaz sin la necesidad de recargar la página.

Se ha utilizado el  el package bundler de Vite para la creación de este proyecto. El despliegue se ha realizado mediante servidores externos, como lo es en el caso de gh-pages, link para verlo en funcionamiento en gh-pages: https://Tabatalv.github.io/tienda-etsy.

Se han realizado al menos 5 commits con mensajes claros sobre lo que se ha realizado.

Para poner en funcionamiento el despliegue, he agregado en el package.json "homepage" y seguido le he indicado la url de mi proyecto, y en la parte de scripts le he agregado "deploy": vite build && gh-pages -d dist con el que lo desplegaremos brevemente, luego en vite.config.js he agregado base: 'tienda-etsy'. Con esto ya tendríamos lo necesario para desplegarlo, por lo que nos dirigimos a nuestra terminal y ejecutamos npm run deploy, luego de unos segundos podremos ver nuestro poryecto en funcionamiento mediante la url que le facilitamos mediante homepage.