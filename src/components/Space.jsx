import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Removed unused react-leaflet imports: MapContainer, TileLayer, Marker, Popup
// Removed unused leaflet imports: L, markerIcon2x, markerIcon, markerShadow
// Removed leaflet icon fix

// Import the new OpenLayers map component (moved to top)
import MapWithOpenLayers from './MapWithOpenLayers';

const SingleCard = ({ image, name, role, company, sector, location, id, onMore, extra }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/founder/${id}`);
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '20px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: 300,
        minWidth: 220,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div onClick={handleClick} style={{ width: '100%', height: 140, overflow: 'hidden', background: '#f3f3f3' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '18px 16px 16px 16px', width: '100%', textAlign: 'center' }}>
        <h3 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: '#222' }}>{name}</h3>
        <div style={{ fontSize: 14, color: '#888', margin: '6px 0 10px 0' }}>{role}</div>
        {sector && (
          <span style={{
            display: 'inline-block',
            background: '#e0f7fa',
            color: '#00796b',
            borderRadius: '12px',
            padding: '4px 12px',
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 6,
          }}>{sector}</span>
        )}
        {location && (
          <div style={{ fontSize: 12, color: '#aaa', marginTop: 6 }}>{location}</div>
        )}
        <div style={{ marginTop: 10 }}>
          <button onClick={onMore} style={{ background: 'none', color: '#FF6347', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 15, textDecoration: 'underline' }}>More</button>
        </div>
      </div>
    </div>
  );
};

const Space = () => {
  const [founders] = useState([
    {
      id: 1,
      name: "SmartPark-Innovation",
      company: "ICT",
      description: "TechTrain Academy is a premier training and consulting institution",
      image: "./assests/images/master12.jpg",
      lat: -6.369028, // Example coordinate for Dodoma, needs verification
      lng: 35.748519, // Example coordinate for Dodoma, needs verification
      extra: {
        contactName: "Eng. Vedasto Biyaka",
        contactEmail: "vedasto.biyaka@katubuka.com",
        phoneNumber: "0716893830",
        spaceType: "Incubator",
        spaceTypeOther: "incubator",
        yearEstablished: "2022",
        numStartups: "12",
        sectorFocus: "ICT",
        targetAudience: "Early-stage startups",
        targetAudienceOther: "Women Entrepreneurs, Youth Entrepreneurs, Rural Innovators",
        supportNeeded: "Funding/Grants, Technology resources, Market access and partnerships, Policy advocacy, Capacity building/training, Networking opportunities",
        supportNeededOther: "International exposure",
        collaborations: "Universities, NGOs, Investors",
        collaborationsOther: "Tech communities",
        challenges: "Infrastructure (e.g., space, equipment, internet)",
        interestedTraining: "Yes",
        trainingTopics: "Corporate Strategy Development, Marketing, Financial Management and Accounting, Human Resource Management, Quality and Productivity improvement, leadership and pitching, STEM skill development",
        interestedEvents: "Yes",
        eventFocus: "Tech innovations, Social Impact startups, Health innovations, green innovation",
        supportedByCostech: "Yes",
        openToPartnerships: "Yes",
        partnerTypes: "Government agencies, NGOs, Private Companies, Universities, Investors",
        capacityBuilding: "Children (Primary and Secondary school students), Youth (VETA, College and University students, Graduates) and Women",
        additionalComments: "We are looking forward on working together in building vibrant Dodoma Innovation Ecosystem",
        spaceName: "SmartPark-Innovation and Recreational Park, Dodoma"
      }
    },
    {
      id: 2,
      name: "Wency Tech",
      company: "Renewable Energy",
      image: "./assests/images/BAM.png",
      lat: -2.5164, // Coordinate for Wency Tech (Mwanza)
      lng: 32.9175, // Coordinate for Wency Tech (Mwanza)
      extra: {
        contactName: "Wenceslaus Frank",
        contactEmail: "wenceslausfrank@gmail.com",
        phoneNumber: "0620842438",
        spaceType: "Maker Space",
        spaceTypeOther: "",
        yearEstablished: "2025",
        numStartups: "3",
        sectorFocus: "Renewable Energy",
        targetAudience: "Early-stage startups",
        targetAudienceOther: "",
        supportNeeded: "Funding/Grants",
        supportNeededOther: "Funding or Grants but also capacity building and training from successful mentors",
        collaborations: "Mentorship programs",
        collaborationsOther: "",
        challenges: "Business plan and prototype reviews and facilitation of workshops and boot camps",
        interestedTraining: "Yes",
        trainingTopics: "Marketing",
        interestedEvents: "Yes",
        eventFocus: "Green innovations",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "Investors",
        capacityBuilding: "Business plans and leadership development skills",
        additionalComments: "COSTECH should be the umbrella for the young who are struggling to build their startup by giving them mentorship programs based on their innovation ideas and that should be oftentimes.",
        spaceName: "Wency tech"
      }
    },
    {
      id: 3,
      name: "Njombe FDC",
      company: "Education",
      image: "./assests/images/maendeleo.jpg",
      lat: -9.3333, // Coordinate for Njombe FDC (Njombe)
      lng: 34.7667, // Coordinate for Njombe FDC (Njombe)
      extra: {
        contactName: "Adam Rogers",
        contactEmail: "adam.kasema@moe.go.tz",
        phoneNumber: "0762 018682",
        spaceType: "Incubator",
        spaceTypeOther: "",
        yearEstablished: "1975",
        numStartups: "3",
        sectorFocus: "Education",
        targetAudience: "Early-stage startups",
        targetAudienceOther: "",
        supportNeeded: "Technology resources (e.g., software, tools)",
        supportNeededOther: "Machines",
        collaborations: "Mentorship programs",
        collaborationsOther: "",
        challenges: "Capacity building and funding",
        interestedTraining: "Yes",
        trainingTopics: "Business developing",
        interestedEvents: "Yes",
        eventFocus: "Tech innovation",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "Universities and government agencies",
        capacityBuilding: "How to manage hub effectively",
        additionalComments: "Support our hubs running cost",
        spaceName: "Njombe FDC"
      }
    },
    {
      id: 4,
      name: "SIDO TLED HUB-Mwanza",
      company: "ICT",
      image: "./assests/images/sido.png",
      lat: -2.5164, // Coordinate for SIDO TLED HUB (Mwanza)
      lng: 32.9175, // Coordinate for SIDO TLED HUB (Mwanza)
      extra: {
        contactName: "Hassan Juma Ally",
        contactEmail: "hassanally63@gmail.com",
        phoneNumber: "+255784288101",
        spaceType: "Incubator",
        spaceTypeOther: "NIL",
        yearEstablished: "2019",
        numStartups: "18",
        sectorFocus: "ICT",
        targetAudience: "Early-stage startups",
        targetAudienceOther: "N/L",
        supportNeeded: "Funding/Grants",
        supportNeededOther: "Capacity building for our staff",
        collaborations: "Access to funding (e.g., grants, seed capital, investors)",
        collaborationsOther: "Facilitation of workshops and boot camps",
        challenges: "Funding",
        interestedTraining: "Yes",
        trainingTopics: "Business development",
        interestedEvents: "Yes",
        eventFocus: "Tech innovations",
        supportedByCostech: "Yes",
        openToPartnerships: "Yes",
        partnerTypes: "NGOs, government agencies",
        capacityBuilding: "Incubates",
        additionalComments: "Some of our incubates has been funded by Costech regarding innovation support funding",
        spaceName: "SIDO TLED HUB-Mwanza"
      }
    },
    {
      id: 5,
      name: "CDTI Mlale-innovation centre",
      company: "ICT",
      image: "./assests/images/mlale.jpg",
      lat: -8.4833, // Example coordinate for Iringa, needs verification for Mlale specifically
      lng: 35.6922, // Example coordinate for Iringa, needs verification for Mlale specifically
      extra: {
        contactName: "Mwendo Mnambala",
        contactEmail: "mwendo.mnambala@jamii.go.tz",
        phoneNumber: "0755428778",
        spaceType: "Incubator",
        spaceTypeOther: "N/A",
        yearEstablished: "2019",
        numStartups: "03",
        sectorFocus: "ICT",
        targetAudience: "Rural Innovators",
        targetAudienceOther: "",
        supportNeeded: "Capacity building/training",
        supportNeededOther: "N/A",
        collaborations: "Access to funding (e.g., grants, seed capital, investors)",
        collaborationsOther: "",
        challenges: "Access to funds",
        interestedTraining: "Yes",
        trainingTopics: "Pitching",
        interestedEvents: "Yes",
        eventFocus: "",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "",
        capacityBuilding: "Technology development",
        additionalComments: "No",
        spaceName: "CDTI MLALE DIGITAL INNOVATION CENTRE"
      }
    },
    {
      id: 6,
      name: "JAMII OUTREACH Innovation-Centre",
      company: "Education",
      image: "./assests/images/saba.jpg",
      lat: -6.7924, // Coordinate for Jamii Outreach (Dar es Salaam)
      lng: 39.2083, // Coordinate for Jamii Outreach (Dar es Salaam)
      extra: {
        contactName: "Alphonce Arone Sikabena",
        contactEmail: "sikabena.alphonce@gmail.com",
        phoneNumber: "+255755800697",
        spaceType: "Research & Development Hub",
        spaceTypeOther: "Digital and Social Innovation Hub",
        yearEstablished: "5th December, 2019",
        numStartups: "11",
        sectorFocus: "Education",
        targetAudience: "Other",
        targetAudienceOther: "All the above listed",
        supportNeeded: "Other",
        supportNeededOther: "All the above",
        collaborations: "Other",
        collaborationsOther: "All the above",
        challenges: "Limited funding, poor infrastructure, inaccessible internet and communication, poor tech capacity including utilization of Artificial intelligence in addressing various community challenges",
        interestedTraining: "Yes",
        trainingTopics: "Entrepreneurship and Innovation bootcamps, business development, pitching, marketing, digital literacy, leadership, intellectual property management, ICT, artificial intelligence, opportunities in the digital era",
        interestedEvents: "Yes",
        eventFocus: "Social impact startups, tech innovations, green innovations etc",
        supportedByCostech: "Yes",
        openToPartnerships: "Yes",
        partnerTypes: "Investors, International agencies, Government agencies, Embassies, Civil Society Organizations (CSO's),  Innovation hubs and Universities",
        capacityBuilding: "Entrepreneurship and Innovation bootcamps, business development, pitching, marketing, digital literacy, leadership, intellectual property management, ICT, artificial intelligence, opportunities in the digital era",
        additionalComments: "COSTECH has to empower the Tanzania's Innovation Ecosystem and advocate for policy change in order that startups would thrive in an enabling environment without limitations for growth. And also regularly visit innovation hubs and do the monitoring and evaluation.",
        spaceName: "JAMII OUTREACH DIGITAL INNOVATION CENTRE"
      }
    },
    {
      id: 7,
      name: "Nafasi Talent Space",
      company: "Creative Industries",
      image: "./assests/images/dtb1.png",
      lat: -3.6667, // Example coordinate for Shinyanga, needs verification
      lng: 32.7167, // Example coordinate for Shinyanga, needs verification
      extra: {
        contactName: "Ms Hafswa Hassan",
        contactEmail: "hafksha@gmail.com",
        phoneNumber: "0743658582",
        spaceType: "Incubator",
        spaceTypeOther: "Afro-Centric Creative Talent Incubator",
        yearEstablished: "2025",
        numStartups: "2",
        sectorFocus: "Creative Industries",
        targetAudience: "Early-stage startups",
        targetAudienceOther: "",
        supportNeeded: "Funding/Grants",
        supportNeededOther: "Culturally-Aligned Mentorship & Engagement",
        collaborations: "Facilitation of workshops and boot camps",
        collaborationsOther: "",
        challenges: "Limited funding, rural infrastructure gaps, low digital access, cultural misconceptions, and lack of value-aligned mentors for youth in creative sectors.",
        interestedTraining: "Yes",
        trainingTopics: "Yes! We'd offer workshops on ethical branding, modest fashion, digital storytelling, entrepreneurship, mental wellness, and faith-aligned creative leadership.",
        interestedEvents: "Yes",
        eventFocus: "Yes! We'd love to participate in startup competitions and pitch events, especially focused on creative industries, digital inclusion, youth innovation, Afro-Islamic entrepreneurship, and rural talent transformation.",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "We're interested in collaborating with impact investors, universities, NGOs, faith-based organizations, cultural institutions, and government agencies that align with youth empowerment, creative economy growth, and Afro-Islamic values.",
        capacityBuilding: "Talent incubation, digital skills, ethical branding, community engagement, creative entrepreneurship, and investor readiness.",
        additionalComments: "COSTECH should prioritize welcoming creative industries in underserved regions like Shinyanga to unlock talent, boost innovation, and local economies.",
        spaceName: "Nafasi Talent Space"
      }
    },
    {
      id: 8,
      name: "HORTI-SAVVY SOLUTIONS",
      company: "Agriculture",
      image: "./assests/images/Logowiz_ai_crafted_logo.png",
      lat: -9.3333, // Example coordinate for Mbeya Region (Rungwe district), needs verification
      lng: 33.4500, // Example coordinate for Mbeya Region (Rungwe district), needs verification
      extra: {
        contactName: "Erick Liyumba",
        contactEmail: "erickliyumba1@gmail.com",
        phoneNumber: "0657871647",
        spaceType: "Incubator",
        spaceTypeOther: "No",
        yearEstablished: "We training youth and women groups who engage in commercial avocado and Banana farming in Rungwe district.",
        numStartups: "12",
        sectorFocus: "Agriculture",
        targetAudience: "Youth Entrepreneurs",
        targetAudienceOther: "Women groups",
        supportNeeded: "Capacity building/training",
        supportNeededOther: "Grants",
        collaborations: "Facilitation of workshops and boot camps",
        collaborationsOther: "",
        challenges: "Skills, equipment and fund",
        interestedTraining: "Yes",
        trainingTopics: "Horticulture education, Business Compliance, Export knowledge, entrepreneurship",
        interestedEvents: "Yes",
        eventFocus: "Horticulture agribusiness",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "Technology transfer, training and business networking and mentorship",
        capacityBuilding: "Increase production, business compliance and export opportunities",
        additionalComments: "I would like to be part of COSTECH programs to empower start ups and entrepreneurship via business programs.",
        spaceName: "HORTI-SAVVY SOLUTIONS"
      }
    },
    {
      id: 9,
      name: "Incubators za maji",
      company: "Manufacturing",
      image: "./assests/images/saba.jpg",
      lat: -2.3500, // Example coordinate for Geita Region (Nyang'hwale), needs verification
      lng: 32.0167, // Example coordinate for Geita Region (Nyang'hwale), needs verification
      extra: {
        contactName: "Gaza Efloni Mkwama P.O.BOX 352 NYANG'HWALE GEITA",
        contactEmail: "gazamkwama71@gmail.com",
        phoneNumber: "0714446940 /0764987750",
        spaceType: "Incubator",
        spaceTypeOther: "Ubunifu wa incubator ya kipekee inayo Tumia maji ya  moto kutoto mayai mbalimbali haitumii umeme wala mafuta",
        yearEstablished: "01.01.2023",
        numStartups: "18",
        sectorFocus: "Manufacturing",
        targetAudience: "Youth Entrepreneurs",
        targetAudienceOther: "Kusaidia tatizo la ukosefu wa ajira nchini kwani vijana watajifunza utengenezaji na utumiaji wa hizi incubators na kujipatia kipato",
        supportNeeded: "Funding/Grants",
        supportNeededOther: "Uhitaji wa fedha katika kuinua ubunifu huu pia kusajiri umiliki wa ubunifu usiibiwe na nchi jirani",
        collaborations: "Access to funding (e.g., grants, seed capital, investors)",
        collaborationsOther: "Fund and more technology",
        challenges: "Lack of materials in manufacturing",
        interestedTraining: "Yes",
        trainingTopics: "Business development",
        interestedEvents: "Yes",
        eventFocus: "Tech innovations",
        supportedByCostech: "No",
        openToPartnerships: "No",
        partnerTypes: "Government agencies",
        capacityBuilding: "Manufacturing",
        additionalComments: "Use swahili in advertsment",
        spaceName: "Incubators za maji"
      }
    },
    {
      id: 10,
      name: "KIBOHUB TANZANIA",
      company: "ICT",
      image: "./assests/images/saba.jpg",
      lat: -6.7924, // Coordinate for Kibohub (Dar es Salaam)
      lng: 39.2083, // Coordinate for Kibohub (Dar es Salaam)
      extra: {
        contactName: "Adamu Mwinyikayoka",
        contactEmail: "kibohub@gmail.com",
        phoneNumber: "0768825770",
        spaceType: "Accelerator",
        spaceTypeOther: "",
        yearEstablished: "2020",
        numStartups: "30",
        sectorFocus: "ICT",
        targetAudience: "Growth-stage startups",
        targetAudienceOther: "",
        supportNeeded: "Funding/Grants",
        supportNeededOther: "",
        collaborations: "Access to funding (e.g., grants, seed capital, investors)",
        collaborationsOther: "",
        challenges: "Lack of funds to run programs",
        interestedTraining: "Yes",
        trainingTopics: "Business Development, Compliance Issues and Pitching",
        interestedEvents: "Yes",
        eventFocus: "Tech Innovations",
        supportedByCostech: "No",
        openToPartnerships: "Yes",
        partnerTypes: "Investors, NGO, Government Agencies",
        capacityBuilding: "Entrepreneurship & Business Development, Digital Skills & Technology",
        additionalComments: "As Kibohub Tanzania, we commend COSTECH for its continued support of the innovation ecosystem and recommend further efforts to enhance collaboration between innovation hubs and government institutions, especially in aligning innovation with national development priorities. We encourage COSTECH to increase access to sustainable funding for both startups and innovation spaces, provide institutional capacity-building support for hub staff, and facilitate affordable access to infrastructure and technology, particularly in underserved regions. Additionally, we urge COSTECH to promote innovation beyond urban centers, strengthen linkages with academic and research institutions, and create platforms to increase visibility and recognition of homegrown innovations. These efforts will help build a more inclusive, resilient, and impactful innovation landscape in Tanzania.",
        spaceName: "KIBOHUB TANZANIA"
      }
    },

    {
      id: 12,
      name: "Shamba Box",
      company: "Agriculture",
      image: "./assests/images/saba.jpg",
      lat: -6.369028, // Example coordinate, needs verification
      lng: 34.888822, // Example coordinate, needs verification
      extra: {
        contactName: "Seth Charles Mkisi",
        contactEmail: "info@shambabox.org",
        phoneNumber: "0756492406",
        spaceType: "Research & Development Hub",
        yearEstablished: "2019",
        sectorFocus: "Agriculture",
        targetAudience: "Youth Entrepreneurs",
        description: "Shamba Box transforms Tanzania's food systems by supporting farmers and agripreneurs with agribusiness development and innovation.",
        programsOffered: "Agribusiness development, leadership, pitching, marketing",
        challenges: "Lack of funds and experts",
        collaborations: "Access to funding, partnerships with CGIAR",
        supportedByCostech: "No",
        spaceName: "Shamba Box"
      }
    },
    {
      id: 13,
      name: "Taifa Tekk",
      company: "Education",
      image: "./assests/images/saba.jpg",
      lat: -6.369028, // Example coordinate, needs verification
      lng: 34.888822, // Example coordinate, needs verification
      extra: {
        contactName: "Said Hozza",
        contactEmail: "sahozza@tatechhub.com",
        phoneNumber: "0684736765",
        spaceType: "Maker Space",
        yearEstablished: "2022",
        sectorFocus: "Education",
        targetAudience: "Early-stage startups",
        description: "Tatech Hub is a maker space focused on education, supporting early-stage startups by providing resources and training to develop business and technical skills, particularly in electronics prototyping and educational technology (Edtech).",
        programsOffered: "Business skills (developing a business plan and sustainable business models), technology skills (hands-on training in electronics prototyping, Arduino programming)",
        challenges: "Many participants lack foundational business and technical skills, requiring significant investment in training before they can launch viable startups.",
        collaborations: "Policy advocacy and regulatory support, market access and partnerships",
        supportedByCostech: "No",
        spaceName: "Tatech Hub"
      }
    },
    {
      id: 14,
      name: "MEI Centre",
      company: "Manufacturing",
      image: "./assests/images/irdp.jpg",
      lat: -3.3667, // Coordinate for MEI Centre (Morogoro)
      lng: 37.3333, // Coordinate for MEI Centre (Morogoro)
      extra: {
        contactName: "Winnie Donald",
        contactEmail: "wdonald@irdp.ac.tz",
        phoneNumber: "0782761872",
        spaceType: "Incubator",
        yearEstablished: "2020",
        sectorFocus: "Manufacturing",
        targetAudience: "Youth Entrepreneurs",
        description: "IRDP Innovation Hub, based at the Institute of Rural Development Planning, supports youth entrepreneurs in manufacturing by providing incubation services to develop innovative products and solutions, with a focus on fostering startup growth within academic settings.",
        programsOffered: "Business idea pitching, preparation of innovation programs, service marketing",
        challenges: "Fund shortage, lack of facilities to support development of Minimum Viable Products (MVPs), lack of operational manual",
        collaborations: "Facilitation of workshops and boot camps",
        supportedByCostech: "Yes",
        spaceName: "MIPANGO ENTREPRENEURSHIP AND INNOVATION (MEI) CENTER"
      }
    },
    {
      id: 15,
      name: "Makonda Renewable Innovation Hub",
      company: "Agriculture",
      image: "./assests/images/saba.jpg",
      lat: -6.369028, // Example coordinate, needs verification
      lng: 34.888822, // Example coordinate, needs verification
      extra: {
        contactName: "Emilian John Shija",
        contactEmail: "Shijaemilian@gmail.com",
        phoneNumber: "0750324942",
        spaceType: "Maker Space",
        yearEstablished: "2018",
        sectorFocus: "Agriculture",
        targetAudience: "Youth Entrepreneurs, Peasants",
        description: "Makonda Renewable Innovation Hub supports startups in renewable energy and space technology, offering satellite data access and technical mentorship.",
        programsOffered: "Business development training",
        challenges: "Poor equipment",
        collaborations: "Workshops, technical support",
        supportedByCostech: "Yes",
        spaceName: "Makonda Renewable Innovation Hub"
      }
    }
  ]);
  const [showMoreId, setShowMoreId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  // Pagination state
  const CARDS_PER_PAGE = 8;

  // Filtering and searching logic
  const getFilteredFounders = () => {
    let filtered = founders;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(f =>
        (f.name && f.name.toLowerCase().includes(q)) ||
        (f.company && f.company.toLowerCase().includes(q))
      );
    }
    return filtered;
  };

  const filteredFounders = getFilteredFounders();
  const totalPages = Math.ceil(filteredFounders.length / CARDS_PER_PAGE);
  const paginatedFounders = filteredFounders.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  return (
    <section className="space-section">
      {/* Hero Section */}
      <div style={{
        width: '100%',
        height: '240px',
        background: `url('assests/images/saba.jpg') center/cover no-repeat`,
        position: 'relative',
        borderRadius: '10px',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }} />
        <h1 style={{
          color: 'white',
          fontSize: '2.8rem',
          fontWeight: 700,
          zIndex: 2,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
          Innovation Spaces
        </h1>
      </div>

      {/* Sidebar and Map Section */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginBottom: '2rem',
        padding: '0 1rem',
      }}>
        {/* Description Sidebar */}
        <div style={{
          flex: '1',
          background: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{
            color: '#FF6347',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: 600,
          }}>About Innovation Spaces</h2>
          <p style={{
            color: '#666',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}>
            Innovation spaces in Tanzania are hubs of creativity and technological advancement, fostering entrepreneurship and economic growth. These spaces provide essential resources, mentorship, and networking opportunities for startups and innovators across various sectors including ICT, Agriculture, Manufacturing, and Education.
          </p>
          <p style={{
            color: '#666',
            lineHeight: 1.6,
          }}>
            Our network of innovation spaces includes incubators, accelerators, maker spaces, and research & development hubs, each contributing uniquely to Tanzania's innovation ecosystem. These spaces are strategically located across the country to ensure accessibility and regional development.
          </p>
        </div>

        {/* Map Section */}
        {/* Replace the react-leaflet map with the OpenLayers map */} 
        <div style={{
          flex: '1',
          background: '#fff',
          padding: '1rem',
          borderRadius: '10px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          height: '400px',
        }}>
          <MapWithOpenLayers founders={founders} />
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-container" style={{ padding: '0 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24, gap: 12 }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="text"
              placeholder="Search by name or company..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              style={{ padding: '0.5rem 1rem', borderRadius: 5, border: '1px solid #eee', fontSize: 16 }}
            />
            <button type="submit" style={{ padding: '0.5rem 1.2rem', background: '#eee', color: '#FF6347', border: 'none', borderRadius: '5px', fontWeight: 600, cursor: 'pointer' }}>Search</button>
          </form>
        </div>
        <div
          className="space-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            width: '100%',
            padding: '0 5px',
          }}
        >
          {paginatedFounders.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#FF6347', fontWeight: 600, fontSize: 20, padding: '2rem 0' }}>
              No results found for your search/filter. Please try a different name or company.
            </div>
          ) : (
            paginatedFounders.map(founder => (
              <SingleCard
                key={founder.id}
                id={founder.id}
                image={founder.image}
                name={founder.name}
                role={founder.role}
                company={founder.company}
                sector={founder.extra?.sectorFocus || founder.sectorFocus}
                location={founder.extra?.location || founder.sensitiveData?.location}
                onMore={() => setShowMoreId(founder.id)}
                extra={founder.extra}
              />
            ))
          )}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 1rem 0', gap: 12 }}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={{ padding: '0.5rem 1.2rem', background: page === 1 ? '#eee' : '#FF6347', color: page === 1 ? '#aaa' : 'white', border: 'none', borderRadius: '5px', fontWeight: 600, cursor: page === 1 ? 'not-allowed' : 'pointer' }}
            >
              Previous
            </button>
            <span style={{ alignSelf: 'center', fontWeight: 600, color: '#FF6347' }}>Page {page} of {totalPages}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              style={{ padding: '0.5rem 1.2rem', background: page === totalPages ? '#eee' : '#FF6347', color: page === totalPages ? '#aaa' : 'white', border: 'none', borderRadius: '5px', fontWeight: 600, cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
            >
              Next
            </button>
          </div>
        )}

        {/* Contact Information Section */}
        <div style={{ 
          textAlign: 'center', 
          margin: '2rem 0', 
          padding: '1.5rem', 
          background: '#f8f8f8', 
          borderRadius: '10px',
          border: '1px solid #eee'
        }}>
          <h3 style={{ 
            color: '#FF6347', 
            marginBottom: '1rem', 
            fontSize: '1.2rem',
            fontWeight: 600 
          }}>Contact Information</h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <p style={{ margin: '0.5rem 0', color: '#666' }}>
                <strong style={{ color: '#333' }}>Contact Person:</strong> Mis Patience karua 
              </p>
              <p style={{ margin: '0.5rem 0', color: '#666' }}>
                <strong style={{ color: '#333' }}>Email:</strong> patience.karua@costech.or.tz
              </p>
              <p style={{ margin: '0.5rem 0', color: '#666' }}>
                <strong style={{ color: '#333' }}>Phone:</strong> +255786599100
              </p>
            </div>
          </div>
        </div>

        {showMoreId && (
          <Modal onClose={() => setShowMoreId(null)}>
            <SpaceDetails founder={founders.find(f => f.id === showMoreId)} />
          </Modal>
        )}
      </div>
    </section>
  );
};

const Modal = ({ children, onClose }) => (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }} onClick={onClose}>
    <div style={{
      background: '#fff',
      borderRadius: 18,
      padding: 0,
      minWidth: 340,
      maxWidth: 520,
      width: '90%',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      border: '1.5px solid #f3f3f3',
      animation: 'popIn 0.18s cubic-bezier(.4,2,.6,1)'
    }} onClick={e => e.stopPropagation()}>
      <div style={{
        background: 'linear-gradient(90deg, #FF6347 0%, #FF9472 100%)',
        borderRadius: '18px 18px 0 0',
        padding: '1.2rem 2rem 1rem 2rem',
        color: 'white',
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        Space Details
        <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', fontSize: 26, color: 'white', cursor: 'pointer', marginLeft: 12, fontWeight: 700, lineHeight: 1 }}>&times;</button>
      </div>
      <div style={{ padding: '2rem 2rem 1.5rem 2rem' }}>
        {children}
      </div>
    </div>
    <style>{`
      @keyframes popIn {
        0% { transform: scale(0.95); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}</style>
  </div>
);

const SpaceDetails = ({ founder }) => {
  const [showContact, setShowContact] = useState(false);
  if (!founder) return null;
  const extra = founder.extra || {};

  // Special case for SmartPark Innovation (id 1)
  if (founder.id === 1) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> SmartPark Innovation</li>
          <li style={liStyle}><strong>Sector:</strong> ICT</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator (Accelerator, Co-working Space, R&D Hub)</li>
          <li style={liStyle}><strong>Year Established:</strong> 2022</li>
          <li style={liStyle}><strong>Target Audience:</strong> Women Entrepreneurs, Youth Entrepreneurs, Rural Innovators</li>
          <li style={liStyle}><strong>Description:</strong> SmartPark is an innovation and recreational park in Dodoma, fostering a vibrant innovation ecosystem through STEM skill development and support for tech startups.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Corporate strategy development, marketing, financial management, leadership, pitching, STEM skills</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Infrastructure (space, equipment, internet) and funding</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Mentorship programs, startup competitions, workshops, funding access, industry partnerships</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Eng. Vedasto Biyaka</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> vedasto.biyaka@katubuka.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0716893830</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Wency Tech (id 2)
  if (founder.id === 2) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Wency Tech</li>
          <li style={liStyle}><strong>Sector:</strong> Renewable Energy</li>
          <li style={liStyle}><strong>Type of Space:</strong> Maker Space</li>
          <li style={liStyle}><strong>Year Established:</strong> 2025</li>
          <li style={liStyle}><strong>Target Audience:</strong> Early-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> Wency Tech focuses on creating unique light lamps using plastic waste materials and coconut shells, promoting sustainable innovation.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Marketing training</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Resource constraints, access to funding, and updated technology</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Mentorship programs, workshops, business plan reviews</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Wenceslaus Frank</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> wenceslausfrank@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0620842438</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Njombe FDC (id 3)
  if (founder.id === 3) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Njombe FDC</li>
          <li style={liStyle}><strong>Sector:</strong> Education</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator (Vocational College)</li>
          <li style={liStyle}><strong>Year Established:</strong> 1975</li>
          <li style={liStyle}><strong>Target Audience:</strong> Early-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> A vocational college-based incubator supporting early-stage startups with a focus on educational innovation.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business development training</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Capacity building and funding</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Mentorship programs, access to funding</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Adam Rogers</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> adam.kasema@moe.go.tz</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0762 018682</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for SIDO TLED HUB-Mwanza (id 4)
  if (founder.id === 4) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> SIDO TLED HUB-Mwanza</li>
          <li style={liStyle}><strong>Sector:</strong> ICT</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator</li>
          <li style={liStyle}><strong>Year Established:</strong> 2019</li>
          <li style={liStyle}><strong>Target Audience:</strong> Early-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> SIDO TLED HUB in Mwanza supports technology startups with funding and incubation services to foster innovation.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business development training</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Funding</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Access to funding, workshops</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Hassan Juma Ally</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> hassanally63@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> +255784288101</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for CDTI Mlale Digital Innovation Centre (id 5)
  if (founder.id === 5) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> CDTI Mlale Digital Innovation Centre</li>
          <li style={liStyle}><strong>Sector:</strong> ICT</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator</li>
          <li style={liStyle}><strong>Year Established:</strong> 2019</li>
          <li style={liStyle}><strong>Target Audience:</strong> Rural Innovators</li>
          <li style={liStyle}><strong>Description:</strong> CDTI Mlale Digital Innovation Centre supports rural innovators with a focus on technology development and pitching skills.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Pitching training</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Access to funds</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Access to funding</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Mwendo Mnambala</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> mwendo.mnambala@jamii.go.tz</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0755428778</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Jamii Outreach Digital Innovation Centre (id 6)
  if (founder.id === 6) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Jamii Outreach Digital Innovation Centre</li>
          <li style={liStyle}><strong>Sector:</strong> Education</li>
          <li style={liStyle}><strong>Type of Space:</strong> Research & Development Hub</li>
          <li style={liStyle}><strong>Year Established:</strong> 2019</li>
          <li style={liStyle}><strong>Target Audience:</strong> All (Early-stage startups, Youth Entrepreneurs, Rural Innovators)
          </li>
          <li style={liStyle}><strong>Description:</strong> Jamii Outreach Digital Innovation Centre supports startups in education through entrepreneurship bootcamps, digital literacy, and AI utilization.
          </li>
          <li style={liStyle}><strong>Programs Offered:</strong> Entrepreneurship bootcamps, business development, pitching, marketing, digital literacy, leadership, intellectual property management, ICT, AI</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Limited funding, poor infrastructure, inaccessible internet, low tech capacity
          </li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> All (funding, mentorship, workshops, industry partnerships, policy advocacy)
          </li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Alphonce Arone Sikabena</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> sikabena.alphonce@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> +255755800697</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Nafasi Talent Space (id 7)
  if (founder.id === 7) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Nafasi Talent Space</li>
          <li style={liStyle}><strong>Sector:</strong> Creative Industries</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator (Afro-Centric Creative Talent Incubator)</li>
          <li style={liStyle}><strong>Year Established:</strong> 2025</li>
          <li style={liStyle}><strong>Target Audience:</strong> Early-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> Nafasi Talent Space is an Afro-centric creative talent incubator in Shinyanga, focusing on youth innovation and cultural entrepreneurship.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Ethical branding, modest fashion, digital storytelling, entrepreneurship, mental wellness, faith-aligned creative leadership</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Limited funding, rural infrastructure gaps, low digital access, cultural misconceptions</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Workshops, startup competitions</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Ms Hafswa Hassan</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> hafksha@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0743658582</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Horti-Savvy Solutions (id 8)
  if (founder.id === 8) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Horti-Savvy Solutions</li>
          <li style={liStyle}><strong>Sector:</strong> Agriculture</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator</li>
          <li style={liStyle}><strong>Target Audience:</strong> Youth Entrepreneurs, Women Groups</li>
          <li style={liStyle}><strong>Description:</strong> Horti-Savvy Solutions trains youth and women groups in commercial avocado and banana farming in Rungwe district.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Horticulture education, business compliance, export knowledge, entrepreneurship</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Skills, equipment, and funding</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Workshops, technology transfer, business networking</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Erick Liyumba</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> erickliyumba1@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0657871647</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Incubators za Maji (id 9)
  if (founder.id === 9) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Incubators za Maji</li>
          <li style={liStyle}><strong>Sector:</strong> Manufacturing</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator</li>
          <li style={liStyle}><strong>Year Established:</strong> 2023</li>
          <li style={liStyle}><strong>Target Audience:</strong> Youth Entrepreneurs</li>
          <li style={liStyle}><strong>Description:</strong> Incubators za Maji develops unique incubators using hot water to hatch eggs, addressing unemployment through innovative manufacturing.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business development, fund support</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Lack of materials and funding for manufacturing</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Access to funding, technology support</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Gaza Efloni Mkwama</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> gazamkwama71@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0714446940 / 0764987750</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Kibohub Tanzania (id 10)
  if (founder.id === 10) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Kibohub Tanzania</li>
          <li style={liStyle}><strong>Sector:</strong> ICT</li>
          <li style={liStyle}><strong>Type of Space:</strong> Accelerator</li>
          <li style={liStyle}><strong>Year Established:</strong> 2020</li>
          <li style={liStyle}><strong>Target Audience:</strong> Growth-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> Kibohub Tanzania accelerates tech startups, focusing on business development and compliance to align with national priorities.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business development, compliance issues, pitching</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Lack of funds to run programs</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Access to funding, partnerships with investors and government</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Adamu Mwinyikayoka</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> kibohub@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0768825770</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Makonda Renewable Innovation Hub (id 15)
  if (founder.id === 15) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Makonda Renewable Innovation Hub</li>
          <li style={liStyle}><strong>Sector:</strong> Agriculture</li>
          <li style={liStyle}><strong>Type of Space:</strong> Maker Space</li>
          <li style={liStyle}><strong>Year Established:</strong> 2018</li>
          <li style={liStyle}><strong>Target Audience:</strong> Youth Entrepreneurs, Peasants</li>
          <li style={liStyle}><strong>Description:</strong> Makonda Renewable Innovation Hub supports startups in renewable energy and space technology, offering satellite data access and technical mentorship.
          </li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business development training</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Poor equipment</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Workshops, technical support</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Emilian John Shija</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> Shijaemilian@gmail.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0750324942</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Shamba Box (id 12)
  if (founder.id === 12) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Shamba Box</li>
          <li style={liStyle}><strong>Sector:</strong> Agriculture</li>
          <li style={liStyle}><strong>Type of Space:</strong> Research & Development Hub</li>
          <li style={liStyle}><strong>Year Established:</strong> 2019</li>
          <li style={liStyle}><strong>Target Audience:</strong> Youth Entrepreneurs</li>
          <li style={liStyle}><strong>Description:</strong> Shamba Box transforms Tanzania's food systems by supporting farmers and agripreneurs with agribusiness development and innovation.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Agribusiness development, leadership, pitching, marketing</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Lack of funds and experts</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Access to funding, partnerships with CGIAR</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Seth Charles Mkisi</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> info@shambabox.org</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0756492406</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for Taifa Tekk (id 13)
  if (founder.id === 13) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> Tatech Hub</li>
          <li style={liStyle}><strong>Sector:</strong> Education</li>
          <li style={liStyle}><strong>Type of Space:</strong> Maker Space</li>
          <li style={liStyle}><strong>Year Established:</strong> 2022</li>
          <li style={liStyle}><strong>Target Audience:</strong> Early-stage startups</li>
          <li style={liStyle}><strong>Description:</strong> Tatech Hub is a maker space focused on education, supporting early-stage startups by providing resources and training to develop business and technical skills, particularly in electronics prototyping and educational technology (Edtech).</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business skills (developing a business plan and sustainable business models), technology skills (hands-on training in electronics prototyping, Arduino programming)</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Many participants lack foundational business and technical skills, requiring significant investment in training before they can launch viable startups.</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Policy advocacy and regulatory support, market access and partnerships</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Said Hozza</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> sahozza@tatechhub.com</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0684736765</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special case for MEI Centre (id 14)
  if (founder.id === 14) {
    return (
      <div>
        <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{founder.company}</h2>
        <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
          <li style={liStyle}><strong>Space Name:</strong> MIPANGO ENTREPRENEURSHIP AND INNOVATION (MEI) CENTER</li>
          <li style={liStyle}><strong>Sector:</strong> Manufacturing</li>
          <li style={liStyle}><strong>Type of Space:</strong> Incubator</li>
          <li style={liStyle}><strong>Year Established:</strong> 2020</li>
          <li style={liStyle}><strong>Target Audience:</strong> Youth Entrepreneurs</li>
          <li style={liStyle}><strong>Description:</strong> IRDP Innovation Hub, based at the Institute of Rural Development Planning, supports youth entrepreneurs in manufacturing by providing incubation services to develop innovative products and solutions, with a focus on fostering startup growth within academic settings.</li>
          <li style={liStyle}><strong>Programs Offered:</strong> Business idea pitching, preparation of innovation programs, service marketing</li>
          <li style={liStyle}><strong>Main Challenge:</strong> Fund shortage, lack of facilities to support development of Minimum Viable Products (MVPs), lack of operational manual</li>
          <li style={liStyle}><strong>Area of Collaboration:</strong> Facilitation of workshops and boot camps</li>
        </ul>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setShowContact(!showContact)}
            style={{
              padding: '10px 20px',
              background: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
            onMouseOut={(e) => e.target.style.background = '#FF6347'}
          >
            {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
          {showContact && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #eee',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
              <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> Winnie Donald</p>
              <p style={{ margin: '5px 0' }}><strong>Email:</strong> wdonald@irdp.ac.tz</p>
              <p style={{ margin: '5px 0' }}><strong>Phone:</strong> 0782761872</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default return for all other cards
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#FF6347', fontWeight: 700, fontSize: 20, marginBottom: 18, textAlign: 'left' }}>{extra.spaceName || founder.name}</h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none', color: '#333', fontSize: 15, margin: 0, textAlign: 'left' }}>
        <li style={liStyle}><strong>Space Name:</strong> {extra.spaceName || founder.name}</li>
        <li style={liStyle}><strong>Sector:</strong> {extra.sectorFocus || founder.company}</li>
        <li style={liStyle}><strong>Type of Space:</strong> {extra.spaceType}</li>
        <li style={liStyle}><strong>Description / Programs:</strong> {extra.collaborationsOther || extra.collaborations || "Business plan and prototype reviews, Startup competitions and pitch events, Facilitation of workshops and boot camps"}</li>
        <li style={liStyle}><strong>Beneficiaries:</strong> {extra.capacityBuilding || "Youth entrepreneurs, early-stage startups, and innovators"}</li>
        <li style={liStyle}><strong>Year Established:</strong> {extra.yearEstablished}</li>
        <li style={liStyle}><strong>Target Audience:</strong> {extra.targetAudience}</li>
        <li style={liStyle}><strong>Support Needed:</strong> {extra.supportNeededOther ? (extra.supportNeeded + " (" + extra.supportNeededOther + ")") : extra.supportNeeded}</li>
        <li style={liStyle}><strong>Collaborations:</strong> {extra.collaborations}</li>
        <li style={liStyle}><strong>Collaborations Other:</strong> {extra.collaborationsOther}</li>
        <li style={liStyle}><strong>Main Challenges:</strong> {extra.challenges}</li>
        <li style={liStyle}><strong>Interested in Training:</strong> {extra.interestedTraining}</li>
        <li style={liStyle}><strong>Area of Capacity Building:</strong> {extra.trainingTopics}</li>
        <li style={liStyle}><strong>Interested in Events:</strong> {extra.interestedEvents}</li>
        <li style={liStyle}><strong>Event Focus:</strong> {extra.eventFocus}</li>
        <li style={liStyle}><strong>Open to Partnerships:</strong> {extra.openToPartnerships}</li>
        <li style={liStyle}><strong>Partnerships Types:</strong> {extra.partnerTypes}</li>
      </ul>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button 
          onClick={() => setShowContact(!showContact)}
          style={{
            padding: '10px 20px',
            background: '#FF6347',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '15px',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = '#ff4f2f'}
          onMouseOut={(e) => e.target.style.background = '#FF6347'}
        >
          {showContact ? 'Hide Contact Details' : 'Show Contact Details'}
        </button>
        {showContact && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            background: '#f8f8f8',
            borderRadius: '8px',
            border: '1px solid #eee',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#FF6347', marginBottom: '10px', fontSize: '16px' }}>Contact Information</h3>
            <p style={{ margin: '5px 0' }}><strong>Contact Person:</strong> {extra.contactName}</p>
            <p style={{ margin: '5px 0' }}><strong>Email:</strong> {extra.contactEmail}</p>
            <p style={{ margin: '5px 0' }}><strong>Phone:</strong> {extra.phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const liStyle = {
  marginBottom: 10,
  padding: '7px 0',
  borderBottom: '1px solid #f3f3f3',
  lineHeight: 1.6,
};

export default Space; 