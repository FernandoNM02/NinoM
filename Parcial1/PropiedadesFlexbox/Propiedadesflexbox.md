# PROPIEDADES FLEXBOX 

## ¿Qué es flexbox?
Flexbox ( o el módulo de cajas flexiblesstar ) es probablemente uno de los más completos y eficaces módulos de maquetación. Todo lo que era complicado en versiones anteriores de CSS ( como centrar verticalmente o diseñar estructuras que se redimensionen con elegancia ) con flexbox ( CSS3 ) es ya una tarea muy fácil.
##Propiedades del contenedor flex
| Propiedad | Descripcion  | 
| - | - |
|display | Si su valor es flex o inline-flex, la propiedad display define un contenedor flex ( flexbox ). |
| flex-direction | Establece la dirección del eje principal y por tanto la dirección de los elementos flex.El valor por defecto es row ( fila ).|
| flex-wrap	 | Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ).El valor por defecto es nowrap. |
| flex-flow | Es la forma abreviada para las propiedades flex-direction y flex-wrap.El valor por defecto es row nowrap |
| align-items| Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal.El valor por defecto es stretch. |
| justify-content | Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja.El valor por defecto es flex-start. |
| align-content | Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal.El valor por defecto es stretch. |

##Propiedades de los elementos ( ítems ) flex

| Propiedad | Descripcion  | 
| - | - |
|align-self | Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items. |
| flex-grow | Define cuánto puede crecer un elemento flex, si fuera necesario.El valor por defecto es 0.|
| flex-shrink | Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario.El valor por defecto es 1. |
| flex-basis | Especifica el valor inicial del tamaño principal de un elemento flex.El valor por defecto es auto. |
| flex| La forma abreviada para flex-grow, flex-shrink y flex-basis juntos.El valor por defecto es 0 1 auto. |
|order | Se utiliza para cambiar el orden en el que aparecen los elementos individuales. |
