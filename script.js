/* ==========================================
   SUJOK AI - INTERACTIVE CODE & LANGUAGE SWITCHER
   ========================================== */

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


  // ==========================================
  // 1. Translation System (English / Tamil)
  // ==========================================
  const translations = {
    en: {
      "title": "Sujok AI BOT (Coming Soon) - Your Intelligent Sujok Therapy Assistant",
      "announcement": "⚡ Sujok AI BOT is COMING SOON! Experience the Future of Natural Healing.",
      "badge-coming-soon": "COMING SOON",
      "nav-home": "Home",
      "nav-about": "About Sujok",
      "nav-founder": "Founder",
      "nav-features": "Features",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      "nav-cta": "Get in Touch",
      
      "hero-badge": "AI Healthcare Assistant",
      "hero-title": "Ask Anything About <span class=\"gradient-text\">Sujok Therapy</span> <span class=\"badge-coming-soon\" style=\"font-size: 0.9rem; padding: 4px 10px;\">Coming Soon</span>",
      "hero-subtitle": "Powered by AI. Built for Sujok practitioners, students, and therapists.",
      "hero-description": "Access Sujok knowledge, correspondence systems, Six Ki theory, and seed therapy instantly.",
      "hero-cta-get": "Get Sujok AI BOT",
      "hero-cta-learn": "Learn Sujok",
      "hero-stat-2": "Sujok Guidance",
      "hero-stat-3": "Natural Healing",
      
      "about-title": "About Sujok Therapy",
      "about-subtitle": "The Science of Hand and Foot Healing",
      "about-desc-1": "Sujok Therapy is a natural healing system developed by Professor Park Jae Woo of South Korea. The term 'Su' means Hand and 'Jok' means Foot.",
      "about-desc-2": "Sujok is based on the principle that the entire human body is represented on the hands and feet. These extremities act as 'remote control' panels of health. By stimulating corresponding active points, healing impulses are sent directly to affected organs, adjusting energy and initiating natural recovery processes without medications.",
      "about-princ-1-title": "100% Natural",
      "about-princ-1-desc": "Non-invasive healing methods using pressure, seeds, magnets, and colors.",
      "about-princ-2-title": "Rapid Relief",
      "about-princ-2-desc": "Often produces fast relief for physical discomfort when points are stimulated correctly.",
      "about-overlay-title": "Sujok Principle",
      "about-overlay-desc": "\"The body project is on the hand.\"",
      "about-more-btn": "Explore Treatment Modalities &rarr;",
      
      "founder-title": "Founder of Sujok",
      "founder-lifespan": "1942 – 2010",
      "founder-quote": "\"Modern medicine treats the body, but Sujok treats the human life and spirit through natural wisdom.\"",
      "founder-desc-1": "Professor Park Jae Woo was a South Korean scientist, philosopher, and the visionary founder of Sujok Therapy. After graduating from Seoul National University, his deep understanding of Eastern philosophy and science led him to develop the Sujok correspondence systems in the 1980s.",
      "founder-desc-2": "His groundbreaking work introduced the standard correspondence system, insect correspondence system, energy flow concepts, Triorigin theory, Six Ki theory, Smile Meditation, and Twist Therapy. His holistic healing methods are today practiced and recognized by thousands of medical practitioners, acupuncture specialists, and students globally.",
      "founder-badge-1": "Scientist",
      "founder-badge-2": "Philosopher",
      "founder-badge-3": "Author",
      "founder-badge-4": "Global Teacher",
      
      "features-title": "How Sujok AI BOT Helps",
      "features-subtitle": "Unlock immediate insights with our custom-trained AI assistant that supports you at every step.",
      "feat-1-title": "Ask Questions",
      "feat-1-desc": "Ask specific health or concept questions and receive detailed, structured descriptions instantly.",
      "feat-2-title": "Learn Sujok Concepts",
      "feat-2-desc": "Master correspondence rules, insect systems, and micro-meridians with comprehensive AI breakdowns.",
      "feat-3-title": "Find Correspondence Points",
      "feat-3-desc": "Quickly find exactly where internal organs correspond on your hands or feet for stimulation.",
      "feat-4-title": "Understand Energy Theories",
      "feat-4-desc": "Gain simplified guidance on Six Ki, Yin-Yang balance, Triorigin, and Meridian constitution theories.",
      "feat-5-title": "Improve Clinical Knowledge",
      "feat-5-desc": "Enhance your clinical cases database, diagnostic precision, and therapeutic success rate.",
      "feat-6-title": "Support Daily Practice",
      "feat-6-desc": "Use it as a pocket companion during diagnostic procedures, patient consultations, or teaching.",
      
      "why-title": "Why Choose Sujok AI BOT",
      "why-subtitle": "Specifically tailored for therapists, acupuncture students, and holistic healing practitioners.",
      "why-item-1-title": "Specialized for Sujok Therapy",
      "why-item-1-desc": "Trained with dedicated literature, Triorigin concepts, and specific point correspondence details.",
      "why-item-2-title": "Fast AI Responses",
      "why-item-2-desc": "Get reliable, clear answers within seconds without browsing through voluminous textbooks.",
      "why-item-3-title": "Educational Support",
      "why-item-3-desc": "Perfect learning aid for students preparing for certification levels or practicing point locations.",
      "why-item-4-title": "User-Friendly Interface",
      "why-item-4-desc": "Intuitive chatbot style designed to be accessible for practitioners of all ages and tech levels.",
      "why-item-5-title": "Continuous Learning",
      "why-item-5-desc": "System algorithms are continuously updated with more verified research, case studies, and charts.",
      "why-item-6-title": "Available Anytime",
      "why-item-6-desc": "Access intelligence 24/7 on the go via your mobile, tablet, or desktop browser.",
      
      "why-visual-title": "Sujok AI BOT System Status",
      "why-visual-stat-1-label": "Availability",
      "why-visual-stat-2-label": "Response Time",
      "why-visual-stat-3-label": "Core Modules",
      "why-visual-stat-4-label": "Secure Access",
      "why-visual-footer": "✨ Built to preserve Professor Park Jae Woo's legacy through cutting-edge Artificial Intelligence.",
      

      "faq-title": "Frequently Asked Questions",
      "faq-q1": "What is Sujok Therapy?",
      "faq-a1": "Sujok Therapy is an alternative healing method developed by South Korean scientist Professor Park Jae Woo. It operates on the principle that the entire human body is mapped onto the hands (\"Su\") and feet (\"Jok\"). By stimulating specific points on these extremities through pressure, seeds, magnets, or colors, therapists can balance energy and treat various physical and emotional conditions.",
      "faq-q2": "Who can use Sujok AI BOT?",
      "faq-a2": "Sujok AI BOT is designed for anyone interested in alternative healing: professional therapists looking for a rapid reference guide, acupuncture/acupressure students, wellness coaches, or beginners who want to learn how to locate correspondence zones on their hands for self-care.",
      "faq-q3": "Is Sujok AI BOT suitable for beginners?",
      "faq-a3": "Yes, absolutely! The AI is designed to adapt its answers. Beginners can ask simple questions like \"Where is the stomach point on my hand?\" and receive clear, non-technical guidance. It also supports advanced energy concepts for experienced practitioners.",
      "faq-q4": "Can therapists use Sujok AI BOT in practice?",
      "faq-a4": "Yes. Therapists can use Sujok AI BOT as a supportive tool for diagnosing diseases and obtaining a second opinion. However, because it is an AI chatbot, it cannot always be 100% accurate. Practitioners should always verify its recommendations against their own professional clinical judgment.",
      "faq-q5": "Does Sujok AI BOT provide educational guidance?",
      "faq-a5": "Yes, Sujok AI BOT excels at education. It provides systematic descriptions of standard correspondence systems, insect systems, Triorigin theory, and meridian systems. However, please note that it is an informational tool and does not issue formal certifications.",
      
      "company-tag": "Created & Marketed By",
      "company-name": "Hari Bots and Business Solutions",
      "company-desc": "Hari Bots and Business Solutions develops intelligent AI solutions, chatbots, automation systems, and educational technology platforms designed to empower businesses and professionals through innovation.",
      "company-founder-tag": "Founder & CEO of Sujok AI BOT",
      "company-founder-name": "Hariharan M",
      "company-founder-desc": "Hariharan M is the founder of Sujok AI BOT. He is a first-year Mechatronics student, a Sujok therapy enthusiast, and a member of Energy Nest. He has completed Reiki healing (4 levels), Ama Deus healing, Lama Fera healing (1st level), and Kwan Yin Angel healing.",
      "company-website-link": "Visit Website",
      
      "contact-title": "Get in Touch",
      "contact-subtitle": "Have questions about Sujok AI BOT or need support? Send us a message or chat with us directly on WhatsApp.",
      "form-title": "Enquire Now",
      "form-name-label": "Full Name",
      "form-email-label": "Email Address",
      "form-msg-label": "Message",
      "form-submit": "Enquire Now",
      "contact-direct-title": "Direct Contact",
      "contact-direct-desc": "Reach out to our support and marketing teams directly through WhatsApp for immediate inquiries about integration, licensing, or collaborations.",
      "contact-wa-support": "📱 WhatsApp (Support)",
      "contact-wa-business": "📱 WhatsApp (Business)",
      "contact-wa-chat": "Chat Now",
      "contact-email-title": "Email Placeholder",
      "contact-follow-title": "Follow Us",
      
      "footer-tagline": "Your Intelligent Sujok Therapy Assistant",
      "footer-credit": "Created & Marketed by Hari Bots and Business Solutions",
      "footer-disclaimer-title": "Medical Disclaimer",
      "footer-disclaimer-text": "\"Sujok AI BOT is designed for educational and informational purposes only. It is useful for Sujok therapists to diagnose diseases as a second opinion. However, as an AI chatbot, it cannot always be 100% accurate and does not replace professional medical advice, diagnosis, or treatment.\"",
      "footer-copyright": "© 2026 Sujok AI BOT. All Rights Reserved.",
      "footer-developer": "Developed with care by Hari Bots",
      
      "modal-title": "Message Sent!",
      "modal-desc": "Thank you for reaching out. A representative from Hari Bots and Business Solutions will contact you shortly.",
      "modal-close": "Close",
      
      "principles-title": "Sujok Energy & Correspondence",
      "principles-subtitle": "Understand how Sujok maps the human body's organs and energies onto the hands and feet.",
      "tab-yin-yang": "Yin & Yang Duality",
      "tab-six-ki": "Six Ki (6 Energies)",
      "tab-correspondence": "Organ Correspondence",
      "yy-title": "Yin & Yang Energy Balance",
      "yy-desc": "Sujok is built on the Eastern philosophy of Yin and Yang—the two complementary forces that govern health. The human hand has a natural Yin-Yang split that mirrors the body's structure:",
      "yy-yin-title": "☯ Yin Side (Palm)",
      "yy-yin-1": "Represents the front of the body",
      "yy-yin-2": "Softer, lighter, and more sensitive skin",
      "yy-yin-3": "Hosts internal Yin organs (Heart, Lungs, Liver, Stomach)",
      "yy-yin-4": "Receives and stores life force energy",
      "yy-yang-title": "☯ Yang Side (Back of Hand)",
      "yy-yang-1": "Represents the back of the body",
      "yy-yang-2": "Harder, darker, and more protective skin",
      "yy-yang-3": "Hosts spine, kidneys, and bone structures",
      "yy-yang-4": "Distributes and defends active energy",
      "sixki-title": "The Six Ki (6 Energies) Theory",
      "sixki-desc": "According to Triorigin and Six Ki theory, the body's health is maintained by six essential environmental energies. Imbalance in these flows causes illness. Therapists stimulate corresponding finger nodes to sedate or tonify specific energy flows:",
      "table-header-energy": "Energy",
      "table-header-color": "Color",
      "table-header-organs": "Corresponding Organs",
      "energy-wind": "Wind",
      "color-green": "Green",
      "organs-wind": "Liver, Gall Bladder",
      "energy-heat": "Heat",
      "color-red": "Red",
      "organs-heat": "Heart, Small Intestine",
      "energy-hotness": "Hotness",
      "color-orange": "Orange",
      "organs-hotness": "Brain, Spinal Cord",
      "energy-humidity": "Humidity",
      "color-yellow": "Yellow",
      "organs-humidity": "Spleen, Stomach",
      "energy-dryness": "Dryness",
      "color-brown": "Brown",
      "organs-dryness": "Lungs, Large Intestine",
      "energy-coldness": "Coldness",
      "color-blue": "Blue / Black",
      "organs-coldness": "Kidneys, Urinary Bladder",
      "correspondence-title": "Standard Organ Correspondence",
      "correspondence-desc": "The Standard Correspondence System treats the hands and feet as miniature representations of the entire body. When an organ is diseased, active points on the correspondence zone become tender. Stimulating these points triggers immediate healing:",
      "map-head-title": "Thumb:",
      "map-head-desc": "Corresponds to the Head and Neck (Brain, Eyes, Nose, Mouth).",
      "map-limbs-title": "Fingers:",
      "map-limbs-desc": "Index and Little fingers map to Arms; Middle and Ring fingers map to Legs.",
      "map-chest-title": "Upper Palm:",
      "map-chest-desc": "Corresponds to the Chest cavity (Heart, Lungs).",
      "map-abdomen-title": "Lower Palm:",
      "map-abdomen-desc": "Corresponds to the Abdominal cavity (Stomach, Liver, Gall Bladder, Intestines).",
      // Mobile redesign keys
      "mobile-hero-title": "Your AI-Powered Sujok Assistant <span class=\"badge-coming-soon\" style=\"font-size: 0.8rem; padding: 4px 8px; display: inline-block; vertical-align: middle;\">Coming Soon</span>",
      "mobile-hero-subtitle": "Get instant answers about Sujok Therapy, Correspondence Systems, Six Ki, Treatment Methods, and more.",
      "mobile-hero-cta-chat": "Start Chatting",
      "chat-status-active": "Active Now",
      "chat-welcome-msg": "Hello! I am your AI-powered Sujok Assistant. Ask me anything about Sujok Therapy, point locations, Six Ki, or treatment methods. Click one of the questions below to try me out!",
      "chat-q1": "🤕 What point helps headache?",
      "chat-q2": "✋ Explain Correspondence Therapy",
      "chat-q3": "⚡ What is Six Ki Theory?",
      "chat-q4": "🌱 How to treat back pain?",
      "mob-feat-1-title": "AI Trained on Sujok",
      "mob-feat-1-desc": "Deep knowledge base compiled from core publications, correspondence models, and Triorigin books.",
      "mob-feat-2-title": "Instant Responses",
      "mob-feat-2-desc": "Receive clinical references and point mappings in under a second on the go.",
      "mob-feat-3-title": "Learn Sujok Faster",
      "mob-feat-3-desc": "An outstanding study aid for certification exams, meridian studies, and point locations.",
      "mob-feat-4-title": "Treatment Guidance",
      "mob-feat-4-desc": "Practical insights on polarities, seeds, colors, and diagnostic pressure techniques.",
      "mob-feat-5-title": "Available Anytime",
      "mob-feat-5-desc": "Available 24/7. Fully optimized for instant consults anywhere, anytime.",
      "mob-feat-6-title": "Mobile Optimized",
      "mob-feat-6-desc": "Designed with single-handed thumb navigation and ultra-fast lightweight load times.",
      "mob-why-1-title": "Saves time searching books",
      "mob-why-1-desc": "Instantly matches symptoms to points without flipping through massive textbooks.",
      "mob-why-2-title": "Easy learning for students",
      "mob-why-2-desc": "Simplifies complex energy flow guidelines, insect systems, and Triorigin structures.",
      "mob-why-3-title": "Quick reference for practitioners",
      "mob-why-3-desc": "Ideal diagnostic helper for point locations and seed selections during consultations.",
      "mob-why-4-title": "Available 24/7",
      "mob-why-4-desc": "Access Sujok knowledge day or night, whenever an urgent clinical question arises.",
      "mob-why-5-title": "Beginner-friendly explanations",
      "mob-why-5-desc": "Adapts terminology to make holistic health principles clear for newcomers.",
      "mob-trust-title": "Our Trust Pillars",
      "mob-trust-1-title": "Educational & Safe",
      "mob-trust-1-desc": "Designed as a supportive guide to enhance learning and verify point mappings safely.",
      "mob-trust-2-title": "Reliable Knowledge Base",
      "mob-trust-2-desc": "Based on the traditional teachings of Professor Park Jae Woo and certified literature.",
      "mob-trust-3-title": "Therapist's Companion",
      "mob-trust-3-desc": "Provides a reliable second opinion to streamline diagnostic checks and verify point locations.",
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
      "title": "சுஜோக் AI BOT (விரைவில் வருகிறது) - உங்களின் அறிவார்ந்த சுஜோக் சிகிச்சை உதவியாளர்",
      "announcement": "⚡ சுஜோக் AI BOT விரைவில் வருகிறது! இயற்கை மருத்துவத்தின் எதிர்காலத்தை அனுபவிக்கவும்.",
      "badge-coming-soon": "விரைவில் வருகிறது",
      "nav-home": "முகப்பு",
      "nav-about": "சுஜோக் பற்றி",
      "nav-founder": "நிறுவனர்",
      "nav-features": "அம்சங்கள்",
      "nav-faq": "கேள்விகள்",
      "nav-contact": "தொடர்பு",
      "nav-cta": "தொடர்பு கொள்க",
      
      "hero-badge": "AI மருத்துவ உதவியாளர்",
      "hero-title": "சுஜோக் சிகிச்சை பற்றி <span class=\"gradient-text\">எது வேண்டுமானாலும் கேளுங்கள்</span> <span class=\"badge-coming-soon\" style=\"font-size: 0.9rem; padding: 4px 10px;\">விரைவில் வருகிறது</span>",
      "hero-subtitle": "AI மூலம் இயக்கப்படுகிறது. சுஜோக் பயிற்சியாளர்கள், மாணவர்கள் மற்றும் மருத்துவர்களுக்காக உருவானது.",
      "hero-description": "சுஜோக் அறிவு, தொடர்பு அமைப்புகள், சிக்ஸ் கி கொள்கைகள் மற்றும் விதை சிகிச்சை முறைகளை உடனுக்குடன் அணுகலாம்.",
      "hero-cta-get": "சுஜோக் AI BOT பெறுக",
      "hero-cta-learn": "சுஜோக் கற்க",
      "hero-stat-2": "சுஜோக் வழிகாட்டுதல்",
      "hero-stat-3": "இயற்கை மருத்துவம்",
      
      "about-title": "சுஜோக் சிகிச்சை பற்றி",
      "about-subtitle": "கை மற்றும் கால் குணப்படுத்தும் அறிவியல்",
      "about-desc-1": "சுஜோக் சிகிச்சை என்பது தென்கொரியாவின் பேராசிரியர் பார்க் ஜே வூ என்பவரால் உருவாக்கப்பட்ட ஒரு இயற்கை குணப்படுத்தும் முறையாகும். 'சு' என்றால் கை மற்றும் 'ஜோக்' என்றால் கால் என்று பொருள்.",
      "about-desc-2": "மனித உடல் முழுவதும் கைகள் மற்றும் கால்களில் பிரதிபலிக்கிறது என்ற கொள்கையின் அடிப்படையில் சுஜோக் அமைந்துள்ளது. இந்த உறுப்புகள் ஆரோக்கியத்தின் 'ரிமோட் கண்ட்ரோல்' பேனல்களாக செயல்படுகின்றன. தொடர்புடைய புள்ளிகளைத் தூண்டுவதன் மூலம், குணப்படுத்தும் ஆற்றல் பாதிக்கப்பட்ட உறுப்புகளுக்கு நேரடியாக அனுப்பப்பட்டு, மருந்துகள் இல்லாமல் இயற்கையான மீட்பு செயல்முறைகளைத் தொடங்குகிறது.",
      "about-princ-1-title": "100% இயற்கை முறை",
      "about-princ-1-desc": "அழுத்தம், விதைகள், காந்தங்கள் மற்றும் வண்ணங்களைப் பயன்படுத்தும் ஆக்கிரமிப்பில்லாத குணப்படுத்தும் முறைகள்.",
      "about-princ-2-title": "விரைவான நிவாரணம்",
      "about-princ-2-desc": "புள்ளிகள் சரியாகத் தூண்டப்படும்போது உடல் உபாதைகளுக்கு விரைவான நிவாரணம் அளிக்கிறது.",
      "about-overlay-title": "சுஜோக் கொள்கை",
      "about-overlay-desc": "\"உடல் அமைப்பு கையில் உள்ளது.\"",
      "about-more-btn": "சிகிச்சை முறைகளை ஆராயுங்கள் &rarr;",
      
      "founder-title": "சுஜோக்கின் நிறுவனர்",
      "founder-lifespan": "1942 – 2010",
      "founder-quote": "\"நவீன மருத்துவம் உடலைக் குணப்படுத்துகிறது, ஆனால் சுஜோக் இயற்கை ஞானத்தின் மூலம் மனித வாழ்வையும் ஆன்மாவையும் குணப்படுத்துகிறது.\"",
      "founder-desc-1": "பேராசிரியர் பார்க் ஜே வூ தென்கொரிய விஞ்ஞானி, தத்துவஞானி மற்றும் சுஜோக் சிகிச்சையின் நிறுவனர் ஆவார். சியோல் தேசிய பல்கலைக்கழகத்தில் பட்டம் பெற்ற பிறகு, தத்துவம் மற்றும் அறிவியலின் ஆழமான புரிதலின் அடிப்படையில் 1980களில் சுஜோக் முறைகளை அவர் உருவாக்கினார்.",
      "founder-desc-2": "அவரது தற்காலப் பணி நிலையான தொடர்பு அமைப்பு, பூச்சி தொடர்பு அமைப்பு, ஆற்றல் ஓட்டக் கோட்பாடுகள், டிரைஓரிஜின் கோட்பாடு, சிக்ஸ் கி கோட்பாடு, புன்னகை தியானம் மற்றும் திருப்ப சிகிச்சை (Twist Therapy) ஆகியவற்றை அறிமுகப்படுத்தியது. இவரது முறைகள் இன்று உலகம் முழுவதும் ஆயிரக்கணக்கான மருத்துவர்களால் பயிற்சி செய்யப்படுகின்றன.",
      "founder-badge-1": "விஞ்ஞானி",
      "founder-badge-2": "தத்துவஞானி",
      "founder-badge-3": "எழுத்தாளர்",
      "founder-badge-4": "உலகளாவிய ஆசிரியர்",
      
      "features-title": "சுஜோக் AI BOT எவ்வாறு உதவுகிறது",
      "features-subtitle": "ஒவ்வொரு அடியிலும் உங்களுக்கு உதவும் வகையில் வடிவமைக்கப்பட்ட எங்களின் AI உதவியாளரின் மூலம் உடனடித் தீர்வுகளைப் பெறுங்கள்.",
      "feat-1-title": "கேள்விகள் கேட்கலாம்",
      "feat-1-desc": "குறிப்பிட்ட உடல்நலம் அல்லது கோட்பாடு சார்ந்த கேள்விகளைக் கேட்டு உடனடி விளக்கங்களைப் பெறலாம்.",
      "feat-2-title": "சுஜோக் கோட்பாடுகளை கற்கலாம்",
      "feat-2-desc": "தொடர்பு விதிகள், பூச்சி அமைப்புகள் மற்றும் நுண்-மெரிடியன்களை AI விரிவான விளக்கங்களுடன் கற்றுக்கொள்ளுங்கள்.",
      "feat-3-title": "தொடர்பு புள்ளிகளைக் கண்டறியலாம்",
      "feat-3-desc": "கைகள் அல்லது கால்களில் உள் உறுப்புகள் எங்கு இணைகடுகின்றன என்பதைத் துல்லியமாகக் கண்டறியலாம்.",
      "feat-4-title": "ஆற்றல் கோட்பாடுகளைப் புரிந்து கொள்ளலாம்",
      "feat-4-desc": "சிக்ஸ் கி (Six Ki), யின்-யான் சமநிலை மற்றும் மெரிடியன் அமைப்பு பற்றிய எளிய வழிகாட்டுதலைப் பெறுங்கள்.",
      "feat-5-title": "மருத்துவ அறிவை மேம்படுத்தலாம்",
      "feat-5-desc": "உங்கள் மருத்துவ வழக்குகள் தரவுத்தளம், துல்லியமான கண்டறிதல் மற்றும் சிகிச்சை வெற்றி விகிதத்தை அதிகரிக்கலாம்.",
      "feat-6-title": "தினசரி பயிற்சிக்கு உதவலாம்",
      "feat-6-desc": "நோயாளி ஆலோசனைகள் அல்லது கற்பித்தலின் போது இதனை ஒரு பாக்கெட் வழிகாட்டியாகப் பயன்படுத்தலாம்.",
      
      "why-title": "ஏன் சுஜோக் AI BOT ஐ தேர்வு செய்ய வேண்டும்?",
      "why-subtitle": "பயிற்சியாளர்கள், மாணவர்கள் மற்றும் இயற்கை மருத்துவ ஆதரவாளர்களுக்காக பிரத்யேகமாக வடிவமைக்கப்பட்டது.",
      "why-item-1-title": "சுஜோக் சிகிச்சைக்கான பிரத்யேக பயிற்சி",
      "why-item-1-desc": "சுஜோக் இலக்கியங்கள், டிரைஓரிஜின் கொள்கைகள் மற்றும் புள்ளித் தொடர்பு விவரங்களுடன் பயிற்சி பெற்றது.",
      "why-item-2-title": "விரைவான AI பதில்கள்",
      "why-item-2-desc": "பெரிய புத்தகங்களைத் தேடாமல் சில நொடிகளில் நம்பகமான, தெளிவான பதில்களைப் பெறலாம்.",
      "why-item-3-title": "கல்வி ஆதரவு",
      "why-item-3-desc": "சான்றிதழ் தேர்வுகளுக்குத் தயாராகும் மாணவர்களுக்கும் புள்ளிகளைக் கண்டறிவதற்கும் சிறந்த கற்றல் உதவி.",
      "why-item-4-title": "எளிமையான இடைமுகம்",
      "why-item-4-desc": "அனைத்து வயதினரும் தொழில்நுட்ப அறிவில்லாதவர்களும் எளிதில் பயன்படுத்தக்கூடிய வடிவமைப்பு.",
      "why-item-5-title": "தொடர்ச்சியான கற்றல்",
      "why-item-5-desc": "சரிபார்க்கப்பட்ட ஆராய்ச்சிகள் மற்றும் புதிய வழக்கு ஆய்வுகளுடன் கணினி தொடர்ந்து புதுப்பிக்கப்படுகிறது.",
      "why-item-6-title": "எப்போது வேண்டுமானாலும் அணுகலாம்",
      "why-item-6-desc": "உங்கள் மொபைல், டேப்லெட் அல்லது கணினி உலாவி மூலம் 24/7 ஆன்லைனில் அணுகலாம்.",
      
      "why-visual-title": "சுஜோக் AI BOT கணினி நிலை",
      "why-visual-stat-1-label": "கிடைக்கும் தன்மை",
      "why-visual-stat-2-label": "பதிற் நேரம்",
      "why-visual-stat-3-label": "முக்கிய பிரிவுகள்",
      "why-visual-stat-4-label": "பாதுகாப்பான அணுகல்",
      "why-visual-footer": "✨ பேராசிரியர் பார்க் ஜே வூவின் பாரம்பரியத்தை செயற்கை நுண்ணறிவு மூலம் பாதுகாக்க உருவாக்கப்பட்டது.",
      

      "faq-title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      "faq-q1": "சுஜோக் சிகிச்சை என்றால் என்ன?",
      "faq-a1": "சுஜோக் சிகிச்சை என்பது தென்கொரிய விஞ்ஞானி பேராசிரியர் பார்க் ஜே வூ என்பவரால் உருவாக்கப்பட்ட மாற்று மருத்துவ முறையாகும். இது மனித உடல் முழுமையாக கை ('சு') மற்றும் கால் ('ஜோக்') ஆகியவற்றில் வரைபடமாக்கப்பட்டுள்ளது என்ற கொள்கையில் செயல்படுகிறது. அழுத்தம், விதைகள், காந்தங்கள் அல்லது வண்ணங்கள் மூலம் புள்ளிகளைத் தூண்டுவதன் மூலம் ஆற்றலைச் சமநிலைப்படுத்தி உடல் உபாதைகளைக் குணப்படுத்தலாம்.",
      "faq-q2": "சுஜோக் AI BOT ஐ யார் பயன்படுத்தலாம்?",
      "faq-a2": "மாற்று மருத்துவத்தில் ஆர்வமுள்ள எவரும் இதைப் பயன்படுத்தலாம்: விரைவான வழிகாட்டுதலைத் தேடும் தொழில்முறை சிகிச்சையாளர்கள், அக்குபிரஷர் மாணவர்கள், ஆரோக்கிய பயிற்சியாளர்கள் அல்லது சுய பராமரிப்புக்காக புள்ளிகளைக் கண்டறிய விரும்பும் ஆரம்பநிலை பயிற்சியாளர்கள்.",
      "faq-q3": "சுஜோக் AI BOT ஆரம்பநிலையினருக்கு ஏற்றதா?",
      "faq-a3": "ஆம், நிச்சயமாக! இந்த AI ஆரம்பநிலையினருக்கு எளிய மொழியில் பதிலளிக்கும். \"கை கட்டை விரலில் வயிறு எங்குள்ளது?\" போன்ற எளிய கேள்விகளைக் கேட்டுப் பதில்களைப் பெறலாம். அத்துடன் அனுபவம் வாய்ந்தவர்களுக்கான மேம்பட்ட கோட்பாடுகளையும் விளக்கும்.",
      "faq-q4": "சிகிச்சையாளர்கள் தங்கள் மருத்துவத்தில் சுஜோக் AI BOT ஐப் பயன்படுத்தலாமா?",
      "faq-a4": "ஆம். சிகிச்சையாளர்கள் நோய்களைக் கண்டறிவதற்கும் இரண்டாவது கருத்தைப் பெறுவதற்கும் சுஜோக் AI BOT ஐ ஒரு துணைக் கருவியாகப் பயன்படுத்தலாம். இருப்பினும், இது ஒரு AI சாட்பாட் என்பதால், இது எப்போதும் 100% துல்லியமாக இருக்க முடியாது. பயிற்சியாளர்கள் எப்போதும் அதன் பரிந்துரைகளைத் தங்கள் சொந்த தொழில்முறை மருத்துவக் கணிப்புடன் சரிபார்க்க வேண்டும்.",
      "faq-q5": "சுஜோக் AI BOT கல்வி சார்ந்த வழிகாட்டல்களை வழங்குகிறதா?",
      "faq-a5": "ஆம், சுஜோக் AI BOT கல்வியில் சிறந்து விளங்குகிறது. இது நிலையான தொடர்பு, பூச்சி அமைப்பு, மெரிடியன் அமைப்புகளை முறையாக விளக்குகிறது. இருப்பினும், இது ஒரு தகவல் கருவி மட்டுமே, சான்றிதழ்களை வழங்காது.",
      
      "company-tag": "உருவாக்கம் & சந்தைப்படுத்துதல்",
      "company-name": "ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ்",
      "company-desc": "ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ் நிறுவனம் வணிகங்கள் மற்றும் வல்லுநர்களை மேம்படுத்துவதற்காக புத்திசாலித்தனமான AI தீர்வுகள், சாட்போட்கள், ஆட்டோமேஷன் அமைப்புகள் மற்றும் கல்வித் தொழில்நுட்ப தளங்களை உருவாக்குகிறது.",
      "company-founder-tag": "சுஜோக் AI BOT-இன் நிறுவனர் & சி.இ.ஓ (CEO)",
      "company-founder-name": "ஹரிஹரன் எம்",
      "company-founder-desc": "ஹரிஹரன் எம் சுஜோக் AI BOT-இன் நிறுவனர் ஆவார். இவர் முதலாமாண்டு மெகாட்ரானிக்ஸ் மாணவர், சுஜோக் சிகிச்சை ஆர்வலர் மற்றும் எனர்ஜி நெஸ்ட் (Energy Nest) அமைப்பின் உறுப்பினர் ஆவார். இவர் ரெய்கி சிகிச்சை (4 நிலைகள்), அமா தியூஸ் சிகிச்சை (Ama Deus), லாமா ஃபெரா சிகிச்சை (முதல் நிலை) மற்றும் குவான் யின் ஏஞ்சல் சிகிச்சை ஆகியவற்றை முடித்துள்ளார்.",
      "company-website-link": "இணையதளத்தை பார்வையிடவும்",
      
      "contact-title": "தொடர்பு கொள்க",
      "contact-subtitle": "சுஜோக் AI BOT பற்றி ஏதேனும் கேள்விகள் உள்ளதா? எங்களுக்கு செய்தி அனுப்புங்கள் அல்லது வாட்ஸ்அப் மூலம் நேரடியாக அரட்டையடிக்கவும்.",
      "form-title": "இப்போதே விசாரிக்கவும்",
      "form-name-label": "முழு பெயர்",
      "form-email-label": "மின்னஞ்சல் முகவரி",
      "form-msg-label": "செய்தி",
      "form-submit": "இப்போதே விசாரிக்கவும்",
      "contact-direct-title": "நேரடி தொடர்பு",
      "contact-direct-desc": "விவரங்கள் மற்றும் வணிகத் தேவைகளுக்கு எங்களது வாட்ஸ்அப் எண்களைத் தொடர்பு கொள்ளுங்கள்.",
      "contact-wa-support": "📱 வாட்ஸ்அப் (ஆதரவு)",
      "contact-wa-business": "📱 வாட்ஸ்அப் (வணிகம்)",
      "contact-wa-chat": "அரட்டை செய்க",
      "contact-email-title": "மின்னஞ்சல்",
      "contact-follow-title": "எங்களைப் பின்தொடரவும்",
      
      "footer-tagline": "உங்களின் அறிவார்ந்த சுஜோக் சிகிச்சை உதவியாளர்",
      "footer-credit": "உருவாக்கம் மற்றும் சந்தைப்படுத்துதல்: ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ்",
      "footer-disclaimer-title": "மருத்துவ மறுப்பு",
      "footer-disclaimer-text": "\"சுஜோக் AI BOT கல்வி மற்றும் தகவல் நோக்கங்களுக்காக மட்டுமே வடிவமைக்கப்பட்டுள்ளது. இது சுஜோக் சிகிச்சையாளர்கள் நோய்களைக் கண்டறிவதற்கு ஒரு இரண்டாவது கருத்தாக (Second Opinion) பயனுள்ளதாக இருக்கும். இருப்பினும், இது ஒரு AI சாட்பாட் என்பதால், இது எப்போதும் 100% துல்லியமாக இருக்க முடியாது மற்றும் தொழில்முறை மருத்துவ ஆலோசனை, கண்டறிதல் அல்லது சிகிச்சைக்கு மாற்றாகாது.\"",
      "footer-copyright": "© 2026 சுஜோக் AI BOT. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "footer-developer": "அன்புடன் உருவாக்கியவர் ஹரி பாட்ஸ்",
      
      "modal-title": "செய்தி அனுப்பப்பட்டது!",
      "modal-desc": "தொடர்பு கொண்டதற்கு நன்றி. ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ் பிரதிநிதி உங்களை விரைவில் தொடர்புகொள்வார்.",
      "modal-close": "மூடுக",
      
      "principles-title": "சுஜோக் ஆற்றல் & தொடர்பு",
      "principles-subtitle": "மனித உடலின் உறுப்புகளையும் ஆற்றல்களையும் கைகள் மற்றும் கால்களில் சுஜோக் எவ்வாறு வரைபடமாக்குகிறது என்பதைப் புரிந்துகொள்ளுங்கள்.",
      "tab-yin-yang": "யின் & யான் இருமை",
      "tab-six-ki": "சிக்ஸ் கி (6 ஆற்றல்கள்)",
      "tab-correspondence": "உறுப்புகளின் தொடர்பு வரைபடம்",
      "yy-title": "யின் & யான் ஆற்றல் சமநிலை",
      "yy-desc": "சுஜோக் என்பது ஆரோக்கியத்தை ஆளும் இரண்டு நிரப்பு சக்திகளான யின் மற்றும் யான் என்ற கீழைநாட்டு தத்துவத்தின் அடிப்படையில் கட்டமைக்கப்பட்டுள்ளது. மனித கை உடலின் அமைப்பை பிரதிபலிக்கும் ஒரு இயற்கையான யின்-யான் பிரிவைக் கொண்டுள்ளது:",
      "yy-yin-title": "☯ யின் பக்கம் (உள்ளங்கை)",
      "yy-yin-1": "உடலின் முன் பக்கத்தைக் குறிக்கிறது",
      "yy-yin-2": "மென்மையான, வெளிறிய மற்றும் அதிக உணர்திறன் கொண்ட தோல்",
      "yy-yin-3": "உட்புற யின் உறுப்புகளைக் கொண்டுள்ளது (இதயம், நுரையீரல், கல்லீரல், வயிறு)",
      "yy-yin-4": "உயிர் ஆற்றலை ஏற்றுக்கொண்டு சேமிக்கிறது",
      "yy-yang-title": "☯ யான் பக்கம் (கையின் பின்புறம்)",
      "yy-yang-1": "உடலின் பின் பக்கத்தைக் குறிக்கிறது",
      "yy-yang-2": "கடினமான, இருண்ட மற்றும் அதிக பாதுகாப்பு கொண்ட தோல்",
      "yy-yang-3": "முதுகெலும்பு, சிறுநீரகங்கள் மற்றும் எலும்பு அமைப்புகளைக் கொண்டுள்ளது",
      "yy-yang-4": "செயலில் உள்ள ஆற்றலை விநியோகிக்கிறது மற்றும் பாதுகாக்கிறது",
      "sixki-title": "சிக்ஸ் கி (6 ஆற்றல்கள்) கோட்பாடு",
      "sixki-desc": "டிரைஓரிஜின் மற்றும் சிக்ஸ் கி கோட்பாட்டின் படி, உடலின் ஆரோக்கியம் ஆறு அத்தியாவசிய சுற்றுச்சூழல் ஆற்றல்களால் பராமரிக்கப்படுகிறது. இந்த ஓட்டங்களில் ஏற்படும் ஏற்றத்தாழ்வு நோயை உண்டாக்குகிறது. சிகிச்சையாளர்கள் குறிப்பிட்ட ஆற்றல் ஓட்டங்களைக் குறைக்க அல்லது அதிகரிக்க விரல்களில் உள்ள புள்ளிகளைத் தூண்டுகிறார்கள்:",
      "table-header-energy": "ஆற்றல்",
      "table-header-color": "வண்ணம்",
      "table-header-organs": "தொடர்புடைய உறுப்புகள்",
      "energy-wind": "காற்று (Wind)",
      "color-green": "பச்சை",
      "organs-wind": "கல்லீரல், பித்தப்பை",
      "energy-heat": "வெப்பம் (Heat)",
      "color-red": "சிவப்பு",
      "organs-heat": "இதயம், சிறுகுடல்",
      "energy-hotness": "அதிவெப்பம் (Hotness)",
      "color-orange": "ஆரஞ்சு",
      "organs-hotness": "மூளை, தண்டுவடம்",
      "energy-humidity": "ஈரப்பதம் (Humidity)",
      "color-yellow": "மஞ்சள்",
      "organs-humidity": "மண்ணீரல், வயிறு",
      "energy-dryness": "வறட்சி (Dryness)",
      "color-brown": "பழுப்பு",
      "organs-dryness": "நுரையீரல், பெருங்குடல்",
      "energy-coldness": "குளிர்ச்சி (Coldness)",
      "color-blue": "நீலம் / கருப்பு",
      "organs-coldness": "சிறுநீரகங்கள், சிறுநீர்ப்பை",
      "correspondence-title": "நிலையான உறுப்பு தொடர்பு வரைபடம்",
      "correspondence-desc": "நிலையான தொடர்பு முறை கைகள் மற்றும் கால்களை முழு உடலின் சிறிய பிரதிநிதித்துவமாக நடத்துகிறது. ஒரு உறுப்பு நோய்வாய்ப்படும்போது, தொடர்பு மண்டலத்தில் உள்ள புள்ளிகள் மென்மையாகின்றன. இந்த புள்ளிகளைத் தூண்டுவது உடனடி குணப்படுத்துதலைத் தூண்டுகிறது:",
      "map-head-title": "பெருவிரல்:",
      "map-head-desc": "தலை மற்றும் கழுத்துக்கு ஒத்திருக்கிறது (மூளை, கண்கள், மூக்கு, வாய்).",
      "map-abdomen-title": "உள்ளங்கையின் கீழ் பகுதி:",
      "map-abdomen-desc": "வயிற்றுப் பகுதிக்கு ஒத்திருக்கிறது (வயிறு, கல்லீரல், பித்தப்பை, குடல்).",
      // Mobile redesign keys (Tamil)
      "mobile-hero-title": "உங்களின் AI-ஆற்றல் கொண்ட சுஜோக் உதவியாளர் <span class=\"badge-coming-soon\" style=\"font-size: 0.8rem; padding: 4px 8px; display: inline-block; vertical-align: middle;\">விரைவில் வருகிறது</span>",
      "mobile-hero-subtitle": "சுஜோக் சிகிச்சை, தொடர்பு அமைப்புகள், சிக்ஸ் கி, சிகிச்சை முறைகள் மற்றும் பலவற்றைப் பற்றிய உடனடி பதில்களைப் பெறுங்கள்.",
      "mobile-hero-cta-chat": "அரட்டையைத் தொடங்கு",
      "chat-status-active": "இப்போது செயல்பாட்டில்",
      "chat-welcome-msg": "வணக்கம்! நான் உங்கள் AI-ஆற்றல் கொண்ட சுஜோக் உதவியாளர். சுஜோக் சிகிச்சை, புள்ளி அமைப்புகள், சிக்ஸ் கி அல்லது சிகிச்சை முறைகள் பற்றி எது வேண்டுமானாலும் என்னிடம் கேளுங்கள். கீழே உள்ள கேள்விகளில் ஒன்றைச் சொடுக்கி சோதித்துப் பாருங்கள்!",
      "chat-q1": "🤕 தலைவலிக்கு எந்தப் புள்ளி உதவுகிறது?",
      "chat-q2": "✋ தொடர்பு சிகிச்சை முறையை விளக்குக",
      "chat-q3": "⚡ சிக்ஸ் கி கோட்பாடு என்றால் என்ன?",
      "chat-q4": "🌱 முதுகு வலியை எவ்வாறு குணப்படுத்துவது?",
      "mob-feat-1-title": "சுஜோக் அறிவில் பயிற்சி பெற்ற AI",
      "mob-feat-1-desc": "அடிப்படை வெளியீடுகள், தொடர்பு மாதிரிகள் மற்றும் டிரைஓரிஜின் புத்தகங்களிலிருந்து தொகுக்கப்பட்ட ஆழமான அறிவுத்தளம்.",
      "mob-feat-2-title": "உடனடி பதில்கள்",
      "mob-feat-2-desc": "உடனடி மருத்துவ குறிப்புகள் மற்றும் புள்ளி வரைபடங்களை ஒரு வினாடிக்கும் குறைவான நேரத்தில் பெறுங்கள்.",
      "mob-feat-3-title": "சுஜோக் விரைவாகக் கற்க",
      "mob-feat-3-desc": "சான்றிதழ் தேர்வுகள், மெரிடியன் படிப்புகள் மற்றும் புள்ளிகளைக் கண்டறியும் ஒரு சிறந்த ஆய்வு உதவியாளர்.",
      "mob-feat-4-title": "சிகிச்சை வழிகாட்டுதல்",
      "mob-feat-4-desc": "காந்த துருவங்கள், விதைகள், வண்ணங்கள் மற்றும் கண்டறியும் அழுத்த நுட்பங்கள் பற்றிய நடைமுறை விவரங்கள்.",
      "mob-feat-5-title": "எப்போதும் கிடைக்கும்",
      "mob-feat-5-desc": "24/7 கிடைக்கும். எங்கும், எந்த நேரத்திலும் உடனடி ஆலோசனைகளுக்கு முழுமையாக உகந்தது.",
      "mob-feat-6-title": "மொபைல் பயன்பாட்டிற்கு உகந்தது",
      "mob-feat-6-desc": "ஒற்றைக் கை கட்டைவிரல் வழிசெலுத்தல் மற்றும் மிக வேகமான இலகுரக ஏற்றுதல் நேரத்துடன் வடிவமைகப்பட்டுள்ளது.",
      "mob-why-1-title": "புத்தகங்களைத் தேடும் நேரத்தை மிச்சப்படுத்துகிறது",
      "mob-why-1-desc": "பெரிய பாடப்புத்தகங்களைப் புரட்டாமல் அறிகுறிகளை உடனடியாக புள்ளிகளுடன் பொருத்துகிறது.",
      "mob-why-2-title": "மாணவர்கள் எளிதாகக் கற்கலாம்",
      "mob-why-2-desc": "சிக்கலான ஆற்றல் ஓட்ட வழிகாட்டுதல்கள், பூச்சி அமைப்புகள் மற்றும் டிரைஓரிஜின் கட்டமைப்புகளை எளிதாக்குகிறது.",
      "mob-why-3-title": "பயிற்சியாளர்களுக்கு விரைவான குறிப்பு",
      "mob-why-3-desc": "ஆலோசனைகளின் போது புள்ளிகளைக் கண்டறியவும் மற்றும் விதைகளைத் தேர்ந்தெடுக்கவும் சிறந்த கண்டறியும் உதவியாளர்.",
      "mob-why-4-title": "24/7 கிடைக்கும்",
      "mob-why-4-desc": "உடனடி மருத்துவ கேள்வி எழும்போதெல்லாம், இரவும் பகலும் சுஜோக் அறிவை அணுகலாம்.",
      "mob-why-5-title": "ஆரம்ப நிலைப் பயனர்களுக்கு ஏற்ற விளக்கங்கள்",
      "mob-why-5-desc": "புதியவர்களுக்கு முழுமையான ஆரோக்கியக் கொள்கைகளைத் தெளிவுபடுத்த சொற்களை எளிதாக்குகிறது.",
      "mob-trust-title": "எங்கள் நம்பிக்கை தூண்கள்",
      "mob-trust-1-title": "கல்வி சார்ந்தது & பாதுகாப்பானது",
      "mob-trust-1-desc": "கற்றலை மேம்படுத்தவும் புள்ளி வரைபடங்களைப் பாதுகாப்பாக சரிபார்க்கவும் உதவும் ஒரு வழிகாட்டியாக வடிவமைக்கப்பட்டுள்ளது.",
      "mob-trust-2-title": "நம்பகமான அறிவுத்தளம்",
      "mob-trust-2-desc": "பேராசிரியர் பார்க் ஜே வூவின் பாரம்பரிய போதனைகள் மற்றும் சான்றளிக்கப்பட்ட இலக்கியங்களை அடிப்படையாகக் கொண்டது.",
      "mob-trust-3-title": "சிகிச்சையாளர்களின் துணை",
      "mob-trust-3-desc": "கண்டறியும் சோதனைகளை எளிதாக்கவும் புள்ளி இருப்பிடங்களை சரிபார்க்கவும் நம்பகமான இரண்டாவது கருத்தை வழங்குகிறது.",
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

  // State
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
    if (translations[lang]["title"]) {
      document.title = translations[lang]["title"];
    }
  };

  const handleLanguageToggle = (lang) => {
    currentLanguage = lang;
    
    // Update active visual option states for all switch items
    const switches = document.querySelectorAll('.lang-switch');
    switches.forEach(sw => {
      // Toggle class for sliding background selector
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

    // Translate page content
    translatePage(lang);
  };

  // Initialize switches click event logic
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
          // If clicked the switch track directly, toggle the current language
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
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Header styling
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active navigation links highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Scroll to Top action
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 3. Mobile Responsive Nav Drawer
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

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

  // Close mobile drawer on resize to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileDrawer.classList.contains('open')) {
      menuToggle.classList.remove('open');
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });


  // ==========================================
  // 4. FAQ Accordion Functionality
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all open items first for a clean accordion effect
      faqItems.forEach(otherItem => {
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        const otherContent = otherItem.querySelector('.faq-content');
        otherTrigger.setAttribute('aria-expanded', 'false');
        otherContent.style.maxHeight = null;
      });

      // Toggle current item
      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });


  // ==========================================
  // 4.5. Sujok Principles Tabs Functionality
  // ==========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabButtons && tabPanels) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Update active class on buttons
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active class on panels
        tabPanels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.getAttribute('id') === `panel-${targetTab}`) {
            panel.classList.add('active');
          }
        });
      });
    });
  }


  // ==========================================
  // 5. Contact Form Submission & Modal
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Perform simple validation check
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (name && email && message) {
        // Change button state to loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLanguage === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Sending...';

        // Submit form data via FormSubmit.co AJAX to hariharanmct06@gmail.com
        fetch('https://formsubmit.co/ajax/hariharanmct06@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: 'New Sujok AI BOT Inquiry from ' + name
          })
        })
        .then(response => response.json())
        .then(data => {
          // Show success modal
          successModal.classList.add('show');
          document.body.classList.add('no-scroll');
          contactForm.reset();
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          alert(currentLanguage === 'ta' ? 'ஏதோ தவறு நடந்துவிட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.' : 'Something went wrong. Please try again.');
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
      }
    });
  }

  const closeModal = () => {
    successModal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Close modal when clicking on the background backdrop
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      closeModal();
    }
  });


  // ==========================================
  // 6. Floating WhatsApp Widget Toggles
  // ==========================================
  const whatsappTrigger = document.getElementById('whatsappTrigger');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const popupClose = document.getElementById('popupClose');

  if (whatsappTrigger) {
    whatsappTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.toggle('show');
    });
  }

  if (popupClose) {
    popupClose.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.remove('show');
    });
  }

  // Close popup if clicked anywhere else on the document
  document.addEventListener('click', (e) => {
    if (whatsappPopup.classList.contains('show') && !whatsappPopup.contains(e.target) && e.target !== whatsappTrigger) {
      whatsappPopup.classList.remove('show');
    }
  });


});

