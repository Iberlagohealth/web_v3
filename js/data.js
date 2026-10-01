// ================================================================
// CONTENIDO EDITABLE DE LA WEB
// Añade las entradas nuevas al PRINCIPIO de cada lista.
// Conserva las comas y las comillas tal como aparecen en los ejemplos.
// Consulta EDITAR_WEB.md para instrucciones paso a paso.
// ================================================================

const PUBLICATIONS = [
 {year:2026,title:"High Nasal Carriage of MRSA-mecC in Wild Rabbits in the Iberian Peninsula: a Wildlife Reservoir?",journal:"Microbial Ecology",doi:"10.1007/s00248-026-02713-6",authors:"González-Azcona C. et al."},
 {year:2026,title:"Temporal Dynamics and Turnover of Rabbit Hemorrhagic Disease Virus 2 (RHDV2/GI.2) in Wild Lagomorphs from Northeastern Spain",journal:"Microbial Ecology 89:89",doi:"10.1007/s00248-026-02746-x",authors:"Estruch J. et al."},
 {year:2026,title:"Seroprevalence responses to RHDV variants in wild European rabbits: evidence of resilience in the Iberian Peninsula",journal:"Mammalian Biology 106:1–8",doi:"10.1007/s42991-025-00532-9",authors:"Aguayo-Adán J.A. et al."},
 {year:2026,title:"Enrichment and Reduction of Microsatellite Regions in the Myxoma Virus Genome Following Species Jump to the Iberian Hare",journal:"Transboundary and Emerging Diseases 2026:3847131",doi:"10.1155/tbed/3847131",authors:"Menéndez-Manjón A. et al."},
 {year:2025,title:"Toxoplasmosis in the European brown hare: pathology, strain genotyping and population exposure within the Iberian distribution range",journal:"European Journal of Wildlife Research 71:90",doi:"10.1007/s10344-025-01966-9",authors:"Estruch J. et al."},
 {year:2025,title:"Changes in gut microbiota signatures associated with the epidemiological dynamics of wild European rabbits facing haemorrhagic disease outbreaks",journal:"Veterinary Microbiology 310:110688",doi:"10.1016/j.vetmic.2025.110688",authors:"Rouco C. et al."},
 {year:2025,title:"Estimating the diagnostic performance of serological assays for emerging pathogens using a Bayesian approach: Myxoma virus in the Iberian hare",journal:"Preventive Veterinary Medicine 239:106488",doi:"10.1016/j.prevetmed.2025.106488",authors:"Cardoso B. et al."},
 {year:2025,title:"Exposure to West Nile virus in wild lagomorphs in Spanish Mediterranean ecosystems",journal:"Zoonoses and Public Health 72:207–214",doi:"10.1111/zph.13200",authors:"Castro-Scholten S. et al."},
 {year:2025,title:"Culturomics profiling of nasal cavities of European wild rabbits on the Iberian Peninsula: Antimicrobial resistance and detection of microorganisms of public health interest",journal:"Pathogens 14:317",doi:"10.3390/pathogens14040317",authors:"González-Azcona C. et al."},
 {year:2025,title:"Epidemiological surveillance of myxoma virus in European hares in the Iberian Peninsula: First evidence of infection by the emerging ha-MYXV",journal:"Veterinary Microbiology 302:110405",doi:"10.1016/j.vetmic.2025.110405",authors:"Cardoso B. et al."},
 {year:2024,title:"<em>Francisella tularensis</em> in Wild Lagomorphs in Southern Spain’s Mediterranean Ecosystems",journal:"Animals 14:3376",doi:"10.3390/ani14233376",authors:"Castro-Scholten S. et al."},
 {year:2024,title:"Absence of Crimean-Congo hemorrhagic fever virus in wild lagomorphs and their ticks in Spanish Mediterranean ecosystems",journal:"Veterinary Microbiology 298:110217",doi:"10.1016/j.vetmic.2024.110217",authors:"Castro-Scholten S. et al."}
];

const ACTIVITIES = [
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"<em>Coxiella burnetii</em> exposure in wild lagomorphs in the Iberian Peninsula"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Demographic resilience of European brown hare populations at their southern edge distribution despite habitat heterogeneity and lagovirus outbreaks"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Serological study of <em>Encephalitozoon cuniculi</em> in domestic and wild lagomorphs in the Iberian Peninsula"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Hepatitis E Virus in Farmed Rabbits in the Iberian Peninsula: Seroepidemiology and Risk Factors"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Long-term spatial monitoring of <em>Leishmania infantum</em> in European wild rabbits"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Epidemiological study of zoonotic diseases in wild lagomorphs from a One Health perspective"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Antigenic Relationships Among RHDV, RHDV2 and EBHSV in Iberian Hares"},
 {year:2026,date:"18–19 Jun",type:"oral",place:"Jaén, España",event:"VI Congreso Andaluz de Salud Pública Veterinaria",title:"Estudio seroepidemiológico de <em>Sarcoptes scabiei</em> en lagomorfos de la Península Ibérica"},
 {year:2026,date:"7–9 May",type:"oral",place:"Valencia, España",event:"IV Congreso Internacional de Sanidad y Bienestar Animal",title:"Estudio seroepidemiológico de <em>Encephalitozoon cuniculi</em> en lagomorfos de la Península Ibérica"},
 {year:2026,date:"17–21 Apr",type:"oral",place:"Múnich, Alemania",event:"36th ESCMID Congress",title:"Prevalence and characterization of non-<em>S. aureus</em> staphylococcal microbiota from European wild rabbits"},
 {year:2026,date:"30 Sep",type:"invited",place:"Marchamalo, España",event:"Jornada sobre la liebre ibérica: Presente y Futuro",title:"Mixomatosis en liebres ibéricas: siete años de investigación y vigilancia"},
 {year:2026,date:"26 Feb",type:"invited",place:"Córdoba, España",event:"Seminarios CIBERINFEC",title:"Vigilancia epidemiológica en fauna silvestre: proyecto Iber-LagoHealth"},
 {year:2026,date:"21 Mar",type:"invited",place:"Cabra, España",event:"Jornada de formación",title:"Principales enfermedades que afectan a los lagomorfos"},
 {year:2025,date:"5–8 Dec",type:"oral",place:"Évora, Portugal",event:"XVII Congreso Internacional SECEM",title:"Iber-LagoHealth: Exploring the role of lagomorphs in the epidemiology of transmissible pathogens"},
 {year:2025,date:"2–5 Sep",type:"poster",place:"Sevilla, España",event:"International Congress of the Spanish Society of Ethology and Evolutionary Ecology",title:"Serological and demographic divergence between <em>O. c. algirus</em> and <em>O. c. cuniculus</em>"},
 {year:2025,date:"22–24 May",type:"oral",place:"Málaga, España",event:"XXVIII Congreso SEEIMC",title:"Caracterización fenotípica y genotípica de <em>Staphylococcus</em> y <em>Mammaliicoccus</em> en conejos silvestres"},
 {year:2025,date:"11–15 Apr",type:"poster",place:"Viena, Austria",event:"35th ESCMID Congress",title:"High prevalence of mecC-carrying <em>S. aureus</em> isolates in nasal microbiota of wild rabbits"},
 {year:2025,date:"1–3 Apr",type:"invited",place:"Faro, Portugal",event:"European Rabbit International Workshop",title:"LagoHealth Project: the European wild rabbit and zoonotic pathogens in Southern Spain"},
 {year:2025,date:"1–3 Apr",type:"invited",place:"Faro, Portugal",event:"European Rabbit International Workshop",title:"Advances and challenges in Myxomatosis and Rabbit Haemorrhagic Disease"},
 {year:2025,date:"5–7 Feb",type:"poster",place:"Córdoba, España",event:"I Congreso Internacional ENZOEM",title:"Detection of microorganisms of public health interest from the nasal microbiota of wild rabbits"},
 {year:2024,date:"14–16 Nov",type:"oral",place:"Madrid, España",event:"III Congreso Internacional de Sanidad y Bienestar Animal",title:"Exposición al virus West Nile en lagomorfos silvestres del sur de España"}
];

// Noticias bilingües. El campo link es opcional: usa "" si no hay enlace.
const NEWS = [
 {date:"22–26 junio 2026",dateEn:"22–26 June 2026",titleEs:"Iber-LagoHealth en la 8th World Lagomorph Conference",titleEn:"Iber-LagoHealth at the 8th World Lagomorph Conference",textEs:"El equipo presentó distintos resultados del proyecto sobre patógenos, vigilancia epidemiológica y salud de los lagomorfos ibéricos.",textEn:"The team presented project results on pathogens, epidemiological surveillance and the health of Iberian lagomorphs.",link:"",linkTextEs:"",linkTextEn:""},
 {date:"2025",dateEn:"2025",titleEs:"Publicado el estudio sobre microbiota y susceptibilidad a RHDV2",titleEn:"Study on microbiota and susceptibility to RHDV2 published",textEs:"El trabajo analiza los cambios en la microbiota intestinal asociados a la dinámica epidemiológica de la enfermedad hemorrágica del conejo.",textEn:"The study examines changes in gut microbiota associated with the epidemiological dynamics of rabbit haemorrhagic disease.",link:"https://doi.org/10.1016/j.vetmic.2025.110688",linkTextEs:"Leer el artículo",linkTextEn:"Read the article"}
];

// Vídeos de objetivos. Para activar uno, sube el MP4 a assets/videos y escribe
// su ruta en src. poster es opcional y puede quedarse vacío.
const OBJECTIVE_VIDEOS = [
 {objective:1,src:"",poster:""},
 {objective:2,src:"",poster:""},
 {objective:3,src:"",poster:""},
 {objective:4,src:"",poster:""}
];
