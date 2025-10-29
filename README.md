# Introducción {#introducción .list-paragraph}

# Este documento describe el proceso de desarrollo de una página web educativa dedicada a las ocho leyes de la Gestalt aplicadas al diseño web. {#este-documento-describe-el-proceso-de-desarrollo-de-una-página-web-educativa-dedicada-a-las-ocho-leyes-de-la-gestalt-aplicadas-al-diseño-web. .list-paragraph}

# El proyecto se ha llevado a cabo utilizando Bootstrap 5 como marco principal, siguiendo las directrices del módulo y poniendo especial atención en aspectos de estructura, accesibilidad y publicación en la nube. {#el-proyecto-se-ha-llevado-a-cabo-utilizando-bootstrap-5-como-marco-principal-siguiendo-las-directrices-del-módulo-y-poniendo-especial-atención-en-aspectos-de-estructura-accesibilidad-y-publicación-en-la-nube. .list-paragraph}

# Objetivo: {#objetivo .list-paragraph}

El objetivo principal es que cualquier usuario, incluso sin
conocimientos previos de diseño, pueda comprender y reconocer cómo se
aplican las leyes de la Gestalt en las interfaces digitales modernas.

# Visión general del proyecto

## Título del sitio: 

Leyes de la Gestalt en Diseño Web

## Descripción: 

Se trata de una página web ligera, ordenada y visualmente atractiva,
cuyo propósito es explicar de forma clara y concisa las principales
leyes de la Gestalt mediante ejemplos visuales y breves descripciones.

## Estructura principal:

-   Encabezado con título y menú de navegación fijo (con función
    scrollspy).

-   Ocho secciones independientes, cada una dedicada a una ley de la
    Gestalt.

-   Bloques con efecto parallax para aportar dinamismo visual.

-   Pie de página con créditos y referencias.

## Modo oscuro 

El sitio incluye un modo oscuro que mejora la experiencia visual y la
accesibilidad, permitiendo al usuario elegir el estilo que prefiera.

# Tecnologías utilizadas

Para el proyecto, se han usado las siguientes tecnologías:

-   **HTML5** → Estructura semántica del sitio

-   **CSS3 / Bootstrap 5** → Diseño, tipografía y utilidades de layout

-   **JavaScript** → Scroll suave, modo oscuro y comportamiento
    interactivo

-   **GitHub + Netlify / Vercel** → Publicación del sitio

-   **Herramientas auxiliares:**

    -   VS Code con Live Server (entorno local)

    -   (Opcional) Vite o Sass para personalización de tema

# Estructura del contenido

## Encabezado y menú

Arriba del todo cuento con un **navbar fijo**, que contiene con un
**logo** y enlaces ancla hacia cada ley, luego tengo un **Scrollspy**
activado para resaltar la sección visible.

Luego tengo un **Hero** con el **título principa**l y un **subtítulo
contextual**.

## Ocho leyes representadas

  -------------------------------------------------------------------------------
  Nº   Ley                 Descripción breve                   Ejemplo visual
  ---- ------------------- ----------------------------------- ------------------
  1    **Proximidad**      Los elementos que están cerca unos  Dos conjuntos de
                           de otros tienden a percibirse como  puntos agrupados.
                           un grupo o conjunto relacionado.    

  2    **Semejanza**       Los elementos que comparten         Formas iguales
                           características visuales similares  diferenciadas por
                           (color, forma, tamaño, textura) se  color y forma
                           perciben como relacionados o        (cuadrados y
                           pertenecientes al mismo grupo.      círculos).

  3    **Continuidad**     Nuestra mente tiende a seguir       Puntos unidos por
                           líneas y patrones continuos,        una línea que
                           percibiendo los elementos alineados muestra
                           como relacionados. Preferimos ver   continuidad.
                           líneas continuas en lugar de líneas 
                           separadas o ángulos abruptos.       

  4    **Cierre**          Nuestra mente tiende a completar    Círculo formado
                           figuras incompletas, llenando los   por líneas
                           espacios vacíos para crear formas   abiertas.
                           reconocibles. Vemos el todo aunque  
                           falten partes.                      

  5    **Figura--fondo**   Nuestra percepción distingue entre  Figura oscura
                           un objeto principal (figura) y su   sobre fondo claro.
                           contexto (fondo).                   

  6    **Simetría y orden  Tendemos a percibir las formas de   Rombo dividido por
       (Prägnanz)**        la manera más simple y ordenada     dos formas
                           posible. Preferimos formas          simétricas
                           simétricas, equilibradas y          centradas.
                           regulares porque son más fáciles de 
                           procesar mentalmente.               

  7    **Región común**    Los elementos que están dentro de   Dos bloques dentro
                           una misma región delimitada (como   de cajas.
                           un borde, fondo de color o área     
                           definida) se perciben como          
                           pertenecientes al mismo grupo.      

  8    **Destino común**   Los elementos que se mueven en la   Triángulos que se
                           misma dirección o a la misma        mueven con una
                           velocidad se perciben como parte de onda definida.
                           un mismo grupo. El movimiento       
                           sincronizado crea una sensación de  
                           unidad.                             
  -------------------------------------------------------------------------------

# Diseño visual y tema

## Paleta de colores

![Pantalla de computadora con letras El contenido generado por IA puede
ser incorrecto.](media/image1.png){width="2.332694663167104in"
height="2.962442038495188in"}

## Bordes y radios 

![Interfaz de usuario gráfica, Aplicación El contenido generado por IA
puede ser incorrecto.](media/image2.png){width="6.768055555555556in"
height="3.2in"}

## Tipografía

  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,
Oxygen,

    Ubuntu, Cantarell, sans-serif;

## Distribución

 \<div *class*=\"container\"\>

            \<div *class*=\"row align-items-center\"\>

                \<div *class*=\"col-lg-6 col-12 mb-4 mb-lg-0\"\>

# Efecto Parallax

He aplicado el efecto parallax en secciones con títulos que refuerzan la
idea de mi página y el mensaje que quiero transmitir entre medio de las
leyes. En el fondo de las imágenes he usado fotos de sitios que me
gustan y que creo que transmiten harmonía y paz.

Este es el css que logra este efecto:

*.parallax* {

  background-attachment: fixed;

  background-position: top;

  background-repeat: no-repeat;

  background-size: cover;

  min-height: 100vh;

  display: flex;

  align-items: center;

  justify-content: center;

  position: relative;

  color: white;

}

*.parallax::before* {

  content: \"\";

  position: absolute;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

  background: rgba(0, 0, 0, 0.7);

}

*.parallax-inner* {

  position: relative;

  z-index: 1;

  text-align: center;

  padding: 2rem;

}

# Accesibilidad

Para una experiencia correcta de todos los tipos de usuarios, es
necesario un mínimo accesibilidad. Por ello, he hecho lo siguiente:

-   **Estructura semántica:** uso correcto de divs, h1, h2, p, ol...

>  \<div *class*=\"col-lg-6 col-12\"\>
>
>                     \<div *class*=\"gestalt-in-web\"\>
>
>                         \<h4\>Aplicación en diseño web:\</h4\>
>
>                         \<ol\>
>
>                             \<li\>Agrupación de elementos de menú
> relacionados\</li\>
>
>                             \<li\>Organización de formularios por
> secciones\</li\>
>
>                             \<li\>Disposición de tarjetas de
> contenido\</li\>
>
>                         \</ol\>
>
>                     \</div\>
>
>                 \</div\>

**\
**

-   **Contraste de color:** comprobado para buena legibilidad

-   **Tamaño de letra** adaptado para todos los ojos**.**

-   **Alternativas visuales:** los ejemplos se perciben también sin
    color

> ![Interfaz de usuario gráfica, Aplicación El contenido generado por IA
> puede ser incorrecto.](media/image3.png){width="6.768055555555556in"
> height="3.1743055555555557in"}

-   **Scroll suave:** mejora la experiencia de lectura sin perder
    contexto.

# Navegación por anclajes y desplazamiento suave

-   Implementado mediante href=\"#id\" con scroll-behavior: smooth;

> \* {
>
>   scroll-behavior: smooth;
>
> }

-   El menú permanece visible (navbar fija)

>     \<nav *id*=\"mainNav\" *class*=\"navbar navbar-expand-lg
> navbar-light fixed-top\"\>

-   Ajuste del offset superior para evitar que los títulos queden
    ocultos tras el menú

> document.querySelectorAll(\'a\[href\^=\"#\"\]\').forEach((*anchor*)
> =\> {
>
>   *anchor*.addEventListener(\"click\", function (*e*) {
>
>     const target =
> document.querySelector(*this*.getAttribute(\"href\"));
>
>     if (target) {
>
>       *e*.preventDefault();
>
>       const offset = 60;
>
>       const targetPosition = target.offsetTop - offset;
>
>       window.scrollTo({ top: targetPosition, behavior: \"smooth\" });
>
>     }
>
>   });
>
> });

-   Scrollspy activado con atributos data-bs-spy=\"scroll\" y
    data-bs-target=\".navbar\"

\<body *data-bs-spy*=\"scroll\" *data-bs-target*=\"#mainNav\"
*data-bs-offset*=\"50\" *tabindex*=\"0\"\>

# Despliegue del proyecto

**Plataforma:** (marca la que usaste)

-   **Netlify [Leyes de la Gestalt en Diseño
    Web](https://gestaltwebdev.netlify.app/)**

![](media/image4.png){width="6.768055555555556in" height="2.1125in"}

-   **Vercel [Leyes de la Gestalt en Diseño
    Web](https://gestalt-sand.vercel.app/)**

![](media/image5.png){width="6.768055555555556in"
height="2.6486111111111112in"}

# Pruebas y validaciones

Se han hecho las siguientes pruebas y validaciones antes de publicar y
presentar el proyecto.

-   Revisión del funcionamiento de los anclajes, scroll suave y
    scrollspy.

-   Validación de visualización de ejemplos visuales.

-   Verificación del comportamiento del parallax en todo tipo de
    dispositivos.

-   Prueba de contraste con fondos oscuros y claros.

-   Comprobación de accesibilidad básica.

-   Validación HTML y CSS.

# Conclusiones personales

Me ha gustado mucho esta práctica, porque no solo me ha permitido poner
a prueba mi creatividad, sino también reflexionar sobre cómo transmitir
conceptos visuales de manera clara. He tenido que ser creativo a la hora
de diseñar ejemplos que fueran tanto atractivos como didácticos, y
además asegurarme de que cada elemento visual reforzara la explicación
teórica correspondiente.

Por otro lado, ha supuesto todo un reto volver a trabajar con Bootstrap,
ya que estaba acostumbrado a Tailwind. Esto me ha obligado a pensar de
manera diferente en cuanto a la estructura y la organización del código,
adaptándome a nuevas clases y estilos predefinidos, lo que ha resultado
ser un aprendizaje muy enriquecedor.

En general, esta práctica me ha enseñado a combinar creatividad,
claridad y adaptabilidad técnica, fortaleciendo tanto mis habilidades de
diseño web como mi capacidad para comunicar visualmente conceptos
complejos de manera efectiva.
