---
title: Arquitectura PC
layout: articles.njk
---


# Arquitectura de ordenadores

## Elementos básicos. 

## Funcións. A unidade central de procesamento. 

## A memoria: tipos, xerarquía e modos de direccionamento

## La memoria: tipos, jerarquía y modos de direccionamento

## La memoria
En los sistemas digitales, no combinacionales, de proceso debe existir una unidad de memoria 
en  la  que  se  almacenen  los  datos,  los  resultados  parciales  y  los  resultados  finales  del  proceso.  
Cuando el sistema digital de proceso es programable, además, han de memorizarse las 
instrucciones del programa. El esquema del dispositivo de memoria que vamos a utilizar es el siguiente: 


Dirección.  Toda  memoria  está  dividida  en  “porciones”,  de  forma  que  el  acceso  a  la  
memoria, bien para escritura o bien para lectura, se realiza sobre una determinada de esas 
porciones.  Para  poder  especificar  a  cuál  de  ellas  queremos  acceder,  a  cada  una  se  le  
asigna un identificador. A este identificador se le denomina de manera genérica dirección 
de memoria.

http://www.dacya.ucm.es/hidalgo/estructura/lanchares.pdf


## Modos de direccionamiento


- **Modo de direccionamiento inmediato**. Es la forma más simple de direccionamiento. El operando es parte de la instrucción, y por lo tanto, no una referencia a la memoria. Este modo es rápido
- **Modo de direccionamiento directo**. En este modo, el campo de dirección contiene la dirección del operando. Se requiere uan única referencia de memoria para leer el opreando de la dirección dada, sin embargo, sólo proporciona un espacio limitado de direcciones. 
- **Modo de direccionamiento indirecto**. La celda de memoria a la que apunta el campo de dirección contiene la dirección del operando, que a su vez contiene la dirección de longitud completa del operando. Este modo tiene un espacio de direcciones grande.
- **Modo de direccionamiento de registro**. Similar al directo. La diferencia clave entre los dos modos es que el campo de dirección de la instrucción se refiere a un regsitro en lugar de una posición de memoria. El direccionamiento de registro no tiene una dirección eficaz. Tres o cuatro bits son utilizados como campo de dirección para hacer referencia a los registros.
- **Modo de direccionamiento indirecto de registro**. Similar al direccionamiento indirecto. El operando se encuentra en una celda de memoria apuntada por el contenido de un registro. El registro contiene la dirección efectiva del operando. Este modo utiliza menos acceso a memoria que el direccionamiento indirecto. Tiene un espacio de direcciones grande, pero es limitado al ancho de los registros disponibles para almacenar la dirección efectiva. 
- **Modo de direccionamiento de desplazamiento**. Tiene tres variaciones: 
    - Direccionamiento relativo
    - Direccionamiento de registro base
    - Direccionamiento de índice
- **Modo de direccionamiento de pila**. También conocido como direccionamiento implícito. Consiste en un conjunto lineal de ubicaciones referidos al último que entra y primero en salir. El operando está en la parte superior de la pila. El puntero de la pila es un regsitro que almacena la dirección de la parte superior de la ubicación de la pila.

http://dea.unsj.edu.ar/mp1/APUNTES/Catedra%20Modos%20de%20Direccionamiento.pdf
