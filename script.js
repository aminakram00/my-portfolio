/**
 * AL-AMIN AKRAM PORTFOLIO INTERACTION ENGINE
 * Multilingual (EN/BM), Theme Switcher, Modals, Filter, AI Assistant Q&A
 * Updated with Latest Resume: Simple Advantage, eSawah360 IoT, MBI Dashboards, Degrees
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Translations Dictionary (EN & BM)
  // -------------------------------------------------------------------------
  const translations = {
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.leadership": "Leadership",
      "nav.publications": "Publications",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.resume": "Resume",
      "nav.home": "Home",
      "nav.hostingGuide": "Free Domain Guide",

      "hero.status": "Software Engineer & Developer • Open to High-Impact Opportunities",
      "hero.greeting": "Hello, I'm",
      "hero.rolePrefix": "Specialized in",
      "hero.bio": "Junior System Analyst with a Bachelor of Information Systems (Hons.) in Business Computing and experience in system development, data analytics, API integration, and IoT solutions. Skilled in developing system prototypes, interactive dashboards, and LoRaWAN-based systems, with experience applying technology to address business and operational requirements.",
      "hero.statCgpa": "UiTM Degree CGPA",
      "hero.statRoles": "Industry Roles",
      "hero.statPrograms": "Programmes Led (YDP)",
      "hero.statPublications": "MyCite Journals",
      "hero.viewProjects": "Explore Systems & IoT",
      "hero.downloadResume": "Download Latest Resume",
      "hero.askAi": "Ask Al-Amin AI",

      "about.tag": "PROFESSIONAL PROFILE",
      "about.title": "Full-Stack Prototyping, IoT Integration & Data Analytics",
      "about.subtitle": "A versatile Software Engineer and System Analyst bridging hardware telemetries, rapid AI development tools, and data-driven governance.",
      "about.bioTitle": "Professional Background",
      "about.bioP1": "I am a Junior System Analyst and Software Engineer holding a Bachelor of Information Systems (Hons.) in Business Computing from UiTM Shah Alam (CGPA 3.33) and a Diploma in Business Studies from UiTM Rembau (CGPA 3.30). My background uniquely combines commercial acumen with robust technical execution.",
      "about.bioP2": "In industry, I build rapid production prototypes for national regulatory bodies like PDRM & CIDB leveraging cutting-edge Antigravity IDE & Cursor AI workflows, engineer smart agriculture structures using LoRaWAN IoT devices (eSawah360), and develop interactive municipal analytics dashboards for Majlis Bandaraya Ipoh (MBI) with geospatial Google Maps routing.",
      "about.v1Title": "IoT & Sensor Architecture",
      "about.v1Desc": "Designing LoRaWAN-based field structures, device integration, and telemetry pipelines for real-world environmental and agricultural monitoring.",
      "about.v2Title": "Rapid Prototyping with AI IDEs",
      "about.v2Desc": "Accelerating development cycles using Antigravity IDE, GitHub Copilot, and Cursor AI to deliver production-ready systems for institutional clients.",
      "about.v3Title": "Interactive Geospatial Dashboards",
      "about.v3Desc": "Optimizing API calls, frontend performance, and routing algorithms to map revenue, tax arrears, and violation hotspots.",
      "about.refTitle": "Key Institutional References",
      "about.refSubtitle": "Endorsed by faculty leaders and university principals for technical rigor, execution speed, and executive discipline:",
      "about.ref1Role": "Faculty Dean | Faculty of Computer & Mathematical Sciences (FSKM)",
      "about.ref2Role": "Principal (Pengetua) | Kolej Kediaman Teratai",
      "about.verifyNote": "Based in Ipoh, Perak • Available for on-site & hybrid engagements.",
      "about.contactAction": "Contact Al-Amin",

      "edu.tag": "ACADEMIC FOUNDATION",
      "edu.title": "Education & Specialized Qualifications",
      "edu.degree": "Bachelor of Information Systems (Hons.) Business Computing",
      "edu.diploma": "Diploma in Business Studies",
      "edu.courseworkTitle": "Core Academic Disciplines & Competencies:",
      "edu.diplomaFocus": "Core Foundation:",

      "exp.tag": "INDUSTRY RECORD",
      "exp.title": "Work & Engineering Experience",
      "exp.simpleAdvSummary": "Leading the development of advanced system prototypes and IoT-integrated cloud platforms for governmental agencies and precision agriculture.",
      "exp.sa1": "Developed comprehensive system prototypes for PDRM (Polis Diraja Malaysia) & CIDB using Antigravity IDE based on strict functional specifications.",
      "exp.sa2": "Built the eSawah360 IoT structure from scratch, integrating LoRaWAN devices for real-time agricultural telemetry & soil moisture data collection.",
      "exp.sa3": "Spearheaded system architecture design, sensor hardware integration, end-to-end testing, and rapid prototyping for smart agriculture ecosystems.",
      "exp.peroduaSummary": "Optimized automotive digital customer acquisition funnels through real-time lead analytics and campaign monitoring.",
      "exp.p1": "Analysed digital lead volumes and campaign performance metrics to support strategic sales forecasting and targeted lead-generation.",
      "exp.p2": "Monitored omni-channel digital campaigns and live-stream commercial sessions while resolving customer inquiries in real time.",
      "exp.p3": "Collaborated directly with sales consultants to enhance lead-to-booking conversion rates and customer journey satisfaction.",
      "exp.mbiSummary": "Engineered interactive municipal intelligence dashboards and GIS routing solutions for local council operations.",
      "exp.m1": "Developed three interactive dashboards for the Enforcement, Licensing, and Treasury departments utilizing API-driven live feeds.",
      "exp.m2": "Optimised API calls, query payloads, and front-end rendering to boost system performance and cut data-loading latency.",
      "exp.m3": "Implemented Google Maps routing and geospatial analysis to detect violation clusters and tax arrear hotspots across Ipoh city.",

      "proj.tag": "ENGINEERING PORTFOLIO",
      "proj.title": "Featured Systems & Technical Innovations",
      "proj.subtitle": "From smart agriculture LoRaWAN IoT networks to municipal dashboards and web assessment architectures.",
      "proj.tabAll": "All Systems",
      "proj.tabIot": "IoT & Agriculture",
      "proj.tabDashboards": "Dashboards & Analytics",
      "proj.tabWeb": "Web Applications",
      "proj.tabCommunity": "Community Initiatives",
      "proj.viewDetails": "View Case Study",
      "proj.exploreArchitecture": "Explore IoT Architecture",
      "proj.exploreMbi": "Explore Municipal Analytics",
      "proj.exploreImpact": "Explore Community Impact",
      "proj.esawahTitle": "eSawah360: Smart Paddy Field LoRaWAN IoT Ecosystem",
      "proj.esawahDesc": "Engineered the entire eSawah360 IoT structure from scratch. Integrates long-range LoRaWAN telemetry devices to monitor soil moisture, water levels, and ambient conditions, enabling precision agricultural yields.",
      "proj.mbiTitle": "MBI Geospatial City Dashboards & Route Optimization",
      "proj.mbiDesc": "Developed three high-performance dashboards for Enforcement, Licensing, and Treasury departments. Incorporates Google Maps geospatial routing to pinpoint violation hotspots and accelerate revenue collection.",
      "proj.mikerTitle": "Miker Signature Employee Performance Assessment System",
      "proj.mikerDesc": "A full-featured web application engineered for Miker Signature. Streamlines performance appraisals via self-evaluations, supervisor scoring, weighted metrics, real-time KPI dashboards, and administrative auditing.",
      "proj.wargaTitle": "Warga Emas Celik Digital (SULAM x JPKK)",
      "proj.wargaDesc": "Served as Program Director in collaboration with JPKK Kg. Budiman. Directed hands-on digital literacy modules for senior citizens, training them on Shopee e-commerce, TikTok digital safety, and Google Calendar scheduling.",

      "lead.tag": "EXECUTIVE LEADERSHIP",
      "lead.title": "Proven High-Impact Governance & Student Leadership",
      "lead.subtitle": "Demonstrated track record of orchestrating 60+ university initiatives and representing UiTM across four countries.",
      "lead.ydpBadge": "PRESIDENT • 2024–2025",
      "lead.ydpTitle": "President, College Representative Committee",
      "lead.ydpDesc": "Spearheaded the executive governance of Kolej Kediaman Teratai, leading the committee to successfully accomplish over 60 high-impact programmes. Managed institutional budgets, residential student welfare, crisis protocols, and inter-university collaborations.",
      "lead.programsCompleted": "Programs Executed",
      "lead.countriesEngaged": "Countries Engaged",
      "lead.auditCompliance": "Audit Governance",
      "lead.directorRoles": "Key Strategic Directorships:",
      "lead.intlRoles": "International Diplomatic Missions:",

      "pub.tag": "ACADEMIC RIGOR",
      "pub.title": "Published Research & Academic Papers",
      "pub.subtitle": "Co-author of 3 peer-reviewed articles indexed in the Malaysian Citation Index (MyCite) with dual Best Paper Awards at ISDev 2024.",
      "pub.readArticle": "Read Journal Article",

      "skills.tag": "TECHNICAL ARSENAL",
      "skills.title": "Skills, Tools & AI Development Stack",
      "skills.catDev": "Programming & Database",
      "skills.catAi": "AI Development Tools",
      "skills.catBi": "Business Intelligence & Analytics",
      "skills.catProfessional": "Professional Skills & Languages",
      "skills.fluentMalay": "Fluent / Native",
      "skills.fluentEng": "Fluent (Professional)",

      "contact.tag": "GET IN TOUCH",
      "contact.title": "Let's Connect & Build Impact Together",
      "contact.subtitle": "Open for software engineering roles, system analyst opportunities, IoT prototyping, and technical collaborations.",
      "contact.infoHeading": "Contact Information",
      "contact.infoSub": "Feel free to reach out directly via WhatsApp, email, or LinkedIn. I typically respond within 24 hours.",
      "contact.cvBoxTitle": "Latest Curriculum Vitae (PDF)",
      "contact.cvBoxSub": "Updated with Simple Advantage, eSawah360, MBI, and Degrees.",
      "contact.formHeading": "Send a Direct Inquiry",
      "contact.nameLabel": "Your Name / Organization",
      "contact.emailLabel": "Your Email Address",
      "contact.subjectLabel": "Subject",
      "contact.messageLabel": "Your Message",
      "contact.sendBtn": "Send Message via Email / WhatsApp",

      "footer.quote": "\"Engineering Intelligent Systems, IoT Architectures, and Purposeful Leadership.\"",

      "modal.close": "Close",
      "modal.discuss": "Discuss with Al-Amin",
      "modal.gotIt": "Understood, Close Guide",

      "ai.title": "Ask Al-Amin AI Assistant",
      "ai.subtitle": "Instant answers regarding software roles, IoT, FYP, and leadership",
      "ai.suggested": "Popular Questions:",
      "ai.welcomeMsg": "👋 Hello! I am the automated portfolio assistant for Muhammad Noor Al-Amin. Ask me about his software development at Simple Advantage, eSawah360 IoT, MBI dashboards, UiTM degrees, or leadership record!",

      "hosting.title": "How to Publish This Portfolio for FREE",
      "hosting.intro": "This portfolio is connected with GitHub (aminakram00/my-portfolio) and can be deployed with 1-click on Netlify:"
    },

    bm: {
      "nav.about": "Tentang Saya",
      "nav.experience": "Pengalaman",
      "nav.projects": "Projek",
      "nav.education": "Pendidikan",
      "nav.leadership": "Kepimpinan",
      "nav.publications": "Penerbitan",
      "nav.skills": "Kemahiran",
      "nav.contact": "Hubungi",
      "nav.resume": "Resume",
      "nav.home": "Utama",
      "nav.hostingGuide": "Panduan Domain Percuma",

      "hero.status": "Jurutera Perisian & Pembangun • Terbuka Untuk Peluang Berimpak Tinggi",
      "hero.greeting": "Salam Sejahtera, Saya",
      "hero.rolePrefix": "Pengkhususan dalam",
      "hero.bio": "Penganalisis Sistem Muda dengan Ijazah Sarjana Muda Sistem Maklumat (Kepujian) Pengkomputeran Perniagaan dan pengalaman dalam pembangunan sistem, analitik data, integrasi API, dan penyelesaian IoT. Mahir membangunkan prototaip sistem, papan pemuka interaktif, dan sistem berasaskan LoRaWAN.",
      "hero.statCgpa": "CGPA Ijazah UiTM",
      "hero.statRoles": "Peranan Industri",
      "hero.statPrograms": "Program Diterajui (YDP)",
      "hero.statPublications": "Jurnal MyCite",
      "hero.viewProjects": "Lihat Sistem & IoT",
      "hero.downloadResume": "Muat Turun Resume Terkini",
      "hero.askAi": "Tanya AI Al-Amin",

      "about.tag": "PROFIL PROFESIONAL",
      "about.title": "Prototaip Sistem Penuh, Integrasi IoT & Analitik Data",
      "about.subtitle": "Jurutera Perisian dan Penganalisis Sistem serba boleh yang menghubungkan telemetri perkakasan, alatan pembangunan AI pantas, dan tadbir urus berasaskan data.",
      "about.bioTitle": "Latar Belakang Profesional",
      "about.bioP1": "Saya merupakan Penganalisis Sistem Muda dan Jurutera Perisian berkelulusan Ijazah Sarjana Muda Sistem Maklumat (Kepujian) Pengkomputeran Perniagaan dari UiTM Shah Alam (CGPA 3.33) dan Diploma Pengajian Perniagaan dari UiTM Rembau (CGPA 3.30). Latar belakang saya menggabungkan kefahaman komersial perniagaan dan kepakaran teknikal yang kukuh.",
      "about.bioP2": "Dalam industri, saya membina prototaip sistem untuk agensi institusi seperti PDRM & CIDB memanfaatkan Antigravity IDE & Cursor AI, mereka bentuk struktur IoT pertanian pintar menggunakan peranti LoRaWAN (eSawah360), serta membangunkan papan pemuka perbandaran interaktif Majlis Bandaraya Ipoh (MBI) dengan analisis geospatial Google Maps.",
      "about.v1Title": "Seni Bina IoT & Sensor",
      "about.v1Desc": "Mereka bentuk struktur nod LoRaWAN di lapangan, integrasi peranti, dan saluran data telemetri untuk pemantauan masa nyata.",
      "about.v2Title": "Prototaip Pantas Alatan AI",
      "about.v2Desc": "Mempercepatkan kitaran pembangunan perisian menggunakan Antigravity IDE, GitHub Copilot, dan Cursor AI bagi menghasilkan sistem sedia guna.",
      "about.v3Title": "Papan Pemuka Geospatial Interaktif",
      "about.v3Desc": "Mengoptimumkan panggilan API, kecekapan paparan hadapan, dan algoritma penentuan laluan untuk mengesan tunggakan cukai dan titik pelanggaran.",
      "about.refTitle": "Rujukan Institusi Utama",
      "about.refSubtitle": "Disokong oleh barisan kepimpinan fakulti dan pengetua universiti atas ketelitian teknikal dan disiplin pelaksanaan:",
      "about.ref1Role": "Dekan Fakulti | Fakulti Sains Komputer dan Matematik (FSKM)",
      "about.ref2Role": "Pengetua | Kolej Kediaman Teratai",
      "about.verifyNote": "Berpangkalan di Ipoh, Perak • Terbuka untuk penempatan hibrid dan di lokasi.",
      "about.contactAction": "Hubungi Al-Amin",

      "edu.tag": "ASAS AKADEMIK",
      "edu.title": "Pendidikan & Kelayakan Pengkhususan",
      "edu.degree": "Sarjana Muda Sistem Maklumat (Kepujian) Pengkomputeran Perniagaan",
      "edu.diploma": "Diploma Pengajian Perniagaan",
      "edu.courseworkTitle": "Disiplin & Kompetensi Akademik Utama:",
      "edu.diplomaFocus": "Asas Komersial & Perniagaan:",

      "exp.tag": "REKOD INDUSTRI",
      "exp.title": "Pengalaman Kerja & Kejuruteraan",
      "exp.simpleAdvSummary": "Menerajui pembangunan prototaip sistem canggih dan platform awan bersepadu IoT untuk agensi kerajaan dan pertanian jitu.",
      "exp.sa1": "Membangunkan prototaip sistem komprehensif untuk PDRM & CIDB menggunakan Antigravity IDE berdasarkan keperluan fungsian sistem.",
      "exp.sa2": "Membina struktur IoT eSawah360 dari asas, mengintegrasikan peranti LoRaWAN untuk pemantauan telemetri pertanian & pengumpulan data kelembapan tanah.",
      "exp.sa3": "Menyumbang kepada reka bentuk seni bina sistem, integrasi perkakasan sensor, pengujian, dan pembinaan prototaip aplikasi pertanian pintar.",
      "exp.peroduaSummary": "Mengoptimumkan corong pemerolehan pelanggan digital automotif menerusi analitik data prospek masa nyata dan pemantauan kempen.",
      "exp.p1": "Menganalisis volum prospek digital dan prestasi kempen bagi menyokong perancangan jualan dan strategi penjanaan leads.",
      "exp.p2": "Memantau kempen digital dan prestasi sesi siaran langsung sambil menjawab pertanyaan pelanggan secara masa nyata.",
      "exp.p3": "Bekerjasama dengan perunding jualan bagi meningkatkan kadar penukaran leads kepada tempahan dan kepuasan pelanggan.",
      "exp.mbiSummary": "Membangunkan papan pemuka perbandaran pintar interaktif dan penyelesaian laluan GIS untuk operasi pihak berkuasa tempatan.",
      "exp.m1": "Membangunkan tiga papan pemuka interaktif bagi Jabatan Penguatkuasaan, Pelesenan, dan Perbendaharaan berasaskan suapan data API.",
      "exp.m2": "Mengoptimumkan panggilan API dan kod paparan hadapan untuk mempertingkatkan prestasi sistem dan mengurangkan masa muat data.",
      "exp.m3": "Melaksanakan laluan Google Maps dan analisis geospatial bagi mengenal pasti kawasan tumpuan pelanggaran dan tunggakan cukai di Ipoh.",

      "proj.tag": "PORTFOLIO KEJURUTERAAN",
      "proj.title": "Sistem Pilihan & Inovasi Teknikal",
      "proj.subtitle": "Dari rangkaian IoT pertanian pintar LoRaWAN hingga papan pemuka geospatial bandaraya dan sistem penilaian web.",
      "proj.tabAll": "Semua Sistem",
      "proj.tabIot": "IoT & Pertanian",
      "proj.tabDashboards": "Papan Pemuka & Analitik",
      "proj.tabWeb": "Aplikasi Web",
      "proj.tabCommunity": "Inisiatif Komuniti",
      "proj.viewDetails": "Lihat Kajian Kes",
      "proj.exploreArchitecture": "Terokai Seni Bina IoT",
      "proj.exploreMbi": "Terokai Analitik Perbandaran",
      "proj.exploreImpact": "Lihat Impak Komuniti",
      "proj.esawahTitle": "eSawah360: Ekosistem IoT Pertanian Padi Pintar LoRaWAN",
      "proj.esawahDesc": "Membangunkan struktur IoT eSawah360 dari awal. Mengintegrasikan peranti telemetri jarak jauh LoRaWAN untuk memantau paras air, kelembapan tanah, dan suhu persekitaran bagi memaksimumkan hasil tuaian.",
      "proj.mbiTitle": "Papan Pemuka Bandaraya Geospatial MBI & Pengoptimuman Laluan",
      "proj.mbiDesc": "Membangunkan tiga papan pemuka berprestasi tinggi untuk Jabatan Penguatkuasaan, Pelesenan, dan Perbendaharaan Majlis Bandaraya Ipoh menggunakan integrasi Google Maps dan pengoptimuman API.",
      "proj.mikerTitle": "Sistem Penilaian Prestasi Pekerja Miker Signature",
      "proj.mikerDesc": "Aplikasi web perusahaan yang dibangunkan untuk Miker Signature. Menyelaraskan penilaian kendiri, penskoran penyelia, papan pemuka analitik KPI masa nyata, dan laporan pengauditan pentadbir.",
      "proj.wargaTitle": "Warga Emas Celik Digital (SULAM x JPKK)",
      "proj.wargaDesc": "Pengarah Program dengan kerjasama JPKK Kg. Budiman. Menerajui modul celik digital praktikal untuk warga emas meliputi transaksi Shopee yang selamat, panduan keselamatan TikTok, dan penjadualan Google Calendar.",

      "lead.tag": "TADBIR URUS EKSEKUTIF",
      "lead.title": "Kepimpinan Mahasiswa Berimpak Tinggi",
      "lead.subtitle": "Rekod kepimpinan yang terbukti dengan kejayaan menganjurkan 60+ program universiti dan mewakili UiTM merentasi empat negara.",
      "lead.ydpBadge": "PRESIDEN • 2024–2025",
      "lead.ydpTitle": "Presiden, Jawatankuasa Perwakilan Kolej",
      "lead.ydpDesc": "Menerajui kepimpinan tertinggi Kolej Kediaman Teratai, memimpin jawatankuasa menjayakan lebih 60 program kokurikulum berimpak tinggi. Mengurus belanjawan universiti, kebajikan ribuan mahasiswa, protokol keselamatan, dan kerjasama agensi luar.",
      "lead.programsCompleted": "Program Dijayakan",
      "lead.countriesEngaged": "Negara Dihubungkan",
      "lead.auditCompliance": "Tadbir Urus Audit",
      "lead.directorRoles": "Peneraju Strategik Utama:",
      "lead.intlRoles": "Misi Diplomasi Antarabangsa:",

      "pub.tag": "PENYELIDIKAN AKADEMIK",
      "pub.title": "Kertas Penyelidikan & Penerbitan Ilmiah",
      "pub.subtitle": "Penulis bersama 3 artikel berindeks Malaysian Citation Index (MyCite) dengan anugerah berganda Best Paper di ISDev 2024.",
      "pub.readArticle": "Baca Artikel Jurnal",

      "skills.tag": "SENJATA TEKNIKAL",
      "skills.title": "Kemahiran, Perisian & Alatan Pembangunan AI",
      "skills.catDev": "Pengaturcaraan & Pangkalan Data",
      "skills.catAi": "Alatan Pembangunan AI",
      "skills.catBi": "Business Intelligence & Analitik",
      "skills.catProfessional": "Kemahiran Profesional & Bahasa",
      "skills.fluentMalay": "Fasih / Bahasa Ibunda",
      "skills.fluentEng": "Kefasihan Profesional",

      "contact.tag": "HUBUNGI SAYA",
      "contact.title": "Mari Berhubung & Cipta Impak Bersama",
      "contact.subtitle": "Terbuka untuk jawatan jurutera perisian, penganalisis sistem, prototaip IoT, dan kolaborasi teknikal.",
      "contact.infoHeading": "Maklumat Perhubungan",
      "contact.infoSub": "Sila hubungi saya terus melalui WhatsApp, e-mel, atau LinkedIn. Saya biasanya membalas dalam tempoh 24 jam.",
      "contact.cvBoxTitle": "Kurikulum Vitae Terkini (PDF)",
      "contact.cvBoxSub": "Dikemas kini dengan Simple Advantage, eSawah360, MBI, dan Ijazah.",
      "contact.formHeading": "Hantar Pertanyaan Terus",
      "contact.nameLabel": "Nama / Organisasi Anda",
      "contact.emailLabel": "Alamat E-mel Anda",
      "contact.subjectLabel": "Subjek",
      "contact.messageLabel": "Mesej Anda",
      "contact.sendBtn": "Hantar Mesej melalui E-mel / WhatsApp",

      "footer.quote": "\"Membangunkan Sistem Pintar, Seni Bina IoT, dan Kepimpinan Berwawasan.\"",

      "modal.close": "Tutup",
      "modal.discuss": "Bincang bersama Al-Amin",
      "modal.gotIt": "Faham, Tutup Panduan",

      "ai.title": "Pembantu AI Al-Amin",
      "ai.subtitle": "Jawapan pantas mengenai peranan perisian, IoT, FYP, dan kepimpinan",
      "ai.suggested": "Soalan Popular:",
      "ai.welcomeMsg": "👋 Salam! Saya pembantu portfolio automatik bagi Muhammad Noor Al-Amin. Tanyakan mengenai pengalaman beliau di Simple Advantage, eSawah360 IoT, papan pemuka MBI, atau ijazah UiTM!",

      "hosting.title": "Cara Menerbitkan Portfolio Ini Secara PERCUMA",
      "hosting.intro": "Portfolio ini telah disambungkan ke GitHub (aminakram00/my-portfolio) dan sedia dideploy secara 1-klik di Netlify:"
    }
  };

  // -------------------------------------------------------------------------
  // 1. Multilingual Toggle Engine (EN & BM)
  // -------------------------------------------------------------------------
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langFlag = document.getElementById('langFlag');
  const langText = document.getElementById('langText');

  let currentLang = localStorage.getItem('site_lang') || 'en';

  function updateLanguageUI(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (langFlag && langText) {
      if (lang === 'bm') {
        langFlag.textContent = '🇬🇧';
        langText.textContent = 'EN';
      } else {
        langFlag.textContent = '🇲🇾';
        langText.textContent = 'BM';
      }
    }
  }

  // Initialize Language
  updateLanguageUI(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = currentLang === 'en' ? 'bm' : 'en';
      localStorage.setItem('site_lang', currentLang);
      updateLanguageUI(currentLang);
      showToast(currentLang === 'bm' ? 'Bahasa ditukar ke Bahasa Melayu' : 'Language switched to English');
    });
  }

  // -------------------------------------------------------------------------
  // 2. Theme Switcher (Dark / Light Mode)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  let currentTheme = localStorage.getItem('site_theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-sun theme-icon';
      } else {
        themeIcon.className = 'fa-solid fa-moon theme-icon';
      }
    }
    localStorage.setItem('site_theme', theme);
  }

  // Initialize Theme
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      showToast(currentTheme === 'dark' ? 'Dark Mode Activated' : 'Light Mode Activated');
    });
  }

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // -------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
  });

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
  }

  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // -------------------------------------------------------------------------
  // 4. Animated Typewriter in Hero
  // -------------------------------------------------------------------------
  const typewriterText = document.getElementById('typewriterText');
  const roles = [
    "Software Engineering & IoT Solutions",
    "eSawah360 LoRaWAN Field Telemetry",
    "PDRM & CIDB Rapid System Prototypes",
    "MBI Geospatial Municipal Dashboards",
    "Youth Governance & Executive Leadership"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
      typewriterText.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      typewriterText.textContent = current.substring(0, charIdx);
    }

    let typeSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIdx === current.length) {
      typeSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before new word
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();



  // -------------------------------------------------------------------------
  // 6. Interactive Case Study Modals (Updated for eSawah360 & MBI)
  // -------------------------------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeCaseStudyModal = document.getElementById('closeCaseStudyModal');
  const closeCaseStudyModalBtn = document.getElementById('closeCaseStudyModalBtn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  const projectDetails = {
    esawah: {
      tag: "IoT & Smart Agriculture • Simple Advantage Sdn. Bhd.",
      title: "eSawah360: Smart Paddy Field LoRaWAN IoT Ecosystem",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/project_esawah.jpg" alt="eSawah360 IoT Architecture" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px; aspect-ratio: 16/9; object-fit: cover;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Engineering Scope & Problem Statement</h4>
          <p style="margin-bottom: 14px;">Traditional paddy farming in Malaysia faces unpredictable irrigation cycles, soil pH imbalances, and unmonitored water levels leading to crop yield losses. Simple Advantage Sdn. Bhd. initiated eSawah360 to bring precision agriculture IoT to commercial rice farming.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Key Technical Contributions</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Built IoT Structure from Scratch:</strong> Engineered the end-to-end device integration pipeline linking remote field sensors to cloud telemetry ingestion.</li>
            <li><strong>LoRaWAN Long-Range Connectivity:</strong> Configured battery-efficient LoRaWAN nodes capable of transmitting sensor telemetry across hectares of terrain without cellular dependency.</li>
            <li><strong>Multi-Sensor Telemetry:</strong> Live ingestion of soil moisture, ambient temperature, humidity, and water level metrics.</li>
            <li><strong>AI-Assisted Prototyping:</strong> Leveraged <strong>Antigravity IDE & Cursor AI</strong> to architect rapid backend endpoints and analytics dashboard prototypes for stakeholders.</li>
          </ul>

          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
            <span class="skill-mini-pill">✓ LoRaWAN Telemetry</span>
            <span class="skill-mini-pill">✓ Antigravity IDE Prototyping</span>
            <span class="skill-mini-pill">✓ Real-Time Soil & Water Monitoring</span>
          </div>
        </div>
      `
    },
    mbi: {
      tag: "Municipal GIS & Analytics • Majlis Bandaraya Ipoh",
      title: "MBI Geospatial City Dashboards & Route Optimization",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/project_mbi.jpg" alt="MBI Departmental Dashboards" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px; aspect-ratio: 16/9; object-fit: cover;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Municipal Challenge</h4>
          <p style="margin-bottom: 14px;">Majlis Bandaraya Ipoh (MBI) needed consolidated, fast-loading visual dashboards for three critical civic branches: <strong>Enforcement</strong>, <strong>Licensing</strong>, and <strong>Treasury</strong> to streamline municipal surveillance and revenue recovery.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Engineering Deliverables</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Three API-Driven Dashboards:</strong> Designed responsive interfaces displaying real-time inspection records, premise licenses, and tax arrears.</li>
            <li><strong>API Call Optimization:</strong> Refactored backend queries and front-end fetching mechanisms, cutting data loading times by over 40%.</li>
            <li><strong>Geospatial Routing & Hotspot Mapping:</strong> Embedded Google Maps API to plot inspection routes and highlight clusters of zoning violations and outstanding assessment tax.</li>
          </ul>

          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
            <span class="skill-mini-pill">✓ Google Maps GIS</span>
            <span class="skill-mini-pill">✓ 40% Latency Reduction</span>
            <span class="skill-mini-pill">✓ Enforcement Hotspot Tracking</span>
          </div>
        </div>
      `
    },
    miker: {
      tag: "Final Year Capstone Project (FYP)",
      title: "Miker Signature Employee Performance Assessment System",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/project_miker.jpg" alt="Miker System Architecture" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px; aspect-ratio: 16/9; object-fit: cover;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Executive Problem Statement</h4>
          <p style="margin-bottom: 14px;">Miker Signature faced operational inefficiencies relying on fragmented physical evaluation forms and manual scoring for staff across multiple restaurant departments. This created review backlogs, subjective bias, and delayed managerial decision-making.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Engineering & System Architecture</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Role-Based Access Control (RBAC):</strong> Tailored interfaces for Employees (self-review), Department Supervisors (weighted rubric scoring), and Administrators/Franchise Owners.</li>
            <li><strong>Automated Appraisal Matrix:</strong> Instant scoring calculation based on KPIs, punctuality, leadership, hygiene, and customer engagement.</li>
            <li><strong>Dynamic Analytics Dashboards:</strong> Interactive charts rendering department-level performance trends and historical comparative evaluations.</li>
            <li><strong>Audit Trail & Exporting:</strong> Automated generation of evaluation reports and monthly summaries for HR compensation and training planning.</li>
          </ul>

          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
            <span class="skill-mini-pill">✓ 94.8% Assessment Efficiency</span>
            <span class="skill-mini-pill">✓ Zero Paperwork Waste</span>
            <span class="skill-mini-pill">✓ 100% On-Time Supervisor Submission</span>
          </div>
        </div>
      `
    },
    wargaemas: {
      tag: "Community Transformation & SULAM",
      title: "Warga Emas Celik Digital — Kg. Budiman",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/project_wargaemas.jpg" alt="Warga Emas Celik Digital Modules" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px; aspect-ratio: 16/9; object-fit: cover;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Program Vision & Community Context</h4>
          <p style="margin-bottom: 14px;">Organized under the Service Learning Malaysia (SULAM) framework in direct partnership with Jawatankuasa Pembangunan dan Keselamatan Kampung (JPKK) Kampung Budiman. Addressed the digital divide among elderly rural residents.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Key Educational Modules Delivered</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Shopee & E-Commerce Safety:</strong> Training seniors on navigating product listings, detecting fake reviews, and executing secure payment transactions.</li>
            <li><strong>TikTok Digital Literacy:</strong> Safe consumption of online video news, basic creative video sharing, and fraud awareness against cyber scams.</li>
            <li><strong>Google Calendar Routine Management:</strong> Scheduling daily medical checkups, medication reminders, and community events on mobile devices.</li>
          </ul>
        </div>
      `
    }
  };

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (data) {
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.html;
        caseStudyModal.classList.add('active');
        caseStudyModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  function closeProjectModal() {
    caseStudyModal.classList.remove('active');
    caseStudyModal.setAttribute('aria-hidden', 'true');
  }

  closeCaseStudyModal.addEventListener('click', closeProjectModal);
  closeCaseStudyModalBtn.addEventListener('click', closeProjectModal);
  caseStudyModal.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) closeProjectModal();
  });



  // -------------------------------------------------------------------------
  // 8. Free Domain & Deployment Guide Modal
  // -------------------------------------------------------------------------
  const hostingGuideModal = document.getElementById('hostingGuideModal');
  const footerHostingBtn = document.getElementById('footerHostingBtn');
  const drawerHostingBtn = document.getElementById('drawerHostingBtn');
  const closeHostingModal = document.getElementById('closeHostingModal');
  const closeHostingModalBtn = document.getElementById('closeHostingModalBtn');

  function openHostingModal() {
    hostingGuideModal.classList.add('active');
    hostingGuideModal.setAttribute('aria-hidden', 'false');
  }

  function closeHostingDialog() {
    hostingGuideModal.classList.remove('active');
    hostingGuideModal.setAttribute('aria-hidden', 'true');
  }

  if (footerHostingBtn) footerHostingBtn.addEventListener('click', openHostingModal);
  if (drawerHostingBtn) drawerHostingBtn.addEventListener('click', () => {
    closeDrawer();
    openHostingModal();
  });
  if (closeHostingModal) closeHostingModal.addEventListener('click', closeHostingDialog);
  if (closeHostingModalBtn) closeHostingModalBtn.addEventListener('click', closeHostingDialog);
  hostingGuideModal.addEventListener('click', (e) => {
    if (e.target === hostingGuideModal) closeHostingDialog();
  });

  // -------------------------------------------------------------------------
  // 9. Contact Form Submission
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    const submitBtn = document.getElementById('submitFormBtn');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Preparing Email...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2500);
    }

    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:alaminakram21@gmail.com?subject=${encodeURIComponent(subject + " - " + name)}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    showToast("Opening email client... You can also chat directly via WhatsApp!");
    contactForm.reset();
  });

  // -------------------------------------------------------------------------
  // 10. Toast Notification Utility
  // -------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');
  function showToast(msg, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-accent"></i> <span>${msg}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // -------------------------------------------------------------------------
  // 11. Interactive Button Ripple System
  // -------------------------------------------------------------------------
  const interactiveElements = document.querySelectorAll('.btn, .action-btn, .quick-contact-pill, .view-project-btn, .social-link');
  interactiveElements.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      circle.classList.add('ripple-wave');

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      this.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  });

  // -------------------------------------------------------------------------
  // 12. Active Scrollspy for Navbar
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksList.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
