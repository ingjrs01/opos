---
title: Modelos de Referencia OSI. Protocolos de Red
layout: articles.njk
---

# Modelos de referencia OSI. Protocolos de red. Suite TCP/IP

- Modelo de rede en capas
- Modelos de referencia OSI
- Protocolos de Red. 
- Suite TCP/IP

## Modelo de Red en Capas

lalala

## Modelos de referencia OSI (Open System Interconexion).
Tambioén llamado modelo de interconexión de sistemas abiertos. Es un modelo de referencia para los protocolos de red. (no es una arquitectura de red). Creado por la ISO y publicado en 1993 por la Unión Internacional de Telecomunicaciones (UIT).

El estándar tiene como objetivo interconectar sistemas de procedencia distinta para que puedan intercambiar información. 

A principios de 1980 el desarrollo de redes originó un desorden en muchos sentidos. Se produjo un enorme crecimiento tanto en la cantidad como en el tamaño de las redes. Las redes se expandían y se añadían nuevas tecnologías de red. A mediados de año las empresas empezaron a sufrir las consecuencias, las redes con diferentes especificaciones no podían intercambiar información. 

Para enfrentar el problema, la ISO estudió las redes DECnet, SNA y TPC/IP, al fin de encontrar un conjunto de reglas aplicacables de forma general a todas las redes. El núcleo de este desarrollo es el modelo OSI, una normativa formada por siete capas que definen las diferentes fases por las que deben pasar los datos para viajar de un dispositivo a otro sobre una red de comunicaciones. 

Siguiente el esquema des este modelo se crearon numerosos protocolos. El esquema no se sigue de forma fidedigna por los protocolos, pero se utiliza en la enseñanza como una manera de mostrar cómo puede estructurarase una pila de protocolos. 

### Capa Física. 

Se encarga de la topología de red y de las conexiones globales hacia la red. Se refiere tanto la medio físico como a la forma en la que se transmite la información. Sus funciones: 
- Definir el medio o medios físicos por lo sque va a viajar la comunicación, par trenzado, cable coaxial, aire, fibra óptica. 
- Definir las características materiales (componentes y conectaroes mecánicos) y eléctricas (niveles de tensión) que se van a usar en la transmisión de datos. 
- Definir las características funiconales de la interfaz (establecimiento, mantenimiento y liberación del enlace físico).
- Transmitir el flujo de bits a través del medio. 
- Manejar las señales eléctricas del medio de transmisión. 
- Garantizar la conexión (aunque no la fialbidad de dicha conexión).

### Capa de enlace de datos. 

Su objetivo princpial es establcer una transmisión de datos fiable y libre de errores entre equipos directamente conectados
Se ocupa del direccionamiento físico, del acceso al medio, de la detección de errores, de la distribución ordenada de tramas y del control de flujo. Las tramas son la unidad de medida de información en esta capa, que no es más que una segmentación de los datos. 

El dispositivo que utiliza la capa de enlace es el switch. 
Los protocolos de esta capa: Ethernet, WiFi, PPP

### Capa de Red. 

Se encarga de identificar el enrutamiento existente entre una o más redes. Las unidades de datos se llaman paquetes, y se pueden clasificar en protocolos enrutables y protocolos de enrutamiento: 
- Protocolos enrutables: viajan con los paquetes (IP, IPX, APPLETALK)
- Enrutamiento: permiten seleccionar las rutas (RIP, IGRP, EIGPR, OSPF, BGP). 

El objetivo de esta capa es hacer que los datos lleguen de origen a destino, aun cuando ambos no estén conectamos directamente sino que utilicen dispositivos intermedios. Los dispositivos que facilitan la tarea se llaman enrutadores. Los routers trabajan en esta capa, aunque pueden actuar como un switch de nivel 2 en determinados casos, dependiendo de la función que se le asigne. Los firewalls actúan sobre esta capa principalmente, para descartar direcciones d determiandas máquinas o limitar el acceso a ciertas de ellas. 

En este nivel se realiza el direccionamiento lógico y la determinación de la ruta de los datos hasta su receptor final. 

### Capa de transporte. 

Responsable del transporte de los datos que se encuetnran dentro del paquete, independientemente del tipo de red física que se esté utilizando. La unidad de información de esta capa se denomina segmento o datagrama, dependiendo si es TPC o UDP, el primero orientado a conexión, y el segundo sin conexión (pueden perderse algunos datos por el camino). Trabajan por tanto con puertos lógicos, y junto con la capa de red da forma a los conocidos como Sockets IP. 

Transmitir de forma optima. 
Se segmenta la información en origen, y reensamblr en destino.

### Capa de sesión. 

Permite indicar puntos en la comunicación para recuperar o continuar en uno de estos puntos. 
Esta capa se encarga de mantener y controlar el enlace establecido entre dos computadores que están transmitiendo datos de cualquier índole. Por lo tanto, es el servicio provisto por esta capa es la capacidad de asegurar que, dada una sesión establecida entre dos máquinas, la misma se pueda efectuar para las operaciones definidas de principio a fin, reanudándolas en caso de interrupción. En muchos casos, los servicios de esta capa de sesión son parcialmente o totalmente prescindibles. 

Este nivel nunca se ha implementado en una arquitectura de protocolos. 

### Capa de presentación. 

El objetivo de esta capa es encargase de la representación de la información, de manera que aunque distintos equipos puedan tener diferentes representaciones internas de caracteres, los datos lleguen de manera reconocible. 
Esta capa es la primra en trabajar más con el contenido

Emisor y receptos pueden usar direrentes formatos para los caracteres o para las imágenes. Para ello hay que hacer una conversión de formatos. 

También permite cifrar los datos, y comprimirlos

Protocolo SAP en desuso.

### Capa de aplicación. 

Ofrece a las aplicaciones la posibilidad de acceder a los servicios de las demás capas y define los protoclos que tuilizan las aplicaciones para intercmabiar datos. Protocolo SMTP, FTP, ...

Regla. FERTSPA, que se parece a first spa

Aplicación
Presentación
Sesión
Transporte
Red
Enlace
Física


## Protocolos de Red. 



## Suite TCP/IP

Fue desarrollado por primera vez en 1972 por el Departamento de Defensa de EE.UU. ejecutándolo en ARPANET. 

Es una pila de protocolos que puede comparase con la pila OSI, aunque en la práctica no corresponde exactamente. 

El protocolo TCP/IP fue el sucesor del protocolo NCP (Network Control Program), con el que inició la operación en ARPANET, y fue presentado por primera vez con los RFC 791, RFC 792, RFC 793 en septiembre de 1981. Para noviembre del mismo año, se presentó el plan definitivo de transición ene l RFC 801, y se marcó el 1 de enero de 1983 como el "día de la bandera".

Principio Extremo a Extremo.
Si dos nodos necesitas un mecanismo para proveer alguna funcionalidad en su comunicación, dicho mecanismo debe ser imprementado directamente en los mismos nodos sin que los demás elementos de red interfieran o participen, a menos que sea absolutamente necesario. 

Principio de Robustez
Un sistema debe ser conservador en su comportamiento como emisario y liberal en su compartamiento como receptor, es decir, cumplir todos los protocolos cuando envía datos y debe ser flexible para recibor datos que, aunque tengas deficiencias, puedan ser correctamente interpretados. 

