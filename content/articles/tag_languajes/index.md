# Tema 12. SGML, HTML, XML y sus derivaciones

- Linguaxes de marca
- SGML
- XML
- Atributos
- Documentos bien formados
- Partes de un XML
- Entidades
- HTML 5

## Lenguajes de marca

Un lenguaje de marca es una forma de codificar un documento, de forma que junto con el texto se incorporan unas etiquetas o marcas que contienen información adicional sobre la estructura del texto o su presentación

Históricamente se usaba en la industria editorial así como entre autores, editores e impresores.

Existen diferentes tipos de marcados:
Marcado de Presentación. En ellos, las etiquetas indican el formato del texto, y suelen ser ocultas. Ej, Word
Marcado de Procedimiento. También está enfocado a la presentación, sin embargo, las marcas son visibles para el usuario y permiten procesamiento (realizar alguna acción) según el tipo de etiqueta. Ejemplos LaTeX y HTML
Marcado descriptivo o semántico. Las marcas describen los fragmentos del texto. Ejemplo XML

Dentro de los lenguajes descriptivos, hay que destacar lenguajes especializados en un área en concreto, como por ejempo MathML y OpenMath en matemáticas, Geography ML en geomática, VoiceXML en voz, XMPP en mensajería instantánea, ...

Qué marcas están permitidas.
Qué marcas son obligatorias.
Cómo se distinguen las marcas del texto.
El significado de cada marca.

Características

- Usan texto plano. Esto hace que los documentos puedan ser editados con cualquier editor de textos y que sean independientes de la plataforma.
- Con compactos. Las instrucciones de marcado se entremezclan con el propio contenido.
- Fáciles de procesar
- Flexibles.Se pueden usar en cualquier área. gráficos vectoriales, IU, web, ...

## SGML

El lenguaje de marcado generalizado estándar o SGML (por sus siglas en inglés de Standard Generalized Markup Language) (SGML; ISO 8879: 1986) es un estándar para definir lenguajes de marcado generalizados para documentos.
De forma más coloquial, se trata de un lenguaje para marcar y describir documentos con independencia total del hardware y software utilizados.
Los lenguajes de marcado no son equivalentes a los lenguajes de programación, pero este nombre genera confusión por la palabra lenguaje.

- El marcado debe ser declarativo, es decir, debe describir el contenido y atributos del documento, en lugar de decir cómo debe ser procesado.
- El marcado debe ser riguroso.

HTML era un ejemplo de este lenguaje hasta la versión 5, en la cual se permite que un documento codifique directamente lo que se debe hacer.
Docbook SGML y LinuxDoc son ejemplos de documentos SGML

La potencia de SGML radica en que permite que se diseñen lenguajes de marcas de forma independiente y facilita el intercambio y conservación de documentos.

Un documento SGML se compone de 3 partes:

- Declaración SGML
- Declaración de tipo de documento (DTD)
- Instancia de documento.

La declaración SGML le dice al usuario que puede y que no puede estar contenido en un documento SGML. Se trata de un diagrama formal y normalizado que le dice al receptor el conjunto de caracteres, los delimitadores y las características opcionales que se van a utilizar en el documento.
La declaración SGML es necesaria para cada documento que se transmite, sin embargo suele omitirse cuando tanto el sistema emisor como el emisor receptor utilizan sintaxis por defecto o una sintaxis de referencia concreta.

La DTD (Document Type Definition) identifica la estructura del documento. La DTD contiene las reglas, el nombre el significado, etc. Si la DTD se define en un archivo separado (con extensión .dtd), éste puede ser referenciado en el documento SGML. Es corriente que se sustituya la DTD completa por una línea que indique la DTD utilizada

Ej

```xml
<!ELEMENT DOCUMENTO - - (titulo, contenido, autor?) >
<!ELEMENT CONTENIDO - - (capitulo+) >
<!ELEMNT CAPITULO - (subtitulo, parrafo?)>
```

La primera línea del ejemplo, describe un elemento del documento SGML llamado DOCUMENTO, que debe contener un título y un contenido y puede contener de forma opcional un autor.

Comandos que se pueden utilizar en el DTD:

- ELEMENT: Sirve para definir una etiqueta
- ENTITY: Sirve para indicar ciertos elementos de texto en forma de suceciones de caracteres ASCII
- ATTLIST: Permite establecer atributos complementarios para determinados elementos conretos.
- USEMAP
- SHORTREF
- NOTATION
- DOCTYPE: Sirve para incluir un DTD o llamar a un archivo .dtd que lo contiene.

Otro concepto importante son las secciones marcadas, las cuales empiezan por “”. Las claves para las secciones marcadas son: INCLUDE, IGNORE, CDATA, RCDATA o TEMP.

## XML

XML (eXtensible Markup Language) es un metalenguaje que nos proporcionan una manera sencilla de definición de lenguajes de etiquetas estructurados.
Es un estándar definido por W3C
Desde su definición, debido a sus ventajas, es un estándar ampliamente aceptado y adoptado tanto para el almacenamiento como para el intercambio de información.
Se puede entender como un subconjunto de SGML (una versión simplificada).

Un documento XML es “texto plano”. En él no hay caracteres no imprimibles a excepción del salto de línea, espacio y tabulador. Tampoco hay formatos visuales, como negritas, cursivas, …

Un documento XML está formado por elementos. Mediante estos elementos se almacena la información correspondiente.

Para definir el elemento, necesitamos definir primero las etiquetas:
Una etiqueta un un texto que va entre los símbolos “<” y “>”. Por ejemplo
<factura>

Existen dos tipos de etiquetas: etiquetas de inicio (<persona>) y etiqueta de fin (</persona>) .

Un Elemento, que nombramos antes, se compone de una etiqueta de inicio, y una etiqueta de fin. En medio está el contenido que quiere representar.
El contenido de un elemento puede ser un texto, u otros elementos. .

Respecto a la sintaxis de los elementos, se deben cumplir las siguientes reglas:
Los elementos deben empezar por una letra, por _ o por : (dos puntos).
no puede empezar por la palabra xml, ni ninguna combinación de mayúsculas/minúsculas.
Solo pueden contener letras, números, _ (guión bajo), . (punto) y : (dos puntos)
Son case sensitive.
Se recomienda no utilizar el carácter ñ.
Un espacio en blanco al final será ignorado.

Los caracteres <, >, ‘, “, & no pueden ser utilizados, han de ser sustituidos por las siguientes entidades predefinidas.

|Carácter | Entidad |
|%| &amp;|
|>| &gt;|
|<| &lt;|
|“ (comillas dobles)| &quot;|
|‘ (comilla simple) |&apos;|

Algunos elementos pueden no tener código. Se les llama elementos vacíos:
Ej <nombre> </nombre> Es un elemento válido

Atributos
Se llaman atributos a la forma en que los elementos incorporan información relacionada acerca de si mismos, describiendo sus propiedades y acabando de dar significado a los nodos del árbol que forman el documento.
Un atributo es un par nombre-valor que se encuentra dentro de una etiqueta (DENTRO DE LA ETIQUETA DE INICIO). Su forma es nombreAtributo=”valor”
El valor va entre comillas dobles.
Las reglas para la sintaxis de atributos, son las mismas que para elementos.  
Un uso excesivo de atributos puede hacer que el documento XML sea menso legible.

Documentos bien formados

Un documento XML bien formado solo puede tener un elemento raíz.
Todos los elementos tienen que tener etiqueta de cierre
Se permiten elementos vacíos, pero la etiqueta tiene que tener la siguiente forma:
<elemento_sin_contenido/>
Los nombres de las etiquetas no deben comenzar por el carácter espacio en blanco
La cabecera tiene que ser: <?xml version=”1.0” encoding=”UTF-8”?>
Los caracteres &, <, >, “, ‘ están prohibidas como contenido, y deben utilizarse las secuencias de escape antes vistas.
Los documentos deben seguir una estructura estrictamente jerárquica.
Los comentarios. Se ignoran para el procesado, pero aportan información. El formato para los comentarios es <!-- Aquí va el comentario →
Los valores de los atributos siempre deben entre comillas.
Un elemento no puede tener dos atributos con el mismo nombre.

Partes de un XML
Podemos estructurar un documento XML en las siguientes partes:
Prólogo: Es una declaración XML

<?xml version= "1.0" encoding= "ISO-8859-1" standalone="yes" ?>

Versión: 1.0 o 1.1. La primera es más habitual, pero la segunda aumenta el soporte UTF
encoding. Opcional. Puede ser ISO-8859-1 O UTF-8, aunque podría tener otras.
standalone. Indica si el documento utiliza fuentes externas o no. Si vale no, es que no utiliza fuentes externas

Cuerpo. El cuerpo está formado por los elementos, los atributos, entidades predefinidas y las secciones CDATA.

Entidades

Son unidades de almacenamiento del contenido del documento. Si estuviésemos en un lenguaje de programación, podríamos asimilarlas a las variables o constantes. Todas las entidades presentes en un documento, deben declararse con un nombre. Se declaran con la palabra clave ENTITY
Declaración

<!ENTITY nombre “valor”>

Uso. Para usar, utilizamos el caracter &
<etiqueta>esto es &nombre;</etiqueta

Las entidades se declaran en el bloque de definición del documento (DTD)

<!DOCTYPE texto[
    <!ENTITY personaje “Pato Donald”>

]>

Ejemplo

<!DOCTYPE texto[
    <!ENTITY anhoactual “2018”>

]>
<alumno>
<nombre>Juan Jose</nombre>
<apellidos>Pérez Gómez</apellidos>
<fecha>
<dia>11</dia>
<mes>01</mes>
<anho>&anhoactual;</anho>
</fecha>
</alumno>
En cuanto a su procesabilidad, hay dos tipos de entidades:
Entidad no procesable. Son objetos no XML, que el parser no puede procesar (ej, ejecutales, videos, jpg, …)
Entidad procesable. El procesador la reconoce como tal, y por lo tanto asocia su nombre y valor

Hay entidades pedefinidas para los caracteres & (&amp;), < (&lt;), > (&gt), apóstrofos (&apos;), comillas (&quot;),

Otras clasificaciones para las entidades son:

Internas o Externas
Analizadas o NO analizadas
Generales o parámetro

HTML 5

Actividades:

1. Indique que diferencias hay entre Web 1.0, 2.0 y 3.0
2. ¿Qué es el W3C ?
3. ¿Que características tiene un lenguaje de etiquetas?
4. ¿Qué diferencias hay entre HTML4 y XHTML?
5. ¿Cuáles son las ventajas que introduce HTML5?
6. ¿Para qué sirve utilizar CSS en un proyecto web?
7. ¿Para qué se utiliza JavaScript?
8. ¿Qué ventájas introduce el uso de AJAX?
9. Defina qué es DOM
10. ¿Cuál es la función del motor de renderizado de un navegador web?

Actividades Prácticas:

1. Visualiza una página web con google chrome, y verifique los elementos con el inspector de objetos
2. Verifique la compatibilidad de su sitio con ACID3
3. Realice una verificación de su sitio con el validador del W3C

## Actividades Resueltas

1. Diferencias entre Web 1.0, 2.0 y 3.0

- Web 1.0: en los inicios, los internautas sólo tienen un rol: consumir la información que se aloja en servidores informáticos. La navegación era netamente textual y las consultas son muy limitadas. Cuando aparece el lenguaje de programación web HTML (Hyper TextMarkup Language), se hace más atractiva la organización de los elementos que se visualizan en la pantalla. Sin embargo, las interacciones seguían siendo muy limitadas porque el usuario solo podía leer la información y no comentarla, por ejemplo. Los creadores de la información son webmaster, con altos conocimientos en esta tecnología

- Web 2.0: Alrededor del año 2000 se empieza a hablar de la Web 2.0, al fomentarse la interacción entre páginas web y usuarios. Internet se entiende como una plataforma colaborativa, en la que todos los usuarios participan. Ahora, además de leer, los internautas también pueden generar informaciones y publicarlas en sitios web, en foros de usuarios, blogs, redes sociales y wikis (páginas editables por cualquier usuario). La Web 2.0 supone la decocratización de los contenidos.

- Web 3.0: Se refiere a que las páginas web se pueden relacionar de manera semántica, añadiendo metadatos que aportan valor a la información y mejora la búsqueda y la posibilidad de encontrar información en la web al comprenderse el significado de las palabras.

- Web 4.0: Internet puede funcionar de manera predictiva, ya no solo recibiendo órdenes de parte del usuario, sino que mediante el empleo de la inteligencia artificial se puede anticipar a sus solicitudes e incluso predecir comportamientos en el futuro. Se generalizan también las interacciones mediante la voz, con el uso de dispositivos inteligentes que permiten realizar búsquedas habladas.

2. ¿ Qué es el W3C ?

El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.3

Este consorcio fue creado en octubre de 1994, y está dirigido por Tim Berners-Lee, el creador original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP (HyperText Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup Language, Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la Web.

- Miembros: a abril de 2010 contaba con 330 miembros.
- Equipo (W3C Team): 65 investigadores y expertos de todo el mundo.
- Oficinas (W3C Offices): centros regionales establecidos en Alemania y Austria (oficina conjunta), Australia, Benelux (oficina conjunta), China, Corea del Sur, España, Finlandia, Grecia, Hong Kong, Hungría, India, Israel, Italia, Marruecos, Suecia y Reino Unido e Irlanda (oficina conjunta).

4. Diferencias entre HTML4 Y XHTML
