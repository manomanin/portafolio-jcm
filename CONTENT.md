# Cómo editar el contenido del portfolio

Todo el contenido real vive en la carpeta `/data`, separado de los componentes visuales.
Para cambiar algo, alcanza con editar el archivo que corresponde — no hace falta tocar
el diseño ni el código de las secciones.

| Querés cambiar... | Editá... |
|---|---|
| Nombre, rol, bio, ubicación, intereses, foto | `data/profile.ts` |
| Experiencia laboral y educación (línea de tiempo) | `data/timeline.ts` |
| Habilidades / skills | `data/skills.ts` |
| Herramientas ("My Stack") | `data/stack.ts` |
| Servicios que ofrecés | `data/services.ts` |
| Métricas / resultados | `data/results.ts` |
| Testimonios de clientes | `data/testimonials.ts` |
| Proyectos / case studies | `data/projects.ts` |
| Cómo trabajás (proceso, 5 pasos) | `data/process.ts` |
| Redes sociales, email, WhatsApp | `data/socials.ts` |
| Links del menú | `data/nav.ts` |
| Título/descripción para Google y redes | `data/seo.ts` |
| Video del showreel | `data/showreel.ts` |

## Assets — qué archivo va en cada sector

| Sector | Qué preparar | Medida ideal | Dónde va el archivo |
|---|---|---|---|
| Sobre mí | Foto de perfil | Vertical 4:5, 1000×1250px+ | `public/profile/foto.jpg` |
| Proyecto — imagen principal | 1 imagen destacada por proyecto | Horizontal 16:9, 1600×900px+ | `public/projects/<slug>/cover.jpg` |
| Proyecto — galería | 4 a 8 imágenes (capturas, producto, piezas, ads) | La que le quede natural a cada una | `public/projects/<slug>/galeria-1.jpg`, `galeria-2.jpg`... |
| Proyecto — video (opcional) | Ad, reel o demo corta | MP4, ~50MB máx | `public/projects/<slug>/video.mp4` |
| Showreel (opcional) | Video general + portada | MP4 horizontal + imagen 16:9 | `public/showreel.mp4` + `public/showreel-poster.jpg` |
| Favicon / OG image | Ya resueltos — avisar solo si se quieren cambiar | — | `public/favicon.svg`, `public/og-cover.png` |

El resto (bio, skills, experiencia, servicios, resultados, testimonios, redes) es texto puro,
sin archivos — se edita directo en el `.ts` que corresponda de la tabla de arriba.

## Sumar un proyecto nuevo

1. Abrí `data/projects.ts`.
2. Copiá el objeto de ejemplo completo (el que tiene `slug: 'proyecto-ejemplo'`).
3. Pegalo como un nuevo objeto en el array y completá cada campo `[AGREGAR ...]` con el dato real.
4. Poné las imágenes/video en `public/projects/<slug-del-proyecto>/` y actualizá los `src`.
5. Sacá `isPlaceholder: true` y los `placeholder: true` de los campos que ya tengan dato real.

La tarjeta en la sección "Proyectos destacados", los filtros por categoría y la página
individual del proyecto (`/work/<slug>/`) se arman solos a partir de ese array — no hay
que tocar ningún componente.

## Foto de perfil

`data/profile.ts` tiene `photo.src: null` a propósito (no hay foto real todavía). Cuando
tengas una:

1. Poné el archivo en `public/profile/foto.jpg` (o `.png`).
2. En `data/profile.ts`, cambiá `photo.src` a `/profile/foto.jpg` y sacá `placeholder: true`.

## Placeholders — qué significan

Todo lo marcado como `placeholder: true`, con corchetes `[ASÍ]`, o con valores tipo `XX%`
es contenido de ejemplo a propósito — nunca se inventó un dato real (cliente, resultado,
cifra) para que "se vea mejor". Reemplazalo cuando tengas la info real; hasta entonces,
el sitio lo muestra de forma honesta (tarjetas punteadas, "Próximamente", etc.) en vez de
mostrar un link roto o un número inventado.

## Cómo se publica

El sitio se genera con Next.js y se publica solo en GitHub Pages con cada `git push` a
`main` (workflow en `.github/workflows/deploy.yml`). No hace falta correr ningún comando
manualmente — alcanza con pedirle a Claude que haga los cambios y los suba.
