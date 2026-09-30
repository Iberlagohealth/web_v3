// ================================================================
// EQUIPO Y PERFILES EDITABLES
// 1) Añade o elimina nombres en RESEARCH_TEAM y WORK_TEAM.
// 2) Añade la ficha completa de una persona dentro de PROFILES.
// 3) Guarda su fotografía en assets/team y escribe aquí su ruta.
// Consulta EDITAR_WEB.md para copiar ejemplos completos.
// ================================================================

const RESEARCH_TEAM = [
 "María Patrocinio Morrondo Pelayo",
 "Fernando Esperón Fajardo",
 "Javier Millán Gasca",
 "Jonás Carmona Pírez"
];

const WORK_TEAM = [
 "Sabrina Castro Scholten",
 "Débora Jiménez Martín",
 "Saúl Jiménez Ruiz",
 "Beatriz Vaz de Freitas Botelho Cardoso",
 "Nuno Santos",
 "Maria Roser Velarde Nieto",
 "Moisés Gonzálvez Juan",
 "Patricia Cavadini",
 "Joana Patricia Da Silva Abrantes",
 "Samuel Castán Alloza",
 "Elena Urbano Sojo"
];

const PROFILES={
 "Ignacio García Bocanegra":{
  photo:"assets/team/ignacio-garcia-bocanegra.png",
  institutionEs:"Universidad de Córdoba · Grupo de Investigación en Sanidad Animal y Zoonosis · ENZOEM",
  institutionEn:"University of Córdoba · Animal Health and Zoonoses Research Group · ENZOEM",
  bioEs:"Ignacio García Bocanegra es licenciado en Veterinaria (2001) y en Ciencia y Tecnología de los Alimentos (2003), y doctor en Ciencias Veterinarias (2005) por la Universidad de Córdoba (UCO). Es diplomado por el European College of Zoological Medicine (ECZM) en Wildlife Population Health. Trabajó como técnico veterinario en el Centro de Análisis y Diagnóstico de la Fauna Silvestre de la Junta de Andalucía (2006–2008) y como investigador posdoctoral en el Centro de Investigación en Sanidad Animal (CReSA–IRTA, 2008–2009). En 2009 se incorporó al Departamento de Sanidad Animal de la UCO, donde imparte docencia de grado y posgrado, y desde 2020 es Catedrático de Sanidad Animal. Es responsable del Grupo de Investigación en Sanidad Animal y Zoonosis (GISAZ) y miembro de la Unidad de Investigación Competitiva ENZOEM.",
  bioEn:"Ignacio García Bocanegra holds degrees in Veterinary Medicine (2001) and Food Science and Technology (2003), as well as a PhD in Veterinary Sciences (2005), all from the University of Córdoba (UCO). He is a Diplomate of the European College of Zoological Medicine (ECZM) in Wildlife Population Health. He worked as a veterinary officer at the Andalusian Wildlife Analysis and Diagnosis Centre (2006–2008) and as a postdoctoral researcher at the Centre for Research in Animal Health (CReSA–IRTA, 2008–2009). In 2009 he joined UCO's Department of Animal Health, where he teaches undergraduate and postgraduate courses, and in 2020 became Professor of Animal Health. He heads the Animal Health and Zoonoses Research Group (GISAZ) and is a member of the ENZOEM Competitive Research Unit.",
  interestsEs:"Su actividad investigadora se centra en la epidemiología y el control de las enfermedades transmisibles de importancia para la sanidad animal y la salud pública, desde una perspectiva de Una Sola Salud (One Health).",
  interestsEn:"His research focuses on the epidemiology and control of transmissible diseases of importance to animal and public health from a One Health perspective.",
  email:"nacho.garcia@uco.es",profile:"https://www.scopus.com/authid/detail.uri?authorId=35326759400",orcid:"https://orcid.org/0000-0003-3388-2604",researcherId:"G-1443-2016",scopus:"35326759400",
  externalLinks:[
   ["Loop","http://loop.frontiersin.org/people/398992/overview?referrer=orcid_profile"],
   ["Ciência ID","http://www.cienciavitae.pt/3414-7657-8010"],
   ["SciProfiles","https://sciprofiles.com/profile/1196688"]
  ]
 },
 "Carlos Rouco Zufiaurre":{
  photo:"assets/team/carlos-rouco.jpg",
  institutionEs:"Universidad de Sevilla · Departamento de Biología Vegetal y Ecología",
  institutionEn:"University of Seville · Department of Plant Biology and Ecology",
  bioEs:"Carlos Rouco es Profesor Titular de Ecología en el Departamento de Biología Vegetal y Ecología de la Universidad de Sevilla. Anteriormente trabajó en la Universidad de Córdoba y ocupó puestos posdoctorales en la Estación Biológica de Doñana (EBD-CSIC) y en Manaaki Whenua–Landcare Research, en Nueva Zelanda. También ha realizado estancias de investigación en la Universidad de Oporto y en UiT The Arctic University of Norway.",
  bioEn:"Carlos Rouco is an Associate Professor of Ecology in the Department of Plant Biology and Ecology at the University of Seville, Spain. He previously worked at the University of Córdoba and held postdoctoral positions at the Doñana Biological Station (EBD-CSIC) and Manaaki Whenua–Landcare Research in New Zealand. He has also undertaken research stays at the University of Porto and UiT The Arctic University of Norway.",
  interestsEs:"Es ecólogo de fauna silvestre y su investigación se centra en la ecología, epidemiología, conservación y gestión de poblaciones de mamíferos, con especial atención a los lagomorfos. Combina seguimiento de campo a largo plazo, captura-marcaje-recaptura, ecología espacial, vigilancia epidemiológica, enfoques experimentales y modelización estadística avanzada. Lidera proyectos sobre salud y conservación de lagomorfos ibéricos. Presidió los comités Organizador y Científico del 8th World Lagomorph Conference y forma parte de las juntas de la World Lagomorph Society y la SECEM, coordina el Grupo de Mamíferos Terrestres del IUCN SSC Spain Species Specialist Group y es editor asociado de Mammalian Biology.",
  interestsEn:"He is a wildlife ecologist whose research focuses on the ecology, epidemiology, conservation and management of wild mammal populations, with particular emphasis on lagomorphs. His interdisciplinary work combines long-term field monitoring, capture–mark–recapture techniques, spatial ecology, epidemiological surveillance, experimental approaches and advanced statistical modelling. He leads projects focused on the health and conservation of Iberian lagomorphs. He chaired the Organising and Scientific Committees of the 8th World Lagomorph Conference and serves on the boards of the World Lagomorph Society and SECEM, coordinates the Terrestrial Mammals Group within the IUCN SSC Spain Species Specialist Group, and is an Associate Editor of Mammalian Biology.",
  email:"crouco@us.es",profile:"https://prisma.us.es/investigador/8693",orcid:"https://orcid.org/0000-0003-1026-3253",researcherId:"I-3088-2015"
 },
 "Sabrina Castro Scholten":{
  photo:"assets/team/sabrina-castro-scholten.jpg",
  institutionEs:"Universidad de Córdoba · Grupo de Investigación en Sanidad Animal y Zoonosis",
  institutionEn:"University of Córdoba · Animal Health and Zoonoses Research Group",
  bioEs:"Sabrina Castro Scholten es graduada en Veterinaria por la Universidad de Córdoba. Posteriormente cursó en la misma universidad el Máster en Salud Pública Veterinaria e inició sus estudios de doctorado en 2019. Disfrutó de un contrato predoctoral de Formación de Profesorado Universitario (FPU) en el Grupo de Investigación en Sanidad Animal y Zoonosis (GISAZ) y obtuvo el título de doctora en 2024.",
  bioEn:"Sabrina Castro Scholten graduated in Veterinary Medicine from the University of Córdoba. She later completed a Master's degree in Veterinary Public Health at the same university and began her doctoral studies in 2019. She held an FPU predoctoral fellowship in the Animal Health and Zoonoses Research Group (GISAZ) and obtained her PhD in 2024.",
  interestsEs:"Su actividad investigadora se ha centrado en la lucha frente a patógenos causantes de zoonosis y enfermedades emergentes de importancia para la salud pública y la sanidad animal. Su principal línea estudia las enfermedades infectocontagiosas de los lagomorfos desde una perspectiva One Health, incluyendo la circulación y distribución de patógenos, los factores de riesgo asociados a su transmisión y la implementación de programas de monitorización.",
  interestsEn:"Her research focuses on pathogens responsible for zoonoses and emerging diseases of importance to public and animal health. Her main line of research addresses infectious diseases in lagomorphs from a One Health perspective, including pathogen circulation and distribution, risk factors associated with transmission, and the implementation of monitoring programmes.",
  email:"v42cascs@uco.es",profile:"https://www.researchgate.net/profile/Sabrina-Castro-Scholten",orcid:"https://orcid.org/0000-0001-8761-5945",researcherId:"JSK-2324-2023"
 },
 "Débora Jiménez Martín":{
  photo:"assets/team/debora-jimenez-martin.jpg",
  institutionEs:"IREC · CSIC-UCLM-JCCM · ENZOEM",
  institutionEn:"IREC · CSIC-UCLM-JCCM · ENZOEM",
  bioEs:"Graduada en Veterinaria (2019) y Máster en Salud Pública Veterinaria (2020) por la Universidad de Córdoba. Entre 2020 y 2024 desarrolló su formación predoctoral mediante diferentes contratos competitivos y obtuvo el título de doctora en 2024 con una tesis sobre la epidemiología de enfermedades infectocontagiosas en rumiantes domésticos y silvestres desde una perspectiva One Health. Actualmente es investigadora posdoctoral Juan de la Cierva en el Instituto de Investigación en Recursos Cinegéticos y miembro asociado de ENZOEM. Ha publicado más de 40 artículos JCR y presentado más de 60 comunicaciones en congresos nacionales e internacionales.",
  bioEn:"She graduated in Veterinary Medicine (2019) and completed a Master's degree in Veterinary Public Health (2020) at the University of Córdoba. Between 2020 and 2024 she pursued her predoctoral training through several competitive contracts and obtained her PhD in 2024 with a thesis on the epidemiology of infectious diseases in domestic and wild ruminants from a One Health perspective. She is currently a Juan de la Cierva postdoctoral researcher at the Spanish Game and Wildlife Research Institute and an associate member of ENZOEM. She has published more than 40 JCR-indexed articles and presented over 60 contributions at national and international conferences.",
  interestsEs:"Su principal línea de investigación aborda las enfermedades infectocontagiosas en especies domésticas y silvestres desde una perspectiva One Health, así como los principales factores de riesgo que influyen en su mantenimiento y transmisión.",
  interestsEn:"Her main research line addresses infectious diseases in domestic and wild species from a One Health perspective, together with the major risk factors influencing their maintenance and transmission.",
  email:"debora.djm@gmail.com",profile:"https://www.researchgate.net/profile/Debora-Jimenez-Martin",orcid:"https://orcid.org/0000-0003-0600-5622",researcherId:"JSK-2309-2023"
 },
 "Saúl Jiménez Ruiz":{
  photo:"assets/team/saul-jimenez-ruiz.png",
  institutionEs:"Universidad de Córdoba · GISAZ / IREC · UCLM-CSIC-JCCM",
  institutionEn:"University of Córdoba · GISAZ / IREC · UCLM-CSIC-JCCM",
  bioEs:"Saúl Jiménez Ruiz es graduado en Veterinaria (2015) y Máster en Medicina, Sanidad y Mejora Animal (2016) por la Universidad de Córdoba, y Doctor en Ciencias Agrarias y Ambientales (2022) por la Universidad de Castilla-La Mancha. Su trayectoria se ha desarrollado en GISAZ de la UCO y en el grupo SABIO del IREC. Ha realizado estancias en centros nacionales e internacionales de referencia y ha colaborado como experto internacional con la Autoridad Europea de Seguridad Alimentaria (EFSA).",
  bioEn:"Saúl Jiménez Ruiz graduated in Veterinary Medicine (2015) and completed a Master's degree in Animal Medicine, Health and Improvement (2016) at the University of Córdoba. He obtained his PhD in Agricultural and Environmental Sciences (2022) from the University of Castilla-La Mancha. His research career has developed within GISAZ at the University of Córdoba and the SABIO group at IREC. He has undertaken research stays at leading national and international centres and collaborated as an international expert with the European Food Safety Authority (EFSA).",
  interestsEs:"Su investigación se centra en el estudio epidemiológico de patógenos compartidos entre fauna silvestre, animales domésticos, personas y medio ambiente desde una perspectiva One Health. Aborda las enfermedades infectocontagiosas de la fauna ibérica, la vigilancia epidemiológica, la monitorización poblacional y la identificación de factores de riesgo, contribuyendo al desarrollo de estrategias de prevención y control orientadas a la conservación de la biodiversidad y la salud global.",
  interestsEn:"His research focuses on the epidemiology of pathogens shared by wildlife, domestic animals, people and the environment from a One Health perspective. He studies infectious diseases in Iberian wildlife, epidemiological surveillance, population monitoring and risk factors, contributing to prevention and control strategies aimed at biodiversity conservation and global health.",
  email:"saul.jimenez@uco.es",profile:"https://www.researchgate.net/profile/Saul-Jimenez-Ruiz?ev=hdr_xprf",orcid:"https://orcid.org/0000-0003-2090-9353",researcherId:"AAG-7110-2019",scopus:"57189384879"
 },
 "Beatriz Vaz de Freitas Botelho Cardoso":{
  photo:"assets/team/beatriz-cardoso.png",
  institutionEs:"CIBIO · Universidad de Oporto / IREC · UCLM-CSIC-JCCM",
  institutionEn:"CIBIO · University of Porto / IREC · UCLM-CSIC-JCCM",
  bioEs:"Beatriz Cardoso es graduada en Veterinaria por la Universidad de Oporto desde 2019 y Máster en Investigación Básica y Aplicada en Recursos Cinegéticos por la Universidad de Castilla-La Mancha. En 2021 obtuvo una beca doctoral mixta de la FCT para estudiar la epidemiología de la mixomatosis en la liebre ibérica en CIBIO, de la Universidad de Oporto, y en el Instituto de Investigación en Recursos Cinegéticos (IREC). Finalizó su doctorado en 2025.",
  bioEn:"Beatriz Cardoso has held a degree in Veterinary Medicine from the University of Porto since 2019 and completed a Master's degree in Basic and Applied Research on Game Resources at the University of Castilla-La Mancha. In 2021, she was awarded an FCT mixed PhD scholarship to study the epidemiology of myxomatosis in Iberian hares at CIBIO, University of Porto, and the Spanish Game and Wildlife Research Institute (IREC). She completed her PhD in 2025.",
  interestsEs:"Su investigación se centra en la epidemiología de enfermedades de la fauna silvestre, especialmente los patógenos víricos que afectan a los lagomorfos. Estudia el rendimiento de las técnicas diagnósticas, la distribución espacial de las enfermedades y los factores que explican los patrones temporales y espaciales de presencia y propagación de patógenos.",
  interestsEn:"Her research focuses on the epidemiology of wildlife diseases, particularly viral pathogens affecting lagomorphs. She studies diagnostic performance, the spatial distribution of disease, and the factors underlying temporal and spatial patterns in pathogen presence and spread.",
  email:"beacardoso_14@hotmail.com",profile:"https://www.researchgate.net/profile/Beatriz-Cardoso-6",orcid:"https://orcid.org/0000-0001-8267-0953",scopus:"57216542206",externalLinks:[["Ciência ID","https://www.cienciavitae.pt/2214-5D8B-2977"]]
 },
 "Nuno Santos":{
  photo:"assets/team/nuno-santos.jpg",
  institutionEs:"CIBIO-InBIO · Universidad de Oporto",
  institutionEn:"CIBIO-InBIO · University of Porto",
  bioEs:"Nuno Santos se licenció en Veterinaria por la Universidad Técnica de Lisboa en 1997, obtuvo un Máster en Salud Pública Veterinaria en 2007 y se doctoró en Ciencias de la Salud por el Instituto de Investigación en Ciencias de la Vida y la Salud de la Universidad de Minho en 2016. Es especialista europeo en salud de poblaciones silvestres por el European College of Zoological Medicine desde 2014 y actualmente es investigador auxiliar en CIBIO-InBIO.",
  bioEn:"Nuno Santos graduated in Veterinary Medicine from the Technical University of Lisbon in 1997, completed an MSc in Veterinary Public Health in 2007, and obtained a PhD in Health Sciences from the Life and Health Sciences Research Institute at the University of Minho in 2016. He has been a European specialist in wildlife population health with the European College of Zoological Medicine since 2014 and is currently an auxiliary researcher at CIBIO-InBIO.",
  interestsEs:"Su investigación se centra en la epidemiología de las enfermedades infecciosas y parasitarias de la fauna silvestre. Está especialmente interesado en la ecología de enfermedades en sistemas multihospedador y multipatógeno en la interfaz entre fauna silvestre y animales domésticos, así como en enfermedades relevantes para la conservación, mediante métodos longitudinales y no invasivos.",
  interestsEn:"His research focuses on the epidemiology of infectious and parasitic diseases in wildlife populations. He is particularly interested in disease ecology in multi-host and multi-pathogen systems at the domestic–wildlife interface and in diseases of conservation relevance, using longitudinal and non-invasive methods.",
  email:"nuno.santos@cibio.up.pt",profile:"https://www.cibio.up.pt/en/people/details/nuno-santos/",orcid:"https://orcid.org/0000-0002-1676-107X",researcherId:"D-6742-2016",scopus:"36944684700",externalLinks:[["Ciência ID","https://www.cienciavitae.pt/3A1E-65E9-9490"]]
 },
 "Maria Roser Velarde Nieto":{
  photo:"assets/team/maria-roser-velarde.png",
  institutionEs:"Universitat Autònoma de Barcelona · SEFaS",
  institutionEn:"Autonomous University of Barcelona · SEFaS",
  bioEs:"Maria Roser Velarde Nieto es licenciada y doctora en Veterinaria por la Universitat Autònoma de Barcelona. Completó formación posdoctoral en el National Wildlife Health Center del USGS, en Estados Unidos, y un programa DVSc en Patología Veterinaria en la University of Guelph, Canadá. Tras trabajar como patóloga veterinaria, se incorporó en 2006 al Servei d’Ecopatologia de Fauna Salvatge (SEFaS) de la UAB. Actualmente es técnica superior de apoyo a la investigación y responsable del diagnóstico anatomopatológico de los programas de vigilancia sanitaria de fauna silvestre y servicios técnicos del SEFaS.",
  bioEn:"Maria Roser Velarde Nieto holds a degree and a PhD in Veterinary Medicine from the Autonomous University of Barcelona. She completed postdoctoral training at the USGS National Wildlife Health Center in the United States and a DVSc programme in Veterinary Pathology at the University of Guelph, Canada. After working as a veterinary pathologist, she joined the Wildlife Ecopathology Service (SEFaS) at UAB in 2006. She is currently a Senior Research Support Technician responsible for anatomopathological diagnosis within SEFaS wildlife health surveillance programmes and technical services.",
  interestsEs:"Su actividad se centra en la patología y vigilancia sanitaria de fauna silvestre, especialmente en la investigación de enfermedades y mortalidad mediante necropsia, histopatología y técnicas diagnósticas complementarias. Sus áreas de interés incluyen las enfermedades infecciosas en la interfaz fauna–ganadería–personas desde una perspectiva One Health, la patología forense, las intoxicaciones y las causas traumáticas o antropogénicas de mortalidad.",
  interestsEn:"Her work focuses on wildlife pathology and health surveillance, particularly the investigation of disease and mortality through necropsy, histopathology and complementary diagnostic techniques. Her interests include infectious diseases at the wildlife–livestock–human interface from a One Health perspective, forensic pathology, poisoning and traumatic or anthropogenic causes of mortality.",
  email:"roser.velarde@uab.cat",orcid:"https://orcid.org/0000-0003-3332-6405",researcherId:"M-1614-2014"
 },
 "Fernando Esperón Fajardo":{
  photo:"assets/team/fernando-esperon-fajardo.jpg",
  institutionEs:"Universidad Europea de Madrid · Departamento de Medicina Veterinaria · Grupo de Investigación en Biociencias y Salud Global",
  institutionEn:"Universidad Europea de Madrid · Department of Veterinary Medicine · Biosciences and Global Health Research Group",
  bioEs:"Fernando Esperón Fajardo es doctor por la Universidad Complutense de Madrid desde 2005, donde realizó una tesis sobre contaminantes ambientales en odontocetos de las Islas Canarias y sus implicaciones sanitarias. Entre 2003 y abril de 2021 fue responsable de la Unidad de Diagnóstico de Enfermedades de la Fauna Silvestre del INIA-CISA y, durante los últimos tres años de esta etapa, coordinó los laboratorios del área de nivel de contención biológica 2. Posteriormente participó en la implantación del Grado en Veterinaria de la Universidad Europea de Madrid. Actualmente es Profesor Titular, coordina los laboratorios de Apoyo al Diagnóstico e Investigación del Hospital Clínico Veterinario y lidera el Grupo de Investigación en Biociencias y Salud Global. Es autor de más de 70 artículos científicos y de más de 100 comunicaciones a congresos.",
  bioEn:"Fernando Esperón Fajardo obtained his PhD from the Complutense University of Madrid in 2005 with a thesis on environmental contaminants in cetaceans from the Canary Islands and their health implications. From 2003 to April 2021, he headed the Wildlife Disease Diagnosis Unit at INIA-CISA and, during the final three years of that period, coordinated its biosafety level 2 laboratories. He later joined the team responsible for establishing the Veterinary Medicine degree at Universidad Europea de Madrid. He is currently an Associate Professor, coordinates the Diagnostic Support and Research Laboratories at the Veterinary Teaching Hospital, and leads the Biosciences and Global Health Research Group. He has authored more than 70 scientific articles and over 100 conference contributions.",
  interestsEs:"Su investigación se centra en el desarrollo y aplicación de métodos diagnósticos para estudiar el estado sanitario en la interfaz entre fauna silvestre y animales domésticos. Sus líneas de trabajo incluyen las enfermedades zoonósicas, los patógenos compartidos entre fauna y ganado, las resistencias a los antimicrobianos, las causas de morbilidad y mortalidad en fauna silvestre, los factores de riesgo sanitario y su relación con la conservación, así como el diagnóstico molecular, la epidemiología molecular y la taxonomía microbiana.",
  interestsEn:"His research focuses on the development and application of diagnostic methods to assess health at the wildlife–domestic animal interface. His work covers zoonotic diseases, pathogens shared by wildlife and livestock, antimicrobial resistance, causes of morbidity and mortality in wildlife, health risk factors and their links to conservation, as well as molecular diagnostics, molecular epidemiology and microbial taxonomy.",
  email:"fernando.esperon@universidadeuropea.es",profile:"https://portalcientifico.universidadeuropea.com/investigadores/156889/detalle",orcid:"https://orcid.org/0000-0002-8810-5071",researcherId:"T-7538-2017",externalLinks:[["SciProfiles","https://sciprofiles.com/profile/3847727"],["Scopus","https://dialnet.unirioja.es/metricas/investigadores/4528866?openlinkinst=SCP"]]
 },
 "Jonás Carmona Pírez":{
  photo:"assets/team/jonas-carmona-pirez.jpg",
  institutionEs:"Servicio Andaluz de Salud · Instituto de Biomedicina de Sevilla",
  institutionEn:"Andalusian Health Service · Institute of Biomedicine of Seville",
  bioEs:"Jonás Carmona Pírez es licenciado en Medicina por la Universidad de Sevilla. Realizó la residencia en Medicina Familiar y Comunitaria en el Instituto Catalán de la Salud y obtuvo en 2021 el doctorado en Medicina e Investigación Traslacional por la Universidad de Barcelona, con mención internacional y calificación cum laude. Completó un posgrado en Estadística en Ciencias de la Salud en la Universidad Autónoma de Barcelona y un máster oficial en Bioinformática y Bioestadística en la Universidad de Barcelona. Ha realizado estancias en el New England Complex Systems Institute y en Harvard Medical School. Fue beneficiario de un contrato Río Hortega, trabajó como asesor técnico e investigador del Servicio Andaluz de Salud y en 2026 obtuvo un contrato Juan Rodés en el Instituto de Biomedicina de Sevilla.",
  bioEn:"Jonás Carmona Pírez holds a degree in Medicine from the University of Seville. He completed his residency in Family and Community Medicine at the Catalan Health Institute and obtained his PhD in Medicine and Translational Research from the University of Barcelona in 2021, with an International Doctorate mention and cum laude distinction. He also completed postgraduate training in health-science statistics and a Master's degree in Bioinformatics and Biostatistics. He has undertaken research stays at the New England Complex Systems Institute and Harvard Medical School. He received a Río Hortega research fellowship, worked as a technical adviser and researcher at the Andalusian Health Service, and was awarded a Juan Rodés research contract in 2026 at the Institute of Biomedicine of Seville.",
  interestsEs:"Su investigación integra epidemiología clínica, salud pública, biomedicina, enfermedades zoonósicas y emergentes, y ciencia de datos aplicada a la atención primaria y las enfermedades crónicas. Su principal línea utiliza análisis de redes complejas, técnicas de agrupamiento y aprendizaje automático para estudiar multimorbilidad, trayectorias de enfermedad, infecciones emergentes y resultados de salud en grandes bases de datos poblacionales. También trabaja en la integración de datos clínicos, sociales, ambientales, multiómicos y One Health para la estratificación de pacientes y la salud de precisión.",
  interestsEn:"His research integrates clinical epidemiology, public health, biomedicine, zoonotic and emerging diseases, and data science applied to primary care and chronic conditions. His main line of research uses complex network analysis, clustering and machine learning to study multimorbidity, disease trajectories, infectious and emerging diseases, and health outcomes in large real-world population databases. He also explores the integration of clinical, social, environmental, multi-omics and One Health data for patient stratification and precision health.",
  email:"jonas.carmona.sspa@juntadeandalucia.es",orcid:"https://orcid.org/0000-0002-6268-8803",researcherId:"AAE-8594-2022",externalLinks:[["Email IBiS","mailto:jcarmona-ibis@us.es"]]
 },
 "Patricia Cavadini":{
  photo:"assets/team/patricia-cavadini.png",
  institutionEs:"IZSLER · Centro Nacional de Referencia para Enfermedades Víricas de los Lagomorfos",
  institutionEn:"IZSLER · Italian National Reference Centre for Viral Diseases of Lagomorphs",
  bioEs:"Patricia Cavadini es licenciada en Biología por la Universidad de Milán desde 1992 y completó en 1996 una especialización de posgrado en Genética Aplicada. Desde abril de 2022 dirige el Laboratorio de Encefalopatías Espongiformes Transmisibles y Biotecnología. Desde 2025 es responsable del Centro Nacional de Referencia italiano para las enfermedades víricas de los lagomorfos. Asimismo, es responsable del Laboratorio de Referencia de la WOAH para la enfermedad hemorrágica del conejo desde octubre de 2023 y para la mixomatosis desde marzo de 2026.",
  bioEn:"Patricia Cavadini obtained her degree in Biology from the University of Milan in 1992 and completed postgraduate specialisation in Applied Genetics in 1996. Since April 2022, she has headed the Laboratory of Transmissible Spongiform Encephalopathies and Biotechnology. Since 2025, she has been responsible for the Italian National Reference Centre for Viral Diseases of Lagomorphs. She has also led the WOAH Reference Laboratory for rabbit haemorrhagic disease since October 2023 and for myxomatosis since March 2026.",
  interestsEs:"Su investigación sobre lagovirus y virus de la mixomatosis aborda la epidemiología, la caracterización molecular, los métodos diagnósticos, la evolución vírica y la vigilancia de variantes emergentes o recién introducidas en poblaciones de lagomorfos silvestres y domésticos. También desarrolla actividades diagnósticas para programas nacionales e internacionales de vigilancia, estudios serológicos de circulación vírica y trabajos de campo sobre la dinámica de infección y la respuesta inmunitaria en animales infectados de forma natural.",
  interestsEn:"Her research on lagoviruses and myxoma virus addresses viral epidemiology, molecular characterisation, diagnostic methods, viral evolution, and the monitoring of emerging or newly introduced variants in wild and domestic lagomorph populations. It also includes diagnostic work supporting national and international surveillance programmes, serological surveillance of viral circulation, and field studies on infection dynamics and immune responses in naturally infected animals.",
  email:"patrizia.cavadini@izsler.it",orcid:"https://orcid.org/0000-0002-1774-5290",researcherId:"FXZ-8507-2022"
 },
 "Elena Urbano Sojo":{
  photo:"assets/team/elena-urbano-sojo.png",
  institutionEs:"Universidad de Córdoba · Grupo de Investigación en Sanidad Animal y Zoonosis",
  institutionEn:"University of Córdoba · Animal Health and Zoonoses Research Group",
  bioEs:"Elena Urbano Sojo es licenciada en Veterinaria por la Universidad de Córdoba. Ha trabajado en proyectos de la Junta de Andalucía gestionando fondos europeos FEADER, realizando pruebas diagnósticas oficiales y participando en Programas Nacionales de Erradicación de Enfermedades Animales bajo un enfoque One Health. También ha realizado auditorías oficiales de bienestar animal y ha desarrollado tareas de vigilancia y diagnóstico frente a zoonosis y enfermedades emergentes de interés para la salud pública y la sanidad animal.",
  bioEn:"Elena Urbano Sojo graduated in Veterinary Medicine from the University of Córdoba. She has worked on projects of the Regional Government of Andalusia involving the management of EAFRD European funds, official diagnostic testing, and National Animal Disease Eradication Programmes under a One Health approach. She has also conducted official animal-welfare audits and undertaken surveillance and diagnostic work on zoonoses and emerging diseases of importance to public and animal health.",
  interestsEs:"En los últimos años, su investigación se ha centrado en la sostenibilidad y la salud ambiental mediante soluciones analíticas y técnicas de caracterización fisicoquímica de materiales de origen animal. Actualmente trabaja en el análisis y la detección de enfermedades infectocontagiosas como integrante del Grupo de Investigación en Sanidad Animal y Zoonosis (GISAZ).",
  interestsEn:"In recent years, her research has focused on sustainability and environmental health through analytical solutions and physicochemical characterisation techniques for materials of animal origin. She currently works on the analysis and detection of infectious diseases as a member of the Animal Health and Zoonoses Research Group (GISAZ).",
  email:"v72ursoe@uco.es",profile:"https://www.researchgate.net/profile/Elena-Urbano-Sojo",orcid:"https://orcid.org/0009-0004-2871-7684",researcherId:"REZ-8807-2026"
 },
 "Moisés Gonzálvez Juan":{
  photo:"assets/team/moises-gonzalvez.jpg",
  institutionEs:"Instituto de Investigación en Recursos Cinegéticos (IREC) · UCLM-CSIC-JCCM",
  institutionEn:"Institute for Game and Wildlife Research (IREC) · UCLM-CSIC-JCCM",
  bioEs:"Moisés Gonzálvez es graduado en Veterinaria por la Universidad de Murcia. Posteriormente cursó un Máster en Gestión de Fauna Silvestre y obtuvo el doctorado en Ciencias Veterinarias por la misma universidad. Su investigación doctoral se centró en el estudio ecoepidemiológico de patógenos en carnívoros silvestres de ecosistemas mediterráneos. Actualmente es investigador posdoctoral en el Instituto de Investigación en Recursos Cinegéticos (IREC).",
  bioEn:"Moisés Gonzálvez holds a degree in Veterinary Medicine from the University of Murcia, Spain. He subsequently completed a Master’s degree in Wildlife Management and obtained a PhD in Veterinary Sciences from the same university. His doctoral research focused on the eco-epidemiological study of pathogens in wild carnivores from Mediterranean ecosystems. He is currently a postdoctoral researcher at the Institute for Game and Wildlife Research (IREC), Spain.",
  interestsEs:"Su línea de investigación se centra en los patógenos zoonósicos y emergentes en la interfaz entre fauna silvestre, animales domésticos y seres humanos, con especial interés en las enfermedades transmitidas por vectores desde una perspectiva One Health.",
  interestsEn:"His research focuses on zoonotic and emerging pathogens at the wildlife–domestic animal–human interface, with particular interest in vector-borne diseases from a One Health perspective.",
  email:"moises.gonzalvez@uclm.es",profile:"https://www.irec.es/personal/detalle/gonzalvez-juan-moises/",orcid:"https://orcid.org/0000-0003-0423-3189",researcherId:"AFU-0670-2022"
 },
 "Samuel Castán Alloza":{
  photo:"assets/team/samuel-castan-alloza.png",
  institutionEs:"Universidad de Córdoba · Grupo de Investigación en Sanidad Animal y Zoonosis (GISAZ)",
  institutionEn:"University of Córdoba · Animal Health and Zoonoses Research Group (GISAZ)",
  bioEs:"Samuel Castán Alloza es graduado en Veterinaria por la Universidad de Zaragoza. Posteriormente cursó el Máster en Gestión de la Fauna Silvestre en la Universidad de Murcia y, en 2025, inició sus estudios de doctorado mediante un contrato predoctoral de Formación de Personal Investigador (FPI) en el Grupo de Investigación en Sanidad Animal y Zoonosis (GISAZ) de la Universidad de Córdoba.",
  bioEn:"Samuel Castán Alloza holds a degree in Veterinary Medicine from the University of Zaragoza, Spain. He subsequently completed a Master’s degree in Wildlife Management at the University of Murcia. In 2025, he began his doctoral studies through an FPI predoctoral research fellowship in the Animal Health and Zoonoses Research Group (GISAZ) at the University of Córdoba, Spain.",
  interestsEs:"Su actividad investigadora se centra en patógenos zoonósicos y enfermedades emergentes de importancia para la salud pública y la sanidad animal. Su tesis estudia la fiebre Q en lagomorfos desde una perspectiva One Health, evaluando la circulación y distribución del patógeno en las especies silvestres, de producción y domésticas de la Península Ibérica. También investiga los factores de riesgo asociados a su transmisión con el fin de contribuir al diseño de programas de monitorización.",
  interestsEn:"His research focuses on zoonotic pathogens and emerging diseases of importance to public and animal health. His doctoral thesis investigates Q fever in lagomorphs from a One Health perspective, assessing the circulation and distribution of the pathogen among wild, farmed and domestic species across the Iberian Peninsula. He also studies risk factors associated with transmission to support the development of monitoring programmes.",
  email:"samuelcastan@live.com",profile:"https://www.researchgate.net/profile/Samuel-Castan-Alloza",orcid:"https://orcid.org/0009-0001-3805-1343",researcherId:"RFA-6230-2026"
 }
};

const profileDialog=document.querySelector("#profile-dialog");
const initials=name=>name.split(/\s+/).slice(0,2).map(word=>word[0]).join("").toUpperCase();
const currentLang=()=>document.documentElement.lang||"es";

function openProfile(name,role,fallbackBio=""){
 const lang=currentLang(),profile=PROFILES[name];
 const avatar=document.querySelector("#profile-avatar");
 avatar.innerHTML=profile?.photo?`<img src="${profile.photo}" alt="${name}">`:initials(name);
 avatar.classList.toggle("has-photo",Boolean(profile?.photo));
 document.querySelector("#profile-name").textContent=name;
 document.querySelector("#profile-role").textContent=role;
 document.querySelector("#profile-institution").textContent=profile?.[lang==="es"?"institutionEs":"institutionEn"]||"";
 document.querySelector("#profile-bio").textContent=profile?.[lang==="es"?"bioEs":"bioEn"]||fallbackBio;
 document.querySelector("#profile-interests").textContent=profile?.[lang==="es"?"interestsEs":"interestsEn"]||"";
 const links=document.querySelector("#profile-links");
 links.innerHTML=profile?`${profile.email?`<a href="mailto:${profile.email}">Email</a>`:""}${profile.profile?`<a href="${profile.profile}" target="_blank" rel="noopener">Profile ↗</a>`:""}${profile.orcid?`<a href="${profile.orcid}" target="_blank" rel="noopener">ORCID ↗</a>`:""}${profile.researcherId?`<span>Researcher ID · ${profile.researcherId}</span>`:""}${profile.scopus?`<span>Scopus ID · ${profile.scopus}</span>`:""}${(profile.externalLinks||[]).map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}`:"";
 document.querySelector("#profile-pending").classList.toggle("hidden",Boolean(profile));
 profileDialog.showModal();
}

function makeProfileInteractive(element,handler){
 element.tabIndex=0;element.setAttribute("role","button");
 element.addEventListener("click",event=>{if(event.target.closest("a"))return;handler()});
 element.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();handler()}});
}

function renderMembers(targetId,members,role,showRole=true,showInstitution=true){
 const target=document.querySelector(targetId);if(!target)return;
 const lang=currentLang();target.innerHTML="";
 members.forEach(name=>{
  const profile=PROFILES[name];
  const element=document.createElement("article");element.className="team-member";
  element.innerHTML=`${profile?.photo?`<img class="team-thumb" src="${profile.photo}" alt="${name}">`:`<span class="team-initials">${initials(name)}</span>`}<div><strong>${name}</strong>${showRole?`<span>${role}</span>`:""}${profile&&showInstitution?`<small>${profile[lang==="es"?"institutionEs":"institutionEn"]}</small>`:""}</div>`;
  makeProfileInteractive(element,()=>openProfile(name,role,lang==="es"?"La biografía, los intereses de investigación y los enlaces profesionales se incorporarán al recibir la ficha personal.":"Biography, research interests and professional links will be added when the personal profile is received."));
  target.append(element);
 });
}

function renderTeam(){
 const lang=currentLang();
 renderMembers("#research-team-list",RESEARCH_TEAM,lang==="es"?"Investigador":"Researcher",true,true);
 renderMembers("#work-team-list",WORK_TEAM,lang==="es"?"Equipo de trabajo":"Work team",false,false);
}

document.querySelectorAll(".leadership .profile-trigger").forEach(element=>makeProfileInteractive(element,()=>{
 const lang=currentLang();openProfile(element.dataset.profileName,element.dataset[lang==="es"?"roleEs":"roleEn"],element.dataset[lang==="es"?"bioEs":"bioEn"]);
}));
document.querySelector(".profile-close").addEventListener("click",()=>profileDialog.close());
profileDialog.addEventListener("click",event=>{if(event.target===profileDialog)profileDialog.close()});
document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",renderTeam));
renderTeam();
