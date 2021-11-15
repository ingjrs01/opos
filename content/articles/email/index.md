---
title: Correo Electrónico:
layout: articles.njk
---
# Correo Electrónico

- Servidores de correo
- Funcionamiento
- MTA
- Relays
- Administración de servidores de correo electrónico. 
- Protocolos de correo electrónico


## Componentes <a href="" id="componentes"></a>

Cuando se envía un correo electrónico, el mensaje se enruta de servidor a servidor hasta llegar al servidor de correo del receptor. Estos servidores de correo se denominan **MTA** (Mail Transport Agent), y se comunican entre si mediante el protocolo SMTP, por eso a menudo se les llama servidores SMTP e incluso servidores de correo saliente.

Una vez llega al servidor del receptor, el MTA entrega el corrego al **MDA** (Mail Delivey Agent), el cual lo almacena esperando que el usuario lo acepte. Los protocolos que pueden usar los MDA son POP3 e IMAP

Finalmente el trabajo de recuperar el correo, y mostrarselo al usuario es el MUA (Mail User Agent)

## Partes de un mensaje: <a href="" id="partes"></a>

Los elementos de la estructura interna de un mensaje: 

- Dirección de correo.  Es una cadena de texto separada en dos mitadas por una @, donde la primera mitad se correponde con el nombre de usuario, y la segunda con el dominio del servidor de correo. 
- Cabeceras (headers): Son metadatos que van dentro de un correo. Inclyuen información del remitente (FROM), destinatario (TO y CC), los MTA por los que ha pasado (Received), el asunto del mensaje (SUBJECT), la fecha (DATE) y otra inforación.
- Cuerpo del mensaje. Puede ser texto plano, y on contenido formateado marcado por un Content-type.
- Mensaje. contendio enviado de un MTA  otro
- Buzón. Es donde el MDA almacena los mensajes recibidos para un usuario.
- Relay. Ocurre cuando un mensaje recibido en un MTA no permitene al dominio que lo controla, y debe enviarlo al MTA propiedad de ese dominio.




## Introducción
El servicio de correo electrónico es uno de los métodos de comunicación más usados del mundo. Lo usamos en nuestros ordenadores, móviles, tablets e incluso en nuestros relojes inteligentes. Gracias a él podemos comunicarnos con personas de todo el mundo en cuestión de segundos. Es una de las herramientas creadas que existen en Internet. 

Servidor de correo. 
Un servidor de correo es el encargado de enviar y recibir mensajes de correo electrónico entre hosts, usuarios o servidores. Entre sus funciones se incluye el procesado de los mensajes, filtrado, almacenamiento, envío, recepción y reenvío de correos. 

Agente de transferencia de correo (MTA). 
Un Agente de Transferencia de Correo es un software encargado de transferir el email de un host (equipo informático) a otro. Dicho de otra forma, un MTA es un sistema, software o aplicación que entrega el mail que sale de tu servidor, hacia otro MTA o MDA (Mail Delivery Agent) remoto. Es el servidor SMTP en sí
Ejemplos de MTA pueden ser: 
- Sendmail
- Qmail
- Exim
- Postfix
- Microsft Exchange Server
- Courier
- Cyrus

Puede definirse como el servidor SMTP que usamos, el que recibe datos generalmente de un MUA (Mail User Agent) para obtener el correo, y luego enviarlo al
 destino. 
Un MUA, o Agente de Usuario de Correo, es el que recibe el correo y envía mail usando SMTP  a través del MTA, y recibe por POP3 o IMAP. 

Ejemplos de MUA puede ser: 
- Microsoft Outlook
- Evolution
- Mozilla Thunderbird
- IncrediMail
- Squirrelmail
- Roundcube


## Agente de entrega de correo. 
Es otra de las partes del correo, el Mail Delivery Agent o agente de entrega de correo. Tiene la función recibir el correo de un MTA y llevarlo al inbox. 
Algunos formatos populares de las casillas de correo son: 
- Maildir
- Mbox

Ejemplos de MDA son: 
- Dovecot
- Procmail
- Maildrop

## Protocolos. 
Para enviar los correos entre servidor y servidor se utiliza el protocolo SMTP. 
Para la comunicación entre el servidor de correo y el cliente utilizado por el usuario final se pueden utilizar 2 protocolos: 
- POP3 (Post Office Protocol)
- IMAP (Internet Messages Access Protocol)


Relay
SMTP relay se refiere al proceso de la transferencia de correos electrónicos en Internet, desde un remitente a un destinatario. Este proceso se realiza con el protocolo SMTP por los denominados servidores SMTP relay.
Un servidor smtp relay, también llamado Mail Transfer Agent (MTA). Recibe correos de un remitente y los transfiere a un tercero. 
Un servidor SMTP relay puede ser según su configuración abierto o cerrado: 

Un relay o open relay (relé abierto) es un servidor SMTP configurado de manera que permite a cualquier usuario de internet lo use para enviar correo electrónico a través de él, puesto que no se exigen mecanismos de autenticación. No solo el correo destinado a o procedente de usuarios conocidos. Esta solía ser la configuración por defecto de muchos servidores de correo, de hecho,era la forma en que internet fue creada inicialmente, pero las retransmisiones de correo abiertas se han convertido en impopulares debido a su explotación por parte de los spammers y gusanos. Muchos relays fueron cerrados o puestos en listas negras por otros servidores. 

el open relay más famoso que opera hoy  en día es probablemente el de John Gilmore, quien sostiene que mantener una retransmisión abierta es un asunto de libertad de expresión. 

Las extensiones y las actualizaciones de los sistemas de correo electrónico normalmente no se implementan directamente en el servidor de salida del correo del remitente, sino que se efectúan a través de un servidor SMTP relay: 
Lucha antispam en el remitente. Con el fin de preservar su reputación online, para los operadores de servidores de correo de salida también es importante que sus propios usuarios envíen spam, virus u otro software malicioso.
Servidor de copias de seguridad de correo electrónico
Otras tareas que pueden desempeñar son: 
La firma y cifrado de correos electrónicos. 
La incorporación automática de un descargo de responsabilidad al final del mensaje. 
El archivo de correos electrónicos. 
El enrutamiento de correo y la reescritura en caso de modificación de la dirección.

## MIME

<a ref="https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions" target="_blank">Wikipedia</a>


Multipurpose Internet Mail Extensións.
En sentido general, estas extensiones van dirigidas a soportar: 
- Texto en conjuntos de caracteres distintos a US-ASCII
- Adjuntos que no son de texto
- Cuerpos de mensajes con múltiples partes
- Información de encabezados con codificacion distinta de US-ASCII

Practimanete la totalidad de los mensajes escritos por personas, y parte de los generaods d forma autoóamica están transmitidos en formato MIME, a través de SMTP.

MIME asocia un nombre a cada tipo de dato, con el siguiente formato:

tipo/subtipo

El tipo define la categoría general, mientra que el subtimo afina más en los datos. El tipo puede contener los siguientes valores. 

- text: texto plano
- multipart: tiene múltiples partes independientes. ejemplos de subtipos son form-data y digest
- message: Para encapsular un mensaje existente, como por ejemplo cuando respondiemos a un correo conteniendo el mensaje origen. Ejemplos de subtipos son partial y rfc822.
- image: indica que una imágen. Ejemplos de subtipos pueden ser jpg o png
- audio: Ejemplos de subtipos mp3 o 32kadpcm
- video: mpeg o avi
- application: indica que se trata de datos de aplicación, lo cual pueden ser binarios. Ej puede ser un pdf o json.     

