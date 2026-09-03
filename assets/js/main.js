/*==================== I18N TRANSLATIONS ====================*/
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_qualification: "Qualification",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_hobbies: "Hobbies",
        nav_crypto: "Cryptography",
        nav_contact: "Contact",

        home_title: "Hi, I'm Jaime Gabriel",
        home_subtitle: "Computer Systems Engineer",
        home_description: "Driven by discipline and integrity. Specialized in full-stack web development, database architecture, convolutional neural networks, and IoT automation.",
        home_btn: "Contact Me",
        home_scroll: "Scroll down",

        about_title: "About Me",
        about_subtitle: "My introduction",
        about_description: "Aspiring Computer Systems Engineer from ESCOM with proven industry experience leading web platforms and managing complex database architectures. I combine academic rigor in Artificial Intelligence with hands-on development to transform technological theory into high-impact, tangible software solutions.",
        about_exp: "Years <br> experience",
        about_projects: "Completed <br> projects",
        about_companies: "Companies <br> worked",
        about_cv_btn: "Download CV",
        about_key_btn: "Download Public Key",

        skills_title: "Skills",
        skills_subtitle: "My technical level",
        skills_cat_1: "Languages & Web Development",
        skills_sub_1: "Frontend & Backend Stack",
        skills_cat_2: "AI & Database Architecture",
        skills_sub_2: "Data Science & Storage",
        skills_cat_3: "Hardware, IoT & Cloud",
        skills_sub_3: "Infrastructure & Automation",

        qual_title: "Qualification",
        qual_subtitle: "My personal journey",
        qual_tab_edu: "Education",
        qual_tab_work: "Work Experience",
        qual_edu_1_title: "Computer Systems Engineering",
        qual_edu_1_sub: "ESCOM — IPN",
        qual_edu_2_title: "Programming Technician",
        qual_edu_2_sub: "CECyT No. 9 \"Juan de Dios Bátiz\" — IPN",
        qual_edu_3_title: "Secondary Education",
        qual_edu_3_sub: "Secundaria Diurna No. 141 \"Guillermo González Camarena\"",
        qual_work_1_title: "Web Development Lead",
        qual_work_1_sub: "CONSECAL S.A. de C.V.",
        qual_work_1_date: "Mar 2024 - May 2026",
        qual_work_2_title: "Database Administrator",
        qual_work_2_sub: "Poli Asesor",
        qual_work_2_date: "Jan 2021 - Jun 2022",

        services_title: "Services",
        services_subtitle: "What I offer",
        services_view_more: "View More",
        services_card_1: "Full-Stack Web <br> Development",
        services_m1_title: "Full-Stack Web <br> Development",
        services_m1_i1: "I design and implement custom corporate websites and web apps.",
        services_m1_i2: "Development of internal query systems that streamline corporate processes.",
        services_m1_i3: "Frontend and backend integration using PHP, Node.js, JavaScript, HTML5/CSS3.",
        services_m1_i4: "SEO optimization and performance improvements (+45% traffic growth).",

        services_card_2: "Database & Cloud <br> Architecture",
        services_m2_title: "Database & Cloud <br> Architecture",
        services_m2_i1: "Advanced relational database architecture (MySQL, PostgreSQL, SQL Server).",
        services_m2_i2: "Performance tuning, indexing, and high-concurrency optimization.",
        services_m2_i3: "Secure data management, backup strategies, and access control.",
        services_m2_i4: "Cloud deployment and service integration with Microsoft Azure and AWS.",

        services_card_3: "AI & IoT <br> Systems",
        services_m3_title: "AI & IoT <br> Systems",
        services_m3_i1: "Design of Convolutional Neural Networks (CNN) for image processing.",
        services_m3_i2: "Predictive modeling using machine learning decision trees (ID3, CART).",
        services_m3_i3: "Hardware-software integration using Raspberry Pi and GPIO relay automation.",
        services_m3_i4: "IoT embedded programming with Python and Bash scripting.",

        portfolio_title: "Portfolio",
        portfolio_subtitle: "Most recent work",
        portfolio_btn_code: "View Code",
        portfolio_btn_proj: "View Project",
        portfolio_p1_title: "SysLocker: Smart Lockers System",
        portfolio_p1_desc: "Automated smart locker hardware and software architecture using Raspberry Pi for real-time control of relays via GPIO pins and IoT integration.",
        portfolio_p2_title: "Morbus Vita: Predictive Health System",
        portfolio_p2_desc: "Interactive web application backend that calculates the probability of suffering from chronic diseases using ID3 decision tree classification algorithms.",
        portfolio_p3_title: "CONSECAL Corporate Web & Results Portal",
        portfolio_p3_desc: "Complete redesign and implementation of company website and internal query portal, resulting in a 45% increase in traffic and 20% reduction in customer service response time.",

        hobbies_title: "Hobbies & Interests",
        hobbies_subtitle: "What I enjoy in my free time",
        hobby_1_title: "Gym & Fitness",
        hobby_1_desc: "Dedicated strength training and workout routines that foster discipline, consistency, mental resilience, and a healthy balance with software engineering.",
        hobby_2_title: "Cinema & Storytelling",
        hobby_2_desc: "Passionate about cinematic art, narrative structures, psychological thrillers, and science-fiction cinema that stimulate creative problem solving.",
        hobby_3_title: "Music & Soundtracks",
        hobby_3_desc: "Enjoying eclectic music genres, ambient soundscapes, and instrumental film scores that provide deep focus and inspiration during intense programming sessions.",
        hobby_view_gallery: "View gallery",
        insta_posts: "posts",
        insta_scores: "Soundtracks",
        music_curated_title: "Focus Soundtracks & Ambient",
        music_curated_desc: "Hans Zimmer (Interstellar, Inception, Dune) • Ludwig Göransson (Oppenheimer) • Daft Punk (TRON: Legacy) • Synthwave & Classical Coding Ambient.",

        crypto_title: "Cryptography Facts",
        crypto_subtitle: "Fascinating historical & modern cryptographic milestones",
        crypto_badge_1: "Classical Cryptography",
        crypto_1_title: "The Caesar Cipher (Shift Substitution)",
        crypto_1_desc: "One of the earliest documented encryption methods in history. Used by Julius Caesar in the 1st century BC to protect military dispatches by shifting each letter in the alphabet by a fixed number of positions (typically 3).",
        crypto_1_fact: "<strong>Curious fact:</strong> While easily broken today via frequency analysis, it established the foundational concept of monoalphabetic substitution that influenced centuries of tactical ciphers.",
        crypto_badge_2: "Asymmetric Cryptography",
        crypto_2_title: "Diffie-Hellman Key Exchange (1976)",
        crypto_2_desc: "Introduced by Whitfield Diffie and Martin Hellman, this groundbreaking breakthrough solved cryptography's greatest dilemma: how two strangers can securely agree on a shared secret key over a totally public, eavesdropped channel.",
        crypto_2_fact: "<strong>Curious fact:</strong> Relying on the mathematical hardness of the Discrete Logarithm problem, it is the backbone securing modern HTTPS, TLS/SSL, SSH, and VPN connections worldwide.",
        crypto_badge_3: "Forensic Cryptanalysis",
        crypto_3_title: "The Zodiac Killer Ciphers (Z340 & Z408)",
        crypto_3_desc: "Between 1969 and 1974, the infamous serial killer mailed 4 complex cryptograms composed of homophonic substitution symbols, transposed diagonal grids, and deliberate misdirection to taunt police and newspapers.",
        crypto_3_fact: "<strong>Curious fact:</strong> The notorious Z340 cipher remained unsolved for 51 years until December 2020, when an international team cracked it using advanced computer search algorithms.",

        project_title: "Have a project in mind?",
        project_desc: "Let's collaborate to build robust web systems, intelligent AI applications, and optimized database solutions tailored to your needs.",
        project_btn: "Contact Me",

        testimonial_title: "Testimonials",
        testimonial_subtitle: "What colleagues & clients say",
        test_client_1: "Corporate Client",
        test_desc_1: "Gabriel's leadership on our web and query platform exceeded expectations. He boosted our client engagement and drastically streamlined internal customer response times.",
        test_client_2: "Academic Project",
        test_desc_2: "His database administration and backend development directly benefited over 500 students with outstanding performance, security, and high uptime.",
        test_client_3: "IPN - ESCOM",
        test_desc_3: "Demonstrates exceptional problem-solving in artificial intelligence models and hardware automation. Fast, disciplined, and very meticulous with code architecture.",

        contact_title: "Contact Me",
        contact_subtitle: "Get in touch",
        contact_call_title: "Call / WhatsApp",
        contact_call_action: "Send message →",
        contact_email_title: "Email",
        contact_email_action: "Write email →",
        contact_gh_title: "GitHub",
        contact_gh_action: "Explore repositories →",
        contact_loc_title: "Location",
        contact_loc_sub: "Mexico City (CDMX), Mexico",
        contact_lbl_name: "Name",
        contact_ph_name: "Your full name",
        contact_lbl_email: "Email",
        contact_ph_email: "your.email@domain.com",
        contact_lbl_project: "Project / Subject",
        contact_ph_project: "Subject of your message",
        contact_lbl_msg: "Message",
        contact_ph_msg: "Write your message here...",
        contact_btn_send: "Send Message",
        contact_status_sending: "Sending message securely...",
        contact_status_success: "Thank you! Your message has been sent successfully to Gabriel.",
        contact_status_error: "Oops! Could not send message. Please try again or reach out via WhatsApp/Email.",
        contact_status_cooldown: "Please wait before sending another message.",
        visitor_label: "Total Visits",
        visitor_loc_prefix: "Current visit from:",
        visitor_toast_title: "🛰️ Live Telemetry",
        visitor_toast_msg: "Currently connected from",

        footer_copy: "All rights reserved."
    },

    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_skills: "Habilidades",
        nav_qualification: "Trayectoria",
        nav_services: "Servicios",
        nav_portfolio: "Portafolio",
        nav_hobbies: "Pasatiempos",
        nav_crypto: "Criptografía",
        nav_contact: "Contacto",

        home_title: "Hola, soy Jaime Gabriel",
        home_subtitle: "Ingeniero en Sistemas Computacionales",
        home_description: "Impulsado por la disciplina y la integridad. Especializado en desarrollo web full-stack, arquitectura de bases de datos, redes neuronales convolucionales y automatización IoT.",
        home_btn: "Contáctame",
        home_scroll: "Desplazar abajo",

        about_title: "Sobre Mí",
        about_subtitle: "Mi presentación",
        about_description: "Ingeniero en Sistemas Computacionales de ESCOM con probada experiencia liderando plataformas web y gestionando bases de datos de alto rendimiento. Combino el rigor académico en Inteligencia Artificial con el desarrollo práctico para transformar ideas en soluciones tecnológicas de alto impacto.",
        about_exp: "Años de <br> experiencia",
        about_projects: "Proyectos <br> completados",
        about_companies: "Empresas <br> trabajadas",
        about_cv_btn: "Descargar CV",
        about_key_btn: "Descargar Llave Pública",

        skills_title: "Habilidades",
        skills_subtitle: "Mi nivel técnico",
        skills_cat_1: "Lenguajes & Desarrollo Web",
        skills_sub_1: "Stack Frontend y Backend",
        skills_cat_2: "IA & Arquitectura de Bases de Datos",
        skills_sub_2: "Ciencia de Datos y Almacenamiento",
        skills_cat_3: "Hardware, IoT & Cloud",
        skills_sub_3: "Infraestructura y Automatización",

        qual_title: "Calificación",
        qual_subtitle: "Mi trayectoria profesional",
        qual_tab_edu: "Educación",
        qual_tab_work: "Experiencia Laboral",
        qual_edu_1_title: "Ingeniería en Sistemas Computacionales",
        qual_edu_1_sub: "ESCOM — IPN",
        qual_edu_2_title: "Técnico en Programación",
        qual_edu_2_sub: "CECyT No. 9 \"Juan de Dios Bátiz\" — IPN",
        qual_edu_3_title: "Educación Secundaria",
        qual_edu_3_sub: "Secundaria Diurna No. 141 \"Guillermo González Camarena\"",
        qual_work_1_title: "Líder de Desarrollo Web",
        qual_work_1_sub: "CONSECAL S.A. de C.V.",
        qual_work_1_date: "Mar 2024 - May 2026",
        qual_work_2_title: "Administrador de Base de Datos",
        qual_work_2_sub: "Poli Asesor",
        qual_work_2_date: "Ene 2021 - Jun 2022",

        services_title: "Servicios",
        services_subtitle: "Lo que ofrezco",
        services_view_more: "Ver Más",
        services_card_1: "Desarrollo Web <br> Full-Stack",
        services_m1_title: "Desarrollo Web <br> Full-Stack",
        services_m1_i1: "Diseño e implementación de sitios web corporativos y aplicaciones web a medida.",
        services_m1_i2: "Desarrollo de sistemas de consulta interna que agilizan procesos empresariales.",
        services_m1_i3: "Integración frontend y backend usando PHP, Node.js, JavaScript, HTML5/CSS3.",
        services_m1_i4: "Optimización SEO y rendimiento web (+45% de incremento en visitas).",

        services_card_2: "Arquitectura de <br> Datos y Cloud",
        services_m2_title: "Arquitectura de <br> Datos y Cloud",
        services_m2_i1: "Arquitectura relacional avanzada (MySQL, PostgreSQL, SQL Server).",
        services_m2_i2: "Optimización de consultas, indexación y alta concurrencia.",
        services_m2_i3: "Gestión segura de información, respaldos y control de accesos.",
        services_m2_i4: "Despliegue y configuración en la nube con Microsoft Azure y AWS.",

        services_card_3: "Sistemas de <br> IA & IoT",
        services_m3_title: "Sistemas de <br> IA & IoT",
        services_m3_i1: "Diseño de Redes Neuronales Convolucionales (CNN) para visión por computadora.",
        services_m3_i2: "Modelos predictivos con árboles de decisión (ID3, CART).",
        services_m3_i3: "Integración hardware-software con Raspberry Pi y relevadores vía pines GPIO.",
        services_m3_i4: "Programación embebida y automatización en Python y Bash scripting.",

        portfolio_title: "Portafolio",
        portfolio_subtitle: "Trabajos más recientes",
        portfolio_btn_code: "Ver Código",
        portfolio_btn_proj: "Ver Proyecto",
        portfolio_p1_title: "SysLocker: Sistema de Casilleros Inteligentes",
        portfolio_p1_desc: "Arquitectura hardware y software con Raspberry Pi para control automatizado de relevadores por pines GPIO e integración IoT en tiempo real.",
        portfolio_p2_title: "Morbus Vita: Sistema Predictivo de Salud",
        portfolio_p2_desc: "Backend interactivo para calcular la probabilidad de padecer enfermedades crónicas utilizando algoritmos de clasificación de árboles de decisión ID3.",
        portfolio_p3_title: "Portal Web y Sistema de Consultas CONSECAL",
        portfolio_p3_desc: "Rediseño completo de plataforma web corporativa y sistema de consultas, logrando 45% más visitas y reduciendo 20% el tiempo de atención.",

        hobbies_title: "Pasatiempos e Intereses",
        hobbies_subtitle: "Lo que disfruto en mi tiempo libre",
        hobby_1_title: "Gimnasio y Fitness",
        hobby_1_desc: "Entrenamiento de fuerza y acondicionamiento constante que forja disciplina, resistencia mental y un balance saludable con el desarrollo de software.",
        hobby_2_title: "Cine y Narrativa",
        hobby_2_desc: "Apasionado por el arte cinematográfico, la estructura de tramas complejas, thrillers psicológicos y ciencia ficción que impulsan la creatividad.",
        hobby_3_title: "Música y Soundtracks",
        hobby_3_desc: "Exploración de géneros musicales diversos, bandas sonoras de películas y música instrumental para máxima concentración al programar.",
        hobby_view_gallery: "Ver galería",
        insta_posts: "publicaciones",
        insta_scores: "Soundtracks",
        music_curated_title: "Soundtracks & Música de Enfoque",
        music_curated_desc: "Hans Zimmer (Interstellar, Inception, Dune) • Ludwig Göransson (Oppenheimer) • Daft Punk (TRON: Legacy) • Synthwave y música instrumental para concentración extrema.",

        crypto_title: "Datos de Criptografía",
        crypto_subtitle: "Hitos fascinantes de la criptografía histórica y moderna",
        crypto_badge_1: "Criptografía Clásica",
        crypto_1_title: "El Cifrado César (Sustitución por Desplazamiento)",
        crypto_1_desc: "Uno de los métodos de cifrado más antiguos documentados. Utilizado por Julio César en el siglo I a.C. para proteger mensajes militares desplazando cada letra del alfabeto un número fijo de posiciones (generalmente 3).",
        crypto_1_fact: "<strong>Dato curioso:</strong> Aunque hoy es vulnerable al análisis de frecuencias, sentó las bases de la sustitución monoalfabética que moldeó la criptografía militar por siglos.",
        crypto_badge_2: "Criptografía Asimétrica",
        crypto_2_title: "Intercambio de Claves Diffie-Hellman (1976)",
        crypto_2_desc: "Creado por Whitfield Diffie y Martin Hellman, resolvió el gran dilema de la seguridad: cómo dos partes pueden acordar una clave secreta a través de un canal público e inseguro sin que ningún espía pueda descifrarla.",
        crypto_2_fact: "<strong>Dato curioso:</strong> Basado en la dificultad matemática del logaritmo discreto, es la columna vertebral que protege todas las conexiones HTTPS, TLS, SSH y VPN en el mundo.",
        crypto_badge_3: "Criptoanálisis Forense",
        crypto_3_title: "Los Criptogramas del Asesino del Zodiaco (Z340 y Z408)",
        crypto_3_desc: "Entre 1969 y 1974, el misterioso criminal envió 4 complejos criptogramas con símbolos de sustitución homófona y lecturas diagonales para desafiar a la policía y a los medios.",
        crypto_3_fact: "<strong>Dato curioso:</strong> El cifrado Z340 permaneció indescifrable durante 51 años hasta diciembre de 2020, cuando un equipo internacional de programadores lo resolvió con software especializado.",

        project_title: "¿Tienes un proyecto en mente?",
        project_desc: "Colaboremos para crear sistemas web robustos, modelos inteligentes de IA y arquitecturas de datos optimizadas a tu medida.",
        project_btn: "Contáctame",

        testimonial_title: "Testimonios",
        testimonial_subtitle: "Opiniones de colegas y clientes",
        test_client_1: "Cliente Corporativo",
        test_desc_1: "El liderazgo de Gabriel en nuestra plataforma web superó las expectativas. Incrementó la interacción y redujo los tiempos de respuesta interna.",
        test_client_2: "Proyecto Académico",
        test_desc_2: "Su administración de base de datos y backend benefició a más de 500 estudiantes con excelente rendimiento, alta seguridad y disponibilidad.",
        test_client_3: "IPN - ESCOM",
        test_desc_3: "Gran capacidad analítica y resolución práctica en inteligencia artificial y automatización IoT. Disciplinado y meticuloso con la calidad de código.",

        contact_title: "Contacto",
        contact_subtitle: "Ponte en contacto",
        contact_call_title: "Llamada / WhatsApp",
        contact_call_action: "Enviar mensaje →",
        contact_email_title: "Correo Electrónico",
        contact_email_action: "Escribir correo →",
        contact_gh_title: "GitHub",
        contact_gh_action: "Explorar repositorios →",
        contact_loc_title: "Ubicación",
        contact_loc_sub: "Ciudad de México (CDMX), México",
        contact_lbl_name: "Nombre",
        contact_ph_name: "Tu nombre completo",
        contact_lbl_email: "Correo",
        contact_ph_email: "tu.correo@dominio.com",
        contact_lbl_project: "Proyecto / Asunto",
        contact_ph_project: "Asunto de tu mensaje",
        contact_lbl_msg: "Mensaje",
        contact_ph_msg: "Escribe tu mensaje aquí...",
        contact_btn_send: "Enviar Mensaje",
        contact_status_sending: "Enviando mensaje de forma segura...",
        contact_status_success: "¡Gracias! Tu mensaje ha sido enviado exitosamente a Gabriel.",
        contact_status_error: "¡Ups! No se pudo enviar el mensaje. Intenta nuevamente o contáctame por WhatsApp/Email.",
        contact_status_cooldown: "Por favor espera antes de enviar otro mensaje.",
        visitor_label: "Visitas Totales",
        visitor_loc_prefix: "Visita actual desde:",
        visitor_toast_title: "🛰️ Telemetría en Vivo",
        visitor_toast_msg: "Conectado actualmente desde",

        footer_copy: "Todos los derechos reservados."
    },

    de: {
        nav_home: "Startseite",
        nav_about: "Über Mich",
        nav_skills: "Fähigkeiten",
        nav_qualification: "Werdegang",
        nav_services: "Dienstleistungen",
        nav_portfolio: "Portfolio",
        nav_hobbies: "Hobbys",
        nav_crypto: "Kryptographie",
        nav_contact: "Kontakt",

        home_title: "Hallo, ich bin Jaime Gabriel",
        home_subtitle: "Ingenieur für Computersysteme",
        home_description: "Angetrieben von Disziplin und Integrität. Spezialisiert auf Full-Stack-Webentwicklung, Datenbankarchitektur, Faltungs-Neuronale Netze (CNN) und IoT-Automatisierung.",
        home_btn: "Kontaktieren Sie mich",
        home_scroll: "Nach unten scrollen",

        about_title: "Über Mich",
        about_subtitle: "Meine Einführung",
        about_description: "Angehender Ingenieur für Computersysteme der ESCOM mit nachgewiesener Branchenerfahrung in der Leitung von Webplattformen und Verwaltung komplexer Datenbankarchitekturen. Ich verbinde akademische KI-Forschung mit praktischer Softwareentwicklung.",
        about_exp: "Jahre <br> Erfahrung",
        about_projects: "Abgeschlossene <br> Projekte",
        about_companies: "Unternehmen <br> gearbeitet",
        about_cv_btn: "Lebenslauf herunterladen",
        about_key_btn: "Öffentlichen Schlüssel herunterladen",

        skills_title: "Fähigkeiten",
        skills_subtitle: "Mein technisches Niveau",
        skills_cat_1: "Programmiersprachen & Web",
        skills_sub_1: "Frontend & Backend Stack",
        skills_cat_2: "KI & Datenbankarchitektur",
        skills_sub_2: "Datenwissenschaft & Speicher",
        skills_cat_3: "Hardware, IoT & Cloud",
        skills_sub_3: "Infrastruktur & Automatisierung",

        qual_title: "Qualifikation",
        qual_subtitle: "Mein Werdegang",
        qual_tab_edu: "Ausbildung",
        qual_tab_work: "Berufserfahrung",
        qual_edu_1_title: "Ingenieurwesen für Computersysteme",
        qual_edu_1_sub: "ESCOM — IPN",
        qual_edu_2_title: "Programmiertechniker",
        qual_edu_2_sub: "CECyT Nr. 9 \"Juan de Dios Bátiz\" — IPN",
        qual_edu_3_title: "Sekundarschulbildung",
        qual_edu_3_sub: "Secundaria Diurna Nr. 141 \"Guillermo González Camarena\"",
        qual_work_1_title: "Leiter Webentwicklung",
        qual_work_1_sub: "CONSECAL S.A. de C.V.",
        qual_work_1_date: "Mär 2024 - Mai 2026",
        qual_work_2_title: "Datenbankadministrator",
        qual_work_2_sub: "Poli Asesor",
        qual_work_2_date: "Jan 2021 - Jun 2022",

        services_title: "Dienstleistungen",
        services_subtitle: "Was ich anbiete",
        services_view_more: "Mehr ansehen",
        services_card_1: "Full-Stack Web <br> Entwicklung",
        services_m1_title: "Full-Stack Web <br> Entwicklung",
        services_m1_i1: "Design und Implementierung maßgeschneiderter Unternehmenswebsites und Web-Apps.",
        services_m1_i2: "Entwicklung interner Abfragesysteme zur Optimierung von Geschäftsprozessen.",
        services_m1_i3: "Frontend- und Backend-Integration mit PHP, Node.js, JavaScript, HTML5/CSS3.",
        services_m1_i4: "SEO-Optimierung und Performance-Steigerung (+45% Besucherzuwachs).",

        services_card_2: "Datenbank & Cloud <br> Architektur",
        services_m2_title: "Datenbank & Cloud <br> Architektur",
        services_m2_i1: "Fortgeschrittene relationale Datenbankarchitektur (MySQL, PostgreSQL, SQL Server).",
        services_m2_i2: "Leistungsoptimierung, Indexierung und Hochverfügbarkeit.",
        services_m2_i3: "Sichere Datenverwaltung, Backup-Strategien und Zugriffskontrolle.",
        services_m2_i4: "Cloud-Bereitstellung und Service-Integration mit Microsoft Azure und AWS.",

        services_card_3: "KI & IoT <br> Systeme",
        services_m3_title: "KI & IoT <br> Systeme",
        services_m3_i1: "Entwicklung von Convolutional Neural Networks (CNN) für Bildverarbeitung.",
        services_m3_i2: "Prädiktive Modellierung mit Machine-Learning-Entscheidungsbäumen (ID3, CART).",
        services_m3_i3: "Hardware-Software-Integration mit Raspberry Pi und GPIO-Relaisautomatisierung.",
        services_m3_i4: "Eingebettete IoT-Programmierung mit Python und Bash-Skripting.",

        portfolio_title: "Portfolio",
        portfolio_subtitle: "Neueste Arbeiten",
        portfolio_btn_code: "Code ansehen",
        portfolio_btn_proj: "Projekt ansehen",
        portfolio_p1_title: "SysLocker: Intelligentes Schließfachsystem",
        portfolio_p1_desc: "Hardware- und Softwarearchitektur mit Raspberry Pi zur automatisierten Steuerung von Relais über GPIO-Pins und IoT-Integration in Echtzeit.",
        portfolio_p2_title: "Morbus Vita: Prädiktives Gesundheitssystem",
        portfolio_p2_desc: "Interaktives Web-Backend zur Berechnung des Risikos chronischer Krankheiten mit ID3-Entscheidungsbaum-Klassifikationsalgorithmen.",
        portfolio_p3_title: "CONSECAL Unternehmenswebseite & Abfrageportal",
        portfolio_p3_desc: "Komplette Neugestaltung und Implementierung von Website und internem Portal: 45% mehr Besucher und 20% schnellere Service-Reaktionszeiten.",

        hobbies_title: "Hobbys & Interessen",
        hobbies_subtitle: "Was ich in meiner Freizeit genieße",
        hobby_1_title: "Fitnessstudio & Fitness",
        hobby_1_desc: "Konsequentes Krafttraining, das Disziplin, mentale Ausdauer und eine gesunde Balance zur Softwareentwicklung fördert.",
        hobby_2_title: "Kino & Storytelling",
        hobby_2_desc: "Begeisterung für Filmkunst, komplexe Handlungen, Psychothriller und Science-Fiction, die kreatives Denken anregen.",
        hobby_3_title: "Musik & Soundtracks",
        hobby_3_desc: "Entdeckung vielfältiger Musikgenres, Ambient-Klanglandschaften und Instrumental-Soundtracks für tiefe Konzentration beim Programmieren.",
        hobby_view_gallery: "Galerie ansehen",
        insta_posts: "Beiträge",
        insta_scores: "Soundtracks",
        music_curated_title: "Fokus-Soundtracks & Ambient",
        music_curated_desc: "Hans Zimmer (Interstellar, Inception, Dune) • Ludwig Göransson (Oppenheimer) • Daft Punk (TRON: Legacy) • Synthwave & klassische Coding-Atmosphäre.",

        crypto_title: "Fakten zur Kryptographie",
        crypto_subtitle: "Faszinierende Meilensteine der historischen und modernen Kryptographie",
        crypto_badge_1: "Klassische Kryptographie",
        crypto_1_title: "Die Cäsar-Verschlüsselung (Verschiebechiffre)",
        crypto_1_desc: "Eine der ältesten dokumentierten Verschlüsselungsmethoden der Geschichte. Von Julius Cäsar im 1. Jh. v. Chr. genutzt, um militärische Depeschen durch Verschiebung der Buchstaben um eine feste Anzahl (meist 3) zu schützen.",
        crypto_1_fact: "<strong>Wissenswerter Fakt:</strong> Obwohl heute durch Häufigkeitsanalyse leicht knackbar, begründete sie das Prinzip der monoalphabetischen Substitution für Jahrhunderte.",
        crypto_badge_2: "Asymmetrische Kryptographie",
        crypto_2_title: "Diffie-Hellman-Schlüsselaustausch (1976)",
        crypto_2_desc: "Von Whitfield Diffie und Martin Hellman entwickelt, löste dieses Protokoll das Kernproblem: Wie zwei Parteien über einen unsicheren öffentlichen Kanal einen gemeinsamen geheimen Schlüssel vereinbaren können.",
        crypto_2_fact: "<strong>Wissenswerter Fakt:</strong> Basierend auf dem diskreten Logarithmus sichert dieses Verfahren heute weltweit HTTPS-, TLS-, SSH- und VPN-Verbindungen.",
        crypto_badge_3: "Forensische Kryptoanalyse",
        crypto_3_title: "Die Zodiac-Killer-Kryptogramme (Z340 & Z408)",
        crypto_3_desc: "Zwischen 1969 und 1974 versandte der Serienmörder 4 komplexe Kryptogramme mit homophoner Substitution und diagonalen Transpositionen, um Polizei und Presse herauszufordern.",
        crypto_3_fact: "<strong>Wissenswerter Fakt:</strong> Die berüchtigte Z340-Chiffre blieb 51 Jahre lang ungelöst, bis ein internationales Programmiererteam sie im Dezember 2020 mit Spezialsoftware knackte.",

        project_title: "Haben Sie ein Projekt im Kopf?",
        project_desc: "Lassen Sie uns zusammenarbeiten, um robuste Websysteme, intelligente KI-Anwendungen und optimierte Datenbanklösungen zu entwickeln.",
        project_btn: "Kontaktieren Sie mich",

        testimonial_title: "Referenzen",
        testimonial_subtitle: "Was Kollegen & Kunden sagen",
        test_client_1: "Unternehmenskunde",
        test_desc_1: "Gabriels Leitung unserer Web- und Abfrageplattform übertraf alle Erwartungen. Er steigerte die Kundenbindung und beschleunigte interne Abläufe.",
        test_client_2: "Akademisches Projekt",
        test_desc_2: "Seine Datenbankadministration und Backend-Entwicklung kam über 500 Studierenden mit hervorragender Leistung, Sicherheit und Uptime zugute.",
        test_client_3: "IPN - ESCOM",
        test_desc_3: "Herausragende Problemlösungskompetenz in KI-Modellen und Hardware-Automatisierung. Sehr diszipliniert und präzise in der Softwarearchitektur.",

        contact_title: "Kontakt",
        contact_subtitle: "Kontakt aufnehmen",
        contact_call_title: "Anruf / WhatsApp",
        contact_call_action: "Nachricht senden →",
        contact_email_title: "E-Mail",
        contact_email_action: "E-Mail schreiben →",
        contact_gh_title: "GitHub",
        contact_gh_action: "Repositories erkunden →",
        contact_loc_title: "Standort",
        contact_loc_sub: "Mexiko-Stadt (CDMX), Mexiko",
        contact_lbl_name: "Name",
        contact_ph_name: "Ihr vollständiger Name",
        contact_lbl_email: "E-Mail",
        contact_ph_email: "ihre.email@domain.com",
        contact_lbl_project: "Projekt / Betreff",
        contact_ph_project: "Betreff Ihrer Nachricht",
        contact_lbl_msg: "Nachricht",
        contact_ph_msg: "Schreiben Sie Ihre Nachricht hier...",
        contact_btn_send: "Nachricht senden",
        contact_status_sending: "Nachricht wird sicher gesendet...",
        contact_status_success: "Vielen Dank! Ihre Nachricht wurde erfolgreich an Gabriel gesendet.",
        contact_status_error: "Hoppla! Nachricht konnte nicht gesendet werden. Bitte per WhatsApp/E-Mail kontaktieren.",
        contact_status_cooldown: "Bitte warten Sie, bevor Sie eine weitere Nachricht senden.",
        visitor_label: "Gesamtbesuche",
        visitor_loc_prefix: "Aktueller Besuch aus:",
        visitor_toast_title: "🛰️ Live-Telemetrie",
        visitor_toast_msg: "Derzeit verbunden aus",

        footer_copy: "Alle Rechte vorbehalten."
    }
};

/*==================== SAFE STORAGE HELPER (MOBILE COMPATIBILITY) ====================*/
const safeStorage = {
    getItem: function(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    },
    setItem: function(key, val) {
        try {
            localStorage.setItem(key, val);
        } catch (e) {
            // Storage blocked or quota exceeded in private mode
        }
    }
};

/*==================== LANGUAGE SWITCHER LOGIC ====================*/
const langButtons = document.querySelectorAll('.lang__btn');

const cvFiles = {
    en: "assets/pdf/JGHG_CV_EN_2026.pdf",
    es: "assets/pdf/JGHG_CV_ES_2026.pdf",
    de: "assets/pdf/JGHG_CV_DE_2026.pdf"
};

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    // Update texts with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders with data-i18n-ph
    const phElements = document.querySelectorAll('[data-i18n-ph]');
    phElements.forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update CV download link based on selected language
    const cvLink = document.getElementById('cv-download-link');
    if (cvLink && cvFiles[lang]) {
        cvLink.setAttribute('href', cvFiles[lang]);
    }

    // Update active button state
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Persist language safely
    safeStorage.setItem('selected-lang', lang);
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Load saved language on init
const savedLang = safeStorage.getItem('selected-lang') || 'en';
setLanguage(savedLang);

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    const item = this.parentNode;
    if (item.classList.contains('skills__open')) {
        item.classList.remove('skills__open');
        item.classList.add('skills__close');
    } else {
        item.classList.remove('skills__close');
        item.classList.add('skills__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// Close modal when clicking outside content
modalViews.forEach((modalView) => {
    modalView.addEventListener('click', (e) => {
        if (e.target === modalView) {
            modalView.classList.remove('active-modal');
        }
    });
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset || window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (activeLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                activeLink.classList.add('active-link');
            } else {
                activeLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if (scrollUp) {
        if (scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = safeStorage.getItem('selected-theme');
const selectedIcon = safeStorage.getItem('selected-icon');

// Obtain current theme by validating dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate theme manually with button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    safeStorage.setItem('selected-theme', getCurrentTheme());
    safeStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== SECURE CONTACT FORM HANDLING ====================*/
const contactForm = document.getElementById('contact-form'),
      contactStatus = document.getElementById('contact-status'),
      contactSubmitBtn = document.getElementById('contact-submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const currentLang = safeStorage.getItem('selected-lang') || 'en';
        const t = translations[currentLang] || translations.en;

        // 1. Honeypot check (Anti-bot trap)
        const honeypot = contactForm.querySelector('input[name="_honey"]');
        if (honeypot && honeypot.value.trim() !== '') {
            // Silently discard bot submission
            contactStatus.className = 'contact__status success';
            contactStatus.textContent = t.contact_status_success;
            contactForm.reset();
            return;
        }

        // 2. Rate limiting check (60-second cooldown)
        const lastSubmitTime = safeStorage.getItem('last_contact_submit');
        const now = Date.now();
        if (lastSubmitTime && (now - parseInt(lastSubmitTime, 10)) < 60000) {
            const secondsLeft = Math.ceil((60000 - (now - parseInt(lastSubmitTime, 10))) / 1000);
            contactStatus.className = 'contact__status error';
            contactStatus.textContent = `${t.contact_status_cooldown} (${secondsLeft}s)`;
            return;
        }

        // 3. UI Loading state
        contactStatus.className = 'contact__status loading';
        contactStatus.textContent = t.contact_status_sending;
        if (contactSubmitBtn) {
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.style.opacity = '0.7';
        }

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('https://formsubmit.co/ajax/jaimegabrielhernandezgarcia@hotmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                contactStatus.className = 'contact__status success';
                contactStatus.textContent = t.contact_status_success;
                contactForm.reset();
                safeStorage.setItem('last_contact_submit', Date.now().toString());
            } else {
                throw new Error('Server returned an error');
            }
        } catch (error) {
            contactStatus.className = 'contact__status error';
            contactStatus.textContent = t.contact_status_error;
        } finally {
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.style.opacity = '1';
            }
        }
    });
}

/*==================== VISITOR COUNTER LOGIC ====================*/
async function initVisitorCounter() {
    const countEl = document.getElementById('visitor-count');
    if (!countEl) return;

    let currentCount = parseInt(safeStorage.getItem('local_visitor_count') || '142', 10);

    try {
        const res = await fetch('https://visitor-badge.laobi.icu/badge?page_id=Jaime-Gabriel-Hernandez-Garcia.GabrielHernandezWeb', {
            cache: 'no-cache'
        });
        if (res.ok) {
            const svgText = await res.text();
            const matches = svgText.match(/<text[^>]*>(\d+)<\/text>/g);
            if (matches && matches.length >= 2) {
                const numMatch = matches[matches.length - 1].match(/(\d+)/);
                if (numMatch) {
                    currentCount = parseInt(numMatch[1], 10);
                    safeStorage.setItem('local_visitor_count', currentCount.toString());
                }
            }
        }
    } catch (e) {
        // Increment session fallback
        try {
            const hasVisited = sessionStorage.getItem('visited_session');
            if (!hasVisited) {
                currentCount += 1;
                sessionStorage.setItem('visited_session', 'true');
                safeStorage.setItem('local_visitor_count', currentCount.toString());
            }
        } catch (err) {
            // Ignore session storage failure in private mode
        }
    }

    animateCounter(countEl, currentCount);
}

function animateCounter(element, target) {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function step(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        element.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(step);
}

/*==================== GEO TELEMETRY LOGIC ====================*/
async function detectVisitorLocation() {
    const locBadgeText = document.getElementById('visitor-location-text');
    const toastEl = document.getElementById('geo-toast');
    const toastLoc = document.getElementById('geo-toast-loc');
    const toastClose = document.getElementById('geo-toast-close');

    if (toastClose && toastEl) {
        toastClose.addEventListener('click', () => {
            toastEl.classList.remove('show');
        });
    }

    let geoData = null;
    const cachedGeo = safeStorage.getItem('geo_location_cache');

    if (cachedGeo) {
        try {
            geoData = JSON.parse(cachedGeo);
        } catch (e) {
            geoData = null;
        }
    }

    if (!geoData) {
        try {
            const res = await fetch('https://ipwho.is/', { cache: 'no-cache' });
            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    geoData = {
                        city: data.city || data.region || 'Online',
                        country: data.country || 'Global',
                        flag: (data.flag && data.flag.emoji) ? data.flag.emoji : '🌍'
                    };
                    safeStorage.setItem('geo_location_cache', JSON.stringify(geoData));
                }
            }
        } catch (e) {
            // Geolocation fallback
        }
    }

    if (!geoData) {
        geoData = {
            city: 'Ciudad de México',
            country: 'México',
            flag: '🇲🇽'
        };
    }

    const formattedLoc = `${geoData.city}, ${geoData.country} ${geoData.flag}`;

    // Update footer badge
    if (locBadgeText) {
        locBadgeText.textContent = formattedLoc;
    }

    // Update and display floating telemetry toast
    if (toastLoc && toastEl) {
        toastLoc.textContent = formattedLoc;
        setTimeout(() => {
            toastEl.classList.add('show');
            setTimeout(() => {
                toastEl.classList.remove('show');
            }, 7000);
        }, 1500);
    }
}

initVisitorCounter();
detectVisitorLocation();

/*==================== HOBBIES INSTAGRAM MODALS & LIGHTBOX ====================*/
const hobbyCards = document.querySelectorAll('.hobbies__content'),
      hobbyModals = document.querySelectorAll('.hobbies__modal'),
      hobbyModalCloses = document.querySelectorAll('.hobbies__modal-close'),
      hobbyItems = document.querySelectorAll('.insta__item'),
      hobbyLightbox = document.getElementById('hobby-lightbox'),
      hobbyLightboxImg = document.getElementById('hobby-lightbox-img'),
      hobbyLightboxClose = document.getElementById('hobby-lightbox-close');

// Open modal upon clicking card
hobbyCards.forEach(card => {
    card.addEventListener('click', () => {
        const targetSelector = card.getAttribute('data-modal-target');
        const targetModal = document.querySelector(targetSelector);
        if (targetModal) {
            targetModal.classList.add('active-modal');
        }
    });
});

// Close modal with close button
hobbyModalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hobbyModals.forEach(modal => modal.classList.remove('active-modal'));
    });
});

// Close modal clicking outside container
hobbyModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active-modal');
        }
    });
});

// Open Lightbox when clicking photo in grid
hobbyItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const fullSrc = item.getAttribute('data-full') || item.querySelector('img').src;
        if (hobbyLightbox && hobbyLightboxImg) {
            hobbyLightboxImg.src = fullSrc;
            hobbyLightbox.classList.add('active');
        }
    });
});

// Close Lightbox
if (hobbyLightboxClose && hobbyLightbox) {
    hobbyLightboxClose.addEventListener('click', () => {
        hobbyLightbox.classList.remove('active');
    });
    hobbyLightbox.addEventListener('click', (e) => {
        if (e.target === hobbyLightbox) {
            hobbyLightbox.classList.remove('active');
        }
    });
}

// ESC key closes any open modal or lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (hobbyLightbox && hobbyLightbox.classList.contains('active')) {
            hobbyLightbox.classList.remove('active');
        } else {
            hobbyModals.forEach(modal => modal.classList.remove('active-modal'));
        }
    }
});