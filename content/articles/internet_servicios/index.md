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


El protocolo HTTPS combina los protocolos HTTP y SSL/TLS para que la transmisión de datos sea segura. 
Diferencias con HTTP: 
- Las direcciones comienzan con https:// en vez de con https://.
- El puerto por defecto es el 443 en vez del 80
- HTTP es insuguro y puede sufrir atraques de man-in-the-middle y [eavesdropping](https://es.wikipedia.org/wiki/Eavesdropping).

## SSL y TLS

SSL viene de las siglas Socket Secure Layer y se trata de una tecnología estándar para mantener segura una conexión a una red por medio del cifrado del tráfico de datos entre dos nodos. TLS viene a su vez de Transport Layer Security, y se trata de una versión evolucionada de SSL con las mismas funciones. 

SSL proporciona autenticación y privacidad durante una conexión. Habitualmente sólo el servidor es auteticado (se garantiza su identidad). Las fases del algoritmo de SSL son: 

1. Los nodos negocian que algoritmos utilizarán durante la conesión. 
2. Se intercambian las claves públicas y se realiza la autenticación basada en certificados digitales.
3. Usan do el cifrado asimétrico, se intercambian una clave simétrica que utilizarán para cifrar el tráfico a partir de ese momento. 

Los algotimos disponibles en las impelmentaciones actuales son: 
- Para el cifrado asimético [RSA](https://es.wikipedia.org/wiki/RSA), [Diffie-Hellman](https://es.wikipedia.org/wiki/Diffie-Hellman), [DSA](https://es.wikipedia.org/wiki/DSA) o [Fortezza](https://en.wikipedia.org/wiki/Fortezza)
- Para el cifrado simétrico [RC2](https://es.wikipedia.org/wiki/RC2), [RC4](https://es.wikipedia.org/wiki/RC4), [IDEA](https://es.wikipedia.org/wiki/International_Data_Encryption_Algorithm), [DES](https://es.wikipedia.org/wiki/Data_Encryption_Standard), [Triple DES](https://es.wikipedia.org/wiki/Triple_DES) y [AES](https://es.wikipedia.org/wiki/Advanced_Encryption_Standard)
- Como funciones de hash [MD5](https://es.wikipedia.org/wiki/MD5) o la familia [SHA](https://es.wikipedia.org/wiki/Secure_Hash_Algorithm)

El protocolo SSL fué desarrollado originalmente por Netscape. La versión 1 nunca salió a la luz y la versión 2 se presentó en febrero de 1995, pero contenía muchos fallos de seguridad que llevarón a la versión 3, presentada en 1996. 
TLS 1.0 fué definido en enero de 1999, como una evolución de SSL 3.0, pero con tantos cambios que no existen interoperabilidad entre SSL 3.0 y TLS 1.0. A partir de eso momento y a lo largo de los años van surgiendo nuevas versiones de TLS hata la actual que es la versión 1.3, del 2018.




Más información

- [Centro Criptológico nacional](https://www.ccn.cni.es/index.php/es/docman/documentos-publicos/boletines-pytec/378-pildorapytec-nov2020-seguridad-tls/file)








La especificación de TLS 1.3 (RFC 8446) fue publicada por IETF en agosto 2018 (RFC 8446).  TLS 1.3representa un cambio significativo y tiene por objetivo abordar las amenazas que han surgido a lo largo  del  tiempo  desde  la  especificación  de  TLS  1.2. A  día  de  hoy,  TLS  1.3  es  la  versión  de  TLS  considerada  más  segura.  Sin  embargo,  no  es  compatible  con  versiones  anteriores,  por  lo  que  el uso de TLS 1.3 puede requerir un tiempo de adaptación para los sistemas y aplicaciones. Los principales cambios de TLS 1.3 son los siguientes:•Cambios  relacionados  con  los  algoritmos   y   funciones   criptográficas,  ya  indicados  en  el  Apartado 6.5. •Se rediseña el Handshake significativamente para ser más consistente y eficiente. Se eliminan mensajes superfluos como el ChangeCipherSpec. •Todos  losmensajes  posteriores  a  ServerHello  van  cifrados. Esto  es  posible  porque,  tras el intercambio  inicial  de  los  mensajes  ClientHello  y ServerHello,  cliente  y  servidor  tienen  la  información suficiente para el cálculo del secreto pre-compartido. En realidad, no solo se cifran los  mensajes  posteriores  al  ServerHello  sino  también  parte  de  los  parámetros  del  servidor  enviados en ServerHello. Esto se hace a través del nuevo mensaje “EncrytedExtensions”. Solo se envían  en  claro  la  versión  negociada  (extensión  supported_version)  y  los  parámetros  que  necesita el cliente para el cálculo del secreto (extensiones pre-shared key o key_share). •No se utiliza compresión. El campo donde iba la lista de algoritmos de compresión debe ir con valor cero