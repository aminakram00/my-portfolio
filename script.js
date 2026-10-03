/**
 * AL-AMIN AKRAM PORTFOLIO INTERACTION ENGINE
 * Multilingual (EN/BM), Theme Switcher, Modals, Filter, AI Assistant Q&A
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Translations Dictionary (EN & BM)
  // -------------------------------------------------------------------------
  const translations = {
    en: {
      "nav.about": "About",
      "nav.education": "Education",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.leadership": "Leadership",
      "nav.publications": "Publications",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.resume": "Resume",
      "nav.home": "Home",
      "nav.hostingGuide": "Free Domain Guide",

      "hero.status": "Actively Seeking Internship & Immediate Roles",
      "hero.greeting": "Hello, I'm",
      "hero.rolePrefix": "Specialized in",
      "hero.bio": "A proactive and driven Business Computing undergraduate at Universiti Teknologi MARA (UiTM) Shah Alam. Skilled in aligning technology with enterprise needs through systems development, process optimization, and proven youth governance.",
      "hero.statCgpa": "UiTM CGPA",
      "hero.statPrograms": "Initiatives Led (YDP)",
      "hero.statPublications": "MyCite Journals",
      "hero.statDelegations": "Int'l Delegations",
      "hero.viewProjects": "Explore Systems & Projects",
      "hero.downloadResume": "Download Resume PDF",
      "hero.askAi": "Ask Al-Amin AI",

      "about.tag": "PROFESSIONAL PROFILE",
      "about.title": "Bridging Business Strategy with Computing Excellence",
      "about.subtitle": "A fusion of analytical thinking, enterprise software knowledge, and proven executive leadership.",
      "about.bioTitle": "About Al-Amin",
      "about.bioP1": "I am an energetic and methodical Business Computing undergraduate from Universiti Teknologi MARA (UiTM) Kampus Shah Alam, maintaining a CGPA of 3.33. My academic focus centers on Business Process Management, Database Management Systems, Enterprise Information Systems (EIS), and Information System Auditing.",
      "about.bioP2": "Beyond software engineering and system architecture, I bring exceptional leadership pedigree: serving as Yang Di-Pertua (President) of the College Representative Committee, overseeing 60+ university initiatives, representing UiTM on international delegations to Indonesia, Singapore, and Hong Kong, and authoring 3 peer-reviewed journal papers.",
      "about.v1Title": "Business Process Alignment",
      "about.v1Desc": "Analyzing operational bottlenecks and designing automated workflows that increase productivity.",
      "about.v2Title": "Data-Driven Decision Making",
      "about.v2Desc": "Transforming raw organizational data into actionable dashboards using Power BI and MySQL.",
      "about.v3Title": "Strategic Stakeholder Governance",
      "about.v3Desc": "Proven capability to lead large teams, manage international diplomacy, and coordinate high-stakes events.",
      "about.refTitle": "Academic Endorsements & Mentors",
      "about.refSubtitle": "Endorsed by senior university leadership and faculty deans for integrity, project execution, and academic discipline:",
      "about.ref1Role": "Faculty Dean | Faculty of Computer & Mathematical Sciences (FSKM)",
      "about.ref2Role": "Principal (Pengetua) | Kolej Kediaman Teratai",
      "about.verifyNote": "Direct reference verifications available upon request.",
      "about.contactAction": "Contact Al-Amin",

      "edu.tag": "ACADEMIC FOUNDATION",
      "edu.title": "Education & Specialized Coursework",
      "edu.degree": "Bachelor of Information Technology (Hons.) in Business Computing",
      "edu.courseworkTitle": "Core Academic Disciplines & Competencies:",

      "exp.tag": "CAREER MILESTONES",
      "exp.title": "Work & Operational Experience",
      "exp.role": "Assistant Manager",
      "exp.desc": "Entrusted with daily operational management, financial reconciliation, inventory control, and staff supervision. Applied business computing tools to optimize retail data and store efficiency.",
      "exp.b1": "Managed Point of Sale (POS) infrastructure and cash reconciliation with 100% daily accuracy.",
      "exp.b2": "Conducted inventory auditing and stock level forecasting, minimizing stockouts and shrinkage.",
      "exp.b3": "Coordinated staff shift scheduling, conflict resolution, and customer service quality benchmarks.",
      "exp.b4": "Synthesized weekly sales performance data to assist the franchise owner in commercial planning.",

      "proj.tag": "SYSTEMS & INITIATIVES",
      "proj.title": "Featured Projects & Case Studies",
      "proj.subtitle": "From enterprise web architectures to digital literacy initiatives empowering local communities.",
      "proj.tabAll": "All Projects",
      "proj.tabSystems": "Web & Systems",
      "proj.tabCommunity": "Community Digital Literacy",
      "proj.tabLeadership": "Leadership & Events",
      "proj.viewDetails": "View Case Study",
      "proj.exploreArchitecture": "Explore Architecture & Metrics",
      "proj.exploreImpact": "Explore Community Impact",
      "proj.exploreDelegation": "View International Records",
      "proj.exploreAwards": "View Awards & Trophies",
      "proj.mikerTitle": "Miker Signature Employee Performance Assessment System",
      "proj.mikerDesc": "A full-featured web application engineered for Miker Signature. Streamlines performance appraisals via self-evaluations, supervisor scoring, weighted metrics, real-time KPI dashboards, and administrative auditing.",
      "proj.wargaTitle": "Warga Emas Celik Digital (SULAM x JPKK)",
      "proj.wargaDesc": "Served as Program Director in collaboration with JPKK Kg. Budiman. Directed hands-on digital literacy modules for senior citizens, training them on Shopee e-commerce, TikTok digital safety, and Google Calendar scheduling.",
      "proj.delegationTitle": "Asean Educational Expedition & International LOI Signatory",
      "proj.delegationDesc": "Official UiTM student representative in multilateral delegations across Indonesia (UIB, UNI, USI), Singapore, and Hong Kong. Led the signing of academic Letter of Intent (LOI) and published research on organizational sustainability.",
      "proj.sidradikaTitle": "Sidradika Ensemble Production & Arts Festival Direction",
      "proj.sidradikaDesc": "Executive Manager for Sidradika Ensemble. Led the team to capture the prestigious Gold Award (Category B5: Pop Vocal Ensemble) at the MCE International Choir Festival and multiple national-level singing championships.",

      "lead.tag": "EXECUTIVE LEADERSHIP",
      "lead.title": "Proven High-Impact Governance & Student Leadership",
      "lead.subtitle": "Demonstrated track record of orchestrating 60+ university initiatives and representing UiTM on global stages.",
      "lead.ydpBadge": "HIGHEST STUDENT RESIDENTIAL OFFICE",
      "lead.ydpTitle": "Yang Di-Pertua (YDP / President)",
      "lead.ydpDesc": "Spearheaded the executive governance of Kolej Kediaman Teratai, leading the committee to successfully accomplish over 60 high-impact extracurricular programs. Managed university budgets, welfare for thousands of residential students, crisis management protocols, and multi-agency partnerships.",
      "lead.programsCompleted": "Programs Executed",
      "lead.countriesEngaged": "Countries Engaged",
      "lead.auditCompliance": "Governance Compliance",
      "lead.directorRoles": "Director & Strategic Leads:",
      "lead.intlRoles": "International Diplomatic Missions:",

      "pub.tag": "ACADEMIC RIGOR",
      "pub.title": "Published Research & Academic Papers",
      "pub.subtitle": "Co-authored peer-reviewed research indexed in the Malaysian Citation Index (MyCite) and recognized with multiple conference best paper awards.",
      "pub.readArticle": "Read Journal Article",

      "awards.tag": "ACCOLADES & RECOGNITION",
      "awards.title": "Honors & Competitions Won",

      "skills.tag": "TECHNICAL ARSENAL",
      "skills.title": "Skills, Tools & Enterprise Systems",
      "skills.catDev": "Programming & Database",
      "skills.catSoftware": "Enterprise Softwares & Analytics",
      "skills.catSoft": "Leadership & Soft Skills",
      "skills.catLang": "Languages",
      "skills.native": "Native / Mother Tongue",
      "skills.fluent": "Professional Fluency",

      "contact.tag": "GET IN TOUCH",
      "contact.title": "Let's Connect & Build Impact Together",
      "contact.subtitle": "Open for internship placements, graduate trainee programs, digital transformation initiatives, and speaking engagements.",
      "contact.infoHeading": "Contact Information",
      "contact.infoSub": "Feel free to reach out directly via WhatsApp, email, or LinkedIn. I typically respond within 24 hours.",
      "contact.cvBoxTitle": "Curriculum Vitae (PDF)",
      "contact.cvBoxSub": "Comprehensive academic, extracurricular and publications record.",
      "contact.formHeading": "Send a Direct Inquiry",
      "contact.nameLabel": "Your Name / Organization",
      "contact.emailLabel": "Your Email Address",
      "contact.subjectLabel": "Subject",
      "contact.messageLabel": "Your Message",
      "contact.sendBtn": "Send Message via Email / WhatsApp",

      "footer.quote": "\"Empowering Organizations Through Intelligent Computing & Purposeful Leadership.\"",

      "modal.close": "Close",
      "modal.discuss": "Discuss with Al-Amin",
      "modal.gotIt": "Understood, Let's Publish!",

      "ai.title": "Ask Al-Amin AI Assistant",
      "ai.subtitle": "Instant answers regarding qualifications, FYP, and leadership",
      "ai.suggested": "Popular Questions:",
      "ai.welcomeMsg": "👋 Hello! I am the automated portfolio assistant for Al-Amin Akram. Ask me anything about his qualifications, web-based FYP system, university presidency (YDP), or research publications!",

      "hosting.title": "How to Publish This Portfolio for FREE",
      "hosting.intro": "This portfolio is built with pure, high-performance modern web standards (HTML5, Vanilla CSS, JavaScript). You can host it 100% free with automatic SSL (https://) and custom free subdomains in under 3 minutes using any of the following top platforms:"
    },

    bm: {
      "nav.about": "Tentang Saya",
      "nav.education": "Pendidikan",
      "nav.experience": "Pengalaman",
      "nav.projects": "Projek",
      "nav.leadership": "Kepimpinan",
      "nav.publications": "Penerbitan",
      "nav.skills": "Kemahiran",
      "nav.contact": "Hubungi",
      "nav.resume": "Resume",
      "nav.home": "Utama",
      "nav.hostingGuide": "Panduan Domain Percuma",

      "hero.status": "Bersedia Untuk Latihan Industri & Peluang Kerjaya",
      "hero.greeting": "Salam Sejahtera, Saya",
      "hero.rolePrefix": "Pengkhususan dalam",
      "hero.bio": "Pelajar Ijazah Sarjana Muda Pengkomputeran Perniagaan yang proaktif dan berwawasan di Universiti Teknologi MARA (UiTM) Shah Alam. Mahir menyelaraskan teknologi dengan keperluan organisasi melalui pembangunan sistem, penambahbaikan proses, serta kepimpinan belia berimpak tinggi.",
      "hero.statCgpa": "CGPA UiTM",
      "hero.statPrograms": "Program Diterajui (YDP)",
      "hero.statPublications": "Jurnal MyCite",
      "hero.statDelegations": "Delegasi Antarabangsa",
      "hero.viewProjects": "Lihat Sistem & Projek",
      "hero.downloadResume": "Muat Turun Resume PDF",
      "hero.askAi": "Tanya AI Al-Amin",

      "about.tag": "PROFIL PROFESIONAL",
      "about.title": "Menghubungkan Strategi Perniagaan dengan Keunggulan Pengkomputeran",
      "about.subtitle": "Gabungan pemikiran analitikal, kemahiran sistem perusahaan, dan rekod kepimpinan eksekutif yang terbukti.",
      "about.bioTitle": "Mengenai Al-Amin",
      "about.bioP1": "Saya merupakan mahasiswa Pengkomputeran Perniagaan UiTM Shah Alam dengan pencapaian CGPA 3.33. Fokus akademik saya tertumpu kepada Pengurusan Proses Perniagaan (BPM), Sistem Pangkalan Data (DBMS), Sistem Maklumat Perusahaan (EIS), serta Pengauditan Sistem Maklumat.",
      "about.bioP2": "Selain kepakaran teknikal pembangunan perisian, saya memiliki rekod kepimpinan yang mantap: berkhidmat sebagai Yang Di-Pertua (YDP) Jawatankuasa Perwakilan Kolej Teratai (menjayakan 60+ program), wakil delegasi rasmi UiTM ke Indonesia, Singapura, dan Hong Kong, serta menerbitkan 3 kertas penyelidikan jurnal berindeks.",
      "about.v1Title": "Penjajaran Proses Perniagaan",
      "about.v1Desc": "Menganalisis kekangan operasi dan mereka bentuk aliran kerja automatik bagi meningkatkan kecekapan.",
      "about.v2Title": "Pembuatan Keputusan Berasaskan Data",
      "about.v2Desc": "Mengubah data mentah organisasi kepada papan pemuka visual berwawasan menggunakan Power BI dan MySQL.",
      "about.v3Title": "Tadbir Urus & Diplomasi Strategik",
      "about.v3Desc": "Berkeupayaan memimpin pasukan berskala besar, mengurus belanjawan rasmi, serta mengetuai delegasi merentas sempadan.",
      "about.refTitle": "Pengesyoran Akademik & Mentor",
      "about.refSubtitle": "Disokong oleh pucuk pimpinan universiti dan dekan fakulti atas integriti, disiplin dan pelaksanaan projek berimpak tinggi:",
      "about.ref1Role": "Dekan Fakulti | Fakulti Sains Komputer dan Matematik (FSKM)",
      "about.ref2Role": "Pengetua | Kolej Kediaman Teratai",
      "about.verifyNote": "Pengesahan rujukan terus sedia disediakan atas permintaan.",
      "about.contactAction": "Hubungi Al-Amin",

      "edu.tag": "ASAS AKADEMIK",
      "edu.title": "Pendidikan & Pengkhususan Kursus",
      "edu.degree": "Sarjana Muda Teknologi Maklumat (Kepujian) Pengkomputeran Perniagaan",
      "edu.courseworkTitle": "Disiplin & Kompetensi Akademik Utama:",

      "exp.tag": "PENGALAMAN KERJAYA",
      "exp.title": "Pengalaman Kerja & Operasi",
      "exp.role": "Penolong Pengurus (Assistant Manager)",
      "exp.desc": "Diamanahkan mengendalikan pengurusan operasi harian, kawalan inventori, penyelarasan kakitangan, serta pelaporan jualan. Memanfaatkan alatan pengkomputeran perniagaan bagi memacu kecekapan kedai.",
      "exp.b1": "Menguruskan sistem Point of Sale (POS) dan rekonsiliasi tunai harian dengan ketepatan 100%.",
      "exp.b2": "Menjalankan audit inventori berkala serta unjuran stok bagi meminimumkan pembaziran dan kekurangan barangan.",
      "exp.b3": "Menyelaras jadual syif kakitangan, resolusi aduan pelanggan, dan kawalan kualiti perkhidmatan.",
      "exp.b4": "Menyediakan analisis data jualan mingguan untuk menyokong perancangan komersial pemilik cawangan.",

      "proj.tag": "SISTEM & INISIATIF",
      "proj.title": "Projek Pilihan & Kajian Kes",
      "proj.subtitle": "Dari seni bina sistem web perusahaan hingga inisiatif celik digital komuniti setempat.",
      "proj.tabAll": "Semua Projek",
      "proj.tabSystems": "Web & Sistem",
      "proj.tabCommunity": "Celik Digital Komuniti",
      "proj.tabLeadership": "Kepimpinan & Acara",
      "proj.viewDetails": "Lihat Kajian Kes",
      "proj.exploreArchitecture": "Terokai Seni Bina & Metrik",
      "proj.exploreImpact": "Lihat Impak Komuniti",
      "proj.exploreDelegation": "Lihat Rekod Delegasi",
      "proj.exploreAwards": "Lihat Anugerah & Trofi",
      "proj.mikerTitle": "Sistem Penilaian Prestasi Pekerja Miker Signature",
      "proj.mikerDesc": "Aplikasi web perusahaan yang dibangunkan untuk Miker Signature. Menyelaraskan penilaian kendiri, penskoran penyelia, papan pemuka analitik KPI masa nyata, dan laporan pengauditan pentadbir.",
      "proj.wargaTitle": "Warga Emas Celik Digital (SULAM x JPKK)",
      "proj.wargaDesc": "Pengarah Program dengan kerjasama JPKK Kg. Budiman. Menerajui modul celik digital praktikal untuk warga emas meliputi transaksi Shopee yang selamat, panduan keselamatan TikTok, dan penjadualan Google Calendar.",
      "proj.delegationTitle": "Asean Educational Expedition & Penandatanganan LOI Antarabangsa",
      "proj.delegationDesc": "Wakil rasmi mahasiswa UiTM dalam delegasi pelbagai hala merentasi Indonesia (UIB, UNI, USI), Singapura, dan Hong Kong. Menandatangani Memorandum Persefahaman (LOI) akademik dan menerbitkan penyelidikan kemampanan pengurusan.",
      "proj.sidradikaTitle": "Pengurusan Produksi & Festival Muzik Sidradika",
      "proj.sidradikaDesc": "Pengurus Eksekutif Ensembel Sidradika. Membimbing pasukan merangkul Anugerah Emas (Gold Award Kategori B5: Pop Vocal Ensemble) di Festival Koir Antarabangsa MCE serta pelbagai kejuaraan nyanyian.",

      "lead.tag": "TADBIR URUS EKSEKUTIF",
      "lead.title": "Kepimpinan Mahasiswa Berimpak Tinggi",
      "lead.subtitle": "Rekod kepimpinan yang terbukti dengan kejayaan menganjurkan 60+ program universiti dan mewakili UiTM di persada antarabangsa.",
      "lead.ydpBadge": "JAWATAN TERTINGGI RESIDENSI MAHASISWA",
      "lead.ydpTitle": "Yang Di-Pertua (YDP / Presiden)",
      "lead.ydpDesc": "Menerajui pucuk kepimpinan Kolej Kediaman Teratai, memimpin jawatankuasa menjayakan lebih 60 program kokurikulum berimpak tinggi. Mengurus belanjawan universiti, kebajikan ribuan mahasiswa, protokol keselamatan, dan kerjasama agensi luar.",
      "lead.programsCompleted": "Program Dijayakan",
      "lead.countriesEngaged": "Negara Dihubungkan",
      "lead.auditCompliance": "Pematuhan Tadbir Urus",
      "lead.directorRoles": "Pengarah & Peneraju Strategik:",
      "lead.intlRoles": "Misi Diplomasi Antarabangsa:",

      "pub.tag": "PENYELIDIKAN AKADEMIK",
      "pub.title": "Kertas Penyelidikan & Penerbitan Ilmiah",
      "pub.subtitle": "Penulis bersama kertas penyelidikan yang diindeks dalam Malaysian Citation Index (MyCite) dan memenangi anugerah Best Paper.",
      "pub.readArticle": "Baca Artikel Jurnal",

      "awards.tag": "PENGIKTIRAFAN & PENCAPAIAN",
      "awards.title": "Anugerah & Pertandingan Dimenangi",

      "skills.tag": "SENJATA TEKNIKAL",
      "skills.title": "Kemahiran, Perisian & Sistem Maklumat",
      "skills.catDev": "Pengaturcaraan & Pangkalan Data",
      "skills.catSoftware": "Perisian Perusahaan & Analitis",
      "skills.catSoft": "Kepimpinan & Kemahiran Insaniah",
      "skills.catLang": "Bahasa Pertuturan",
      "skills.native": "Bahasa Ibunda (Fasih)",
      "skills.fluent": "Kefasihan Profesional",

      "contact.tag": "HUBUNGI SAYA",
      "contact.title": "Mari Berhubung & Cipta Impak Bersama",
      "contact.subtitle": "Terbuka untuk penempatan latihan industri, program eksekutif graduan, transformasi digital, dan jemputan pengacaraan/ucapan.",
      "contact.infoHeading": "Maklumat Perhubungan",
      "contact.infoSub": "Sila hubungi saya terus melalui WhatsApp, e-mel, atau LinkedIn. Saya biasanya membalas dalam tempoh 24 jam.",
      "contact.cvBoxTitle": "Kurikulum Vitae (PDF)",
      "contact.cvBoxSub": "Rekod komprehensif akademik, kepimpinan, dan senarai penerbitan penyelidikan.",
      "contact.formHeading": "Hantar Pertanyaan Terus",
      "contact.nameLabel": "Nama / Organisasi Anda",
      "contact.emailLabel": "Alamat E-mel Anda",
      "contact.subjectLabel": "Subjek",
      "contact.messageLabel": "Mesej Anda",
      "contact.sendBtn": "Hantar Mesej melalui E-mel / WhatsApp",

      "footer.quote": "\"Memperkasakan Organisasi Menerusi Pengkomputeran Pintar & Kepimpinan Berwawasan.\"",

      "modal.close": "Tutup",
      "modal.discuss": "Bincang bersama Al-Amin",
      "modal.gotIt": "Faham, Sedia Terbitkan!",

      "ai.title": "Pembantu AI Al-Amin",
      "ai.subtitle": "Jawapan pantas mengenai kelayakan, projek FYP, dan kepimpinan",
      "ai.suggested": "Soalan Popular:",
      "ai.welcomeMsg": "👋 Salam! Saya pembantu portfolio automatik bagi Al-Amin Akram. Tanyakan apa sahaja mengenai kelayakan beliau, sistem FYP Miker Signature, kepimpinan YDP Teratai, atau penerbitan jurnal beliau!",

      "hosting.title": "Cara Menerbitkan Portfolio Ini Secara PERCUMA",
      "hosting.intro": "Laman portfolio ini dibina menggunakan standard web moden (HTML5, Vanilla CSS, JavaScript). Anda boleh mengehoskannya 100% percuma bersama sijil SSL automatik (https://) dan domain percuma dalam masa 3 minit menggunakan platform berikut:"
    }
  };

  // Current Language state
  let currentLang = localStorage.getItem('site_lang') || 'en';
  document.documentElement.setAttribute('data-lang', currentLang);
  updateLanguageUI(currentLang);

  const langToggleBtn = document.getElementById('langToggleBtn');
  const langFlag = document.getElementById('langFlag');
  const langText = document.getElementById('langText');

  function updateLanguageUI(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (lang === 'bm') {
      langFlag.textContent = '🇬🇧';
      langText.textContent = 'EN';
    } else {
      langFlag.textContent = '🇲🇾';
      langText.textContent = 'BM';
    }
  }

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'bm' : 'en';
    localStorage.setItem('site_lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    updateLanguageUI(currentLang);
    showToast(currentLang === 'bm' ? 'Bahasa ditukar ke Bahasa Melayu' : 'Language switched to English');
  });

  // -------------------------------------------------------------------------
  // 2. Theme Switcher (Dark / Light Mode)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  let currentTheme = localStorage.getItem('site_theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('site_theme', theme);
  }

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    showToast(currentTheme === 'dark' ? 'Dark Mode Activated' : 'Light Mode Activated');
  });

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
    "Business Computing & Enterprise Systems",
    "Employee Performance Appraisal Systems",
    "Process Optimization & Data Analytics",
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
  // 5. Project Filtering Tabs
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 6. Interactive Case Study Modals
  // -------------------------------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeCaseStudyModal = document.getElementById('closeCaseStudyModal');
  const closeCaseStudyModalBtn = document.getElementById('closeCaseStudyModalBtn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  const projectDetails = {
    miker: {
      tag: "Final Year Capstone Project (FYP)",
      title: "Miker Signature Employee Performance Assessment System",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/miker_system.svg" alt="Miker System Architecture" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Executive Problem Statement</h4>
          <p style="margin-bottom: 14px;">Miker Signature faced operational inefficiencies relying on fragmented physical evaluation forms and manual scoring for staff across multiple restaurant departments. This created review backlogs, subjective bias, and delayed managerial decision-making.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Engineering & System Architecture</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Role-Based Access Control (RBAC):</strong> Tailored interfaces for Employees (self-review), Department Supervisors (weighted rubric scoring), and Administrators/Franchise Owners.</li>
            <li><strong>Automated Appraisal Matrix:</strong> Instant scoring calculation based on KPIs, punctuality, leadership, hygiene, and customer engagement.</li>
            <li><strong>Dynamic Analytics Dashboards:</strong> Interactive charts rendering department-level performance trends and historical comparative evaluations.</li>
            <li><strong>Audit Trail & Exporting:</strong> Automated generation of evaluation reports and monthly summaries for HR compensation and training planning.</li>
          </ul>

          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Tech Stack & Methodologies</h4>
          <p style="margin-bottom: 10px;">Built with <strong>PHP, MySQL, JavaScript, HTML5/CSS3</strong>, adhering to System Development Life Cycle (SDLC) best practices and business process optimization standards.</p>

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
          <img src="assets/warga_emas.svg" alt="Warga Emas Celik Digital Modules" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Program Vision & Community Context</h4>
          <p style="margin-bottom: 14px;">Organized under the Service Learning Malaysia (SULAM) framework in direct partnership with Jawatankuasa Pembangunan dan Keselamatan Kampung (JPKK) Kampung Budiman. Addressed the digital divide among elderly rural residents.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Key Educational Modules Delivered</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Shopee & E-Commerce Safety:</strong> Training seniors on navigating product listings, detecting fake reviews, and executing secure payment transactions.</li>
            <li><strong>TikTok Digital Literacy:</strong> Safe consumption of online video news, basic creative video sharing, and fraud awareness against cyber scams.</li>
            <li><strong>Google Calendar Routine Management:</strong> Scheduling daily medical checkups, medication reminders, and community events on mobile devices.</li>
          </ul>

          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Leadership & Role</h4>
          <p>Served as <strong>Program Director</strong>, managing volunteer mobilization, curriculum preparation, stakeholder alignment with village elders, and post-workshop digital surveys.</p>
        </div>
      `
    },
    delegation: {
      tag: "International Summit & Governance",
      title: "Asean Educational Expedition & Multilateral LOI",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/international_delegation.svg" alt="International Delegation Network" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Diplomatic Scope & Global Benchmarking</h4>
          <p style="margin-bottom: 14px;">Represented Universiti Teknologi MARA (UiTM) Malaysia as the lead student representative in high-level multilateral delegations with Student Representative Councils from Indonesia, Singapore, and Hong Kong.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Key Accomplishments</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>Signatory Representative for Letter of Intent (LOI):</strong> Official student representative in the formal signing of the historic LOI between UiTM, Universitas Internasional Batam (UIB), Universitas Nagoya Indonesia (UNI), and Universitas Semarang Indonesia (USI).</li>
            <li><strong>Co-Authored MyCite Research Paper:</strong> Evaluated the measurable impact of international programs on university organizational management sustainability (published in JISED 2024).</li>
            <li><strong>Hong Kong Universities Benchmarking:</strong> Participated in 'Project Beyond Boundaries', benchmarking student governance and technological infrastructure in premier Hong Kong institutions.</li>
            <li><strong>Singapura Cultural Protocol:</strong> Lead protocol officer for 'Jejak Diaspora Melayu @ Singapura 2024'.</li>
          </ul>
        </div>
      `
    },
    sidradika: {
      tag: "Arts Excellence & Ensemble Management",
      title: "Sidradika Ensemble — MCE International Choir Festival",
      html: `
        <div style="margin-bottom: 20px;">
          <img src="assets/sidradika.svg" alt="Sidradika Ensemble Achievements" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Executive Production Management</h4>
          <p style="margin-bottom: 14px;">Served as Manager for Sidradika Ensemble, orchestrating rehearsals, financial budgets, logistics, stage choreography, and artistic direction for premier competitive festivals.</p>
          
          <h4 style="color: var(--text-main); margin-bottom: 8px; font-size: 1.1rem;">Major Championship Trophies</h4>
          <ul style="padding-left: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
            <li><strong>🏆 Gold Award:</strong> Category B5 (Pop Vocal Ensemble) at the MCE International Choir Festival.</li>
            <li><strong>🥇 Champion:</strong> Solo Singing Competition in Karnival Budaya Kolej (KARYAKU 2024).</li>
            <li><strong>🥇 Champion:</strong> Group Nasheed in Karnival Islam Seroja (KARIS 2024).</li>
            <li><strong>🥈 1st Runner Up:</strong> Group Singing in Karnival Budaya Kolej (KARYAKU 2024).</li>
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
  // 7. Interactive AI Assistant / Resume Q&A ("Tanya Al-Amin")
  // -------------------------------------------------------------------------
  const aiAssistantModal = document.getElementById('aiAssistantModal');
  const openAiAssistantBtn = document.getElementById('openAiAssistantBtn');
  const closeAiModal = document.getElementById('closeAiModal');
  const aiChatStream = document.getElementById('aiChatStream');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiInput = document.getElementById('aiInput');
  const chipBtns = document.querySelectorAll('.chip-btn');

  openAiAssistantBtn.addEventListener('click', () => {
    aiAssistantModal.classList.add('active');
    aiAssistantModal.setAttribute('aria-hidden', 'false');
    aiInput.focus();
  });

  function closeAiDialog() {
    aiAssistantModal.classList.remove('active');
    aiAssistantModal.setAttribute('aria-hidden', 'true');
  }

  closeAiModal.addEventListener('click', closeAiDialog);
  aiAssistantModal.addEventListener('click', (e) => {
    if (e.target === aiAssistantModal) closeAiDialog();
  });

  // Knowledge Base for the AI assistant
  function getAiResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('fyp') || q.includes('miker') || q.includes('system') || q.includes('project') || q.includes('projek') || q.includes('sistem')) {
      return "💻 <strong>Final Year Project (FYP):</strong> Al-Amin engineered a web-based <em>Employee Performance Assessment System</em> for Miker Signature. It replaces paper reviews with digital self-evaluations, supervisor rubric scoring, real-time KPI distribution graphs, and automated administrative reports to boost review transparency and efficiency.";
    }

    if (q.includes('cgpa') || q.includes('degree') || q.includes('uitm') || q.includes('education') || q.includes('belajar') || q.includes('kelayakan')) {
      return "🎓 <strong>Education & Credentials:</strong> Al-Amin is an undergraduate studying <em>Bachelor of Information Technology (Hons.) in Business Computing</em> at UiTM Shah Alam with a stellar <strong>CGPA of 3.33</strong> (Second Class Upper). Key disciplines include Business Process Management (BPM), Database Systems (DBMS), Enterprise Information Systems (EIS), and IT Auditing.";
    }

    if (q.includes('ydp') || q.includes('lead') || q.includes('pimpin') || q.includes('kolej') || q.includes('teratai') || q.includes('activities') || q.includes('aktiviti')) {
      return "👑 <strong>Leadership & Governance:</strong> As <em>Yang Di-Pertua (President)</em> of Kolej Kediaman Teratai, Al-Amin successfully accomplished <strong>over 60 university and residential programs</strong>! He also served as Director for Strategic Planning (Bengkel Perancangan Strategik 2025) and represented UiTM internationally.";
    }

    if (q.includes('paper') || q.includes('research') || q.includes('journal') || q.includes('mycite') || q.includes('jurnal') || q.includes('isdev')) {
      return "📄 <strong>Research & Publications:</strong> Al-Amin has co-authored <strong>3 research papers indexed in MyCite (JISED)</strong>, winning <strong>two Best Paper Awards</strong> at the International Conference on Student Development (ISDev 2024) for studies on student development and hybrid orientation programs!";
    }

    if (q.includes('skill') || q.includes('tool') || q.includes('software') || q.includes('power bi') || q.includes('tech') || q.includes('kemahiran')) {
      return "🛠️ <strong>Technical Arsenal:</strong> Al-Amin is proficient in <strong>MySQL, JavaScript, PHP, HTML/CSS, C++</strong>, as well as enterprise software including <strong>Power BI, Odoo ERP, Dolibarr, MongoDB, Weka Data Mining, Figma, and Google AI Studio</strong>. He is bilingual in English (fluent) and Bahasa Melayu (native).";
    }

    if (q.includes('hire') || q.includes('contact') || q.includes('interview') || q.includes('kerja') || q.includes('hubungi') || q.includes('email') || q.includes('phone') || q.includes('whatsapp')) {
      return "🤝 <strong>Contact & Hiring:</strong> Al-Amin is actively seeking internship placements and early career opportunities in Business Computing, Systems Analysis, and Digital Transformation. You can WhatsApp him directly at <strong>+60 11-2382 4021</strong> or email at <strong>alaminakram21@gmail.com</strong>!";
    }

    if (q.includes('sidradika') || q.includes('award') || q.includes('singing') || q.includes('anugerah') || q.includes('menang')) {
      return "🏆 <strong>Awards & Arts Management:</strong> Al-Amin managed the Sidradika Ensemble to win the <strong>Gold Award in Category B5 (Pop Vocal Ensemble)</strong> at the MCE International Choir Festival, along with multiple university championships in solo and group singing.";
    }

    return "✨ Al-Amin Akram is a high-achieving Business Computing talent (CGPA 3.33) with hands-on systems development experience (FYP Web System), 3x MyCite published papers, and proven leadership as YDP leading 60+ programs. Feel free to ask specifically about his FYP, CGPA, leadership, or skills!";
  }

  function appendChat(role, message) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${role === 'user' ? 'user-bubble' : 'bot-bubble'}`;
    bubble.innerHTML = `<p>${message}</p>`;
    aiChatStream.appendChild(bubble);
    aiChatStream.scrollTop = aiChatStream.scrollHeight;
  }

  aiChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = aiInput.value.trim();
    if (!query) return;

    appendChat('user', query);
    aiInput.value = '';

    setTimeout(() => {
      const response = getAiResponse(query);
      appendChat('bot', response);
    }, 300);
  });

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const queryType = btn.getAttribute('data-query');
      let prompt = btn.textContent.replace(/^[^\s]+\s/, ''); // strip emoji
      appendChat('user', prompt);
      setTimeout(() => {
        const response = getAiResponse(queryType);
        appendChat('bot', response);
      }, 250);
    });
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

    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:alaminakram21@gmail.com?subject=${encodeURIComponent(subject + " - " + name)}&body=${mailtoBody}`;

    // Prompt user to choose email or whatsapp
    window.location.href = mailtoUrl;

    showToast("Opening email client... You can also chat via WhatsApp!");
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
  // 11. Active Scrollspy for Navbar
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
