import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import './SocialWelfare.css';

const welfareInitiatives = [
  {
    id: 1,
    date: '24.02.2001',
    category: 'Disaster Relief',
    categoryTamil: 'தேசிய பாதுகாப்பு & நிவாரணம்',
    title: 'கார்கில் போர் நிதி வழங்கல்',
    titleEn: 'Kargil War Relief Fund Contribution',
    amount: '₹16,92,000/-',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'திரு. சு. கருத்தையா பாண்டியன் IAS, அன்றைய மாவட்ட ஆட்சியர்',
    description: '1999-ஆம் ஆண்டு கார்கில் போர் நிதியாக, நாட்டைப் பாதுகாக்க போராடிய வீரர்களின் நலனுக்காக கூட்டமைப்பின் சார்பில் மொத்தம் ரூ. 16,92,000/- (ரூபாய் பதினாறு இலட்சத்து தொண்ணூற்று இரண்டாயிரம்) அன்றைய மாவட்ட ஆட்சியர் திரு. சு. கருத்தையா பாண்டியன் IAS அவர்களிடம் நேரடியாக வழங்கப்பட்டது.',
    iconName: 'shield',
    image: '/assets/welfare/kargil_relief.jpg'
  },
  {
    id: 2,
    date: 'சுனாமி பேரிடர்',
    category: 'Disaster Relief',
    categoryTamil: 'பேரிடர் நிவாரணம்',
    title: 'சுனாமி நிவாரணப் பணி – வேதாரண்யம்',
    titleEn: 'Tsunami Disaster Relief Mission – Vedaranyam',
    amount: '₹6,00,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'பாதிக்கப்பட்ட வேதாரண்யம் பகுதி மக்கள்',
    description: 'சுனாமியால் பாதிக்கப்பட்ட வேதாரண்யம் பகுதியில் பாதிக்கப்பட்ட மக்களுக்கு நிவாரணமாக மொத்தம் ரூ. 6,00,000 மதிப்புள்ள உணவுப் பொருட்கள் மற்றும் துணிமணிகள் கூட்டமைப்பின் சார்பில் நேரடியாகக் கொண்டு செல்லப்பட்டு, தக்க சமயத்தில் வழங்கப்பட்டது.',
    iconName: 'wave',
    image: '/assets/welfare/tsunami_relief.jpg'
  },
  {
    id: 3,
    date: 'சமூக நலம்',
    category: 'Healthcare & Community',
    categoryTamil: 'சமூக நலம்',
    title: 'இமையம் புற்றுநோய் காப்பகம் நன்கொடை',
    titleEn: 'Imaiyam Cancer Hospice Donation',
    amount: '₹1,00,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'இமையம் புற்றுநோய் காப்பகம்',
    description: 'இமையம் புற்றுநோய் காப்பகத்தின் சேவைகளை ஆதரிக்கும் வகையில் உறுப்பினர்கள் மூலம் திரட்டப்பட்டு மொத்தம் ₹1,00,000 (ஒரு லட்சம் ரூபாய்) நன்கொடையாக FATIA சார்பில் வழங்கப்பட்டது.',
    iconName: 'heart',
    image: '/assets/welfare/imaiyam_cancer.jpg'
  },
  {
    id: 4,
    date: '20.10.2018',
    category: 'Healthcare & Community',
    categoryTamil: 'மாணவர் நலம் & சுகாதாரம்',
    title: 'அரசுப் பள்ளி மாணவ மாணவியருக்குப் பன்றிக்காய்ச்சல் தடுப்பு நடவடிக்கை',
    titleEn: 'Swine Flu Prevention Drive for Govt School Students',
    amount: 'முழு மாவட்டப் பள்ளிப் பாதுகாப்பு',
    amountLabel: 'வழங்கியவர் / Organizer',
    contributor: 'FATIA',
    recipient: 'திரு. பாலமுரளி, ஈரோடு மாவட்ட முதன்மைக் கல்வி அலுவலர்',
    description: 'அரசுப் பள்ளி மாணவ மாணவியர்களின் உடல்நலப் பாதுகாப்பிற்காக பன்றிக்காய்ச்சல் தொற்றிலிருந்து பாதுகாக்கும் முன்னெச்சரிக்கை நடவடிக்கையாக கிருமிநாசினி திரவங்கள் (Hand Sanitizers) ஈரோடு மாவட்ட முதன்மைக் கல்வி அலுவலர் திரு. பாலமுரளி அவர்களிடம் வழங்கப்பட்டன.',
    iconName: 'users',
    image: '/assets/welfare/swine_flu_school.jpg'
  },
  {
    id: 5,
    date: '21.08.2018',
    category: 'Disaster Relief',
    categoryTamil: 'மாநிலங்களுக்கு இடையிலான பேரிடர் உதவி',
    title: 'கேரளா பெருவெள்ள நிவாரணப் பணி',
    titleEn: 'Kerala Massive Floods Humanitarian Relief Mission',
    amount: '₹30,00,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'கேரள வெள்ளப் பகுதி மக்கள் (ஆட்சியர் கொடியசைத்து தொடக்கம்)',
    description: 'கேரள மாநிலத்தில் பெய்த கனமழை மற்றும் வெள்ளத்தால் பாதிக்கப்பட்ட மக்களுக்கு உதவும் வகையில், நமது உறுப்புச் சங்கங்கள் மற்றும் உறுப்பினர்களிடமிருந்து திரட்டப்பட்ட சுமார் ரூ. 30 இலட்சம் மதிப்புள்ள நிவாரணப் பொருட்கள் மற்றும் நிதியுதவி காசோலைகள் அனுப்பி வைக்கப்பட்டன. ஈரோடு மாவட்ட ஆட்சித் தலைவர் திரு. எஸ். பிரபாகரன், இ.ஆ.ப. (IAS) அவர்கள் கொடியசைத்து நிவாரண வாகனங்களை அனுப்பி வைத்தார்.',
    iconName: 'truck',
    image: '/assets/welfare/kerala_floods.jpg'
  },
  {
    id: 6,
    date: '24.11.2018',
    category: 'Disaster Relief',
    categoryTamil: 'புயல் பேரிடர் நிவாரணம்',
    title: 'கஜா புயல் நிவாரணப் பணி',
    titleEn: 'Gaja Cyclone Disaster Relief Mission',
    amount: '₹10,00,000+',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'திருமதி. கவிதா (DRO) கொடியசைப்பு & பாதிக்கப்பட்ட மக்கள்',
    description: 'கஜா புயலால் பாதிக்கப்பட்ட மக்களுக்காக நமது சங்க உறுப்பினர்களிடமிருந்து பெறப்பட்ட சுமார் ரூ. 10 இலட்சம் மதிப்புள்ள நிவாரணப் பொருட்கள், ஈரோடு மாவட்ட வருவாய் அலுவலர் திருமதி. கவிதா அவர்களால் கொடியசைத்துத் தொடங்கி வைக்கப்பட்டன. இப்பொருட்களைக் கூட்டமைப்பின் பொதுச் செயலாளர் மற்றும் நிர்வாகிகள் பாதிக்கப்பட்ட பகுதிகளுக்கு நேரடியாகச் சென்று வழங்கினர்.',
    iconName: 'wind',
    image: '/assets/welfare/gaja_cyclone.jpg'
  },
  {
    id: 7,
    date: 'சமூக நலம்',
    category: 'Healthcare & Community',
    categoryTamil: 'சமுதாய அறக்கட்டளை உதவி',
    title: 'ஆத்மா அறக்கட்டளைக்கு மாபெரும் நிதியுதவி',
    titleEn: 'Aathma Foundation Mega Philanthropic Grant',
    amount: '₹72,00,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'டாக்டர் சகாதேவன், ஈரோடு ஆத்மா அறக்கட்டளை',
    description: 'ஈரோடு ஆத்மா அறக்கட்டளையின் மகத்தான சமுதாய நற்பணிகளுக்காக, கூட்டமைப்பின் தலைமையில் அனைத்து உறுப்புச் சங்கங்களும் ஒன்றிணைந்து திரட்டிய ரூ. 72 இலட்சம் மாபெரும் நிதி டாக்டர் சகாதேவன் அவர்களிடம் வழங்கப்பட்டது.',
    iconName: 'heartHand',
    image: '/assets/welfare/aathma_foundation.jpg'
  },
  {
    id: 8,
    date: '19.02.2019',
    category: 'Healthcare & Community',
    categoryTamil: 'தேசப் பாதுகாப்பு & வீரவணக்கம்',
    title: 'புல்வாமா தியாகிகளுக்கு வீரவணக்கம் மற்றும் குடும்ப நிதியுதவி',
    titleEn: 'Pulwama Martyrs Tribute & Martyr Families Financial Aid',
    amount: '₹4,00,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA & Olirum Erode',
    recipient: 'தமிழகத்தைச் சேர்ந்த இரு வீரர்களின் குடும்பங்கள்',
    description: "'ஒளிரும் ஈரோடு' சார்பாக புல்வாமா தாக்குதலில் வீரமரணம் அடைந்த வீரர்களுக்கு அஞ்சலி செலுத்தும் நிகழ்வு ஈரோடு கொங்கு கலையரங்கில் நடைபெற்றது. மாவட்ட ஆட்சித் தலைவர் மற்றும் காவல் துறை கண்காணிப்பாளர் முன்னிலையில், தமிழகத்தைச் சேர்ந்த இரு வீரர்களின் குடும்பங்களுக்குக் கூட்டமைப்பு சார்பில் ரூ. 1 இலட்சமும், உறுப்புச் சங்கங்கள் சார்பில் ரூ. 3 இலட்சமும் வழங்கப்பட்டது.",
    iconName: 'award',
    image: '/assets/welfare/pulwama_martyrs.jpg'
  },
  {
    id: 9,
    date: '15.08.2022',
    category: 'Trade & Industry',
    categoryTamil: 'தொழில் முனைவோர் கடன் உதவி',
    title: 'மாநில அரசின் பிணையில்லா கடன் வழங்கும் திட்டம்',
    titleEn: 'State Govt Collateral-Free Credit Facilitation for MSMEs',
    amount: 'பிணையில்லா கடன்',
    amountLabel: 'திட்டம் / Facilitator',
    contributor: 'FATIA Industrial Committee',
    recipient: 'ஃபேட்டியா உறுப்பு சங்கங்களின் உறுப்பினர்கள்',
    description: 'நமது ஃபேட்டியா (FATIA) அமைப்பின் உறுப்பினர்களின் தொழில் மேம்பாடு மற்றும் நிதித் தேவையைப் பூர்த்தி செய்யும் நோக்கில், இண்டஸ்ட்ரியல் டெவலப்மென்ட் கமிட்டி சேர்மன் திரு. எம். ஆர். வெங்கடாச்சலம் அவர்களின் சீரிய முயற்சியால், மாநில அரசின் பிணையில்லா கடன் வழங்கும் திட்டம் நமது உறுப்பினர்களுக்குச் சென்றடைய வழிவகை செய்யப்பட்டது.',
    iconName: 'trending',
    image: '/assets/welfare/msme_credit.jpg'
  },
  {
    id: 10,
    date: '24.09.2022',
    category: 'Civic & Safety',
    categoryTamil: 'சுற்றுச்சூழல் & நகரத் தூய்மை',
    title: 'குப்பை தரம் பிரித்தல் விழிப்புணர்வு பிரச்சாரம் மற்றும் தொட்டிகள் வழங்கல்',
    titleEn: 'Waste Segregation Civic Drive & Dustbin Distribution Campaign',
    amount: 'அனைத்து வீடுகளுக்கும்',
    amountLabel: 'வழங்கியவர் / Organizer',
    contributor: 'FATIA & Erode Corporation',
    recipient: 'ஈரோடு தில்லை நகர் பகுதி பொதுமக்கள் & ஈரோடு மாநகராட்சி',
    description: 'ஈரோடு மாநகராட்சியுடன் இணைந்து FATIA சார்பில் தில்லை நகர் பகுதியில் மக்கும் மற்றும் மக்காத குப்பைகளைத் தரம் பிரித்து வழங்குவது குறித்த விழிப்புணர்வு பிரச்சாரம் மேற்கொள்ளப்பட்டது. சரியாகப் பிரித்து வழங்கும் வீடுகளுக்குப் பாராட்டுச் சின்னமாக நினைவுப் பரிசுகளும், அனைத்து வீடுகளுக்கும் குப்பைகளைத் தரம் பிரித்து வழங்க குப்பைத் தொட்டிகளும் வழங்கப்பட்டன.',
    iconName: 'recycle',
    image: '/assets/welfare/waste_segregation.jpg'
  },
  {
    id: 11,
    date: '06.03.2023',
    category: 'Trade & Industry',
    categoryTamil: 'ஜவுளி & விசைத்தறி வளர்ச்சி',
    title: 'விசைத்தறி இலவச மின்சாரம் 1,000 யூனிட்டாக உயர்த்தியமைக்கு நன்றி மடல்',
    titleEn: 'Powerloom Free Electricity Increased to 1,000 Units',
    amount: '1,000 யூனிட்',
    amountLabel: 'வழங்கியவர் / Advocacy',
    contributor: 'FATIA',
    recipient: 'மாண்புமிகு தமிழக முதலமைச்சர் & மின்சாரத்துறை அமைச்சர்',
    description: 'ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு (FATIA) சார்பில் விடுக்கப்பட்ட கோரிக்கையை ஏற்று, விசைத்தறிகளுக்கு வழங்கப்பட்டு வந்த 750 யூனிட் இலவச மின்சாரத்தை 1,000 யூனிட்டாக உயர்த்தி வழங்கிய மாண்புமிகு தமிழக முதலமைச்சர் திரு. மு.க. ஸ்டாலின் அவர்களுக்கும், மின்சாரத்துறை அமைச்சர் அவர்களுக்கும் கூட்டமைப்பின் சார்பில் நன்றி மடல் அனுப்பப்பட்டது.',
    iconName: 'zap',
    image: '/assets/welfare/powerloom_electricity.jpg'
  },
  {
    id: 12,
    date: '12.12.2023',
    category: 'Disaster Relief',
    categoryTamil: 'புயல் பேரிடர் நிவாரணம்',
    title: 'மிக்ஜாம் புயல் நிவாரணப் பணி - உடைகள் & ஆடைகள் வழங்கல்',
    titleEn: 'Michaung Cyclone Relief - Apparel Distribution',
    amount: '₹1,50,000',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA (ஈரோடு பனியன் ஜவுளி வியாபாரிகள் சங்கம்)',
    recipient: 'சென்னை உள்ளிட்ட புயல் பாதிக்கப்பட்ட பகுதி பொதுமக்கள்',
    description: "'மிக்ஜாம்' புயலால் பாதிக்கப்பட்ட சென்னை உள்ளிட்ட பகுதிகளைச் சேர்ந்த பொதுமக்களுக்கு நிவாரண உதவியாக, ஃபேட்டியா உறுப்புச் சங்கமான ஈரோடு பனியன் ஜவுளி வியாபாரிகள் சங்கத்தின் சார்பில் ரூ. 1.50 இலட்சம் மதிப்புள்ள புதிய ஆடைகள் ஈரோடு மாவட்ட ஆட்சியர் அலுவலகத்தில் ஒப்படைக்கப்பட்டன.",
    iconName: 'package',
    image: '/assets/welfare/michaung_cyclone.jpg'
  },
  {
    id: 13,
    date: '19.12.2023',
    category: 'Disaster Relief',
    categoryTamil: 'தென் மாவட்ட பெருவெள்ள நிவாரணம்',
    title: 'தென் மாவட்ட வெள்ள நிவாரணம் - 500 போர்வைகள் & 2,000 கிலோ அரிசி',
    titleEn: 'South TN Floods Relief - 500 Blankets & 2,000 kg Rice',
    amount: '500 போர்வைகள் + 2,000 கிலோ அரிசி',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA (ஈரோடு ஜல்லி கிரஷர் அண்ட் குவாரி ஓனர்ஸ் அசோசியேஷன்)',
    recipient: 'கன்னியாகுமரி, தூத்துக்குடி உள்ளிட்ட வெள்ள பாதித்த மாவட்டங்கள்',
    description: 'கனமழை மற்றும் வெள்ளத்தால் பாதிக்கப்பட்ட தென் மாவட்ட மக்களுக்கு உதவும் வகையில், ஃபேட்டியா உறுப்புச் சங்கமான ஈரோடு ஜல்லி கிரஷர் அண்ட் குவாரி ஓனர்ஸ் அசோசியேஷன் சார்பில் 500 போர்வைகள் மற்றும் 2,000 கிலோ அரிசி ஆகியவை ஈரோடு மாவட்ட ஆட்சியர் அலுவலகத்தில் ஒப்படைக்கப்பட்டன.',
    iconName: 'truck',
    image: '/assets/welfare/south_floods_blankets.jpg'
  },
  {
    id: 14,
    date: '20.12.2023',
    category: 'Disaster Relief',
    categoryTamil: 'தென் மாவட்ட உணவுப் பாதுகாப்பு',
    title: 'தென் மாவட்ட வெள்ள நிவாரணம் - 5,000 கிலோ அரிசி வழங்கல்',
    titleEn: 'South TN Floods Relief - 5,000 kg Rice Aid',
    amount: '5,000 கிலோ அரிசி',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA (அசோசியேஷன் ஆஃப் ஆல் டெக்ஸ்டைல்ஸ் பிராசஸர்ஸ் - ATP)',
    recipient: 'வெள்ளத்தால் பாதிக்கப்பட்ட தென் மாவட்ட குடும்பங்கள்',
    description: 'வெள்ளத்தால் பாதிக்கப்பட்ட கன்னியாகுமரி, தூத்துக்குடி உள்ளிட்ட மாவட்ட மக்களின் நிவாரணத்திற்காக, ஃபேட்டியா உறுப்புச் சங்கமான அசோசியேஷன் ஆஃப் ஆல் டெக்ஸ்டைல்ஸ் பிராசஸர்ஸ் (ATP) சார்பில் 5,000 கிலோ அரிசி ஈரோடு மாவட்ட ஆட்சியர் அலுவலகத்தில் ஒப்படைக்கப்பட்டது.',
    iconName: 'package',
    image: '/assets/welfare/south_floods_rice.jpg'
  },
  {
    id: 15,
    date: '19.08.2024',
    category: 'Trade & Industry',
    categoryTamil: 'வணிகர் உரிமை & இழப்பீடு மீட்பு',
    title: 'ஜவுளி நிறுவன உரிமையாளர்களுக்கு இழப்பீட்டுத் தொகை பெற்றுத் தருதல்',
    titleEn: 'Textile Manufacturers Damage Compensation Recovery via NEFT',
    amount: '₹11,52,900/-',
    amountLabel: 'மீட்டெடுக்கப்பட்ட தொகை / Recovery',
    contributor: 'FATIA',
    recipient: 'ஈஸ்ட் இந்தியா டிரான்ஸ்போர்ட் நிறுவனத்திடமிருந்து பாதிக்கப்பட்ட நிறுவனங்களுக்கு',
    description: 'ஈஸ்ட் இந்தியா டிரான்ஸ்போர்ட் நிறுவனத்திலிருந்து ஜவுளி நிறுவன உரிமையாளர்களுக்குச் சேர வேண்டிய இரண்டாம் தவணை இழப்பீட்டுத் தொகையான ரூ. 11,52,900/- கூட்டமைப்பின் தீவிர முயற்சியால் NEFT மின்னணு நிதிப் பரிமாற்றம் மூலமாக உரியவர்களுக்குப் பெற்றுத் தரப்பட்டது.',
    iconName: 'check',
    image: '/assets/welfare/textile_compensation.jpg'
  },
  {
    id: 16,
    date: '22.11.2024',
    category: 'Civic & Safety',
    categoryTamil: 'காவல்துறை அலுவலகப் பயன்பாட்டு உதவி',
    title: 'சத்திரம் காவல் நிலையத்திற்கு நவீன ஸ்கேனர் நன்கொடை',
    titleEn: 'High-Speed Scanner Machine Donation to Sathiram Police Station',
    amount: 'நவீன ஸ்கேனர்',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA',
    recipient: 'திரு. செந்தில் பிரபு, வடக்கு காவல் நிலைய ஆய்வாளர்',
    description: 'காவல்துறையின் அலுவலகப் பணிகளுக்கு உதவும் வகையில், சத்திரம் காவல் நிலையப் பயன்பாட்டிற்காகக் கூட்டமைப்பின் (FATIA) சார்பில் நவீன ஸ்கேனர் இயந்திரம் நன்கொடையாக வழங்கப்பட்டது. இதனை வடக்கு காவல் நிலைய ஆய்வாளர் திரு. செந்தில் பிரபு அவர்கள் பெற்றுக்கொண்டார்.',
    iconName: 'award',
    image: '/assets/welfare/police_scanner.jpg'
  },
  {
    id: 17,
    date: '06.12.2024',
    category: 'Disaster Relief',
    categoryTamil: 'வட மாவட்டப் புயல் நிவாரணப் பணி',
    title: 'பெஞ்ச் (Fengal) புயல் நிவாரணப் பணி - நிவாரணப் பொருட்கள் வழங்கல்',
    titleEn: 'Fengal Cyclone North Districts Massive Humanitarian Relief',
    amount: '₹2,50,000/-',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA (EKMA, TVS, ATP, SIPCOT)',
    recipient: 'திருவண்ணாமலை, விழுப்புரம், கிருஷ்ணகிரி, சென்னை மாவட்ட மக்கள்',
    description: "தமிழக வட மாவட்டங்களில் 'பெஞ்ச்' புயலால் பாதிக்கப்பட்ட பொதுமக்களுக்கு உதவும் வகையில், ஃபேட்டியா மற்றும் உறுப்புச் சங்கங்கள் சார்பில் ரூ. 2,50,000/- மதிப்புள்ள 200 சிப்பம் அரிசி, 500 கிலோ அஸ்கா சர்க்கரை, 500 போர்வைகள் மற்றும் 500 துண்டுகள் மாவட்ட ஆட்சியர் அலுவலகத்தில் அதிகாரிகளிடம் ஒப்படைக்கப்பட்டன.",
    iconName: 'truck',
    image: '/assets/welfare/fengal_cyclone.jpg'
  },
  {
    id: 18,
    date: '30.05.2025',
    category: 'Civic & Safety',
    categoryTamil: 'பொது மக்கள் பாதுகாப்பு & குற்றத்தடுப்பு',
    title: 'சிவகிரி பகுதி குற்றத் தடுப்பு & 1,000 கண்காணிப்பு கேமராக்கள் (CCTV) பொருத்துதல்',
    titleEn: 'Crime Prevention & 1,000 CCTV Camera Surveillance Grid Project',
    amount: '1,000 CCTV கேமராக்கள்',
    amountLabel: 'நன்கொடை / Contribution',
    contributor: 'FATIA (Paytm)',
    recipient: 'சிவகிரி & ஈரோடு புறநகர்ப் பகுதி மக்கள் பாதுகாப்புப் பணி',
    description: "சிவகிரி மற்றும் சுற்றுவட்டாரப் பகுதிகளில் குற்றச் சம்பவங்களைத் தடுக்க காவல்துறை துரிதமாகச் செயல்படும் வகையில், அமைச்சர் திரு. எஸ். முத்துசாமி அவர்களின் வழிகாட்டலில் 1,000 கண்காணிப்பு கேமராக்கள் (CCTV) பொருத்தும் பணிகளுக்கு முதற்கட்டமாக ரூ. 1,00,000/- முதல் தவணை நன்கொடை வழங்கப்பட்டது.",
    iconName: 'shield',
    image: '/assets/welfare/cctv_surveillance.jpg'
  }
];

const CalendarSvg = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8C1C2B"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginRight: '4px' }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const renderTimelineIcon = (name) => {
  switch (name) {
    case 'shield':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'wave':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0" />
          <path d="M2 17c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0" />
        </svg>
      );
    case 'heart':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'users':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'truck':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 'wind':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      );
    case 'heartHand':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'award':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case 'trending':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'recycle':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      );
    case 'zap':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'package':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'check':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
};

const SocialWelfare = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { key: 'All', label: 'All Initiatives (18)', labelTa: 'அனைத்து நற்பணிகள்' },
    { key: 'Disaster Relief', label: 'Disaster Relief (8)', labelTa: 'பேரிடர் நிவாரணம்' },
    { key: 'Healthcare & Community', label: 'Healthcare & Aid (4)', labelTa: 'சமூக நலம்' },
    { key: 'Trade & Industry', label: 'Trade & Advocacy (3)', labelTa: 'தொழில் வளர்ச்சி' },
    { key: 'Civic & Safety', label: 'Civic & Safety (3)', labelTa: 'பாதுகாப்பு & தூய்மை' }
  ];

  const filteredInitiatives = welfareInitiatives.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer className="welfare-journey-page">
      {/* Dynamic Swoosh & Architectural Landmark Watermark Header */}
      <section className="welfare-journey-hero">
        {/* Decorative corner swoosh */}
        <div className="welfare-corner-swoosh" />
        
        {/* Subtle Landmark Watermark Sketch */}
        <img
          src="/assets/erode-landmark.png"
          alt="Erode Landmark"
          className="welfare-landmark-watermark"
        />

        <div className="welfare-hero-content">
          <div className="welfare-journey-tag">
            <span className="tag-dash">—</span>
            <span className="tag-text">OUR JOURNEY</span>
            <span className="tag-dash">—</span>
          </div>

          <h1 className="welfare-main-title">
            வரலாற்றுச் செயல்பாடுகள் மற்றும் நன்கொடைகள்
          </h1>
          <p className="welfare-sub-title">
            Historical Initiatives &amp; Donations
          </p>

          {/* Golden Capsule Search Bar */}
          <div className="welfare-search-capsule">
            <svg
              className="welfare-search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A88238"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="welfare-search-input"
              placeholder="Search by initiative, year, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="welfare-search-clear"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="welfare-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`welfare-filter-pill ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <span className="pill-en">{cat.label}</span>
                <span className="pill-ta">{cat.labelTa}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Central Timeline Section with Alternating Image-Content Layout */}
      <section className="welfare-timeline-container">
        {/* Central Vertical Gold Spine Line */}
        <div className="welfare-vertical-line" />

        <div className="welfare-timeline-list">
          {filteredInitiatives.map((item, index) => {
            const isOdd = index % 2 === 0; // 0, 2, 4 -> Row 1, 3, 5 (Odd visually)
            return (
              <div
                key={item.id}
                className={`welfare-timeline-row ${isOdd ? 'row-odd' : 'row-even'}`}
              >
                {/* LEFT SIDE */}
                <div className="timeline-col col-left">
                  {isOdd ? (
                    /* ODD ROW: Left side contains Image on left + Details on right */
                    <div className="odd-left-wrapper">
                      <div className="welfare-image-box shape-odd">
                        <img
                          src={item.image}
                          alt={item.titleEn}
                          className="welfare-card-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="welfare-info-block">
                        <div className="welfare-badge-row">
                          <span className="welfare-date-pill">
                            <CalendarSvg />
                            <span>{item.date}</span>
                          </span>
                        </div>
                        <h2 className="welfare-item-title-ta">{item.title}</h2>
                        <div className="welfare-item-title-en">{item.titleEn}</div>
                        <div className="welfare-contrib-pill-box">
                          <span className="contrib-label">{item.amountLabel || 'நன்கொடை / Contribution'}</span>
                          <span className="contrib-badge">{item.amount}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* EVEN ROW: Left side contains Details only (right-aligned) */
                    <div className="even-left-wrapper">
                      <div className="welfare-badge-row right-align">
                        <span className="welfare-date-pill">
                          <CalendarSvg />
                          <span>{item.categoryTamil || item.date}</span>
                        </span>
                      </div>
                      <h2 className="welfare-item-title-ta right-align">{item.title}</h2>
                      <div className="welfare-item-title-en right-align">{item.titleEn}</div>
                      <div className="welfare-contrib-pill-box right-align">
                        <span className="contrib-label">{item.amountLabel || 'நன்கொடை / Contribution'}</span>
                        <span className="contrib-badge">{item.amount}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CENTER TIMELINE NODE */}
                <div className="timeline-center-node">
                  <div className="connector-connector-line" />
                  <div className="node-dot dot-left" />
                  <div className="node-medallion" title={item.category}>
                    {renderTimelineIcon(item.iconName)}
                  </div>
                  <div className="node-dot dot-right" />
                </div>

                {/* RIGHT SIDE */}
                <div className="timeline-col col-right">
                  {isOdd ? (
                    /* ODD ROW: Right side contains Description + Contributor/Beneficiary */
                    <div className="odd-right-wrapper">
                      <p className="welfare-full-desc">{item.description}</p>
                      <div className="welfare-contributor-tag">
                        <span className="contrib-head">வழங்கியவர் / Contributor :</span>
                        <span className="contrib-body">{item.contributor}</span>
                      </div>
                      {item.recipient && (
                        <div className="welfare-recipient-subtag">
                          <strong>நேரடி ஒப்படைப்பு / பயனாளி:</strong> {item.recipient}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* EVEN ROW: Right side contains Description on left + Image on right */
                    <div className="even-right-wrapper">
                      <div className="even-right-text-col">
                        <p className="welfare-full-desc">{item.description}</p>
                        <div className="welfare-contributor-tag">
                          <span className="contrib-head">வழங்கியவர் / Contributor :</span>
                          <span className="contrib-body">{item.contributor}</span>
                        </div>
                        {item.recipient && (
                          <div className="welfare-recipient-subtag">
                            <strong>நேரடி ஒப்படைப்பு / பயனாளி:</strong> {item.recipient}
                          </div>
                        )}
                      </div>
                      <div className="welfare-image-box shape-even">
                        <img
                          src={item.image}
                          alt={item.titleEn}
                          className="welfare-card-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredInitiatives.length === 0 && (
          <div className="welfare-timeline-empty">
            <p>தேடலுக்குப் பொருத்தமான தகவல்கள் எதுவும் கிடைக்கவில்லை.</p>
            <button
              type="button"
              className="welfare-reset-btn"
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Mission Footer Banner */}
      <section className="welfare-journey-banner">
        <div className="journey-banner-inner">
          <div className="journey-banner-badge">OUR UNWAVERING COMMITMENT</div>
          <h2 className="journey-banner-title">
            வணிகர்களின் ஒற்றுமை — சமூகத்தின் பாதுகாப்பு!
          </h2>
          <p className="journey-banner-desc">
            பேரிடர் காலங்களில் உடனடி நிவாரணம் வழங்குவதிலும், அடித்தட்டு மக்களின் கல்வி மற்றும் சுகாதாரத்தைப் பாதுகாப்பதிலும், ஈரோடு மாவட்ட மக்களின் நல்வாழ்வை உறுதி செய்வதிலும் FATIA என்றும் முன்வரிசையில் நிற்கும்.
          </p>
        </div>
      </section>
    </PageContainer>
  );
};

export default SocialWelfare;
