let language=localStorage.getItem("iberlagohealth-lang")||"es";

const typeLabel={es:{oral:"Comunicación oral",poster:"Póster",invited:"Conferencia o seminario"},en:{oral:"Oral presentation",poster:"Poster",invited:"Invited talk or seminar"}};
const OPEN_ACCESS_DOIS=new Set(["10.1007/s00248-026-02713-6","10.1007/s00248-026-02746-x","10.1155/tbed/3847131","10.1016/j.vetmic.2025.110688","10.3390/pathogens14040317","10.3390/ani14233376"]);

function renderPublicationFilters(active="all"){
 const target=document.querySelector("#publication-filters");
 const years=[...new Set(PUBLICATIONS.map(item=>item.year))].sort((a,b)=>b-a);target.innerHTML="";
 [["all",language==="es"?"Todas":"All"],...years.map(year=>[String(year),String(year)])].forEach(([value,label])=>{
  const button=document.createElement("button");button.className=`filter${value===active?" active":""}`;button.dataset.publicationFilter=value;button.textContent=label;
  button.addEventListener("click",()=>{renderPublicationFilters(value);renderPublications(value)});target.append(button);
 });
}

function renderPublications(filter="all"){
 const target=document.querySelector("#publication-list");target.innerHTML="";
 PUBLICATIONS.filter(item=>filter==="all"||String(item.year)===filter).forEach(item=>{
  const article=document.createElement("article");article.className="publication";const published=language==="es"?"Publicado":"Published";
  article.innerHTML=`<div class="year">${item.year}</div><div><h3>${item.title}</h3><p>${item.authors} · <em>${item.journal}</em></p><span class="status-badge">${published}</span>${OPEN_ACCESS_DOIS.has(item.doi)?'<span class="oa-badge">Open Access</span>':''}</div><a href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI ↗</a>`;target.append(article);
 });document.querySelector("#publication-count").textContent=PUBLICATIONS.length;
}

function renderActivities(filter="all"){
 const target=document.querySelector("#activity-list");target.innerHTML="";
 ACTIVITIES.filter(item=>filter==="all"||item.type===filter).forEach(item=>{const article=document.createElement("article");article.className="activity";article.innerHTML=`<div class="date">${item.date}<br>${item.year}</div><div class="type">${typeLabel[language][item.type]}</div><div><h3>${item.title}</h3><p>${item.event} · ${item.place}</p></div>`;target.append(article)});
 document.querySelector("#activity-count").textContent=ACTIVITIES.length;
}

function renderNews(){
 const target=document.querySelector("#news-list");target.innerHTML="";
 NEWS.forEach(item=>{const article=document.createElement("article");article.className="news-card";const date=language==="es"?item.date:item.dateEn,title=language==="es"?item.titleEs:item.titleEn,body=language==="es"?item.textEs:item.textEn,linkText=language==="es"?item.linkTextEs:item.linkTextEn;article.innerHTML=`<span class="news-date">${date}</span><h3>${title}</h3><p>${body}</p>${item.link?`<a href="${item.link}" target="_blank" rel="noopener">${linkText||"More information"} ↗</a>`:""}`;target.append(article)});
 if(!NEWS.length)target.innerHTML=`<p class="news-empty">${language==="es"?"Próximamente se publicarán nuevas noticias del proyecto.":"New project updates will be published soon."}</p>`;
 document.querySelector("#news-count").textContent=NEWS.length;
}

function renderObjectiveVideos(){
 const target=document.querySelector("#objective-video-list");target.innerHTML="";
 OBJECTIVE_VIDEOS.forEach(item=>{const article=document.createElement("article");article.id=`video-objetivo-${item.objective}`;const title=language==="es"?`Vídeo · Objetivo ${item.objective}`:`Video · Objective ${item.objective}`;
  if(item.src){article.className="has-video";article.innerHTML=`<video controls preload="metadata" playsinline${item.poster?` poster="${item.poster}"`:""}><source src="${item.src}" type="video/mp4"></video><div class="objective-video-caption"><strong>${title}</strong></div>`}else{article.innerHTML=`<span>▶</span><strong>${title}</strong><small>${language==="es"?"Próximamente":"Coming soon"}</small>`}target.append(article)});
}

function translate(){
 document.documentElement.lang=language;document.querySelectorAll("[data-es][data-en]").forEach(element=>element.textContent=element.dataset[language]);document.querySelectorAll("[data-lang]").forEach(button=>button.classList.toggle("active",button.dataset.lang===language));
 const activePublication=document.querySelector("[data-publication-filter].active")?.dataset.publicationFilter||"all",activeActivity=document.querySelector("[data-activity-filter].active")?.dataset.activityFilter||"all";
 renderPublicationFilters(activePublication);renderPublications(activePublication);renderActivities(activeActivity);renderNews();renderObjectiveVideos();
}

document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>{language=button.dataset.lang;localStorage.setItem("iberlagohealth-lang",language);translate()}));
document.querySelectorAll("[data-activity-filter]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll("[data-activity-filter]").forEach(item=>item.classList.remove("active"));button.classList.add("active");renderActivities(button.dataset.activityFilter)}));
const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("#nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));

const galleryLightbox=document.querySelector("#gallery-lightbox"),lightboxImage=document.querySelector("#lightbox-image"),lightboxCaption=document.querySelector("#lightbox-caption"),touchDevice=window.matchMedia("(pointer: coarse)").matches;
function openGalleryImage(figure){
 const image=figure.querySelector("img"),caption=figure.querySelector("figcaption");if(!image)return;
 lightboxImage.src=image.currentSrc||image.src;lightboxImage.alt=image.alt;lightboxCaption.textContent=caption?.dataset[language]||caption?.textContent||"";galleryLightbox.showModal();
}
document.querySelectorAll(".gallery-item").forEach(figure=>{
 figure.tabIndex=0;figure.setAttribute("role","button");
 figure.addEventListener("dblclick",()=>openGalleryImage(figure));
 if(touchDevice)figure.addEventListener("click",()=>openGalleryImage(figure));
 figure.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openGalleryImage(figure)}});
});
document.querySelector(".lightbox-close").addEventListener("click",()=>galleryLightbox.close());
galleryLightbox.addEventListener("click",event=>{if(event.target===galleryLightbox)galleryLightbox.close()});
translate();
