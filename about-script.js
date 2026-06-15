document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. Loading Screen Controller (Max 3 Seconds)
  // ==========================================
  const initLoadingScreen = () => {
    const loader = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('loaderProgressBar');
    const percentageText = document.getElementById('loaderPercentage');
    const statusText = document.getElementById('loaderStatusText');
    const subtitleText = document.getElementById('loaderSubtitleText');
    const factText = document.getElementById('loaderFactText');

    if (!loader) return;

    // Loader facts array
    const loaderFacts = {
      en: [
        "Sujok means Hand and Foot. It is a natural healing therapy created by Park Jae Woo.",
        "The thumb corresponds to the head and neck, allowing remote regulation of brain and facial health.",
        "Six Ki Theory balances wind, heat, hotness, humidity, dryness, and coldness in the body.",
        "In seed therapy, living seeds release positive biological life energy to stimulate healing points."
      ],
      ta: [
        "சுஜோக் என்றால் கை மற்றும் கால் என்று பொருள். இது பேராசிரியர் பார்க் ஜே வூ என்பவரால் உருவாக்கப்பட்ட இயற்கை குணப்படுத்தும் முறையாகும்.",
        "பெருவிரல் தலை மற்றும் கழுத்தைக் குறிக்கிறது. இது மூளை மற்றும் முக ஆரோக்கியத்தை ஒழுங்குபடுத்த உதவுகிறது.",
        "சிக்ஸ் கி கோட்பாடு உடலின் காற்று, வெப்பம், அதிவெப்பம், ஈரப்பதம், வறட்சி, குளிர்ச்சி ஆகிய ஆறு ஆற்றல்களைச் சமநிலைப்படுத்துகிறது.",
        "விதை சிகிச்சையில், உயிருள்ள விதைகள் குணப்படுத்தும் புள்ளிகளைத் தூண்டுவதற்கு நேர்மறை உயிரியல் ஆற்றலை வெளியிடுகின்றன."
      ]
    };

    let progress = 0;
    const duration = 2400; // ms to reach 100%
    const intervalTime = 24; // update every 24ms
    const increment = 100 / (duration / intervalTime);
    
    // Animate progress bar and percentage
    const progressInterval = setInterval(() => {
      progress += increment;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        
        // Finalize status text
        if (statusText) {
          const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
          statusText.textContent = lang === 'ta' ? "சுஜோக் அறிவு வெற்றிகரமாக ஏற்றப்பட்டது!" : "Sujok Knowledge Loaded!";
        }
        if (subtitleText) {
          const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
          subtitleText.textContent = lang === 'ta' ? "தயாராக உள்ளது!" : "Ready!";
        }
        
        // Trigger fade out
        setTimeout(() => {
          loader.classList.add('fade-out');
          
          // Remove from layout after fade transition ends
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }, 100);
      }
      
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (percentageText) percentageText.textContent = `${Math.floor(progress)}%`;
    }, intervalTime);

    // Rotate facts every 900ms
    let factIndex = 0;
    const factInterval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(factInterval);
        return;
      }
      factIndex = (factIndex + 1) % 4;
      if (factText) {
        factText.style.opacity = 0;
        setTimeout(() => {
          const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
          factText.textContent = loaderFacts[lang][factIndex];
          factText.style.opacity = 1;
        }, 150);
      }
    }, 900);
  };

  // Run loader immediately
  initLoadingScreen();

  const translations = {
    en: {
      "announcement": "⚡ Sujok AI BOT is COMING SOON! Experience the Future of Natural Healing.",
      "badge-coming-soon": "COMING SOON",
      "nav-home": "Back to Home",
      "nav-cta": "Get in Touch",
      
      "title": "Sujok AI BOT (Coming Soon) - Treatment Modalities",
      "header-title": "Sujok Therapy Modalities",
      "header-subtitle": "Explore the natural methods used in Sujok to stimulate healing points and restore energy balance.",
      
      "needles-title": "Needles & Acupressure",
      "needles-desc": "Micro-acupuncture needles are inserted into correspondence points on the hands or feet. For non-invasive treatment, diagnostic probes or rollers are used to apply precise pressure to stimulate points.",
      "needles-usage": "Best for: Acute pain relief, deep energy blockages, and meridian stimulation.",
      
      "magnets-title": "Magnet Therapy",
      "magnets-desc": "Byol magnets (miniature circular magnets) or bar magnets are placed on correspondence points to regulate energy flow. Magnets have North (white/reduces energy) and South (yellow/increases energy) poles to balance Yin-Yang forces.",
      "magnets-usage": "Best for: Chronic ailments, energy toning, and sedating excess pain/inflammation.",
      
      "seeds-title": "Seed Therapy",
      "seeds-desc": "Living seeds are taped onto correspondence points. As they carry biological life energy, they absorb negative energy from the body and release positive healing vibrations. Popular seeds include buckwheat, peas, apple, and black pepper.",
      "seeds-usage": "Best for: Gentle healing, children/sensitive patients, and organ-specific correspondence.",
      
      "colors-title": "Color Therapy",
      "colors-desc": "Applying specific colors using markers, light, or colored cards to points. Colors correspond to Six Ki energies: Green (Wind), Red (Heat), Orange (Hotness), Yellow (Humidity), White (Dryness), and Black/Blue (Coldness).",
      "colors-usage": "Best for: Emotional balancing, quick healing in children, and balancing elemental flows.",
      
      "back-btn": "Back to Home",
      
      "footer-tagline": "Your Intelligent Sujok Therapy Assistant",
      "footer-credit": "Created & Marketed by Hari Bots and Business Solutions",
      "footer-disclaimer-title": "Medical Disclaimer",
      "footer-disclaimer-text": "\"Sujok AI BOT is designed for educational and informational purposes only. It is useful for Sujok therapists to diagnose diseases as a second opinion. However, as an AI chatbot, it cannot always be 100% accurate and does not replace professional medical advice, diagnosis, or treatment.\"",
      "footer-copyright": "© 2026 Sujok AI BOT. All Rights Reserved.",
      "footer-developer": "Developed with care by Hari Bots",
      // Loader keys
      "loader-badge-sujok": "SUJOK",
      "loader-badge-ai": "AI",
      "loader-badge-wellness": "WELLNESS",
      "loader-loading": "Loading Sujok Knowledge...",
      "loader-preparing": "Preparing your AI Assistant...",
      "loader-fact-badge": "SUJOK FACT",
      "loader-fact-1": "Sujok means Hand and Foot. It is a natural healing therapy created by Park Jae Woo.",
      "loader-powered": "Powered by <span class=\"footer-bold\">Hari Bots & Business Solutions</span>"
    },
    ta: {
      "announcement": "⚡ சுஜோக் AI BOT விரைவில் வருகிறது! இயற்கை மருத்துவத்தின் எதிர்காலத்தை அனுபவிக்கவும்.",
      "badge-coming-soon": "விரைவில் வருகிறது",
      "nav-home": "முகப்பிற்குச் செல்லவும்",
      "nav-cta": "தொடர்பு கொள்க",
      
      "title": "சுஜோக் AI BOT (விரைவில் வருகிறது) - சிகிச்சை முறைகள்",
      "header-title": "சுஜோக் சிகிச்சை முறைகள்",
      "header-subtitle": "குணப்படுத்தும் புள்ளிகளைத் தூண்டி, ஆற்றல் சமநிலையை மீட்டெடுக்க சுஜோக்கில் பயன்படுத்தப்படும் இயற்கை முறைகளை ஆராயுங்கள்.",
      
      "needles-title": "ஊசிகள் மற்றும் அக்குபிரஷர் (Needles & Acupressure)",
      "needles-desc": "கைகள் அல்லது கால்களில் உள்ள தொடர்பு புள்ளிகளில் நுண் அக்குபஞ்சர் ஊசிகள் செலுத்தப்படுகின்றன. ஊசி இல்லாத சிகிச்சைக்கு, கண்டறியும் கருவிகள் (Probes) அல்லது உருளைகள் (Rollers) மூலம் புள்ளிகளைத் தூண்ட துல்லியமான அழுத்தம் பயன்படுத்தப்படுகிறது.",
      "needles-usage": "சிறந்தது: கடுமையான வலி நிவாரணம், ஆழமான ஆற்றல் அடைப்புகள் மற்றும் மெரிடியன் தூண்டுதல்.",
      
      "magnets-title": "காந்த சிகிச்சை (Magnet Therapy)",
      "magnets-desc": "ஆற்றல் ஓட்டத்தை சீராக்க தொடர்பு புள்ளிகளில் சிறிய வட்ட காந்தங்கள் (Byol Magnets) அல்லது பட்டை காந்தங்கள் வைக்கப்படுகின்றன. காந்தங்கள் வடக்கு (வெள்ளை/ஆற்றலைக் குறைக்கும்) மற்றும் தெற்கு (மஞ்சள்/ஆற்றலை அதிகரிக்கும்) துருவங்களைக் கொண்டு யின்-யான் சக்திகளை சமநிலைப்படுத்துகின்றன.",
      "magnets-usage": "சிறந்தது: நாள்பட்ட நோய்கள், ஆற்றல் அதிகரிப்பு மற்றும் வலி/வீக்கத்தைக் குறைத்தல்.",
      
      "seeds-title": "விதை சிகிச்சை (Seed Therapy)",
      "seeds-desc": "உயிருள்ள விதைகள் தொடர்பு புள்ளிகளில் ஒட்டப்படுகின்றன. இவை உயிரியல் ஆற்றலைக் கொண்டிருப்பதால், உடலில் உள்ள எதிர்மறை ஆற்றலை உறிஞ்சி, நேர்மறை குணப்படுத்தும் அதிர்வுகளை வெளியிடுகின்றன. பக்வீட் (Buckwheat), பட்டாணி, ஆப்பிள் மற்றும் மிளகு விதைகள் பொதுவாகப் பயன்படுத்தப்படுகின்றன.",
      "seeds-usage": "சிறந்தது: மென்மையான குணப்படுத்துதல், குழந்தைகள்/உணர்திறன் உள்ள நோயாளிகள் மற்றும் உறுப்பு சார்ந்த சிகிச்சை.",
      
      "colors-title": "வண்ண சிகிச்சை (Color Therapy)",
      "colors-desc": "குறிப்பிட்ட புள்ளிகளில் ஸ்கெட்ச் பேனாக்கள், ஒளி அல்லது வண்ண அட்டைகளைப் பயன்படுத்தி வண்ணங்களைப் பயன்படுத்துதல். வண்ணங்கள் சிக்ஸ் கி (Six Ki) ஆற்றல்களுடன் தொடர்புடையவை: பச்சை (காற்று), சிவப்பு (வெப்பம்), ஆரஞ்சு (அதிவெப்பம்), மஞ்சள் (ஈரப்பதம்), வெள்ளை (வறட்சி), மற்றும் கருப்பு/நீலம் (குளிர்ச்சி).",
      "colors-usage": "சிறந்தது: உணர்ச்சி சமநிலை, குழந்தைகளுக்கான விரைவான குணம் மற்றும் பஞ்சபூத ஆற்றல்களை சமநிலைப்படுத்துதல்.",
      
      "back-btn": "முகப்பிற்குச் செல்லவும்",
      
      "footer-tagline": "உங்களின் அறிவார்ந்த சுஜோக் சிகிச்சை உதவியாளர்",
      "footer-credit": "உருவாக்கம் மற்றும் சந்தைப்படுத்துதல்: ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ்",
      "footer-disclaimer-title": "மருத்துவ மறுப்பு",
      "footer-disclaimer-text": "\"சுஜோக் AI BOT கல்வி மற்றும் தகவல் நோக்கங்களுக்காக மட்டுமே வடிவமைக்கப்பட்டுள்ளது. இது சுஜோக் சிகிச்சையாளர்கள் நோய்களைக் கண்டறிவதற்கு ஒரு இரண்டாவது கருத்தாக (Second Opinion) பயனுள்ளதாக இருக்கும். இருப்பினும், இது ஒரு AI சாட்பாட் என்பதால், இது எப்போதும் 100% துல்லியமாக இருக்க முடியாது மற்றும் தொழில்முறை மருத்துவ ஆலோசனை, கண்டறிதல் அல்லது சிகிச்சைக்கு மாற்றாகாது.\"",
      "footer-copyright": "© 2026 சுஜோக் AI BOT. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "footer-developer": "அன்புடன் உருவாக்கியவர் ஹரி பாட்ஸ்",
      // Loader keys (Tamil)
      "loader-badge-sujok": "சுஜோக்",
      "loader-badge-ai": "AI",
      "loader-badge-wellness": "நலம்",
      "loader-loading": "சுஜோக் அறிவை ஏற்றுகிறது...",
      "loader-preparing": "உங்கள் AI உதவியாளரைத் தயார் செய்கிறது...",
      "loader-fact-badge": "சுஜோக் உண்மை",
      "loader-fact-1": "சுஜோக் என்றால் கை மற்றும் கால் என்று பொருள். இது பேராசிரியர் பார்க் ஜே வூ என்பவரால் உருவாக்கப்பட்ட இயற்கை குணப்படுத்தும் முறையாகும்.",
      "loader-powered": "ஹரி பாட்ஸ் & பிசினஸ் சொல்யூஷன்ஸ் மூலம் வழங்கப்படுகிறது"
    }
  };

  let currentLanguage = 'en';

  const translatePage = (lang) => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        const text = translations[lang][key];
        el.innerHTML = text;
      }
    });
    
    // Specifically handle page document title
    document.title = translations[lang]["title"];
  };

  const handleLanguageToggle = (lang) => {
    currentLanguage = lang;
    
    const switches = document.querySelectorAll('.lang-switch');
    switches.forEach(sw => {
      if (lang === 'ta') {
        sw.classList.add('active-ta');
      } else {
        sw.classList.remove('active-ta');
      }
      
      const options = sw.querySelectorAll('.lang-option');
      options.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });
    });

    translatePage(lang);
  };

  const initLanguageSwitches = () => {
    const switches = document.querySelectorAll('.lang-switch');
    switches.forEach(sw => {
      sw.addEventListener('click', (e) => {
        const targetOption = e.target.closest('.lang-option');
        if (targetOption) {
          const selectedLang = targetOption.getAttribute('data-lang');
          if (selectedLang && selectedLang !== currentLanguage) {
            handleLanguageToggle(selectedLang);
          }
        } else {
          const nextLang = currentLanguage === 'en' ? 'ta' : 'en';
          handleLanguageToggle(nextLang);
        }
      });
    });
  };

  initLanguageSwitches();

  // ==========================================
  // 2. Sticky Navigation & Scroll Effects
  // ==========================================
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Header styling
    if (scrollPos > 50) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Scroll to Top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 3. Mobile Responsive Nav Drawer
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

  if (menuToggle && mobileDrawer) {
    const toggleMobileMenu = () => {
      menuToggle.classList.toggle('open');
      mobileDrawer.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    };

    menuToggle.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        mobileDrawer.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Close mobile drawer on resize to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileDrawer && mobileDrawer.classList.contains('open')) {
      if (menuToggle) menuToggle.classList.remove('open');
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });

  // ==========================================
  // 4. Floating WhatsApp Widget Toggles
  // ==========================================
  const whatsappTrigger = document.getElementById('whatsappTrigger');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const popupClose = document.getElementById('popupClose');

  if (whatsappTrigger) {
    whatsappTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (whatsappPopup) whatsappPopup.classList.toggle('show');
    });
  }

  if (popupClose) {
    popupClose.addEventListener('click', (e) => {
      e.stopPropagation();
      if (whatsappPopup) whatsappPopup.classList.remove('show');
    });
  }

  // Close popup if clicked anywhere else on the document
  document.addEventListener('click', (e) => {
    if (whatsappPopup && whatsappPopup.classList.contains('show') && !whatsappPopup.contains(e.target) && e.target !== whatsappTrigger) {
      whatsappPopup.classList.remove('show');
    }
  });
});
