import React from 'react';
import ReactDOM from 'react-dom';
import './profile.css';

import AnuradhaBhonsale from '../Images/profiles/Dr.Anuradha.png';
import Debbie from '../Images/profiles/Debbie.png';
import HafizVakil from '../Images/profiles/HafizVakil.png';
import JigneshJain from '../Images/profiles/JigneshJain.png';
import KrishnaSundarajan from '../Images/profiles/KrishnaSundarajan.png';
import ManasDewan from '../Images/profiles/ManasDewan.png';
import MauricioPrieto from '../Images/profiles/MauricioPrieto.png';
import NilaySaha from '../Images/profiles/NilaySaha.png';
import NishantFadnavis from '../Images/profiles/NishantFadnavis.png';
import RichardVanTillborg from '../Images/profiles/RichardVanTillborg.png';
import SatyakamaPaul from '../Images/profiles/SatyakamaPaul.png';
import ShoebahmedShaikh from '../Images/profiles/ShoebahmedShaikh.png';
import Sharon from '../Images/profiles/SharonGal-Or.jpg';
import anagh from '../Images/profiles/anagh.jpg';


const profiles = [
    {
        image: ManasDewan,
        name: 'Manas Dewan',
        designation: 'Founder CEO',
        edu: '25 years exp.',
        description: 'Manas remains actively engaged with clients and external stakeholders, working to deliver impactful results. He bears 25+ years of global CXO experience in Business-turnaround, Corporate Strategy, and Marketing across global brands like Mercedes-Benz, Dow Chemicals, Allianz Group, etc. Currently pursuing a PhD in Metaverse and Didactics, Manas is a frequent keynote speaker on business and future-digital ecosystems. A Masters in Philosophy and Post Graduate in Advertising Management, Manas serves as advisor for academic boards and gifted education programs.'
    },
    {
        image: NilaySaha,
        name: 'Nilay Saha',
        designation: 'Leader: Blockchain Ideations',
        edu: '25 years exp.',
        description: 'As a global expert on blockchain business models, Nilay leads Blockchain ideations at Brand Kiln. With 25 years in solution architecture, Nilay was formerly global CTO for Deutsche Bank AG, Audi AG, etc. He holds an MBA from Kellogg School of Management, an MCA from Eindhoven Institute of Technology, a Master\'s in Low Temperature Physics from Leiden University, and is an IIT graduate. He founded REITcircles Pte and speaks at global blockchain and Web 3.0 conclaves.'
    },
    {
        image: Sharon,
        name: 'Sharon Gal-Or',
        designation: 'Leader: Strategic Initiatives – USA',
        edu: '25 years exp.',
        description: 'With over 25 years of experience spanning corporate and entrepreneurial roles, Sharon Gal-Or is the Leader of Strategic Initiatives- USA at Brand Kiln. An author, blogger and advocate for Web 3.0, he is also founder CEO of Ting Global, Hong Kong. Sharon speaks on innovation management and social impact while serving as Transformation Ambassador at Singularity AI, USTP Foreign Ambassador for Israel, Co-Chair of the Green Energy Committee and Vice Chair of the Energy Technologies Committee at IPPF, Hong Kong.'
    },
    {
        image: HafizVakil,
        name: 'Hafiz Vakil',
        designation: 'Strategic Initiatives – Middle East',
        edu: '25 years CXO exp',
        description: 'Hafiz Vakil, Leader of Strategic Initiatives – Middle East at Brand Kiln, holds over 25 years of CXO roles across Middle East. A Bachelor\'s in Production Engineering, Master\'s in Marketing Management, and an executive MBA from the Indian Institute of Management, Hafiz is responsible for client success and business development in the Middle East region. Hafiz has received numerous global awards for sales and business strategy throughout his career.'
    },
    {
        image: SatyakamaPaul ,
        name: 'Dr. Satyakama Paul',
        designation: 'Sr. Advisor: AI / ML ',
        edu: '25 years exp.  Post PhD: AI/ML',
        description: 'Dr. Satya is our Senior Advisor on Artificial Intelligence & Machine Learning at Brand Kiln. He holds a PhD and completed post-doctoral studies in Artificial Intelligence from the University of Johannesburg. Specialist in voice modelling, computer vision, statistical modelling, and data signal processing, Dr. Satya contributes his expertise to Brand Kiln’s mission-critical deliveries, overseeing conception and frameworks of enterprise-wide AI solutions.He is a serial entrepreneur as well as advisor to several global corporations and tech thinktanks.'
    },
    {
        image: RichardVanTillborg ,
        name: 'Richard Van Tillborg',
        designation: 'Senior Advisor: Metaverse Strategy',
        edu: '25 years exp',
        description: 'Richard is the Senior Advisor of Metaverse Experientials at Brand Kiln. He is founder CEO of the award-winning Covince Metaverse and holds over 60 innovative Web 3.0 implementations to his credit. Richard is an advisor for digital innovation at Computable and advisor to the Board for Virtual Reality Netherlands. He drives immersive strategy for several global businesses and hosts his own radio program, "Smart Technology," at New Business Radio, Netherlands.'
    },
    {
        image: KrishnaSundarajan ,
        name: 'Krishna Sundarajan',
        designation: 'Leader: Market Insights',
        edu: '25 years exp',
        description: 'Leader of Market Insights at Brand Kiln, Krishna specializes in research and business insights for future-focused global clients. With over 25 years of global CXO experience across four continents, Krishna has worked with some of the biggest consulting firms, bringing a wealth of knowledge and expertise to his role. Krishna is a visiting faculty member at Entrepreneurship & Management Process International and serves as an advisor for several start-ups and industry associations.'
    },
    {
        image: AnuradhaBhonsale ,
        name: 'Dr. Anuradha Bhonsale',
        designation: 'Director & Leader of Learning Practice',
        edu: '20 years exp',
        description: 'Pioneer of Philosophical counselling in India, Dr. Anuradha was nominated for the prestigious “2020 Bharat Jyoti Award” (translates into “Glory of India” award) whose past recipients include luminaries like Saint Mother Teresa, Cricketer Sunil Gavaskar, etc. Dr. Anuradha oversees the Learning Practice at Brand Kiln in addition to her role as the culture coach. She brings two decades of experience as a corporate coach, counsellor, columnist and academic.'
    },
    {
        image: NishantFadnavis ,
        name: 'Nishant Fadnavis',
        designation: 'Leader: Experience Design',
        edu: '20 years exp.',
        description: 'Leader of Digital Experience Design, Nishant holds a Bachelor\'s degree from St. Xavier’s College, Mumbai, and has pursued Design Studies from globally ranked institutes. At Brand Kiln, Nishant is responsible for creating digital brand experiences, developing identity systems, and integrated brand vision. With 20 years of experience in design and digital concept ideation, Nishant has delivered exceptional results for Fortune 100 brands across geographies. His work has been recognized with multiple awards for clutter-breaking communication and innovative digital ideations.'
    },
    {
        image: MauricioPrieto ,
        name: 'Mauricio Prieto',
        designation: 'Leader: Strategic Initiatives- LATAM',
        edu: '',
        description: 'Mauricio Prieto, is a Web 3.0 influencer, and an angel investor for blockchain projects. Mauricio leverages his deep networks within the AI and Web 3.0 ecosystem, including innovators, investors, and startup founders, to embed Brand Kiln within the emergent future-digital landscape. An early Bitcoin miner and investor, Mauricio has been involved with leading blockchains since 2015. He is the founder of HYP-C DAO and Osmium DAO and additionally, serves as a strategic partner for Singularity AI.'
    },
    {
        image: JigneshJain ,
        name: 'Jignesh Jain',
        designation: 'Leader: Strategic Initiatives – UK',
        edu: '15 years exp.',
        description: 'Jignesh is a serial entrepreneur and industry veteran with over 15 years of prolific experience. A global citizen with extensive gaming and entertainment industry experience, he served various Fortune 500 and Forbes 50 corporations, focusing on global sales, go-to-market strategy, and new product development. Jignesh has received numerous industry awards, including being named one of the Top 50 ed-tech entrepreneurs in India by the World Education Congress in July 2019.'
    },
    {
        image: ShoebahmedShaikh ,
        name: 'Shoebahmed Shaikh',
        designation: 'Leader: Digital Experience Innovation',
        edu: '15 years exp.',
        description: 'Shoebahmed Shaikh, holds an MBA in Communications Management and a Bachelor’s degree in Electronics and Telecommunications. At Brand Kiln, Shoeb leverages his deep understanding of brand purpose to identify opportunities for innovation and strategic brand pivots. With 15 years of corporate and entrepreneurial experience, Shoeb brings fresh perspectives and unparalleled commitment to experience innovation. A decorated industry veteran, Shoeb is a guest faculty, mentor and speaker for several corporate organizations and educational institutions.'
    },
    {
        image: Debbie ,
        name: 'Debalina C.',
        designation: 'Leader: Brand Strategy',
        edu: '15 years exp.',
        description: 'Debalina C., Leader of Brand Strategy at Brand Kiln, is a distinguished expert in brand management and marketing strategy. With nearly 20 years of excellence in brand conceptualization, marketing acceleration, and luxury branding, Debalina oversees Brand Kiln’s brand structuring and creative strategy initiatives. A topper from WestLeigh High School, UK, she pursued higher studies in World Economics and Development and holds postgraduate degrees from the prestigious MICA School in Digital Communications and from Ecole Ducasse, Paris.'
    },
    {
        image: anagh,
        name: 'Anagh Raj',
        designation: 'Leader: Tech Development',
        edu: '10 years exp.',
        description: 'Anagh Raj, Leader of Tech Development at Brand Kiln, holds a Master\'s degree in Computer Applications from Magadh University. Anagh leads the development team, driving the creation and implementation of complex software and platforms. With 10 years of extensive experience in software and platform development, Anagh is an enthusiast of the emergent Web 3.0 ecosystem. Anagh is actively involved mentorship of the tech-team and ensures continual upskilling and certifications of members to ensre our competitive tech advantage.'
    }

];

const App = () => (
    <div className="app">
        {profiles.map((profile, index) => (
            <div key={index} className="profile-card" style={{ backgroundImage: `url(${profile.image})` }}>
                
                <div className="profile-card-content">
                    
                    <h2>{profile.name}</h2>
                    <h3>{profile.designation}</h3>
                    <h3>{profile.edu}</h3>
                    <p className='thetext'>{profile.description}</p>
                </div>
                <div className='thebackcolor'>
                    <h2>{profile.name}</h2>
                    <h3>{profile.designation}</h3>
                    <h3>{profile.edu}</h3>
                    </div>
            </div>
        ))}
    </div>
);

export default App