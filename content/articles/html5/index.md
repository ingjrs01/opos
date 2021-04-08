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

- header: Define el header para un documento o una sección.
- hgroup: Agrupa los elementos para el encabezado.
- nav: Define los enlaces de navegación en un documento.
- section: Define una sección en el documento.
- main: Define el contenido principal del documento.
- article: Define un artículo del documento.
- aside: Define contenido secundario de la página.
- footer: Define el pie del documento o sección.
- details: Define detalles adicionales que el usuario puede ver o esconder.
- summary: Define un encabezado visible para un elemento &lt;details&gt;.
- figure: Define un contenido independiente, como una ilustración, diagrama, foto, etc.
- figcaption: Define una título para un elemento &lt;figure&gt;.
- mark: Define texto resaltado o marcado.
- time: Define una fecha/hora.
- bdi: Define una parte del texto que puede ser formateada de una manera diferente a la del texto principal.
- wbr: Define un posible retorno de carro.
- dialog: Define una caja de diálogo o ventana
- command: Define un botón de comando al que el usuario puede llamar
- meter: Define una medida escalar dentro de un rango establecido.
- progress: Define el progreso de una tarea.
- ruby: Define una anotación ruby (para tipografía del este asiático) .
- rt: Define una pronunciación de caracteres (para tipografía del este asiático)
- rp: Define lo que se puede mostrar en los navegadores que no soporta las anotaciones ruby.

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
