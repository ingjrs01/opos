---
title: Servicios de Directorio
layout: articles.njk
---

# Servicios de Directorio.

## Introducción

Un Servicio de Directorio es una aplicación o conjunto de aplicaciones que organiza la información de usuarios de una red de ordenadores y de los recursos de red que permite a los administradores gestionar el acceso de usuarios a recursos sobre dicha red. Además actúan como una capa de abstracción entre usuarios y recursos de red. 

No debe confundirse un servicio de directorio con un repositorio de directorio, siendo éste último una base de datos que contiene la información de los objetos de nombrado gestionada por el servicio de directorio. 

Como base de datos, un servicio de directorio está altamente optimizada para realizar lecturas y proporciona alternativas diversas de búsqueda de atributos que se pueden asociar a los objetos de un directorio. Los datos que se almacenan son definidos por un esquema extensible y modificable. Los servicios de directorio utilizan un modelo distribuido para almacenar su información y esa información generalmente está replicada en los servidores que forman el directorio. 

A diferencia de las bases de datos, están muy optimizados para lecturas, y pueden existir datos duplicados, los datos se organizan en una estructura jerárquica, 

## LDAP (Protocolo Ligero de Acceso a Directorios)
Se trata de un protocolo a nivel de aplicación que permite el acceso a  un servicio de directorio ordenado y distribuido para buscar información  en un entorno de red. 
La versión actual es LDAPv3, y está definida en el RFC 4511.
Las especificaciones estaban bien definidas ya en los años 70, por las compañías de telecomunicaciones para manejar los directorios de teléfonos. Estas compañías introdujeron el concepto de servicio de directorio, que finalizó en la especificación X.500, un conjunto de protocolos producido por la Unión Internacional de Telecomunicaciones.
Los servicios de directorio X.500 se accedía a través del protocolo DAP (Directory Access  Protocol), que requería la pila de protocolos OSI. LDAP nace como una alternativa más sencilla y ligera para acceder a servicios de directorio X500 a través de la pila TCP/IP
Pronto se implementaron servidores de directorio LDAP independientes, así como los servidores de directorio que soportaban DAP y LDAP. El último se hizo popular en empresas debido a que elimina cualquier necesidad de desplegar una red OSI. Ahora, los protocolos de directorio X.500 incluyendo DAP pueden ser usados directamente sobre TCP/IP.


El puerto por defecto del servidor LDAP es 389. El cliente inicia una petición al servidor, el cual le envía una respuesta. El cliente no necesita recibir una respuesta para mandar la siguiente petición, y el servidor puede responderlas en cualquier orden. El servidor también puede enviar notificaciones no solicitadas, por ejemplo antes de terminar el tiempo de conexión. 
Un método alternativo para asegurar la comunicación es utilizar un túnel SSL. En este caso, el puerto por defecto del servidor es el 636. El uso de LDAP sobre SSL fué común en LDAPv2, aunque desde el 2003 ambos son considerados obsoletos. 

## Estructura de un directorio
Se sigue la estructura de la edición 1993 del protocolo X.500. 

- Un directorio es un árbol de entradas de directorio. 
- Una entrada consta de un conjunto de atributos. 
- Un atributo tiene un nombre, un tipo o descripción del atributo y uno o más valores. Los atributos están definidos en un esquema. 
- Cada entrada tiene un identificador único llamado Nombre Distinguido o DN. Este DN consta de un Nombre Distinguido Relativo (RDN) construído por algunos atributos de la entrada seguidos del DN de la entrada del padre. 

Se debe tener cuidado con el hecho de que un nombre distinguido de una entrada pueden cambiar  en el tiempo, si por ejemplo se mueven las entradas del árbol. Para hacer más confiables las entradas, se puede incorporar un atributo a UUID a la misma que haga las funciones de identificador único. 

Un servidor aloja un subárbol concreto, con sus hijos

## Implementaciones

### Active Directory
Bajo este nombre se encuentra realmente un esquema (definición de los campos que pueden ser consultados) LDAP versión 3, lo cual permite integrar otros sistemas que soporten el protocolo. En este LDAP se almacena información de usuarios, recursos de la red, políticas de seguridad, configuración, asignación de permisos, etc.

### Novell Directory Services. 
También conocido como eDirectory es la implementación de Novell.
Básicamente está compuesto por una base de datos jerárquica y orientada a objetos, que representa cada servidor, computadora, impresora, servicio, personas, etc. entre los cuales se crean permisos para el control de acceso, por medio de herencia. La ventaja de esta implementación es que corre en diversas plataformas, por lo que puede adaptarse fácilmente a entornos que utilicen más de un sistema operativo.


### OpenLDAP
Se trata de una implementación libre del protocolo que soporta múltiples esquemas por lo que puede utilizarse para conectarse a cualquier otro LDAP.

Tiene su propia licencia, la OpenLDAP Public License. Al ser un protocolo independiente de la plataforma, varias distribuciones GNU/Linux y BSD lo incluyen, al igual que AIX, HP-UX, Mac OS X, Solaris, Windows (2000/XP) y z/OS.

OpenLDAP tiene cuatro componentes principales:

- slapd - demonio LDAP autónomo.
- slurpd - demonio de replicación de actualizaciones LDAP autónomo.
- Rutinas de biblioteca de soporte del protocolo LDAP.
- Utilidades, herramientas y clientes.

### Apache Directory Server
Apache Directory Server (ApacheDS), es un servidor de directorio escrito completamente en Java por Alex Karasulu y disponible bajo la licencia de Apache Software, es compatible con LDAPv3 certificado por el Open Group, soporta otros protocolos de red tal como Kerberos y NTP, además provee Procedimientos Almacenados, triggers y vistas; características que están presente en las Base de Datos Relacionales pero que no estaban presentes en el mundo LDAP.

### Open DS
Servicio de directory creado por Sun Microsystems totalmente en Java, y más tarde liberado a toda la comunidad.


### Active Directory
Active Directory es el servicio de directorio propietario de Microsoft para su uso en redes de dominio de Windows. Cuenta con funciones de autenticación y autorización y proporciona un framework para otros servicios similares. Básicamente, el directorio consiste en una base de datos LDAP que contiene objetos en red. Active Directory utiliza el sistema operativo Windows Server.

Cuando se habla sobre Active Directory, por lo general nos referimos a los servicios de dominio (Domain Services) de Active Directory, que proporcionan servicios integrados de autenticación y autorización a gran escala.

Antes de Windows 2000, el modelo de autenticación y autorización de Microsoft obligaba a dividir una red en dominios para luego vincularlos mediante un sistema de confianza de una y dos vías que resultaba complicado y, a veces, impredecible. Active Directory se presentó en Windows 2000 como una forma de proporcionar servicios de directorio a entornos más grandes y complejos.

Con el tiempo se incorporaron servicios adicionales bajo el estandarte de Active Directory:

Active Directory Lightweight Directory Services. Se trata de una versión ligera de Active Directory a la que se han quitado servicios como controladores de dominio, bosques o dominios. Normalmente se utiliza en entornos de red pequeños o individuales. 
Active Directory Certificate Services. Los servicios de certificados ofreces servicios de certificación digital y admiten infraestructura de clave pública (PKI). Este servicio puede almacenar, crear, validar y revocar las credenciales de clave pública utilizadas para el cifrado en vez de generar claves de forma externa o local. 
Active Directory Federation Services. Proporciona un servicio de autenticación y autorización de inicio de sesión único basado en web para su uso principalmente entre organizaciones. De este modo un contratista por ejemplo puede iniciar sesión en su propia red, y tener acceso al mismo tiempo para acceder  a la red del cliente. 
Active Directory Rights Management Services. Se trata de un servicio de administración de derechos que rompe con el concepto de autorización como un simple modelo de permitir o denegar acceso y limita lo que puede hacer un usuario con archivos o documentos concretos. Los derechos y restricciones se adjuntan al documento, y no al usuario. Estos derechos se usan comúnmente para evitar la impresión, la copia o las capturas de pantalla de un documento.

Una característica clave de la estructura de Active Directory es la autorización delegada y la replicación eficiente. Cada parte de la estructura organizativa de AD limita la autorización o la replicación dentro de esa subparte en particular.

Bosque. Se trata de una colección de uno o más dominios que comparten la misma estructura lógica, catálogo global, esquema y configuración. Se trata del límite de seguridad dentro de la organización. Permite segregar la delegación de autoridad de forma acotada en un solo entorno.
Un árbol. Un árbol es un grupo de dominios. Los dominios dentro de un árbol comparten el mismo espacio de nombre raíz, pero, a pesar de ello, los árboles no son límites de seguridad o replicación.
Dominios. Un dominio de Active Directory es un contenedor lógico utilizado para administrar usuarios, grupos y computadoras entre otros objetos. Cada bosque tiene un dominio raíz. Se pueden usar dominios adicionales para crear particiones  dentro de un bosque. Un dominio limita la replicación de Active Directory solo a los otros controladores de dominio que se encuentran en su interior. Por ejemplo: si tenemos dos oficinas, una Oakland y otra en Pittsburg, la primera no debe replicar los datos de AD de la segunda (y viceversa). De este modo, podemos ahorrar ancho de banda y limitar el daño causado a través de las brechas de seguridad.
Unidad Organizativa (UO). Una unidad organizativa permite agrupar la autoridad sobre un subconjunto de recursos de un dominio. Una OU proporciona un límite de seguridad para privilegios y autorización elevados, pero no limita la replicación de objetos de AD.

Los controladores de dominio son servidores de Windows que contienen la base de datos de Active Directory y ejecutan funciones relacionadas con AD, como la autenticación y la autorización. Un controlador de dominio es cualquier servidor Windows que cuente con la función de controlador de dominio instalada.

Cada controlador de dominio almacena una copia de la base de datos de Active Directory, que contiene información sobre todos los objetos dentro del mismo dominio. Además, cada controlador de dominio almacena el esquema de todo el bosque, así como toda la información sobre el mismo. Un controlador de dominio no almacenará una copia de ningún esquema o información de bosque de un bosque diferente, aunque se encuentren en la misma red.




