import React, { useState } from 'react';
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

// const App = () => (
//     <div className="app">
//         {profiles.map((profile, index) => (
//             <div key={index} className="profile-card" style={{ backgroundImage: `url(${profile.image})` }}>
                
//                 <div className="profile-card-content">
                    
//                     <h2>{profile.name}</h2>
//                     <h3>{profile.designation}</h3>
//                     <h3>{profile.edu}</h3>
//                     <p className='thetext'>{profile.description}</p>
//                 </div>
//                 <div className='thebackcolor'>
//                     <h2>{profile.name}</h2>
//                     <h3>{profile.designation}</h3>
//                     <h3>{profile.edu}</h3>
//                     </div>
//             </div>
//         ))}
//     </div>
// );

// export default App


const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
        <>
      <div className="app mobiledisplay">
                  <div onClick={handlePrev}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.890625 7.50021C0.890625 8.90666 1.30768 10.2815 2.08906 11.4509C2.87044 12.6204 3.98105 13.5318 5.28043 14.07C6.57982 14.6082 8.00962 14.7491 9.38904 14.4747C10.7685 14.2003 12.0355 13.523 13.0301 12.5285C14.0246 11.534 14.7018 10.2669 14.9762 8.88752C15.2506 7.5081 15.1098 6.0783 14.5715 4.77891C14.0333 3.47952 13.1219 2.36892 11.9525 1.58754C10.783 0.806163 9.40818 0.389103 8.00174 0.389103C6.11575 0.389103 4.30701 1.13831 2.97342 2.4719C1.63983 3.80549 0.890625 5.61423 0.890625 7.50021ZM7.81062 3.94466C7.92681 4.06342 7.99187 4.22296 7.99187 4.3891C7.99187 4.55525 7.92681 4.71478 7.81062 4.83355L5.77951 6.87799H12.064C12.229 6.87799 12.3872 6.94355 12.5039 7.06024C12.6206 7.17693 12.6862 7.33519 12.6862 7.50021C12.6862 7.66524 12.6206 7.8235 12.5039 7.94019C12.3872 8.05688 12.229 8.12244 12.064 8.12244H5.84174L7.81062 10.0913C7.9285 10.2092 7.99472 10.3691 7.99472 10.5358C7.99472 10.7025 7.9285 10.8623 7.81062 10.9802C7.69275 11.0981 7.53288 11.1643 7.36618 11.1643C7.19948 11.1643 7.03961 11.0981 6.92174 10.9802L3.42396 7.46466L6.93062 3.94466C6.9884 3.88687 7.057 3.84103 7.1325 3.80976C7.20799 3.77849 7.28891 3.76239 7.37062 3.76239C7.45234 3.76239 7.53326 3.77849 7.60875 3.80976C7.68425 3.84103 7.75284 3.88687 7.81062 3.94466Z" fill="#C3C3C3"/>
</svg>
</div>

        <div className="profile-card" style={{ backgroundImage: `url(${profiles[currentIndex].image})` }}>
          <div className="profile-card-content">
            <h2>{profiles[currentIndex].name}</h2>
            <h3>{profiles[currentIndex].designation}</h3>
            <h3>{profiles[currentIndex].edu}</h3>
            <p className='thetext'>{profiles[currentIndex].description}</p>
          </div>
          <div className='thebackcolor'>
            <h2>{profiles[currentIndex].name}</h2>
            <h3>{profiles[currentIndex].designation}</h3>
            <h3>{profiles[currentIndex].edu}</h3>
          </div>
        </div>
          <div onClick={handleNext}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1094 7.49979C15.1094 6.09334 14.6923 4.71848 13.9109 3.54906C13.1296 2.37965 12.019 1.4682 10.7196 0.929976C9.42018 0.391753 7.99038 0.250929 6.61096 0.525313C5.23153 0.799697 3.96446 1.47696 2.96995 2.47147C1.97544 3.46598 1.29817 4.73306 1.02379 6.11248C0.749407 7.4919 0.890231 8.9217 1.42845 10.2211C1.96668 11.5205 2.87813 12.6311 4.04754 13.4125C5.21696 14.1938 6.59182 14.6109 7.99826 14.6109C9.88425 14.6109 11.693 13.8617 13.0266 12.5281C14.3602 11.1945 15.1094 9.38577 15.1094 7.49979ZM8.18938 11.0553C8.07319 10.9366 8.00813 10.777 8.00813 10.6109C8.00813 10.4448 8.07319 10.2852 8.18938 10.1665L10.2205 8.12201L3.93604 8.12201C3.77102 8.12201 3.61275 8.05645 3.49607 7.93976C3.37938 7.82307 3.31382 7.66481 3.31382 7.49979C3.31382 7.33476 3.37938 7.1765 3.49607 7.05981C3.61275 6.94312 3.77102 6.87756 3.93604 6.87756L10.1583 6.87756L8.18938 4.90868C8.0715 4.7908 8.00528 4.63093 8.00528 4.46423C8.00528 4.29753 8.0715 4.13766 8.18938 4.01979C8.30725 3.90191 8.46712 3.83569 8.63382 3.83569C8.80052 3.83569 8.96039 3.90191 9.07826 4.01979L12.576 7.53534L9.06938 11.0553C9.0116 11.1131 8.943 11.159 8.8675 11.1902C8.79201 11.2215 8.71109 11.2376 8.62938 11.2376C8.54766 11.2376 8.46674 11.2215 8.39125 11.1902C8.31575 11.159 8.24716 11.1131 8.18938 11.0553Z" fill="#C3C3C3"/>
</svg>
</div>
      </div>



  <div className="app deapshow">
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
</>
    );
  };
  
  export default App;