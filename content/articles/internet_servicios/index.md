---
title: Internet principales servicios
layout: articles.njk
---

# Internet: principais servizos: correo electrónico, WWW, FTP, Telnet e outros. Protocolos HTTP e HTTPS, SSL e TLS.

- Internet: principais servizos:
- Correo electrónico
- WWW
- FTP
- Telnet y otros
- Protocolos HTTP e HTTPS
- SSL e TLS

## WWW

Cuando se escribe una dirección Web (o URL) en un explorador de Internet, el explorador establece una conexión con el servicio Web del servidor que utiliza el protocolo HTTP.

URL (o Localizador uniforme de recursos) y URI (Identificador uniforme de recursos) son los nombres que la mayoría de las personas asocian con las direcciones Web. Por ejemplo, la URL http://www.iesharia.org/index.html es un ejemplo que se refiere a un recurso específico, una página Web llamada index.html en un servidor identificado como www.iesharia.org

Los exploradores Web son las aplicaciones cliente que utilizan los equipos para conectarse a la World Wide Web y acceder a recursos almacenados en un servidor Web.

Para acceder al contenido, los clientes Web realizan conexiones al servidor y solicitan los recursos deseados. El servidor responde con el recurso y, al recibirlo, el explorador interpreta los datos y los presenta al usuario.
Hoy en día las conexiones a servidores web son sin duda las más extendidas entre usuarios de Internet, hasta el punto de que muchas personas piensan que este servicio (HTTP, puerto 80 TCP) es el único que existe en la red - junto al IRC -. Lo que en un principio se diseñó para que unos cuantos físicos intercambiaran y consultaran artículos fácilmente, en la actualidad mueve a diario millones de dólares y es uno de los pilares fundamentales de cualquier empresa: es por tanto un objetivo muy atractivo para cualquier pirata.

## FTP

FTP (File Transfer Protocol, puerto 21 TCP) es, como su nombre indica, un protocolo de transferencia de ficheros entre sistemas. Desde un equipo cliente conectamos a un servidor para enviar o descargar archivos.

Un problema básico y grave de FTP es que está pensado para ofrecer la máxima velocidad en la conexión, pero ni mucho menos para ofrecer la máxima seguridad; todo el intercambio de información, desde el login y password del usuario en el servidor hasta la transferencia de cualquier fichero, se realiza en texto claro, con lo que un atacante lo tiene muy fácil para capturar todo ese tráfico y conseguir así un acceso válido al servidor. Incluso puede ser una amenaza a la privacidad de nuestros datos el hecho de que ese atacante también pueda capturar y reproducir los ficheros transferidos. Para solucionar este problema es conveniente concienciar a nuestros usuarios de la utilidad de aplicaciones como scp y sftp, incluidas en el paquete SSH, que permiten transferir ficheros pero cifrando todo el tráfico; de esta forma, son el mejor sustituto de FTP.

## Telnet y otros

Telnet (Teletype Network​) es el nombre de un protocolo de red que nos permite acceder a otra máquina para manejarla remotamente como si estuviéramos sentados delante de ella. También es el nombre del programa informático que implementa el cliente. El acceso se realiza únicamente en modo terminal, es decir, sin gráficos.

Existe un gran poblema de seguridad en el protocolo telnet, ya que tanto sus usuarios como contraseñas viajan por la red sin cifrar, lo cual lo hace muy inseguro. Por esta razón dejó de utilizarse, y se utiliza e su lugar SSH, que puede describirse como la versión cifrada de TELNET.

Además del citado problema, es un protocolo antíguo y sin actualizar, del que se descubrieron múltiples vulnerabilidades y carece de un esquema de autenticación que permita asegurar que la comunicación está siendo realizada entre los dos anfitriones deseados, y no interceptada entre ellos.

El puerto que se utiliza generalmente es el 23.

## Protocolos HTTP e HTTPS
