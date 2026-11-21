import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import './About.css';

const foundingPrinciples = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'ஒரு முனை வரி முறை',
    subtitle: 'Single Rate-of-Tax',
    desc: 'வணிக நிறுவனங்களுக்கு நியாயமான மற்றும் ஒரு முனை வரி (Single Rate-of-Tax) விதிக்கப்பட வேண்டும் என்ற முதன்மைக் கோரிக்கை.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'எளிமையான பதிவு நடைமுறைகள்',
    subtitle: 'Transparent & Swift Registration',
    desc: 'புதிய வணிகங்களைப் பதிவு செய்வதற்கான நடைமுறைகள் எவ்விதத் தாமதத்திற்கும் இடமின்றி, முழுக்க முழுக்க வெளிப்படைத்தன்மையுடன் எளிமையாக அமைய வேண்டும்.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'நியாயமான சொத்து வரி',
    subtitle: 'Fair Property Tax Burden',
    desc: 'ஈரோடு நகராட்சியால் விதிக்கப்படும் சொத்து வரிச் சுமை சாமானிய மக்களையும் வணிகர்களையும் பாதிக்காத வகையில் நியாயப்படுத்தப்பட வேண்டும்.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'முன் ஆலோசனைக் கலந்தாய்வு',
    subtitle: 'Consultative Governance',
    desc: 'அரசு தொழில் வரி மற்றும் சொத்து வரி உள்ளிட்ட வரிகளை விதிப்பதற்கு முன்பாக, வணிக அமைப்புகள் மற்றும் பொதுநல அமைப்புகளின் கருத்துகளைக் கேட்டறிந்து பரிசீலிக்க வேண்டும்.'
  }
];

const About = () => {
  return (
    <PageContainer className="about-page-container">
      {/* Hero Header Section */}
      <section className="about-hero-section">
        <div className="about-hero-badge">
          <span className="about-badge-icon">🏛️</span>
          <span>FEDERATION HISTORY &amp; ROOTS • தொடக்கமும் வரலாறும்</span>
        </div>

        <h1 className="about-hero-title">
          ஈரோடு மாவட்ட அனைத்து தொழில் வணிகச் சங்கங்களின் கூட்டமைப்பு (FATIA)
        </h1>
        <p className="about-hero-subtitle">
          Federation of All Trade &amp; Industry Associations of Erode District • About Us 💐
        </p>

        {/* Milestone Quick Stats */}
        <div className="about-milestones-row">
          <div className="about-milestone-pill">
            <span className="milestone-num">05.05.1999</span>
            <span className="milestone-lbl">தொடங்கப்பட்ட நாள்</span>
          </div>
          <div className="about-milestone-divider" />
          <div className="about-milestone-pill">
            <span className="milestone-num">திரு. நடராஜ முதலியார்</span>
            <span className="milestone-lbl">தலைமையில் உருவாக்கம்</span>
          </div>
          <div className="about-milestone-divider" />
          <div className="about-milestone-pill">
            <span className="milestone-num">7 சங்கங்கள் ➔ 78 சங்கங்கள்</span>
            <span className="milestone-lbl">வளர்ந்து நிற்கும் ஆலமரம்</span>
          </div>
        </div>
      </section>

      {/* Genesis & Historic Victory Card */}
      <section className="about-genesis-section">
        <div className="about-genesis-card">
          <div className="about-section-tag">
            <span>HISTORIC BEGINNING • 1999 வரலாற்றுத் தொடக்கம்</span>
          </div>
          <h2 className="about-card-heading">
            போராட்டத்தில் பிறந்த வெற்றி - ஒரே குடையின் கீழ் வணிகர் இயக்கம்
          </h2>
          <p className="about-paragraph-text">
            <strong>05.05.1999-ஆம் ஆண்டு வாக்கில்</strong>, ஈரோடு நகராட்சியால் விதிக்கப்பட்ட அதிகப்படியான சொத்து வரியை எதிர்த்து, பல்வேறு வணிகச் சங்கங்கள் ஒன்றிணைந்து நடத்திய போராட்டத்தின் மூலம் வெற்றி கண்டன. இந்த வெற்றியைத் தொடர்ந்து, வணிகர்களின் நலன்களைப் பாதுகாக்கவும், அவர்களின் நீண்டகாலப் பிரச்சினைகளுக்குத் தீர்வு காணவும், பல்வேறு சங்கங்கள் ஒரே குடையின் கீழ் ஒருங்கிணைந்து செயல்பட வேண்டியதன் அவசியம் உணரப்பட்டது.
          </p>
        </div>
      </section>

      {/* Core Objectives & Founding Principles */}
      <section className="about-principles-section">
        <div className="about-principles-header">
          <span className="about-gold-tag">CORE PRINCIPLES &amp; DEMANDS</span>
          <h2 className="about-principles-title">
            முன்வைக்கப்பட்ட முக்கியக் கோரிக்கைகளும் நோக்கங்களும்
          </h2>
          <p className="about-principles-desc">
            வணிக நிறுவனங்களின் வளர்ச்சிக்கும், வெளிப்படைத்தன்மை கொண்ட நிர்வாகத்திற்கும் அடித்தளமிட்ட உயரிய நோக்கங்கள்:
          </p>
        </div>

        <div className="about-principles-grid">
          {foundingPrinciples.map((item, idx) => (
            <div key={idx} className="about-principle-card">
              <div className="principle-card-top">
                <div className="principle-icon-wrap">{item.icon}</div>
                <span className="principle-step-num">0{idx + 1}</span>
              </div>
              <h3 className="principle-card-title">{item.title}</h3>
              <span className="principle-card-subtitle">{item.subtitle}</span>
              <p className="principle-card-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founding Leadership & Evolution Card */}
      <section className="about-evolution-section">
        <div className="about-evolution-card">
          <div className="about-evolution-content">
            <div className="about-section-tag">
              <span>FOUNDING LEADERSHIP &amp; ORGANIC GROWTH</span>
            </div>
            <h2 className="about-card-heading">
              ஏழு வணிகச் சங்கங்களிலிருந்து பெரும் விருட்சமாக…
            </h2>
            <p className="about-paragraph-text">
              அதன் அடிப்படையில், <strong>ஏழு வணிகச் சங்கங்களை</strong> உள்ளடக்கிய ஓர் ஒருங்கிணைந்த அமைப்பாக, ஈரோடு மாவட்ட அனைத்து தொழில் வணிகச் சங்கங்களின் கூட்டமைப்பு (FATIA), <strong>05.05.1999-ஆம் ஆண்டு திரு. நடராஜ முதலியார்</strong> அவர்களின் தலைமையில் உருவாக்கப்பட்டது.
            </p>
            <p className="about-paragraph-text">
              அன்றைய மூத்தோர்களின் தொலைநோக்குப் பார்வை, அர்ப்பணிப்பு மற்றும் வழிகாட்டுதலின் அடிப்படையில் தொடங்கப்பட்ட FATIA, இன்று பல்வேறு வணிகச் சங்கங்களையும், தொழில் முனைவோர்களையும் ஒருங்கிணைத்து, ஒரு பெரும் விருட்சமாக வளர்ந்து நிற்கிறது.
            </p>
          </div>

          <div className="about-tree-graphic">
            <div className="tree-graphic-circle">
              <img src="/assets/logo.png" alt="FATIA Logo" className="tree-logo-img" />
              <div className="tree-gold-ring" />
            </div>
            <span className="tree-graphic-caption">ஒரு பெரும் விருட்சமாக FATIA</span>
          </div>
        </div>
      </section>

      {/* Government Liaison & Contribution Section */}
      <section className="about-liaison-section">
        <div className="about-liaison-card">
          <div className="about-liaison-icon-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="about-liaison-text">
            <h3 className="about-liaison-title">
              அரசுகளுடன் இணக்கமான பணி &amp; வணிகர்களின் உரிமைக் குரல்
            </h3>
            <p className="about-paragraph-text">
              வணிகர்களின் உரிமைகள், நலன்கள் மற்றும் வளர்ச்சிக்காகத் தொடர்ந்து குரல் கொடுத்து வரும் FATIA, இந்திய மற்றும் தமிழக அரசுகளுடன் இணக்கமான முறையில் செயல்பட்டு, தொழில் மற்றும் வணிகம் புரிவோர் எதிர்கொள்ளும் பல்வேறு நடைமுறைச் சிக்கல்களுக்குத் தீர்வு காணவும், தொழில் வளர்ச்சிக்குத் தேவையான வழிகாட்டுதல்களை வழங்கவும் தொடர்ந்து தனது பங்களிப்பைச் செய்து வருகிறது.
            </p>
          </div>
        </div>
      </section>

      {/* Grand Pledge & Vision Banner */}
      <section className="about-pledge-section">
        <div className="about-pledge-banner">
          <div className="pledge-quote-mark">“</div>
          <h2 className="pledge-banner-title">
            ஈரோடு மாவட்டத் தொழில்துறைக்குப் புதிய ஒளி சேர்ப்போம்!
          </h2>
          <p className="pledge-banner-text">
            அன்றைய மூத்தோர்கள் விதைத்த இந்த ஆலமரத்தை, இன்றைய இளைய தலைமுறைத் தொழில் முனைவோரும் எதிர்காலச் சந்ததியினரும் புதிய தொழில்நுட்பங்களுடன் இணைந்து, மேலும் பல புதிய உயரங்களுக்குக் கொண்டு செல்வதே நமது லட்சியமாகும். பாரம்பரியமிக்க இந்த அமைப்பின் கொள்கைகளையும், ஒற்றுமை உணர்வையும் கண்ணியத்துடன் முன்னெடுத்துச் சென்று, ஈரோடு மாவட்டத் தொழில்துறைக்குப் புதிய ஒளி சேர்ப்போம்!
          </p>
          <div className="pledge-banner-footer">
            <div className="pledge-emblem-badge">
              <img src="/assets/logo.png" alt="FATIA" className="pledge-logo" />
              <div className="pledge-author">
                <span className="pledge-author-org">FATIA — ஈரோடு மாவட்ட அனைத்து தொழில் வணிகச் சங்கங்களின் கூட்டமைப்பு</span>
                <span className="pledge-author-tag">Federation of All Trade &amp; Industry Associations of Erode District</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
