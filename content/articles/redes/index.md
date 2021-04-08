# Redes de ordenadores


- Redes de ordenadores. 
- Clasificación de redes: LAN, MAN, WAN. 
- Redes públicas y privadas. 
- Topologías. 
- Componentes de red. 
- Métodos de acceso. 
- Dispositivos e interconexión.

## Redes de Ordenadores.



## Clasificación de Redes: LAN, MAN, WAN: 

Se pueden clasificar las redes atendiendo al alcance de las mismas. Según esto, los tipos más comunes son: 

- LAN (Local Area Network). Llamada normalmente red local. Se trata de una red cuyo área es pequeña, como una habitación, un edificio, nave, ... Suelen utilizar tecnologías com o Ethernet o WiFi. 
- MAN (Metropolitan Area Network). Es una red de banda ancha que comunica varias redes LAN en una zona geográficamente cercana. Por ejemplo, podrían tratarse de cada una de las sedes de una empresa que se agrupan en una MAN por medio de línas arrendadas. 
- WAN (Wide Area Network): Es una red de dispositivos que une varias redes (LAN, MAN, WAN). Estas redes se extedienten por áreas como países o continentes. 
- Otros (PAN: Personal Area network, CAN Campus Area network, ...). 

## Redes Públicas y Privadas. 
Las redes públicas brindan servicios de telecoluminaciones a cualquier usuairo que pague una cuota. A las compañías que ofrecen servicios de telecomunicaciones se el conoce como proveedor de servicios de telecomunicaciones (PST) e incluyen a los proveedores de servicios de Internet (PSI)
Cuando nos conectamos a Internet, a través de un router, estamos usando una red pública.

Una red privada es administrada y operada por una organización en particular. Generalmente los usuarios son empleados o miembros de esta organización, aunque el propietario de la red podrá dar acceso a otro tipo de usuarios.
Una red privada pura es aquella que no utiliza servicois de terceros para interconectarse, sino sus medios propios
Las redes privadas son bastante comunes en esquemdas de redes de área local (oficinas, ámbito doméstico, ...) debido a uqe no tienen la necesidad de utilizar direcciones IP públicas en sus dispositivos, compartiendo todos una única dirección publicas, la del router. 

## Topologías. 
La topología de red se define como el mapa físico o lógido de una red para intercambiar datos. En otras palabras, es la forma en la que está diseñada la red, sea en el plano físico o lógico. El concepto de red puede definirse como un "conjunto de nodos interconectados". 
Un claro ejemplo es la topología de árbol.

Topologías más comunes: 

![Topologías de Red](img/topologias.png "Topologías")

### Punto a punto. 
Es la topología más sencilla, que siemplemente une dos puntos finales. Es el modelo básico de la telefonía convencional. 

### Topología en bus. 
En la topología en bus, todos los nodos (dispositivos) están conectados a un circuito común (bus). La información viaja por en cable en ambos sentidos, y tiene en los extremos unos finalizadores llamados terminador. Esta tecnología era típica en las primeras redes, y en ella se utilizaba cable coaxial. 

### Topología en estrella
Un nodo central (switch) conecta todos los demaás nodos

### Topología en anillo
### Topología en árbol
### Topología en malla
### Topología híbrida o mixta


## Componentes de Red. 


## Métodos de acceso. 
Una red es un medio compartido, y por lo tanto se necesitan establecer unas reglas que definan como los distintos usuarios acceden a ella, para evitar conflictos y asegurar que cada uno tenga iguales oportunidades de acceso. Ese conjunto de reglas es el denominado método de acceso al medio (también conocido como protocolo de arbitraje).
Una vez que losd atos se están moviendo en la red, los métodos de acceso ayudan a regular el flujo de tráfico

- Métodos de acceso múltiple por detección de portadora
- Métodos de paso de testigo
- Métodos de prioridad de demandas. 

Los métodos aleatorios o por contención de portadoras. El más conocido es CSMA (Carrier Sense Multiple Access). El principio es, escuchar antes de hablar. Antes de transmitir escucha, si la línea está libre transmite y si está ocupada, espera. Cuando dos estaciones emiten al mismo tiempo, se produce una colisión, Para evitar esto existen dos métodos que redundan en dos variaciones del algoritmo anteior: 
- CSMA CA (Collision Avoidance). Detección de la colisión. Lo que hace este método es, esperar que el medio esté libre, emitir y esperar un reconocimiento por parte del receptor del mensaje.
- CSMA CD (Collision Detection). Es más sencillo. Primero escucha que esté libre, emite y luego escucha si hay colisión, si no la encuentra asume que el mensaje ha llegado correctamente. 

Los otros métodos son los de acceso deterministico. El sistema determina que estación puede emitir en cada instante de tiempo. 
El método deterministico más usado es el token passing o paso de testigo. Cuando una estción quiere emitir, espera que le llege el testigo

Un parámetro decisivo para decidir que método es mejor es la carga de la red. En redes poco cargadas, el método aleatorio es más eficioente, sin embargo en redes saturadas, funciona mucho mejor los métodos determinísticos. 

## Dispositivos e interconexión. 

hubs, bridges, switches
