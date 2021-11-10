---
title: Ejemplos prácticos con html5 y ARIA
layout: articles.njk
---

# Ejemplos prácticos con html5 y ARIA

## Una imagen con su descripción en HTML


Queremos incluír en nuestro documento una imágen, con un texto descrivo. Una solución típica: 

```html
<div class="picture">
    <img src="imagen.png" alt="El escarabajo común desde arriba">
    <p>El escarabajo común desde arriba</p>
</div>
```

El problema de esto es que tiene una descrición redundante. Una resolución mucho mejor sería: 

```html
<figure role="img" aria-labelledby="descEsc">
    <img src="imagen.png" >
    <figcaption id="descEsc">El escarabajo común desde arriba</figcaption>
</figure>
```


## Validando un formulario: 

```html
<label for="field">Nombre</label>
<input type="text" id="field" required aria-required="true" name="name" placeholder="Ej Paquito">
```
