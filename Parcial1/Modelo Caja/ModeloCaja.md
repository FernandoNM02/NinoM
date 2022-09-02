## **Modelo Caja**

El modelo de caja es la manera en que se representan todos los elementos html en una página. Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificación: si es de línea o de bloque.

A todas las cajas se les puede aplicar las siguientes propiedades: width, height, padding, margin, border, background. Lo particular de este concepto es que por defecto el width se refiere al ancho del contenido de un elemento (no al ancho total, de borde a borde). 

En el gráfico muestro cómo se comporta cada una de las propiedades:

<img src="https://www.laurachuburu.com.ar/img/tutoriales/css/modelo-de-caja.png">



Para calcular el ancho total de un elemento es necesario sumar el ancho, más los dos padding (izquierda y derecha), más los bordes  (izquierda y derecha). En cuanto a los valores verticales pasa lo mismo, pero en diseño web generalmente nos preocupa más definir los anchos de los elementos ya que las alturas están dadas en general por el contenido de cada elemento.

Existe una propiedad nueva (CSS3) que modifica este concepto y si la aplicamos, se considera el ancho del elemento a la distancia entre los bordes. Esta propiedad es box-sizing:border-box.

El background (imagen o color) ocupa todo el elemento desde los bordes.
El margin es la distancia desde el borde de un elemento hacia otro.
El padding es la distancia desde el borde hacia el contenido.

Para que un elemento acepte las propiedades width, height, padding y margin tiene que ser de bloque. Si la etiqueta no es bloque originalmente, se puede modificar su condición con otra propiedad CSS: display.

