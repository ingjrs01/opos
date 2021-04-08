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

## main

Define el contenido principal del documento. El elemento main es un contenedor para los temas centrales de un documento o sección. Este contenido central puede interpretarse como todo lo que resta luego de quitar anuncios, encabezados (header), pies (footer), secciones de navegación (nav), vínculos relacionados y otros elementos secundarios.

El elemento main tiene mayor importancia para personas con discapacidades, que habitualmente acceden a la web a través de programas especiales como los navegadores de voz. En tales casos, los navegadores pueden ser instruidos para ir directamente al contenido principal del documento o sección (main), saltándose toda la información menos relevante.

No existen restricciones en cuanto al número de elementos main que puede contener un documento, pero solo puede estar visible uno a la vez (atributo hidden)

Como ancestros, solo puede tener los elementos html, body, div y form.

## article

Define un artículo del documento.

El elemento article es un contenedor de bloques de contenido que se consideran independientes del sitio web y pueden, por lo tanto, ser vistos, reutilizados y distribuidos por separado, como por ejemplo, en la sindicación. Puedes encontrar habitualmente a este elemento encerrando artículos, entradas de blogs o mensajes de un foro.

Cuando dos o más de estos elementos están anidados, se supone que el elemento article interior guarda relación con el elemento article que actúa como padre. Este podría ser el caso de una entrada de blog (siendo en sí misma un article), donde cada comentario puede estar encerrado por un elemento article.

El elemento article puede ser utilizado en conjunto con otros elementos como header, footer y time para agregar información acerca de su contenido. Esta información puede ser utilizada, por ejemplo, por navegadores o lectores de noticias.

No debes confundir los elementos article y section. El elemento article tiene un mayor significado e implica que sus contenidos pueden ser tratados independientemente del documento que los contiene.

```html
<article>
  <header>
    <h1>La cocina china</h1>
    <p>
      Publicado
      <time pubdate datetime="2014-03-28T20:00-04:00">2 meses atrás</time>
    </p>
  </header>
  <p>
    La cocina china incluye estilos originarios de diversas regiones de China,
    así como de personas chinas en otras partes del mundo. La historia de la
    cocina en China se remonta a cientos de años atrás y ha cambiado de período
    a período y en cada región de acuerdo al clima, las modas imperiales, y la
    preferencia local.
  </p>
  <p>...</p>
  <footer>
    <p>&copy; Todos los derechos reservados</p>
  </footer>
</article>
```

## aside

Define contenido secundario de la página.

El elemento aside es un contenedor para información que se considera solo levemente relacionada al documento o la sección en la que es definida. En otras palabras, el contenido del elemento aside debe estar relacionado al contenido circundante, pero no ser completamente necesario para su comprensión.

El elemento aside puede ser típicamente encontrado alrededor de enlaces de blogrolls, enlaces al archivo, un glosario, una lista de tweets del autor, o notas, pensamientos o ideas que se le han ocurrido al autor durante la producción del documento. Asimismo, puedes ver ejemplos perfectos de notas al margen en revistas y diarios impresos, donde se provee información adicional (pero no crítica) para enriquecer la experiencia del usuario.

Los autores no deberían utilizar el elemento aside para encerrar contenido que no guarda relación con la sección en la que se define. Su contenido debe tener alguna relación con su entorno.

```html
<h1>El blog de astrofotografía de Pepe</h1>
<p>Este es mi blog, y aquí te puedes encontrar...</p>
<aside>
  <nav>
    <h1>Sitios relacionados</h1>
    <ul>
      <li>
        <a href="http://science.nasa.gov/astrophysics/"
          >Astrofísica - NASA Science</a
        >
      </li>
      <li>
        <a href="http://www-astro.physics.ox.ac.uk/"
          >Astrofísica | Universidad de Oxford</a
        >
      </li>
      <li>
        <a href="https://danielmarin.naukas.com/">Blog de Daniel Marín</a>
      </li>
      <li>...</li>
    </ul>
  </nav>
</aside>
```

## footer

El elemento footer representa al pie de una sección o documento, donde los autores habitualmente colocan firmas, información acerca del autor, información de licencias, documentos relacionados, etc. En muchos casos, los contenidos del pie de un documento son consistentes a lo largo de todo el sitio.

Cuando un elemento footer es declarado dentro de un elemento de seccionamiento (como article o section) representa un pie en el ámbito de ese elmento. De lo contrario (cuando pertenece al elemento body) representa un pie para el documento entero.

Aunque es una práctica común colocar los pies al final de la página o sección, no es necesario que ocupen ese lugar. Un pie es un pie por lo que representa, no por su ubicación.

La información de contacto acerca del autor de un documento o artículo corresponde dentro del elemento address el cual podría incluirse, a su vez, dentro de un elemento footer.

```html
<article>
  <h1>El extranjero</h1>
  <p>
    "Suficiente!" dijo el pequeño hombre, mientras se levantaba de su
    desbaratada silla...
  </p>
  <footer>
    <p>Copyright &copy; 1990-2014 Peter Doe, todos los derechos reservados.</p>
  </footer>
</article>
```

## details

Define detalles adicionales que el usuario puede ver o esconder.

El elemento details representa un trozo de contenido oculto que puede ser mostrado a pedido del usuario. Este elemento está pensado para implementar soporte nativo para contenido colapsable y es habitualmente representado por un título (provisto por el elemento summary) acompañado por una flecha que sugirere al usuario que hay más contenido que puede ser accedido. Cuando el usuario hace clic en el título o la flecha, el contenido es automáticamente mostrado.

Múltiples elementos details pueden ser perfectamente anidados para formar un conjunto de contenidos colapsables en una distribución jerárquica. Adicionalmente, el atributo open puede ser usado para hacer que el contenido del elemento sea inicialmente visible.

Un título o etiqueta puede ser provisto para el contenido colapsable. En tal caso, éste debe ser representado por un elemento summary, que debe ser el primer hijo del elemento details al cual pertenece.

El soporte provisto por los navegadores para el elemento details es incompleto. Los autores pueden tener que recurrir a programas para lograr su mismo efecto consistentemente.

```html
<p>
  La mayoría de procesos astrofísicos no pueden ser recreados en los
  laboratorios de la Tierra. En cualquier caso, existe una gran variedad de
  objetos astronómicos visibles a lo largo de todo el espectro electromagnético.
  El estudio de dichos objetos mediante la adquisición pasiva de datos es el
  objetivo de la astronomía observacional.
</p>
<details open>
  <summary>Galileo Galilei</summary>
  <img
    src="/assets/images/galileo-galilei.jpg"
    style="float: right; margin: 0 0 1em 2em"
    alt="Galileo Galilei, padre de la astronomía observacional moderna"
  />
  <p>
    Galileo Galilei fue un astrónomo, filósofo, ingeniero, matemático y físico
    italiano, relacionado estrechamente con la revolución científica. Eminente
    hombre del Renacimiento, mostró interés por casi todas las ciencias y artes
    (música, literatura, pintura).
  </p>
  <p>
    Sus logros incluyen la mejora del telescopio, gran variedad de observaciones
    astronómicas, la primera ley del movimiento y un apoyo determinante al
    copernicanismo.
  </p>
</details>
```

Fíjese en el ejemplo anterior en el atributo open, para indicar que por defecto este panel está visible

## summary

Define un encabezado visible para un elemento &lt;details&gt;.

El elemento summary representa un resumen, título o etiqueta para los contenidos de un elemento details. La descripción provista por este elemento será mostrada encima de los contenidos del elemento details para el cual ha sido declarado.

El soporte provisto por los navegadores para details y summary es incompleto. Los autores pueden tener que recurrir a programas para lograr los mismos efectos consistentemente.

```html
<p>
  <b>Cosmos: un viaje personal</b> es una serie documental de divulgación
  científica escrita por Carl Sagan, Ann Druyan y Steven Soter (con Sagan como
  guionista principal y presentador), cuyos objetivos fundamentales fueron:
  difundir la historia de la astronomía y de la ciencia, así como sobre el
  origen de la vida; concienciar sobre el lugar que ocupa nuestra especie y
  nuestro planeta en el universo, y presentar las modernas visiones de la
  cosmología y las últimas noticias de la exploración espacial, y en particular,
  las misiones Voyager.
</p>
<details>
  <summary>Carl Sagan</summary>
  <p>
    Carl Edward Sagan fue un astrónomo, astrofísico, cosmólogo, escritor y
    divulgador científico estadounidense. Sagan publicó numerosos artículos
    científicos y comunicaciones1 y fue autor, coautor o editor de más de una
    veintena de libros. Defensor del pensamiento escéptico científico y del
    método científico, fue también pionero de la exobiología, promotor de la
    búsqueda de inteligencia extraterrestre a través del Proyecto SETI e impulsó
    el envío de mensajes a bordo de sondas espaciales, destinados a informar a
    posibles civilizaciones extraterrestres acerca de la cultura humana.
  </p>
</details>
```

Se verá el texto Carl Sagan, y el demás permanece oculto con un símbolo para mostrarlo

## figure

Define un contenido independiente, como una ilustración, diagrama, foto, etc.

El elemento figure representa a una pieza de documento autocontenido que se utiliza habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de código, etc. Ésta, podrían ser acompañada por una leyenda o título (elemento figcaption) que puede usarse para hacer una referencia al fragmento desde alguna otra parte del documento. Además del título opcional, un elemento figure puede contener a otros elementos como imágenes (img), párrafos (p), código de computadora (code), citas (cite), etc.

Ser autocontenido significa que figure tiene cierto grado de independencia del flujo del documento, y su posición relativa al contenido circundante no necesita ser exacta.

Las imágenes ubicadas junto bloques de texto en un períodico contituyen buenos ejemplos de uso apropiado de los elementos figure y figcaption.

Cuando figure tiene unformación que sóle está tangencialmente relacionada al contenido circundante, el elemento aside debería ser utilizado en su lugar, opcionalmente contienendo éste mismo un elemento figure.

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
