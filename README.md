# 🌐 Jaime Gabriel Hernández García — Personal Web Portfolio

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SwiperJS](https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Security](https://img.shields.io/badge/RSA--4096-Public--Key-blueviolet?style=for-the-badge&logo=keycdn&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20%2F%20V1.1-success?style=for-the-badge)

**Portafolio web interactivo, responsive y multilingüe de Ingeniería en Sistemas Computacionales (ESCOM — IPN).**

[Características](#-características-principales) •
[Estructura](#-estructura-del-proyecto) •
[Tecnologías](#-tecnologías-utilizadas) •
[Instalación](#-ejecución-local) •
[Contacto](#-contacto--redes)

</div>

---

## 📌 Descripción del Proyecto

Sitio web personal y profesional diseñado para presentar la formación académica, trayectoria laboral, proyectos de ingeniería de software, arquitectura de bases de datos, modelos de inteligencia artificial y automatización IoT de **Jaime Gabriel Hernández García**.

El proyecto incluye soporte multiidioma en tiempo real, cambio dinámico entre modo claro/oscuro, visualización de hitos criptográficos y descarga directa de Curriculum Vitae y Llave Pública RSA.

---

## ✨ Características Principales

### 🌍 1. Soporte Multiidioma en Tiempo Real (i18n)
- Selector flotante lateral con cambio instantáneo entre **Español (ES)**, **Inglés (EN)** y **Alemán (DE)**.
- Persistencia de preferencia de idioma en el navegador mediante `localStorage`.

### 🌓 2. Modo Claro / Modo Oscuro
- Toggle de tema en barra de navegación superior con persistencia de selección.
- Paleta de colores HSL refinada con transiciones suaves.

### 🛡️ 3. Sección Especial de Criptografía
- **Cifrado César:** Criptografía militar clásica por sustitución y análisis de frecuencias.
- **Protocolo Diffie-Hellman (1976):** Intercambio de claves en canales públicos (base de HTTPS, TLS y SSH).
- **Criptogramas del Asesino del Zodiaco:** Criptoanálisis forense y la resolución del cifrado Z340 tras 51 años.
- Tarjetas con imágenes temáticas de alta fidelidad, insignias de categoría y datos curiosos destacados.

### 🔑 4. Descarga de CV y Llave Pública Criptográfica
- Botón de descarga de **CV actualizado en PDF**.
- Botón de descarga de **Llave Pública RSA de 4096 bits** (`jaime_gabriel_public_key.pub`) para comunicaciones seguras y verificación de firmas digitales.

### 📊 5. Habilidades Técnicas y Diseño Adaptativo
- Categorías organizadas en:
  - *Lenguajes & Desarrollo Web* (Python, JS/Node.js, PHP, Java, HTML5/CSS3).
  - *IA & Arquitectura de Bases de Datos* (MySQL/SQL Server/Postgres, CNNs, ID3/CART, Optimización/Seguridad).
  - *Hardware, IoT & Cloud* (Raspberry Pi/GPIO, Relevadores, Azure/AWS, Metodologías Ágiles).
- Apertura simultánea de acordeones y centrado automático en pantallas medianas y grandes.

### 🎓 6. Trayectoria Académica y Laboral
- Timeline cronológico completo:
  - **Educación:** *Secundaria Diurna No. 141 "Guillermo González Camarena"* (2016-2019) &rarr; *CECyT No. 9 "Juan de Dios Bátiz" — IPN* (2019-2022) &rarr; *ESCOM — IPN* (2022-2026).
  - **Experiencia Laboral:** Líder de Desarrollo Web (*CONSECAL S.A. de C.V.*) & Administrador de Base de Datos (*Poli Asesor*).

### 🎯 7. Pasatiempos e Intereses Personales
- **Gimnasio & Fitness:** Entrenamiento de fuerza, disciplina y balance de vida.
- **Cine & Narrativa:** Estructura de historias complejas, thrillers y ciencia ficción.
- **Música & Soundtracks:** Bandas sonoras instrumentales y ambientación para programación profunda.

### 🎠 8. Carruseles Interactivos y Modales
- Carrusel de portafolio con Swiper.js (*SysLocker*, *Morbus Vita*, *Portal CONSECAL*).
- Modales desplegables con detalles ampliados de servicios de software.
- Carrusel de testimonios y recomendaciones profesionales.

---

## 📁 Estructura del Proyecto

```text
GabrielHernandezWeb/
├── assets/
│   ├── css/
│   │   ├── styles.css              # Estilos principales, variables CSS y responsive
│   │   └── swiper-bundle.min.css   # Estilos para carruseles Swiper
│   ├── js/
│   │   ├── main.js                # Lógica interactiva, motor de traducción i18n y temas
│   │   └── swiper-bundle.min.js   # Librería de carruseles interactivos
│   ├── img/
│   │   ├── perfil.jpeg            # Fotografía de perfil en máscara SVG
│   │   ├── about.jpg              # Fotografía de sección About
│   │   ├── caesar.jpg             # Imagen ilustrativa Cifrado César
│   │   ├── diffie_hellman.jpg     # Imagen ilustrativa Protocolo Diffie-Hellman
│   │   ├── zodiac.jpg             # Imagen ilustrativa Criptogramas del Zodiaco
│   │   ├── portfolio1.jpg         # SysLocker
│   │   ├── portfolio2.jpg         # Morbus Vita
│   │   ├── portfolio3.jpg         # Portal CONSECAL
│   │   └── testimonial*.jpg       # Fotos para testimonios
│   ├── pdf/
│   │   └── Jaime Gabriel Hernandez Garcia_CV.pdf  # Curriculum Vitae oficial
│   └── keys/
│       └── jaime_gabriel_public_key.pub          # Llave pública RSA 4096-bit
├── index.html                      # Estructura semántica principal
└── README.md                       # Documentación del repositorio
```

---

## 💻 Tecnologías Utilizadas

- **Core:** HTML5 Semántico, CSS3 Vanilla (Custom Properties, Flexbox, CSS Grid), JavaScript ES6+.
- **Iconografía:** [Unicons by Iconscout](https://iconscout.com/unicons).
- **Tipografía:** [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins).
- **Librería de Carrusel:** [Swiper.js v6.8.4](https://swiperjs.com/).
- **Seguridad:** OpenSSH / RSA 4096-bit Public Key.

---

## 🚀 Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Jaime-Gabriel-Hernandez-Garcia/GabrielHernandezWeb.git
   ```

2. **Acceder a la carpeta del proyecto:**
   ```bash
   cd GabrielHernandezWeb
   ```

3. **Abrir en el navegador:**
   - Simplemente abre `index.html` en tu navegador web de preferencia, o usa una extensión como *Live Server* en VS Code / Antigravity IDE.

---

## 📬 Contacto & Redes

- **Nombre:** Jaime Gabriel Hernández García
- **Institución:** Escuela Superior de Cómputo (ESCOM — IPN)
- **Correo Electrónico:** [jaimegabrielhernandezgarcia@hotmail.com](mailto:jaimegabrielhernandezgarcia@hotmail.com)
- **WhatsApp:** [+52 56 3608 4525](https://wa.me/525636084525)
- **GitHub:** [@Gabo2204](https://github.com/Gabo2204)

---

<div align="center">
  <sub>© 2026 Jaime Gabriel Hernández García. Todos los derechos reservados.</sub>
</div>
