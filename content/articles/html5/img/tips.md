

## Contenido editable

Con el atributo contenteditable, podemos hacer que un elemento sea editable. Ej

```html
<p contenteditable="true">Texto editable por el usuario</p>
```

## Atributo hidden

Con este atributo podemos hacer que un elemento no se muestre, de forma similar a display:none, pero mientras en segundo se trata de ocultar un elemento por cuestiones de presentación, el primero se oculta porque no es relevante semánticamente.

## data

Podemos añadir metadatos a un elemento. Para ello lo correcto es utilizar el prefijo data, y así luego los podemos obtener con la propiedad dataset: 

```html
<p class="element" data-info="metadatos a procesar">Texto del párrafo</p>
<script>
    const info = document.querySelector(".element").dataset.info,
</script>
```

## Carga diferida.

Es una técnica común poner los scripts de una página al final de ésta para que cuando se carguén ya tengamos el DOM cargado. Podemos hacer esto mismo con el atributo defer, que indica al navegador que primero cargue el HTML y luego el script.

```html
<script defer src="js/index.js"></script>
```

Por otro lado, el atributo async hace que la carga se realice el pararelo. 

## 

Con las etiquetas `<details>` y `<summary>` puedes crear acordeones HTML (elementos desplegables). La etiqueta `<summary>` contiene el título a pulsar para desplegar, y la etiqueta a continuación el contenido a mostrar. El atributo `open` hace que esté desplegado por defecto.

```html
<details open>
    <summary>Título del acordeón</summary>
    <p>Aquí dentro el contenido</p>
</details>
```


La etiqueta `<dialog>` permite crear mensajes, ventanas o diálogos accesibles para nuestros documentos de una forma rápida y sencilla. El atributo `open` muestra el diálogo, que por defecto está oculto (cerrado). Cuidado con el soporte actual: https://caniuse.com/dialog

```html
<dialog open>
    <p>Mensaje</p>
    <button onclick="this.parentelement.close()">Close</button>
</dialog>
```


## Inputs
Combinando un input con un datalist, podemos tener un campo de texto, que permite autorelleno
```html
<datalist id="conocimientos">
          <option value="HTML">HTML</option>          
          <option value="CSS">CSS</option>          
          <option value="Javascript">Javascript</option>          
</datalist>

<input list="conocimientos">
```

## Formularios

A tener en cuenta en los formularios. Los campos disabled y readonly aparecen ambos en gris, y no son editables. Sin embargo, a la hora de enviar el formulario, solo el segundo será enviado. 

## Tipografías

Para utilizar tipografías específicas, es mejor alojarlas en la propia web, y cargarlas mediatne @font-face, usando formatos como WOFF2 y WOFF

```css
@font-face {
    font-family: "Montserrat";
    src:
        url(/fonts/montserrat.woff2) format("woff2"),
        url(/fonts/montserrat.woff) format("woff"),
        url(/fonts/montserrat.ttf) format("truetype");
    font-display: swap;
}
```

También se pueden utilziar repositorios como Google Fonts, pero desde diciembre de 2020, en Chrome, que es el navegador mayoritario ya no se aplican las ventajas de rendimiento en CDN compartidos. En cuano a los formatos, woff2 y woff son suficientes para la mayoría de navegadores. Podmeos añadir TTF para navegadores antiguos, pero fuetnes como EOT y SVG no tienen sentido actualmente.


## Barras de progreso. 

Tenemos una eitqueta para crear barras de progreso. Se puede utilizar de forma infinita, en un punto fijo o de forma dinámica. 

```html

<!--Modo infinito -->
<progress></progress>

<!-- Ejemplo fixed, al 25% de un total de 100 -->
<progress max="100" value="25"></progress>

<!-- Dinámico (creado en JS) -->
<progress class="bar" max="100" value="0"></progress>
<script>
    const progress = document.querySelector(".bar");
    for (let i = 0;i <= 100;i++) {
        setTimeout(() => progress.value = i, 50 * i);
    }
</script>

```

## Descargas

En un enlace para descargar, el atributo download indica al navegador que debe descargar el recurso: 

```html
<a href="documento234454.pdf">Ver PDF</a>
<a href="documento234454.pdf" download>Descargar</a>
<a href="documento234454.pdf"download="file.pdf">Lo descarga como file.pdf</a>
```

## checkbox

El elemento checkbox tiene dos estados, pero con javascript podemos asignarle un tercer estado "indeterminado", que se representa con un guión horizontal. 

```html
<input class="test" type="checkbox" checked>
<script>
    document.querySelector(".test").indeterminate=true;
</script>
```

## step

En los elementos numéricos, el atributo step nos permite indicar el incremento de valor que es posible: 

```html
<input type="number" min="0" max="100" step="5">
<input type="date" value="2021-07-21" step="7" max="2021-10-20">
```

## kdb

Esta etiqueta se utiliza para simbolizar atajos de teclado. Veámosla con un ejemplo: 

```html
<kbd>CTRL</kbd>+<kbd>R</kbd>
<style>
    kbd {
        background: linear-gradient(160deg, #ddd, #fff);
        border-radius: 5px;
        box-shadow: 
            0 -2px 0 0 #cdcde6 inset,
            0 0 1px 1px #fff inset,
            0 1px 2px 1px #1e235a66;
        color: #04c5564;
        font-family: "Victor Mono", consolas;
        font-size: 14px;
        font-weight: 500;
        margin: 0 2px;
        padding: 2px 6px 4px;
    }
</style>
```

## template

La etiqueta template permite crear plantillas HTML inertes, que no son interpretadas ni renderizadas por el navegador. 

```html
<template>
    <div class="user">
        <img src="avatar.png" alt="Username">
        <span>Username</span>
    </div>
</template>
```

## Listas desplegables. 

Una opción interesante en las listas desplegables. Veámoslo con un ejemplo: 

```html
<select>
    <option selected disabled>--</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
    <option>Opción 3</option>
</select>
```

De esta forma, la primera opción será la selecciada al principio,pero una vez se cambie esta opción, no podrá volver a ser marcada.

# Atributo media en links

El atributo media en etiquetas de tipo link, infdica que solo se actúe si se cumplen los requisitos. Por ejemplo, el siguiente ejemplo, el fichero css sólo se carga en dispositivos de escritorio de más de 800px de ancho. 

```html
<link rel="stylesheet" href="/desktop.css" media="(min-width: 801px)">
```

