# Leyes de la Gestalt en Diseño Web — Práctica (Bootstrap 5)

**Autor:** Jan Vizcaíno Boixadós  
**Asignatura:** Disseny d'Interficies Web (RA2)  
**Fecha:** 14/10/2025

---

## Resumen
Página web educativa y ligera que explica las ocho leyes de la Gestalt aplicadas al diseño web. Construida usando Bootstrap 5.3.8, con atención en estructura semántica, accesibilidad, navegación por anclajes y un modo oscuro opcional. Este README no incluye imágenes (tal y como solicitaste).

---

## Enlaces
- https://gestaltwebdev.netlify.app/
- https://gestalt-sand.vercel.app/

---

## Objetivo
Que cualquier usuario, aunque no tenga conocimientos de diseño, pueda entender y reconocer cómo se aplican las leyes de la Gestalt en interfaces digitales modernas mediante explicaciones breves y ejemplos visuales sencillos (sin depender de fotografías).

---

## Tecnologías
- HTML5 (semántico)
- CSS3 + Bootstrap 5.3.8
- JavaScript (mínimo, para scroll suave, modo oscuro y comportamiento interactivo)
- Herramientas sugeridas: VS Code, Live Server. Opcional: Vite / Sass para flujo de trabajo.

---

## Estructura del proyecto (sugerida)
```
/root
  ├─ index.html
  ├─ css/
  │   └─ styles.css
  ├─ js/
  │   └─ main.js
  ├─ partials/
  │   └─ header.html
  └─ README.md
```

### Secciones principales en `index.html`
- `<header>`: navbar fijo con logo y enlaces ancla (scrollspy activado)
- `<main>`:
  - Hero con título y subtítulo
  - 8 secciones (una por ley de la Gestalt)
  - Bloques intermedios con efecto parallax (opcional, ver CSS)
- `<footer>`: créditos y referencias

---

## Las 8 leyes incluidas
1. **Proximidad** — elementos cercanos se perciben como grupo.  
2. **Semejanza** — similitud visual provoca relación entre elementos.  
3. **Continuidad** — líneas o patrones continuos unen elementos a la vista.  
4. **Cierre** — completamos mentalmente formas incompletas.  
5. **Figura–fondo** — diferenciación entre objeto principal y su contexto.  
6. **Simetría / Prägnanz** — preferimos formas simples y equilibradas.  
7. **Región común** — elementos dentro de la misma área se asocian.  
8. **Destino común** — elementos con movimiento conjunto se perciben unidos.

---

## Fragmentos útiles (snippets)

### Scroll suave con offset para navbar fija
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offset = 60; // ajustar según altura navbar
    const targetPosition = target.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  });
});
```

### Activar Scrollspy (Bootstrap)
Añadir atributos al `<body>`:
```html
<body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="50" tabindex="0">
```

### CSS básico para efecto parallax (sin imágenes externas)
```css
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
}
.parallax::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}
.parallax-inner { position: relative; z-index: 1; padding: 2rem; text-align:center; }
```

---

## Accesibilidad y buenas prácticas
- Usar estructura semántica (`<header>`, `<main>`, `<section>`, `<footer>`).
- Texto contrastado y comprobado para legibilidad.
- Tamaños de fuente adaptativos (rem/em).
- Alternativas no visuales para ejemplos (descripciones, labels).
- Navegación por teclado y foco visible.
- Evitar dependencias que impidan la lectura por lectores de pantalla.

---

## Pruebas realizadas
- Verificación de anclajes y scroll suave.
- Revisión del comportamiento de parallax en distintos tamaños de pantalla.
- Comprobación del contraste en modo claro y oscuro.
- Validación básica de HTML/CSS.
- Pruebas de navegación y accesibilidad mínima (tab, lectura de estructuras).

---

## Despliegue
Propuesta sencilla:
- Subir repo a GitHub.
- Deploy mediante Netlify o Vercel (construcción estática).
- Asegurarse de que los assets y rutas relativas funcionan en producción.

---

## Conclusiones personales
Trabajar con Bootstrap 5 para esta práctica ha sido un reto enriquecedor frente a un workflow basado en Tailwind. La práctica obliga a traducir ideas visuales a utilidades predefinidas y a ser preciso con la estructura semántica y la accesibilidad. El resultado es una página didáctica, ligera y fácil de mantener.
