/* ==========================================
   SUJOK AI - INTERACTIVE CODE & LANGUAGE SWITCHER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Translation System (English / Tamil)
  // ==========================================
  const translations = {
    en: {
      "announcement": "⚡ Experience the Future of Natural Healing with Sujok AI!",
      "nav-home": "Home",
      "nav-about": "About Sujok",
      "nav-founder": "Founder",
      "nav-features": "Features",
      "nav-pricing": "Pricing",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      "nav-cta": "Get in Touch",
      
      "hero-badge": "AI Healthcare Assistant",
      "hero-title": "Ask Anything About <span class=\"gradient-text\">Sujok Therapy</span>",
      "hero-subtitle": "Powered by AI. Built for Sujok practitioners, students, and therapists.",
      "hero-description": "Access Sujok knowledge, correspondence systems, Six Ki theory, and seed therapy instantly.",
      "hero-cta-get": "Get Sujok AI",
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
      
      "founder-title": "Founder of Sujok",
      "founder-lifespan": "1942 – 2010",
      "founder-quote": "\"Modern medicine treats the body, but Sujok treats the human life and spirit through natural wisdom.\"",
      "founder-desc-1": "Professor Park Jae Woo was a South Korean scientist, philosopher, and the visionary founder of Sujok Therapy. After graduating from Seoul National University, his deep understanding of Eastern philosophy and science led him to develop the Sujok correspondence systems in the 1980s.",
      "founder-desc-2": "His groundbreaking work introduced the standard correspondence system, insect correspondence system, energy flow concepts, Triorigin theory, Six Ki theory, Smile Meditation, and Twist Therapy. His holistic healing methods are today practiced and recognized by thousands of medical practitioners, acupuncture specialists, and students globally.",
      "founder-badge-1": "Scientist",
      "founder-badge-2": "Philosopher",
      "founder-badge-3": "Author",
      "founder-badge-4": "Global Teacher",
      
      "features-title": "How Sujok AI Helps",
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
      
      "why-title": "Why Choose Sujok AI",
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
      
      "why-visual-title": "Sujok AI System Status",
      "why-visual-stat-1-label": "Availability",
      "why-visual-stat-2-label": "Response Time",
      "why-visual-stat-3-label": "Core Modules",
      "why-visual-stat-4-label": "Secure Access",
      "why-visual-footer": "✨ Built to preserve Professor Park Jae Woo's legacy through cutting-edge Artificial Intelligence.",
      
      "pricing-tag": "Premium AI Assistant",
      "pricing-title": "Sujok AI Assistant Pricing",
      "pricing-subtitle": "Get full access to the intelligent Sujok Therapy Assistant. Choose the subscription plan that fits your clinical practice.",
      "plan-1-name": "Monthly Plan",
      "plan-1-desc": "Perfect for testing or short-term clinical support",
      "plan-1-duration": "/ month",
      "plan-1-btn": "Subscribe Monthly",
      "plan-2-name": "Annual Plan",
      "plan-2-desc": "Best for dedicated students and busy practitioners",
      "plan-2-duration": "/ 12 months",
      "plan-2-savings": "Save ₹2,000 INR (Get 2 Months Free!)",
      "plan-2-btn": "Subscribe Annually",
      "plan-feat-1": "24/7 AI-powered Sujok assistance",
      "plan-feat-2": "Instant answers to therapy questions",
      "plan-feat-3": "Correspondence point guides",
      "plan-feat-4": "Six Ki and Energy Theory guidance",
      "plan-feat-5": "Seed therapy recommendations",
      "plan-feat-6": "Mobile & desktop responsive access",
      "plan-feat-7": "Priority customer support",
      "plan-feat-8": "Advanced Triorigin insights",
      
      "faq-title": "Frequently Asked Questions",
      "faq-q1": "What is Sujok Therapy?",
      "faq-a1": "Sujok Therapy is an alternative healing method developed by South Korean scientist Professor Park Jae Woo. It operates on the principle that the entire human body is mapped onto the hands (\"Su\") and feet (\"Jok\"). By stimulating specific points on these extremities through pressure, seeds, magnets, or colors, therapists can balance energy and treat various physical and emotional conditions.",
      "faq-q2": "Who can use Sujok AI?",
      "faq-a2": "Sujok AI is designed for anyone interested in alternative healing: professional therapists looking for a rapid reference guide, acupuncture/acupressure students, wellness coaches, or beginners who want to learn how to locate correspondence zones on their hands for self-care.",
      "faq-q3": "Is Sujok AI suitable for beginners?",
      "faq-a3": "Yes, absolutely! The AI is designed to adapt its answers. Beginners can ask simple questions like \"Where is the stomach point on my hand?\" and receive clear, non-technical guidance. It also supports advanced energy concepts for experienced practitioners.",
      "faq-q4": "Can therapists use Sujok AI in practice?",
      "faq-a4": "Yes. Therapists can use Sujok AI as a quick-consultation tool to verify points, double-check Six Ki energy relationships, review Triorigin system mappings, or get inspiration for treatment setups (e.g. choice of seeds, magnet polarities) during patient visits.",
      "faq-q5": "Does Sujok AI provide educational guidance?",
      "faq-a5": "Yes, Sujok AI excels at education. It provides systematic descriptions of standard correspondence systems, insect systems, Triorigin theory, and meridian systems. However, please note that it is an informational tool and does not issue formal certifications.",
      
      "company-tag": "Created & Marketed By",
      "company-name": "Hari Bots and Business Solutions",
      "company-desc": "Hari Bots and Business Solutions develops intelligent AI solutions, chatbots, automation systems, and educational technology platforms designed to empower businesses and professionals through innovation.",
      "company-founder-tag": "Founder of Sujok AI Bot",
      "company-founder-name": "Hariharan M",
      "company-founder-desc": "Hariharan M is the founder of Sujok AI Bot. He is a first-year Mechatronics student, a Sujok therapy enthusiast, and a member of Energy Nest. He has completed Reiki healing (4 levels), Ama Deus healing, Lama Fera healing (1st level), and Kwan Yin Angel healing.",
      "company-website-link": "Visit Website",
      
      "contact-title": "Get in Touch",
      "contact-subtitle": "Have questions about Sujok AI or need support? Send us a message or chat with us directly on WhatsApp.",
      "form-title": "Send a Message",
      "form-name-label": "Full Name",
      "form-email-label": "Email Address",
      "form-msg-label": "Message",
      "form-submit": "Send Message",
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
      "footer-disclaimer-text": "\"Sujok AI is designed for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment.\"",
      "footer-copyright": "© 2026 Sujok AI. All Rights Reserved.",
      "footer-developer": "Developed with care by Hari Bots",
      
      "modal-title": "Message Sent!",
      "modal-desc": "Thank you for reaching out. A representative from Hari Bots and Business Solutions will contact you shortly.",
      "modal-close": "Close"
    },
    ta: {
      "announcement": "⚡ சுஜோக் AI உடன் இயற்கை மருத்துவத்தின் எதிர்காலத்தை அனுபவிக்கவும்!",
      "nav-home": "முகப்பு",
      "nav-about": "சுஜோக் பற்றி",
      "nav-founder": "நிறுவனர்",
      "nav-features": "அம்சங்கள்",
      "nav-pricing": "கட்டணம்",
      "nav-faq": "கேள்விகள்",
      "nav-contact": "தொடர்பு",
      "nav-cta": "தொடர்பு கொள்க",
      
      "hero-badge": "AI மருத்துவ உதவியாளர்",
      "hero-title": "சுஜோக் சிகிச்சை பற்றி <span class=\"gradient-text\">எது வேண்டுமானாலும் கேளுங்கள்</span>",
      "hero-subtitle": "AI மூலம் இயக்கப்படுகிறது. சுஜோக் பயிற்சியாளர்கள், மாணவர்கள் மற்றும் மருத்துவர்களுக்காக உருவானது.",
      "hero-description": "சுஜோக் அறிவு, தொடர்பு அமைப்புகள், சிக்ஸ் கி கொள்கைகள் மற்றும் விதை சிகிச்சை முறைகளை உடனுக்குடன் அணுகலாம்.",
      "hero-cta-get": "சுஜோக் AI பெறுக",
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
      
      "founder-title": "சுஜோக்கின் நிறுவனர்",
      "founder-lifespan": "1942 – 2010",
      "founder-quote": "\"நவீன மருத்துவம் உடலைக் குணப்படுத்துகிறது, ஆனால் சுஜோக் இயற்கை ஞானத்தின் மூலம் மனித வாழ்வையும் ஆன்மாவையும் குணப்படுத்துகிறது.\"",
      "founder-desc-1": "பேராசிரியர் பார்க் ஜே வூ தென்கொரிய விஞ்ஞானி, தத்துவஞானி மற்றும் சுஜோக் சிகிச்சையின் நிறுவனர் ஆவார். சியோல் தேசிய பல்கலைக்கழகத்தில் பட்டம் பெற்ற பிறகு, தத்துவம் மற்றும் அறிவியலின் ஆழமான புரிதலின் அடிப்படையில் 1980களில் சுஜோக் முறைகளை அவர் உருவாக்கினார்.",
      "founder-desc-2": "அவரது தற்காலப் பணி நிலையான தொடர்பு அமைப்பு, பூச்சி தொடர்பு அமைப்பு, ஆற்றல் ஓட்டக் கோட்பாடுகள், டிரைஓரிஜின் கோட்பாடு, சிக்ஸ் கி கோட்பாடு, புன்னகை தியானம் மற்றும் திருப்ப சிகிச்சை (Twist Therapy) ஆகியவற்றை அறிமுகப்படுத்தியது. இவரது முறைகள் இன்று உலகம் முழுவதும் ஆயிரக்கணக்கான மருத்துவர்களால் பயிற்சி செய்யப்படுகின்றன.",
      "founder-badge-1": "விஞ்ஞானி",
      "founder-badge-2": "தத்துவஞானி",
      "founder-badge-3": "எழுத்தாளர்",
      "founder-badge-4": "உலகளாவிய ஆசிரியர்",
      
      "features-title": "சுஜோக் AI எவ்வாறு உதவுகிறது",
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
      
      "why-title": "ஏன் சுஜோக் AI ஐ தேர்வு செய்ய வேண்டும்?",
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
      
      "why-visual-title": "சுஜோக் AI கணினி நிலை",
      "why-visual-stat-1-label": "கிடைக்கும் தன்மை",
      "why-visual-stat-2-label": "பதிற் நேரம்",
      "why-visual-stat-3-label": "முக்கிய பிரிவுகள்",
      "why-visual-stat-4-label": "பாதுகாப்பான அணுகல்",
      "why-visual-footer": "✨ பேராசிரியர் பார்க் ஜே வூவின் பாரம்பரியத்தை செயற்கை நுண்ணறிவு மூலம் பாதுகாக்க உருவாக்கப்பட்டது.",
      
      "pricing-tag": "பிரீமியம் AI உதவியாளர்",
      "pricing-title": "சுஜோக் AI உதவியாளர் கட்டணங்கள்",
      "pricing-subtitle": "சுஜோக் சிகிச்சை AI உதவியாளருக்கான முழு அணுகலைப் பெறுங்கள். உங்கள் தேவைக்கேற்ற சந்தா திட்டத்தைத் தேர்ந்தெடுக்கவும்.",
      "plan-1-name": "மாதாந்திர திட்டம்",
      "plan-1-desc": "குறுகிய கால அல்லது சோதனை பயன்பாட்டிற்கு ஏற்றது",
      "plan-1-duration": "/ மாதம்",
      "plan-1-btn": "மாதாந்திர சந்தா",
      "plan-2-name": "வருடாந்திர திட்டம்",
      "plan-2-desc": "பிரத்யேக மாணவர்கள் மற்றும் தீவிர பயிற்சியாளர்களுக்கு சிறந்தது",
      "plan-2-duration": "/ 12 மாதங்கள்",
      "plan-2-savings": "₹2,000 சேமிப்பு (2 மாதங்கள் இலவசம்!)",
      "plan-2-btn": "வருடாந்திர சந்தா",
      "plan-feat-1": "24/7 AI சுஜோக் சிகிச்சை வழிகாட்டுதல்",
      "plan-feat-2": "சிகிச்சை கேள்விகளுக்கு உடனடி பதில்கள்",
      "plan-feat-3": "தொடர்பு புள்ளி வரைபட வழிகாட்டிகள்",
      "plan-feat-4": "சிக்ஸ் கி மற்றும் ஆற்றல் கோட்பாட்டு விளக்கம்",
      "plan-feat-5": "விதை சிகிச்சை புள்ளிகள் பரிந்துரை",
      "plan-feat-6": "மொபைல் & கணினியில் பயன்படுத்தும் வசதி",
      "plan-feat-7": "முன்னுரிமை வாடிக்கையாளர் ஆதரவு",
      "plan-feat-8": "மேம்பட்ட டிரைஓரிஜின் நுண்ணறிவு",
      
      "faq-title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      "faq-q1": "சுஜோக் சிகிச்சை என்றால் என்ன?",
      "faq-a1": "சுஜோக் சிகிச்சை என்பது தென்கொரிய விஞ்ஞானி பேராசிரியர் பார்க் ஜே வூ என்பவரால் உருவாக்கப்பட்ட மாற்று மருத்துவ முறையாகும். இது மனித உடல் முழுமையாக கை ('சு') மற்றும் கால் ('ஜோக்') ஆகியவற்றில் வரைபடமாக்கப்பட்டுள்ளது என்ற கொள்கையில் செயல்படுகிறது. அழுத்தம், விதைகள், காந்தங்கள் அல்லது வண்ணங்கள் மூலம் புள்ளிகளைத் தூண்டுவதன் மூலம் ஆற்றலைச் சமநிலைப்படுத்தி உடல் உபாதைகளைக் குணப்படுத்தலாம்.",
      "faq-q2": "சுஜோக் AI ஐ யார் பயன்படுத்தலாம்?",
      "faq-a2": "மாற்று மருத்துவத்தில் ஆர்வமுள்ள எவரும் இதைப் பயன்படுத்தலாம்: விரைவான வழிகாட்டுதலைத் தேடும் தொழில்முறை சிகிச்சையாளர்கள், அக்குபிரஷர் மாணவர்கள், ஆரோக்கிய பயிற்சியாளர்கள் அல்லது சுய பராமரிப்புக்காக புள்ளிகளைக் கண்டறிய விரும்பும் ஆரம்பநிலை பயிற்சியாளர்கள்.",
      "faq-q3": "சுஜோக் AI ஆரம்பநிலையினருக்கு ஏற்றதா?",
      "faq-a3": "ஆம், நிச்சயமாக! இந்த AI ஆரம்பநிலையினருக்கு எளிய மொழியில் பதிலளிக்கும். \"கை கட்டை விரலில் வயிறு எங்குள்ளது?\" போன்ற எளிய கேள்விகளைக் கேட்டுப் பதில்களைப் பெறலாம். அத்துடன் அனுபவம் வாய்ந்தவர்களுக்கான மேம்பட்ட கோட்பாடுகளையும் விளக்கும்.",
      "faq-q4": "சிகிச்சையாளர்கள் தங்கள் மருத்துவத்தில் சுஜோக் AI ஐப் பயன்படுத்தலாமா?",
      "faq-a4": "ஆம். சிகிச்சையாளர்கள் நோயாளியைப் பார்க்கும் போது புள்ளிகளைச் சரிபார்க்கவும், ஆற்றல் ஓட்டங்களை ஒப்பிடவும், விதைகள் மற்றும் காந்த சிகிச்சைப் புள்ளிகளைத் திட்டமிடவும் சுஜோக் AI ஐ ஒரு உடனடி வழிகாட்டியாகப் பயன்படுத்தலாம்.",
      "faq-q5": "சுஜோக் AI கல்வி சார்ந்த வழிகாட்டல்களை வழங்குகிறதா?",
      "faq-a5": "ஆம், சுஜோக் AI கல்வியில் சிறந்து விளங்குகிறது. இது நிலையான தொடர்பு, பூச்சி அமைப்பு, மெரிடியன் அமைப்புகளை முறையாக விளக்குகிறது. இருப்பினும், இது ஒரு தகவல் கருவி மட்டுமே, சான்றிதழ்களை வழங்காது.",
      
      "company-tag": "உருவாக்கம் & சந்தைப்படுத்துதல்",
      "company-name": "ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ்",
      "company-desc": "ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ் நிறுவனம் வணிகங்கள் மற்றும் வல்லுநர்களை மேம்படுத்துவதற்காக புத்திசாலித்தனமான AI தீர்வுகள், சாட்போட்கள், ஆட்டோமேஷன் அமைப்புகள் மற்றும் கல்வித் தொழில்நுட்ப தளங்களை உருவாக்குகிறது.",
      "company-founder-tag": "சுஜோக் AI பாட்டின் நிறுவனர்",
      "company-founder-name": "ஹரிஹரன் எம்",
      "company-founder-desc": "ஹரிஹரன் எம் சுஜோக் AI பாட்டின் நிறுவனர் ஆவார். இவர் முதலாமாண்டு மெகாட்ரானிக்ஸ் மாணவர், சுஜோக் சிகிச்சை ஆர்வலர் மற்றும் எனர்ஜி நெஸ்ட் (Energy Nest) அமைப்பின் உறுப்பினர் ஆவார். இவர் ரெய்கி சிகிச்சை (4 நிலைகள்), அமா தியூஸ் சிகிச்சை (Ama Deus), லாமா ஃபெரா சிகிச்சை (முதல் நிலை) மற்றும் குவான் யின் ஏஞ்சல் சிகிச்சை ஆகியவற்றை முடித்துள்ளார்.",
      "company-website-link": "இணையதளத்தை பார்வையிடவும்",
      
      "contact-title": "தொடர்பு கொள்க",
      "contact-subtitle": "சுஜோக் AI பற்றி ஏதேனும் கேள்விகள் உள்ளதா? எங்களுக்கு செய்தி அனுப்புங்கள் அல்லது வாட்ஸ்அப் மூலம் நேரடியாக அரட்டையடிக்கவும்.",
      "form-title": "செய்தி அனுப்புக",
      "form-name-label": "முழு பெயர்",
      "form-email-label": "மின்னஞ்சல் முகவரி",
      "form-msg-label": "செய்தி",
      "form-submit": "செய்தி அனுப்புக",
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
      "footer-disclaimer-text": "\"சுஜோக் AI கல்வி மற்றும் தகவல் நோக்கங்களுக்காக மட்டுமே வடிவமைக்கப்பட்டுள்ளது. இது தொழில்முறை மருத்துவ ஆலோசனை, கண்டறிதல் அல்லது சிகிச்சைக்கு மாற்றாகாது.\"",
      "footer-copyright": "© 2026 சுஜோக் AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "footer-developer": "அன்புடன் உருவாக்கியவர் ஹரி பாட்ஸ்",
      
      "modal-title": "செய்தி அனுப்பப்பட்டது!",
      "modal-desc": "தொடர்பு கொண்டதற்கு நன்றி. ஹரி பாட்ஸ் மற்றும் பிசினஸ் சொல்யூஷன்ஸ் பிரதிநிதி உங்களை விரைவில் தொடர்புகொள்வார்.",
      "modal-close": "மூடுக"
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
  // 5. Contact Form Submission & Modal
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Perform simple validation check
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (name && email && message) {
        // Show success modal
        successModal.classList.add('show');
        document.body.classList.add('no-scroll');
        contactForm.reset();
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
