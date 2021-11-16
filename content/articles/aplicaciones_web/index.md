---
title: Aplicaciones Web
layout: articles.njk
---

- [Aplicaciones Web](#aplicaciones)
- [Ventajas e inconvenientes](#ventajas)
- [Tecnologías de programación.](#tecnologias)
- [Javascript, Applets, Servlets, servizos web. ](#javascript)
- [Lenguajes de descrición de datos: HTML, XML y sus derivaciones.](#lenguajes)
- [Navegadores y lenguajes de programación web.](#navegadores)
- [Lenguajes de script](#lenguajes)

---

## Aplicaciones Web <a href="" id="aplicaciones"></a>
Las aplicaciones web son aquellas herramientas que los usuarios pueden utilizar accediendo a un servidor web, que puede estar en Internet o en una intranet, mediante un navegador.

Este tipo de aplicación es muy popular, debido que al ejecutarse en un navegador, son independientes del sistema operativo, no necesitan mantenimiento, ni instalar nada y muy accesibles. Existen multitud de herramientas de este tipo, cmo correos web, tiendas, blogs, ....

## Ventajas e inconvenientes. <a ref="" id="ventajas"></a>

Ventajas: 

- Ahorro de tiempo. No es necesario instalar nada, ni actualizar, ...
- Consumo de recursos bajo. Dado que la mayor parte de la aplicación se ejecta an el servidor, el consumo de recursos en nuestra máquina es bajo.
- Multiplataforma.
- Virus/malware. Al ejecutarse en un servidor, son menos proclives a ser afectados por malware. 
- Aumento de funcionalidades. 
- Compatilibilidad. 
- Portables. 
- Espacio. No ocupan espacio en nuestro disco
- Actualizaciones inmediatas.
- Mejoras en colaboración. Dado a que se trabaja con un servidor, suelen incorporar herramientas para el trabajo colaborativo. 

En cuanto a los inconvenientes: 

- Requieren un navegador compatible, y normalemnte alcuatlizado
- La aplicación web puede desaparecer o cambiar su forma de uso si así lo decide su mantenedor. 
- El usuario normalmente no tiene capacidad de decisión sore la  versión a instalar, no actualizar, etc. 
- La disponibilidad depende de un tercero (acceso a internet, etc.).

## Tecnologías de programación. <a ref="" id="tecnologias"></a>

Las aplicciones web están programadas en varias capas, y en función de la capaen la que estemos se utilizan una u otras tecnologías: 

Tenemos una capa de presentación, que es con la que interactúa el usuario. Esta parte se ejecuta en un navegador, y como tal se trata de tecnologías web. En esta capa las tecnologías utilizadas son HTML, CSS, y JavaScript. 

La segunda capa es el software que reside en el servidor, donde se implementa la lógica del negocio, etc. En esta capa se utilizan multitud de lenguajes y tecnologías que se pueden utilizar, como por ejemplo PHP, Java, Python, Ruby, JavaScript, ...

La tercera capa es la de la persistencia de datos, y en esta capa las tecnologías tienen que ver con bases de datos, desde las más tradicionales como las bases de datos relacionales, hasta las bases de datos NoSQL en la nube que están en auge últimamente. 


## Javascript, Applets, Servlets, servizos web. <a href="" id="javascript"></a>

JavaScript es un lenguaje de script, que nace originalmente para ejecutarse del lado de cliente, y aportar más dinamismo a las páginas web, pero en la actualidad también puede utilizarse y de hecho se utiliza mucho en el lado del servidor. Un ejemplo es Node.js, y todas las tenologías que han deribado de él, que están sirviendo para que muchos servicios están corriendo con javascript en el lado del servidor (Netflix, Playpal, Uber o Ebay son ejemplos)

Mientras los applets son programas para los clientes, los servlets son programas para los servidoreis. Normalmente responden a las peticiones HTTP de los clientes, creando una respuesta en HTML, XML, ... En la actualidad se considera una tecnología un poco antigua, y se está sustituyendo por JSF


Una aplicación web es una aplicación a la que los usuarios acceden a través de un navegador web. 
Según el W3C define un sevicio web como un sistema de softwaere que permite que diferentes máquinas intereractúen entre sí a través de una red. Los servicios web logran esta tarea utilzando estándares abiertos como XML, SOAP WSDL UDDI. La mayoría de las veces, los servicios web ni siquiere tienen una interfaz de usuario. 

## XML
### Características: 
- XML separa los datos de HTML
- XML simplifica el intercambio de datos. Tanto los ficheros de datos como las BBDD contienen información en formatos incompatibles. Un fichero en XML es un fichero de texto plano, que es complatible con cualquier plataforma. 
- XML aumenta la disponibilidad de datos. Diferentes aplicaciones pueden acceder a los datos.
- XML se puede utilizar para crear nuevos idiomas. 


### Presentando: 

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
Todas la definiciones de atributo comienzan por 
```xml
<!ATTLIST
```

Cada atributo está formato por 3 partes: 
- Nombre
- Tipo del atributo
- Valor por defecto

El tipo del atributo puede tomar los siguientes valores: 

- CDATA: El atributo será una cadena de caracteres, pero no todos los caracteres son válidos. Si queremos utilizar los caracteres no válidos, utilizaremos secciones PCDATA
- ID: Un identificador. Solo puede haber uno por elemento
- IDREF/S: Este atributo se emplea para referenciar otros elementos del documento a partir de su ID.
- ENTITY/S: Contiene nombres de entidades
- NMTOKEN/S: Contiene una única cadena de texto (ed, una sola palabra).
- (<<enumerados>>): Especificamos un conjunto de valores. 

Para los valores por defecto, se admite: 
- #REQUIRED
- #IMPLIED. Es opcional darle valor al atributo
- <<valor>>. Podemos poner un valor (NO una lista de valores) opcional directamente, entonces, si no se le otorga un valor en el documento, asumirá éste.
- #FIXED <<valor>>. Obligamos a que el atributo tenga el valor <<valor>>.


### Entidades. 

Son métodos para escribir aslgunos caracteres reservados. En XML son: 
&lt (<), &gt (>), @amp; (&), &quot ("), &apos (').

Hay 3 tipos de entidades que podemos definir en un DTD: internas, externas y de parámetros

Podemos definir nuestras propias entidades internas con: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Advertencia: Algo malo pasó... porfavor intente de nuevo.">
]>
<body>
  <message> &warning; </message>
</body>
```

Las entidades externas sriven para referencias su contenido o valor desde otros ficheros
```xml
<!ENTITY arch System "arch.txt">
```


Las entidades de paramétros tienen una sintaxis distinta: 
```xml
<!ENTITY %items "a CDATA #REQUIRED b CDATA #REQUIRED c CDATA #REQUIRED">
<!ELEMENT motos EMPTY>
<!ATTLIST motos %items> 
```

### XML Schema

Mientras el DTD forma parte de la propia definición del XML, el XSD (XML Schema Definition) se utiliza para definir la estructura y las restricciones del contenido de una forma muy precisa

Ejemplo: 

```xml
<?xml version="1.0" encoding="UTF-8"?> 
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
     <xsd:element name="Libro">
         <xsd:complexType>
            <xsd:sequence>
                 <xsd:element name="Título" type="xsd:string"/>
                 <xsd:element name="Autores" type="xsd:string" maxOccurs="10"/>
                 <xsd:element name="Editorial" type="xsd:string"/>
            </xsd:sequence>
            <xsd:attribute name="precio" type="xsd:double"/>
        </xsd:complexType>
   </xsd:element>
</xsd:schema>
```

## Navegadores y lenguajes de programación web.<a ref="" id="navegadores"></a>

Los lenguajes de programación web má utliizados en la actualidad son PHP, JavaScrip, Java, Python, Ruby, Perl, C++ y C#
