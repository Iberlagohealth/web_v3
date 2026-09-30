# Cómo publicar y actualizar la web Iber-LagoHealth

Esta guía explica cómo publicar la web por primera vez y cómo añadir noticias, publicaciones, congresos, vídeos y perfiles sin modificar el diseño.

## 1. Publicar por primera vez en GitHub Pages

1. Descarga y descomprime la versión más reciente de `IberLagoHealth_web_GitHub_Pages`.
2. Entra en [github.com](https://github.com/) y crea una cuenta si todavía no tienes una.
3. Pulsa el símbolo `+` de la esquina superior derecha y elige **New repository**.
4. Escribe como nombre `iberlagohealth`.
5. Selecciona **Public** y pulsa **Create repository**.
6. En el repositorio vacío, pulsa **uploading an existing file** o **Add file > Upload files**.
7. Abre la carpeta descomprimida `iberlagohealth-site` y arrastra **todo su contenido** a GitHub. Debes ver `index.html`, las carpetas `assets`, `css` y `js`, y los archivos de instrucciones en la raíz. No subas el ZIP ni una carpeta exterior que contenga todo lo demás.
8. Al final de la página, escribe un mensaje como `Primera versión de la web` y pulsa **Commit changes**.
9. Abre **Settings > Pages**.
10. En **Build and deployment**, selecciona **Deploy from a branch**.
11. Selecciona la rama `main`, la carpeta `/(root)` y pulsa **Save**.
12. Espera unos minutos. La web aparecerá en `https://TU-USUARIO.github.io/iberlagohealth/`.

Cada cambio que guardes posteriormente en la rama `main` actualizará automáticamente la web pública.

## 2. Forma más sencilla de editar texto

En la página principal de tu repositorio pulsa la tecla `.`. Se abrirá el editor web de GitHub. También puedes abrir directamente `https://github.dev/TU-USUARIO/iberlagohealth`.

Tras realizar un cambio:

1. Abre el icono **Source Control** de la barra lateral.
2. Escribe un mensaje breve, por ejemplo `Añadir nueva publicación`.
3. Pulsa **Commit & Push**.
4. Espera unos minutos y recarga la web pública con `Ctrl + F5`.

## 3. Añadir una noticia

Abre `js/data.js`, busca `const NEWS = [` y añade al principio:

```js
{date:"15 octubre 2026",dateEn:"15 October 2026",titleEs:"Título en castellano",titleEn:"Title in English",textEs:"Texto breve en castellano.",textEn:"Short text in English.",link:"https://direccion-del-enlace.es",linkTextEs:"Más información",linkTextEn:"More information"},
```

Si no hay enlace, utiliza `link:"",linkTextEs:"",linkTextEn:""`. La cifra de noticias se actualiza automáticamente.

## 4. Añadir una publicación

En `js/data.js`, busca `const PUBLICATIONS = [` y añade al principio:

```js
{year:2027,title:"Título completo del artículo",journal:"Nombre de la revista 00:000–000",doi:"10.xxxx/xxxxx",authors:"Apellido A. et al."},
```

No escribas `https://doi.org/` en `doi`. Los filtros de años y el número total se crean automáticamente.

## 5. Añadir un congreso o actividad

En `js/data.js`, busca `const ACTIVITIES = [` y añade al principio:

```js
{year:2027,date:"10–12 May",type:"oral",place:"Lisboa, Portugal",event:"Nombre del congreso",title:"Título de la comunicación"},
```

Los tipos admitidos son `oral`, `poster` e `invited`. El contador se actualiza automáticamente.

## 6. Añadir los vídeos de los objetivos

1. Sube el MP4 a `assets/videos` mediante **Add file > Upload files**, con un nombre sencillo como `objetivo-1.mp4`.
2. Si tienes una portada, súbela como `objetivo-1.jpg`.
3. En `js/data.js`, busca `const OBJECTIVE_VIDEOS = [` y sustituye la entrada:

```js
{objective:1,src:"assets/videos/objetivo-1.mp4",poster:"assets/videos/objetivo-1.jpg"},
```

Sin portada, deja `poster:""`. Para sustituir el vídeo general, reemplaza `assets/videos/project-overview.mp4`; su portada es `project-poster.jpg`.

GitHub limita a 25 MiB los archivos subidos desde el navegador. Si un vídeo supera ese tamaño, comprímelo como MP4 H.264 o utiliza GitHub Desktop.

## 7. Añadir una persona y su fotografía

1. Sube una fotografía JPG o PNG, con nombre sencillo y sin espacios, a `assets/team`.
2. Abre `js/team.js` y añade el nombre a `RESEARCH_TEAM` o `WORK_TEAM`.
3. Dentro de `PROFILES`, copia una ficha existente y modifica:

```js
"Nombre Apellidos":{
 photo:"assets/team/nombre-apellidos.jpg",
 institutionEs:"Institución en castellano",
 institutionEn:"Institution in English",
 bioEs:"Biografía en castellano.",
 bioEn:"Biography in English.",
 interestsEs:"Intereses de investigación en castellano.",
 interestsEn:"Research interests in English.",
 email:"correo@universidad.es",
 profile:"https://enlace-al-perfil",
 orcid:"https://orcid.org/0000-0000-0000-0000",
 researcherId:"Identificador",
 scopus:"Identificador"
},
```

El nombre debe coincidir exactamente en la lista y en `PROFILES`. Los campos no disponibles pueden eliminarse.

## 8. Añadir fotografías a la galería

1. Optimiza la fotografía como JPG, preferiblemente de menos de 1–2 MB, y súbela a `assets/gallery`.
2. Abre `index.html`, busca `field-gallery` y copia un bloque `<figure>...</figure>` existente.
3. Cambia la ruta, el texto alternativo y los pies `data-es` y `data-en`.

## 9. Comprobación final

Tras actualizar, revisa el cambio de idioma ES/EN, la vista en ordenador y móvil, los enlaces y la carga de imágenes y vídeos. Si dejan de aparecer publicaciones, noticias o perfiles, normalmente falta una coma, una comilla o una llave en `data.js` o `team.js`. GitHub conserva el historial y permite recuperar la versión anterior.
