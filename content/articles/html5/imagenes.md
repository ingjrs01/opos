---
title: Imágenes
layout: articles.njk
---

# Trabajando con imágenes

## Trataimento simple

En principio, el tratamiento deu na imágen es muy sencillo, basta con utilizar la etiqueta img. Ej

```html
<img src="imagen.jpg">
```
Con esto podemos meter una imágen en nuestro documento, pero esta forma  no es correcta. En HTML todas las imágenes deben tener el atributo ALT, donde especificar un texto alternativo. Este texto alternativo ha de ser una frase con sentido, y no una serie de palabras clave. Puede darse el caso de que la imagen sea algo decorativo, y no necesita descripción. En ese caso sería mejor colocarla con CSS.
De cara al SEO también es conveniente tener un nombre de archivo adecuado.
Si todavía queremos mejorar esto, podemos utilizar el siguiente atributo:


## figure y figcaption

Define un contenido independiente, como una ilustración, diagrama, foto, etc.

El elemento figure representa a una pieza de documento autocontenido que se utiliza habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de código, etc. Ésta, podrían ser acompañada por una leyenda o título (elemento figcaption) que puede usarse para hacer una referencia al fragmento desde alguna otra parte del documento. Además del título opcional, un elemento figure puede contener a otros elementos como imágenes (img), párrafos (p), código de computadora (code), citas (cite), etc.

Ser autocontenido significa que figure tiene cierto grado de independencia del flujo del documento, y su posición relativa al contenido circundante no necesita ser exacta.

Las imágenes ubicadas junto bloques de texto en un periódico contituyen buenos ejemplos de uso apropiado de los elementos figure y figcaption.

Cuando figure tiene información que sólo está tangencialmente relacionada al contenido circundante, el elemento aside debería ser utilizado en su lugar, opcionalmente contienendo éste mismo un elemento figure.

```html
<h1>Análisis de uso de los navegadores</h1>
<figure style="float: right">
  <img src="/assets/images/browser-statistics.png" />
  <figcaption>Gráfico A: Uso de navegadores</figcaption>
</figure>
<p>
  En la batalla por el dominio del acceso web, el navegador Chrome toma la
  delantera con más del 40% de los usuarios. Como puedes ver en el gráfico A,
  esto es casi el doble del uso de su primer competidor, Internet Explorer, el
  cual toma el segundo lugar con el 24%.
</p>
```

Define una título para un elemento &lt;figure&gt;.
El elemento figcaption representa un título o leyenda de un fragmento de contenido (figure). Un elemento figure representa a un trozo de documento autocontenido que se usa habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de código, etc.

La presencia del elemento figcaption dentro de figure es opcional, pero si está presente, sólo puede hacer uno y debe estar ubicado al comienzo o al final del elemento figure al cual pertenece.

En cuanto al formato de las imágenes. Es muy común utilizar JPG, pero no es el mejor formato en todos los casos

SVG
SPNG
GIF -> MP4 ó APNG
APNG

JPG
JPEG2000 -> JPG ó WebP
JPEG-XR -> JPG ó WebP
WebP
AVIF
JPEG-XL

Formatos como APNG, WebP, (alternativa a jpg con soporte para transparencia) son buenas opciones, pero no los soportan todos los navegadores, así que para mejorar esto debemos utilizar picture:

## picture

Con picture podemos utilizar fallbacks. Veámoslo con un ejemplo.

```html
<figure id="rey-elefante">
    <picture>
        <source srcset="imagen-detallada-elefante.avif" type="image/avif">
        <source srcset="imagen-detallada-elefante.jxl" type="image/jxl">
        <source srcset="imagen-detallada-elefante.webp" type="image/webp">
        <img src="imagen-detallada-elefante.jpg" alt="Un gran elefante, dueño de la selva">
    </picture>
    <figcaption>El señor elefante, el auténtico rey de la selva</figcaption>
</figure>
```

Si el navegador soporta AVIF, carga esta imágen. Sino lo soporta, pero si JPG XL, luego con WepP. Si no soporta ninguno de ellos, entonces carga el img normal. 

## Lazy loading

En ocaciones, tenemos muchas imágenes, pero no es necesario cargar todas  a la vez, y se pueden ir cargando según se va viendo la web (scroll). A esta técnica la denominamos lazy load, y se hace añadiendo el atributo loading, con el valor lazy. Ejemplo: 

```html
<figure id="rey-elefante">
    <picture>
        <source srcset="imagen-detallada-elefante.avif" type="image/avif">
        <source srcset="imagen-detallada-elefante.jxl" type="image/jxl">
        <source srcset="imagen-detallada-elefante.webp" type="image/webp">
        <img loading="lazy" src="imagen-detallada-elefante.jpg" alt="Un gran elefante, dueño de la selva">
    </picture>
    <figcaption>El señor elefante, el auténtico rey de la selva</figcaption>
</figure>
```

## Otras consideraciones

Es una buena práctica utilizar los atributos height y width para que el navegador conozca previamente el tamaño de la imágen. 

También podemos  hacer una precarga de una imágen (la más grande la la web), consiguiendo una web más rápida y mejorando el LCP de Google Web Vitals.

```html
<head>
    <link rel="preload" href="imagen-detallada-elefante.jpg" as "image">
</head>
```

Otro atributo que podemos uitlizar en caso de una imágen que no necesita ser cargada aún, para que el navegaodr se centro en otros recursos y mejorando la velocidad de carga. 

```html
<img src="imagen-detallada-elefante.jpg" alt="El señor elefante, dueño de la selva" decoding="async">
```
