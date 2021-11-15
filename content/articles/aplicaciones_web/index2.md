---
title: Aplicaciones Web
layout: articles.njk
---

## Acesibilidad, diseño universal y usabilidad.


## XML 

### Características: 
- XML separa los datos de HTML
- XML simplifica el intercambio de datos. Tanto los ficheros de datos como las BBDD contienen información en formatos incompatibles. Un fichero en XML es un fichero de texto plano, que es complatible con cualquier plataforma. 
- XML aumenta la disponibilidad de datos. Diferentes aplicaciones pueden acceder a los datos.
- XML se puede utilizar para crear nuevos idiomas. 


### Entidades. 

Son métodos para escribir aslgunos caracteres reservados. En XML son: 
&lt (<), &gt (>), @amp; (&), &quot ("), &apos (').

Podemos definir nuestras propias entidades con: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Advertencia: Algo malo pasó... porfavor intente de nuevo.">
]>
<body>
  <message> &warning; </message>
</body>
```


## Presentando: 

Se puede presentar XML con xmlstylesheet.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Aunque otra forma de presentarlos más poderosa es con xls. Para poder hacer esto, utilizaremos: 

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```


### Estructura <a href="" id="estructura"></a>

Un documento en XML está formato por un prólogo, y un cuerpo: 

```XML
<?xml version="1.0" encoding="ISO8859-1" standalone="no" ?>
<!DOCTYPE persona SYSTEM "persona.dtd">
<!-- hasta aquí el proloco. -->
<persona>
    <nombre>Jose Luis</nombre>
    <apellidos>Castro</apellidos>
</persona>
```


Como cualquiera puede crear sus etiquetas, XML tiene dos métodos para poder órden en el caos:
- Las DTD's
- Los XML schemas. Al igual que los DTD's describen el contenido, pero de forma más precisa. Los esquemas indican tipo de dato, número minimo y máximo, como se organizan los datos, etc. 


### DTD 
<a href="https://desarrolloweb.com/articulos/2263.php" target="_blank">Enlace</a>
Se pueden hacer 4 tipos de declaraciones: 
- Declaraciones de tipo de elemento (Element type declarations).
- Declaraciones de listas de atributos (atribute list declarations).
- Declaraciones de entidades (entity declarations).
- Declaraciones de notación (notation declarations).

Las declaraciones de tipo de elemento establecen que elementos pueden formar parte del documento y cuales pueden formar parte de su interior (los elementos se pueden anidar).

Los elementos que puede contener cada elemento


Las declaraciones de tipo de atributo
Todas la definiciones de atributo comienzan por <!ATTLIST


Las declaraciones de tipo de atributo
Todas la definiciones de atributo comienzan por <!ATTLIST
