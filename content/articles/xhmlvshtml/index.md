# Diferencias entre HTML4 Y XHTML

- En XHTML no puede haber nada que no esté en una etiqueta, y en HTML sí. El siguiente ejemplo es válido en HTML y no en XHTML

```html
<p>AAAA</p>
BBBB
<p>CCCC</p>
```

- En XHTML, los nombres de elementos y atributos deben escribirse en minúsculas. En HTML no es necesario. En el ejemplo de abajo, la primera sentencia es válida en ámbas tecnologías, pero la segunda no es válida en XHTML

```html
<p class="xxx">AAAA</p>
<p class="xxx">AAAA</p>
```

- En XHTML, las referencias a entidades en hexadecimal deben escribirse en minúsculas. En HTML se pueden escribir en minúsculas o mayúsculas. Ejemplo no válido en XHTML

```html
<p>&#X3b1; &#X3b2; &#X3c0;</p>
```

- Para evitar problemas con los caracteres "<" y "&", en XHTML el código javascript (y de estilo) se suele incluir en secciones CDATA. En HTML no es necesario:

```html
<script type="text/javascript">
  <![CDATA[
   ... unescaped script content ...
  ]]>
</script>
```

- Los documentos XHTML tienen que tener un único elemento raíz de todo el documento, el elemento <html>. Los documentos HTML pueden no tenerlo. Ejemplo HTML correcto XHTML incorrecto

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <title>HTML</title>
</head>
<body>
  <!-- contenido de la página -->
</body>
```

- En XHTML, los elementos no vacíos (los que tienen etiqueta de apertura) deben tener etiqueta de cierre. En HTML no es necesario.

```html
<p>AAAA</p>
<p>BBBB</p>
```

- En XHTML, la etiqueta de apertura de los elementos **vacíos** debe acabar en " />" o debe haber una etiqueta de cierre. En HTML no puede haber etiqueta de cierre.Las etiquetas vacías (void) de HTML son <area>, <base>, <br>, <col>, <embed>, <hr>, <img>, <input>, <link>, <meta>, <param>, <source>, <track> y <wbr>.

```html
<hr></hr>
```

Este ejemplo no es válido en HTML

- El elemento <pre> no puede contener elementos <img>, <object>, <big>, <small>, <sub> o <sup>.

```html
<pre>x<sup>2</sup></pre>
```

- En XHTML, los atributos deben tener siempre valor (en el caso de atributos booleanos, el valor debe ser el propio nombre del atributo o una cadena vacía). En HTML, los atributos pueden no tener valor asignado.

```html
<ol reversed>
  <li>AAA</li>
  <li>BBB</li>
</ol
```

Es válido en HTML pero no en XHTML

- En XHTML los valores de los atributos deben escribirse en minúsculas. En HTML se pueden escribir en minúsculas o mayúsculas.

```html
<p><input type="TEXT" /></p>
```

- En XHTML, los valores de los atributos deben escribirse entre comillas (dobles o simples). En HTML no es necesario si no hay espacios en blanco.

```html
<p style="color: red">AAAA</p>
<!-- HTML correcto XHTML correcto -->
<p style="color:red">AAAA</p>
<!--HTML correcto XHTML incorrecto -->
<p style="color:" red>AAAA</p>
<!-- HTML incorrecto XHTML incorrecto -->
<p class="xxx">AAAA</p>
<!-- HTML correcto XHTML correcto -->
<p class="xxx">AAAA</p>
<!-- HTML correcto XHTML incorrecto -->
```
