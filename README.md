# Juan Cruz Manochi — Portfolio

Portfolio profesional de Juan Cruz Manochi: e-commerce, growth marketing, dirección
creativa y automatización con IA. Publicado en
[manomanin.github.io/portafolio-jcm](https://manomanin.github.io/portafolio-jcm/).

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript, exportado como sitio estático
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + ScrollTrigger para las animaciones
- [Lenis](https://lenis.darkroom.engineering/) para el smooth scroll
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) para el objeto 3D del hero

## Estructura

```
/app          rutas (home, /work/[slug], sitemap, robots)
/sections     una sección de la home = un archivo (Hero, About, Work, ...)
/components   piezas reutilizables (ui, layout, three, case-study)
/data         todo el contenido editable — ver CONTENT.md
/lib          hooks y utilidades (animación, cursor, tilt, etc.)
/types        tipos de TypeScript compartidos
```

Para editar contenido (bio, proyectos, skills, etc.) sin tocar código, ver **[CONTENT.md](./CONTENT.md)**.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera el sitio estático en /out
```

## Deploy

Cada `git push` a `main` dispara `.github/workflows/deploy.yml`, que compila el sitio y lo
publica en GitHub Pages automáticamente. No hace falta ningún paso manual.
