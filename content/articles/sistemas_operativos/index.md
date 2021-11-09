---
title: Sistemas Operativos
layout: articles.njk
---

# Sistemas Operativos

- Clasificación
- Características técnicas 
- Elementos constitutivos. 
- Sistemas Windows.
- Sistemas Unix y
- Sistemas Linux.

## Clasificación de los sistemas operativos: 

Podemos clasificar los sistemas operativos en base a varios conceptos: 

Atendiendo a cómo administran las tareas: 
- Monotarea: Sólo permiten ejecutar un proceso en un momento dado. Característica de sistemas muy antiguos
- Multitarea: El SO es capaz de ejecutar varios procesos al mismo tiempo. Normalmente asignan recursos de forma alternada a los diferentes procesos. 

Si atendemos a cómo administran los usuarios: 
- Monousuario: Solo soportan un usuario, independientemente del número de procesadores que tenga el ordenador
- Multiusuario: Son capaces de dar servicios a varios usuarios a la vez, ya sea por medio de varias terminales conectadas a la vez o por medio de sesiones remotas

Si atendemos a cómo maneja los recursos: 
- Centralizado: Utiliza los recursos de una sola computadora. Su memoria, cpu, disco, …
- Distribuido: Se define como una colección de ordenadores separados físicamente y conectados entre sí por una red de comunicaciones distribuida. Cada máquina posee sus componentes hardware y software que el usuario percibe como un solo sistema


## Clasificación según Tanumbaum: 

- Sistemas operativos de mainframe
- Sistemas operativos de servidor
- Sistemas operativos multiprocesador
- Sistemas operativos de ordenador personal
- Sistemas operativos en tiempo real
- Sistemas operativos integrados. 
- Sistemas operativos de tarjeta inteligente.

### Sistemas operativos de mainframe

Los mainframes son máquinas  caracterizadas por su capacidad de E/S, sin resultar raro sistemas con 1000 discos y miles de gigabytes. Los sistemas operativos para mainframe están claramente orientados al procesamiento de varios trabajos a la vez, casi todos los cuales necesitan enormes cantidades de E/S.

### Sistemas operativos de servidor. 

Los servidores suelen prestar servicis de web, de archivo, de impresión, etc. 

### Sistemas operativos de ordendor personal. 

Su misión es presentar una buena interfaz a un solo usuario. windows linux y mac son ejemplos. 

### Sistemas operativos de tiempo real. 

Se caracterizan porque deben garantizar unos tiempos de respueta suficientemente exactos ante estímulos externos. se utilizan en sistemas de control de procesos industriales. 

Ejemplos VxWorks y QNX

### Sistemas operativos integrados. 

Típicos de sistemas pequeños como agendas pesonales digitales, etc 
ejemplos PalmOS o Windows CE

### Sistemas operativos de tarjeta inteligente. 

Residentes en una tarjeta inteligente. 
Algunos d eellos solo desempeñan una función, como por ejemplo, un pago electrónico, pero otros pueden realizar varias funcioens. 

## Archivos. 

La práctica totalidad de los sitemas operativos permiten la organización de la información en archivos para su tratamiento, y por lo tanto los sistemas operativos poseen numerosas llamadas en su API para el tratamiento de archivos: creación, apertura, lectura, escritura, búqueda directa, cierre, etc. 

Los archivos residen normalmente el dispositivos de almacenamiento como discos magnéticos, ópticos, unidades de cinta, unidades de memoria externa. Para la orgazción del sistema de archivos, se suele establecer una organización jerárquica basada en directorios (carpetas) y subdirectorios. 

En los sistemas multiusuario se suele proporcionar un mecanismo de protección para el sistema de archivos, basándose en establacer permisos de acceso a los archivos en función de la identidad del propietario de cada archivo, y el grupo al que pertenece. 

## Modelos de diseño.

Se trata de distintas estrategias de diseño que se pueden seguir a la hra de consturir unsistema operativo. En la práctica, los sistemas operativos que utilizamos no tienen que correponderse al cien por cien con solo uno de estos modelos, sino que a menudo los sistemas operativos son híbridos. 

### Modelo monolítico. 

se caracteriza porque todo el sistema operatvo se encuentra en un único espacio de memoria (como si fuese un único ejecutable). Las ventajas de estos sitemas son que son muy eficientes en tiempo y en ocupación de memoria, puuesto que todo está junto y no es necesario replicar código ni datos como si puede ocurrir en otros modelos. 

Por contra, estos sistemas son complejos y de difícil mantenimiento. Un error en un módulo puede producir efectos colaterales en otros módulos.
I

Ejemplos de sistemas operativos que emplean esta organización son UNIX y la mayoría de sus clones como LINUX. SOLARIS es una excepción, pues utiliza el modelo de micronúcleo


### Modelo en estratos. 

Este modelo parte de la idea de que colocando una capa de software encima del hardware desnudo, mostramos a las capas superiores de software una máquina ampliada con una interfaz de más alto nivel. De esta forma, el sistema operativo se puede construir apilando capas de software, de manera que en cada capa se resuelve unproblema concreto.  

Por ejemplo. Sobre el hardware desnudo podemos colacar una primera capa que impelmente la multiprogramación. De esta manera, todo lo que se coloque por encima de esta capa verá una máquina multiprogramada. Sobre esta primera capa, situamos una cpaa que gestione la memoria y el disco. De esta forma, lo que se coloque sobre esta segunda capa tendrá la percepción de ejecutarse sobre una máquina multiprogramada en la que cada proceso tiene su propio espacio de memoria. 

Sobre esta capa, podemos situar otra que gestione la comunicación con la consola, con lo que las capas superiores verán una máquina multiprogramada, con protección de memoria y en la que cada proceso tendrá su propia consola virtual. Posteriormente podemos agregar otra capa que gestiona la E/S sobre dispositivos, lo que añade a las capas superiores que cada proceso tenga sus propios dispositivos abstractos de entrada/salida.

Ejemplos de este modelo son el sistema operativo THE diseñado por Dijkstra (1968) o MULTICS.

### Modelo micronúcleo. 

Este modelo responde a la tendencia de los  sistemas operativos moderos en hacer el núcleo del sistema operativo tan pequeño como sea posible, ejecutanod parte del propio sistema operativo como procesos de usuario. 

Un sistema que siga este modelo, constaría de un número que se encargaria solo de. 
- Gestión de la multiprogramación.
- Comunicación entre procesos. 
- Atención de interrupciones. 

El resto de componentes como gestores de dispositivos, administración de arquivos, administración de memoria, ... se ejecutarían como procesos separados. Como estos procesos se ejecutan con total aislamiento entre sí, la única forma de interacción entre éstos, es mediante la comunicación entre procesos establecidos por el núcleo del sistema. 

Las ventajas de este modelo: 

- Falicidad de depuración y puesta a punto. El núcleo es más simple y el resto se ejecutan en procesos aislados. 
- Robustez. Los fallos en un componente no deben cuasar efectos colaterales. 
- Flexiblidad. Es fácil sustituír un módulo por otro. Inlcuso se podría hacer en caliente. 
- Fácil adaptación a sistemas distribuídos, ya que la comunicación entre móudlos se hace mediante mensajes y ésta primitiva de comunicación se puede adaptar fácilmente a un sistema distribuído. 

Sin embargo, las desventajas. 
- La comunicación entre componentes es mucho más lenta. 
- No es posible compartir rutinas de uso común y tampoco que varios componentes puedan acceder a estructuras compartidas. 

Tenemos ejemplos como AIX, AmigaOS, Amoeba, Minix, Hurd, MorphOS, L4

### Sistemas de máquinas virtuales. 

No es un sistema operativo propiamente dicho, sino una herramienta úti para ejecutar uno o más sistemas operativos.

### Sistemas orientados a objetos. 

No constituyen ensí mismos un modleo de diseño de sistemas operativos, sion que son la consecuencia de la aplicación de los métodos de análisis, diseño y programacón orientados a objetos a la construcción de un sistema operativo. 

Puede desarrollarse con cualquiera de los modelos anteriores. 

Un ejemplo de esta filosofía es Windows, donde cada recurso del sistema que puede ser manipudado desde un proceso de usuario es un objeto que se identifica en el sistema por lo que se llama un handle (un identificador númerico). Desde los procesos de usuario no se puede acceder a las propiedades internas de un objeto, sino que el sistema provee de una serie de llamadas en funcíon de la clase de objeto que permiten manipular sus atributos y efectuar operaciones sobre el mismo. 

Solo para probar
