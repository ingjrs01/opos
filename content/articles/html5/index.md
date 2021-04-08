# Novedades en HTML5

El W3C ha preparado un documento, HTML5 differences from HTML4, en el que detalla las principales diferencias entre HTML4 (y su variante según XML, XHTML 1.0) y la nueva versión del lenguaje, HTML5.

Algunas de las principales diferencias son:

- HTML5 define una sintaxis que es compatible con HTML4 y XHTML 1.0. Por tanto, un salto de línea se puede escribir como <br> (HTML4) o <br /> (XHTML 1.0).
- Para definir el juego de caracteres se introduce un nuevo atributo para la etiqueta <meta>:
    <meta charset=”UTF-8″>
    aunque todavía es posible utilizar el método tradicional:
    <meta http-equiv=”Content-Type” content=”text/html; charset=UTF-8″>
- Se simplica el DOCTYPE:
    <!DOCTYPE html>
- HTML5 permite incluir elementos de SVG y MathML.
- Se introducen nuevos elementos, como: section, article, aside, header, footer, etc.
- Se introducen nuevos atributos, como: media, charset, autofocus, placeholder, etc.
- Algunos elementos cambian, como: a, b, i, menu, etc.
- Algunos atributos cambian, como: type, name, summary, etc.
- Algunos elementos desaparecen, como: basefont, big, center, etc.
- Algunos atributos desaparecen, como: align, background, bgcolor, etc.
- Mejora de las API, como: getElementsByClassName() y innerHTML.

<area />, <base />, <br />,

<col />
, <embed />,
<hr />
, <img />, <input />, <link />, <meta />, <param />,
<source />
,
<track />
y <wbr />

## Nuevos Elementos HTML5

Etiqueta Descripción

## header: Define el header para un documento o una sección.

## hgroup (eliminado)

Agrupa los elementos para el encabezado. Permitía agrupar elmentos de h1 a h6, para dar consistencia, por ejemplo un título y un subtítulo, etc.

```html
<hgroup>
  <h1>Alien</h1>
  <h2>En el espacio, nadie te escuchará gritar</h2>
</hgroup>
<p>
  La nave comercial Nostromo recibe una llamada de auxilio desde un planeta no
  explorado. Luego de buscar sobrevivientes, la tripulación se dirige a casa
  sólo para darse cuenta que una mortal forma de vida se les ha unido.
</p>
```

## nav: Define los enlaces de navegación en un documento.

Vamos a ver la nueva etiqueta nav HTML5 que nos vale para definir el conjunto de código de un menú de navegación. Esto proporciona información semántica al navegador, sabiendo que en esa sección se encuentran los enlaces que forman un menú de navegación. Se debe utilizar para el menú principal o bloques principales de navegación.

No confundir con las etiquetas section o menu, nav sólamente contiene enlaces a las diferentes secciones de la web

```html
<nav>
  <a href="/enlace1/">Enlace 1</a>
  <a href="/enlace2/">Enlace 2</a>
  <a href="/enlace3/">Enlace 3</a>
  <a href="/enlace4/">enlace 4</a>
</nav>
```

Esta etiqueta puede ir dentro de un header, o de cualquier otra sección.

## section

Define una sección en el documento. Es un elemento de seccionamiento genérico, diseñado para contener una parte de un documento temáticamente definida. Los contenidos de un elemento section son usualmente precedidos por un encabezado. En caso de querer agrupar elementos de temática diferente, pero que queremos dar un estilo uniforme, deberems utilziar el elemento div en lugar de éste.

```html
<section>
  <h1>Anuncios</h1>
  <p>
    <a href="http://www.super-frogger-shaper-5000.com"
      >Super frogger shaper 5000. Todo lo que necesitas para estar en forma!</a
    >
  </p>
</section>
<main>
  <h1>¿Cómo mantenerte en forma?</h1>
  <p>Llevar un estilo de vida saludable es muy importante...</p>
</main>
<section>
  <h1>Artículos relacionados</h1>
  <ul>
    <li>
      <a href="comida-saludable.html">Incluye comida saludable en tu dieta</a>
    </li>
    <li>
      <a href="habitos-de-descanso.html">Adopta buenos hábitos de descanso</a>
    </li>
  </ul>
</section>
```

En este ejemplo, vemos como para la parte principal usamos el elemento main, mientras usamos section para las otras partes.

## main: Define el contenido principal del documento.

## article: Define un artículo del documento.

## aside: Define contenido secundario de la página.

## footer: Define el pie del documento o sección.

## details: Define detalles adicionales que el usuario puede ver o esconder.

## summary: Define un encabezado visible para un elemento &lt;details&gt;.

## figure: Define un contenido independiente, como una ilustración, diagrama, foto, etc.

## figcaption: Define una título para un elemento &lt;figure&gt;.

## mark: Define texto resaltado o marcado.

## time: Define una fecha/hora.

## bdi: Define una parte del texto que puede ser formateada de una manera diferente a la del texto principal.

## wbr: Define un posible retorno de carro.

## dialog: Define una caja de diálogo o ventana

## command: Define un botón de comando al que el usuario puede llamar

## meter: Define una medida escalar dentro de un rango establecido.

## progress: Define el progreso de una tarea.

## ruby: Define una anotación ruby (para tipografía del este asiático) .

## rt: Define una pronunciación de caracteres (para tipografía del este asiático)

## rp: Define lo que se puede mostrar en los navegadores que no soporta las anotaciones ruby.

## Elementos eliminados:

- acronym
- applet
- basefont
- big
- center
- dir
- font
- frame
- frameset
- noframes
- strike
- tt
