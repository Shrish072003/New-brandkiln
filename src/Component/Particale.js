// import React, { useEffect, useRef } from 'react';
// import imgBk from '../Images/bklogo.png';
// import Footer from './footer.js';
// import './particles.scss';

// const Particle = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const particles = containerRef.current.querySelectorAll('.particle');

//     const handleMouseEnter = (event) => {
//       event.target.classList.add('hover');
//     };

//     const handleMouseLeave = (event) => {
//       event.target.classList.remove('hover');
//     };

//     particles.forEach(particle => {
//       particle.addEventListener('mouseenter', handleMouseEnter);
//       particle.addEventListener('mouseleave', handleMouseLeave);
//     });

//     const updateCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const positions = [];
//       for (let particle of particles) {
//         const rect = particle.getBoundingClientRect();
//         positions.push({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
//       }

//       positions.forEach((pos, index) => {
//         let distances = positions.map((p, i) => ({
//           index: i,
//           distance: Math.sqrt((p.x - pos.x) ** 2 + (p.y - pos.y) ** 2)
//         })).filter(p => p.index !== index);

//         distances.sort((a, b) => a.distance - b.distance);
//         distances.filter(d => d.distance <= 200).slice(0, 4).forEach(d => {
//           ctx.beginPath();
//           ctx.moveTo(pos.x, pos.y);
//           ctx.lineTo(positions[d.index].x, positions[d.index].y);
//           ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - d.distance / 100) + ')';
//           ctx.stroke();
//         });
//       });

//       requestAnimationFrame(updateCanvas);
//     };

//     updateCanvas();

//     function handleResize() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       updateCanvas();
//     }

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       particles.forEach(particle => {
//         particle.removeEventListener('mouseenter', handleMouseEnter);
//         particle.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className='d-flex position-absolute justify-content-between w-100 align-items-center'>
//         <div className='d-flex maintosecteion dghkgjkf'>
//           <img src={imgBk} alt="Logo" />
//           <div className='bklogotext'>invites you to explore..</div>
//         </div>
//         <div className='d-flex gap-3' style={{ paddingRight: '20px' }}>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//         </div>
//       </div>
//       <div ref={containerRef} id="particle-container" className='fdgjdkfgkhdbgd'>
//         <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='fdgjdkfgkhdbgd' />
//         {Array.from({ length: 50 }, (_, index) => (
//           <div className="particle" key={index} style={{ top: `auto` }}></div>
//         ))}
//         <Footer/>
//       </div>
//     </>
//   );
// };

// export default Particle;


// import React, { useEffect, useRef, useState } from 'react';
// import imgBk from '../Images/bklogo.png';
// import Footer from './footer.js';
// import './particles.scss';
// import ParticleData from './particle.json';
// import { ImCross } from "react-icons/im";

// const Particle = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [popupContent, setPopupContent] = useState(null);
//   const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
//   const [pausedParticleIndex, setPausedParticleIndex] = useState(null);
//   const [popupBackgroundColor, setPopupBackgroundColor] = useState('');

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const particles = containerRef.current.getElementsByClassName('particle');

//     const updateCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

//       // Get the positions of all particles and store them
//       const positions = [];
//       for (let particle of particles) {
//         const rect = particle.getBoundingClientRect();
//         positions.push({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
//       }

//       // Draw lines between each particle and its three nearest neighbors
//       positions.forEach((pos, index) => {
//         // Create a list of distances to other particles
//         let distances = positions.map((p, i) => ({
//           index: i,
//           distance: Math.sqrt((p.x - pos.x) ** 2 + (p.y - pos.y) ** 2)
//         })).filter(p => p.index !== index); // Exclude self

//         // Sort by distance and take the three closest that are within 30 pixels
//         distances.sort((a, b) => a.distance - b.distance);
//         distances.filter(d => d.distance <= 200).slice(0, 3).forEach(d => {
//           ctx.beginPath();
//           ctx.moveTo(pos.x, pos.y);
//           ctx.lineTo(positions[d.index].x, positions[d.index].y);
//           ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - d.distance / 100) + ')'; // Decrease opacity based on distance
//           ctx.stroke();
//         });
//       });

//       requestAnimationFrame(updateCanvas); // Continue updating the canvas
//     };

//     updateCanvas(); // Start the drawing loop

//     function handleResize() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       updateCanvas(); // Redraw canvas on resize
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Function to handle click on particle
//   const handleParticleClick = (image, headline, text, index, event) => {
//     setPopupContent({ image, headline, text }); // Set the popup content when clicked
//     setPausedParticleIndex(index); // Store the index of the clicked particle
//     const particles = containerRef.current.getElementsByClassName('particle');
//     particles[index].style.animationPlayState = 'paused';

//     // Get the background color of the clicked particle
//     const backgroundColor = window.getComputedStyle(particles[index]).backgroundColor;
//     setPopupBackgroundColor(backgroundColor);

//     // Calculate position for the popup
//     const rect = event.target.getBoundingClientRect();
//     setPopupPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY });

//     particles[index].style.width = '40px'; // Change width to 40px
//     particles[index].style.height = '40px';
//   };

//   const handleClosePopup = () => {
//     const particles = containerRef.current.getElementsByClassName('particle');
//     if (pausedParticleIndex !== null) {
//       particles[pausedParticleIndex].style.animationPlayState = 'running'; // Resume animation for the paused particle
//     }
//     setPopupContent(null); // Clear popup content
//     setPausedParticleIndex(null);

//     Array.from(particles).forEach(particle => {
//       particle.style.width = '20px';
//       particle.style.height = '20px';
//     });

//     setPopupBackgroundColor(''); // Reset popup background color
//   };
//   console.log(popupContent); // To check what data it holds

//   // Construct the gradient background for the popup
//   const gradientBackground = popupBackgroundColor
//     ? `linear-gradient(to top, ${popupBackgroundColor}, lighten(${popupBackgroundColor}, 20%))`
//     : '';

//   return (
//     <>
//       <div className='d-flex position-absolute justify-content-between w-100 align-items-center'>
//         <div className='d-flex maintosecteion dghkgjkf'>
//           <img src={imgBk} alt="Logo" />
//           <div className='bklogotext'>invites you to explore..</div>
//         </div>
//         <div className='d-flex gap-3' style={{ paddingRight: '20px' }}>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//         </div>
//       </div>
//       <div ref={containerRef} id="particle-container" className='fdgjdkfgkhdbgd'>
//         <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='fdgjdkfgkhdbgd' />
//         {Array.from({ length: 60 }, (_, index) => (
//           <div
//             className="particle"
//             key={index}
//             style={{ top: `auto` }}
//             onClick={(event) => handleParticleClick(ParticleData[index].image, ParticleData[index].headline, ParticleData[index].text, index, event)} // Set popup content on click
//           ></div>
//         ))}
//         {popupContent && (
//           <div className="ghfghfghfg" style={{ top: popupPosition.y, left: popupPosition.x, background: gradientBackground }}>
//             <div className='sddmmdfsds'>
//               <img src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg" crossOrigin='anonymous' alt="Particle Detail"/>
//               <h2>{popupContent.headline}</h2>
//               <p>{popupContent.text}</p>
//             </div>
//             <div className="close-buttonfhbf" onClick={handleClosePopup}><ImCross />
//             </div>
//           </div>
//         )}
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Particle;




// import React, { useEffect, useRef, useState } from 'react';
// import imgBk from '../Images/bklogo.png';
// import Footer from './footer.js';
// import './particles.scss';
// import ParticleData from './particle.json';
// import { ImCross } from "react-icons/im";

// const Particle = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [popupContent, setPopupContent] = useState(null);
//   const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
//   const [pausedParticleIndex, setPausedParticleIndex] = useState(null);
//   const [popupBackgroundColor, setPopupBackgroundColor] = useState('');

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const particles = containerRef.current.getElementsByClassName('particle');

//     const updateCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

//       // Get the positions of all particles and store them
//       const positions = [];
//       for (let particle of particles) {
//         const rect = particle.getBoundingClientRect();
//         positions.push({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
//       }

//       // Draw lines between each particle and its three nearest neighbors
//       positions.forEach((pos, index) => {
//         // Create a list of distances to other particles
//         let distances = positions.map((p, i) => ({
//           index: i,
//           distance: Math.sqrt((p.x - pos.x) ** 2 + (p.y - pos.y) ** 2)
//         })).filter(p => p.index !== index); // Exclude self

//         // Sort by distance and take the three closest that are within 200 pixels
//         distances.sort((a, b) => a.distance - b.distance);
//         distances.filter(d => d.distance <= 200).slice(0, 3).forEach(d => {
//           ctx.beginPath();
//           ctx.moveTo(pos.x, pos.y);
//           ctx.lineTo(positions[d.index].x, positions[d.index].y);
//           ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - d.distance / 100) + ')'; // Decrease opacity based on distance
//           ctx.stroke();
//         });
//       });

//       requestAnimationFrame(updateCanvas); // Continue updating the canvas
//     };

//     updateCanvas(); // Start the drawing loop

//     function handleResize() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       updateCanvas(); // Redraw canvas on resize
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Function to handle click on particle
//   const handleParticleClick = (image, headline, text, index, event) => {
//     setPopupContent({ image, headline, text }); // Set the popup content when clicked
//     setPausedParticleIndex(index); // Store the index of the clicked particle
//     const particles = containerRef.current.getElementsByClassName('particle');
//     particles[index].style.animationPlayState = 'paused';

//     // Get the background color of the clicked particle
//     const backgroundColor = window.getComputedStyle(particles[index]).backgroundColor;
//     setPopupBackgroundColor(backgroundColor);

//     // Calculate position for the popup
//     const rect = event.target.getBoundingClientRect();
//     setPopupPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY });

//     particles[index].style.width = '40px'; // Change width to 40px
//     particles[index].style.height = '40px';
//   };

//   const handleClosePopup = () => {
//     const particles = containerRef.current.getElementsByClassName('particle');
//     if (pausedParticleIndex !== null) {
//       particles[pausedParticleIndex].style.animationPlayState = 'running'; // Resume animation for the paused particle

//       // Reset the size of the paused particle to its original size
//       const style = getParticleStyle(pausedParticleIndex);
//       particles[pausedParticleIndex].style.width = style.width;
//       particles[pausedParticleIndex].style.height = style.height;
//     }
//     setPopupContent(null); // Clear popup content
//     setPausedParticleIndex(null);

//     setPopupBackgroundColor(''); // Reset popup background color
//   };

//   // Construct the gradient background for the popup
//   const gradientBackground = popupBackgroundColor
//     ? `linear-gradient(to top, ${popupBackgroundColor}, lighten(${popupBackgroundColor}, 20%))`
//     : '';

//   // Function to determine the size of a particle and apply 3D effect
//   const getParticleStyle = (index) => {
//     const sizeClass = index % 15 === 0 ? 'large' : index % 5 === 0 ? 'medium' : 'small';
//     let size;
//     let boxShadow;

//     if (sizeClass === 'large') {
//       size = { width: '40px', height: '40px' };
//       boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
//     } else if (sizeClass === 'medium') {
//       size = { width: '30px', height: '30px' };
//       boxShadow = '0 3px 6px rgba(0, 0, 0, 0.2)';
//     } else {
//       size = { width: '20px', height: '20px' };
//       boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//     }

//     return { ...size, boxShadow };
//   };

//   return (
//     <>
//       <div className='d-flex position-absolute justify-content-between w-100 align-items-center fgdfkgldkfg'>
//         <div className='d-flex maintosecteion dghkgjkf'>
//           <img src={imgBk} alt="Logo" />
//           <div className='bklogotext'>invites you to explore..</div>
//         </div>
//         <div className='d-flex gap-3' style={{ paddingRight: '20px' }}>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//           <div className='maincolorf'></div>
//         </div>
//       </div>
//       <div ref={containerRef} id="particle-container" className='fdgjdkfgkhdbgd'>
//         <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='fdgjdkfgkhdbgd' />
//         {Array.from({ length: 60 }, (_, index) => {
//           const style = getParticleStyle(index);
//           return (
//             <div
//               className="particle"
//               key={index}
//               style={{ top: `auto`, ...style }}
//               onClick={(event) => handleParticleClick(ParticleData[index].image, ParticleData[index].headline, ParticleData[index].text, index, event)} // Set popup content on click
//             ></div>
//           );
//         })}
//         {popupContent && (
//           <div className="ghfghfghfg" style={{ top: popupPosition.y, left: popupPosition.x, background: gradientBackground }}>
//             <div className='sddmmdfsds'>
//               <img src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg" crossOrigin='anonymous' alt="Particle Detail"/>
//               <h2>{popupContent.headline}</h2>
//               <p>{popupContent.text}</p>
//             </div>
//             <div className="close-buttonfhbf" onClick={handleClosePopup}><ImCross />
//             </div>
//           </div>
//         )}
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Particle;


import React, { useEffect, useRef, useState } from 'react';
import imgBk from '../Images/bklogo.png';
import Footer from './footer.js';
import './particles.scss';
import ParticleData from './particle.json';
import { ImCross } from "react-icons/im";

const Particle = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [popupContent, setPopupContent] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [pausedParticleIndex, setPausedParticleIndex] = useState(null);
  const [popupBackgroundColor, setPopupBackgroundColor] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All'); // State to manage selected filter

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = containerRef.current.getElementsByClassName('particle');

    const updateCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

      // Get the positions of all particles and store them
      const positions = [];
      for (let particle of particles) {
        const rect = particle.getBoundingClientRect();
        positions.push({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }

      // Draw lines between each particle and its three nearest neighbors
      positions.forEach((pos, index) => {
        // Create a list of distances to other particles
        let distances = positions.map((p, i) => ({
          index: i,
          distance: Math.sqrt((p.x - pos.x) ** 2 + (p.y - pos.y) ** 2)
        })).filter(p => p.index !== index); // Exclude self

        // Sort by distance and take the three closest that are within 200 pixels
        distances.sort((a, b) => a.distance - b.distance);
        distances.filter(d => d.distance <= 200).slice(0, 3).forEach(d => {
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
          ctx.lineTo(positions[d.index].x, positions[d.index].y);
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + (1 - d.distance / 100) + ')'; // Decrease opacity based on distance
          ctx.stroke();
        });
      });

      requestAnimationFrame(updateCanvas); // Continue updating the canvas
    };

    updateCanvas(); // Start the drawing loop

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateCanvas(); // Redraw canvas on resize
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle click on particle
  const handleParticleClick = (image, headline, text, index, event) => {
    setPopupContent({ image, headline, text }); // Set the popup content when clicked
    setPausedParticleIndex(index); // Store the index of the clicked particle
    const particles = containerRef.current.getElementsByClassName('particle');
    particles[index].style.animationPlayState = 'paused';

    // Get the background color of the clicked particle
    const backgroundColor = window.getComputedStyle(particles[index]).backgroundColor;
    setPopupBackgroundColor(backgroundColor);

    // Calculate position for the popup
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY });

    particles[index].style.width = '40px'; // Change width to 40px
    particles[index].style.height = '40px';
  };

  const handleClosePopup = () => {
    const particles = containerRef.current.getElementsByClassName('particle');
    if (pausedParticleIndex !== null) {
      particles[pausedParticleIndex].style.animationPlayState = 'running'; // Resume animation for the paused particle

      // Reset the size of the paused particle to its original size
      const style = getParticleStyle(pausedParticleIndex);
      particles[pausedParticleIndex].style.width = style.width;
      particles[pausedParticleIndex].style.height = style.height;
    }
    setPopupContent(null); // Clear popup content
    setPausedParticleIndex(null);

    setPopupBackgroundColor(''); // Reset popup background color
  };

  // Construct the gradient background for the popup
  const gradientBackground = popupBackgroundColor
    ? `linear-gradient(to top, ${popupBackgroundColor}, ${popupBackgroundColor})`
    : '';

  // Function to determine the size of a particle and apply 3D effect
  const getParticleStyle = (index) => {
    const sizeClass = index % 15 === 0 ? 'large' : index % 5 === 0 ? 'medium' : 'small';
    let size;
    let boxShadow;

    if (sizeClass === 'large') {
      size = { width: '40px', height: '40px' };
      boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    } else if (sizeClass === 'medium') {
      size = { width: '30px', height: '30px' };
      boxShadow = '0 3px 6px rgba(0, 0, 0, 0.2)';
    } else {
      size = { width: '20px', height: '20px' };
      boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    return { ...size, boxShadow };
  };

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update selected filter state
  };

  // Filter particles based on the selected category
  const filteredParticles = selectedFilter === 'All'
    ? ParticleData
    : ParticleData.filter(data => {
        if (selectedFilter === 'Tech') {
          return data.tag === 'TECH';
        } else if (selectedFilter === 'Strategy') {
          return data.tag === 'STRATEGIES';
        } else if (selectedFilter === 'Brand') {
          return data.tag === 'BRAND';
        }
        return true; // Default case
      });

  return (
    <>
      <div className='d-flex position-absolute justify-content-between w-100 align-items-center fgdfkgldkfg'>
        <div className='d-flex maintosecteion dghkgjkf'>
          <img src={imgBk} alt="Logo" />
          <div className='bklogotext'>invites you to explore..</div>
        </div>
        <div className='d-flex gap-2 gkhlkfghfg'>
          <button className={`boll ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => handleFilterChange('All')}></button>
          {selectedFilter === 'All' && <span className='filter-label filter-text'>All</span>}
          <button className={`boll bollone ${selectedFilter === 'Tech' ? 'active' : ''}`} onClick={() => handleFilterChange('Tech')}></button>
          {selectedFilter === 'Tech' && <span className='filter-label filter-text'>Tech</span>}
          <button className={`boll bolltwo ${selectedFilter === 'Strategy' ? 'active' : ''}`} onClick={() => handleFilterChange('Strategy')}></button>
          {selectedFilter === 'Strategy' && <span className='filter-label filter-text'>Strategy</span>}
          <button className={`boll bollthree ${selectedFilter === 'Brand' ? 'active' : ''}`} onClick={() => handleFilterChange('Brand')}></button>
          {selectedFilter === 'Brand' && <span className='filter-label filter-text'>Brand</span>}
        </div>
      </div>
      <div ref={containerRef} id="particle-container" className='fdgjdkfgkhdbgd'>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='fdgjdkfgkhdbgd' />
        {filteredParticles.map((data, index) => {
          const style = getParticleStyle(index);
          const color = data.tag === 'TECH' ? '#B3D658' :
                        data.tag === 'STRATEGIES' ? '#2C55ED' :
                        '#E0076A'; // For BRAND
          return (
            <div
              className="particle"
              key={index}
              style={{ top: `auto`, backgroundColor: color, ...style }}
              onClick={(event) => handleParticleClick(data.image, data.headline, data.text, index, event)} // Set popup content on click
            ></div>
          );
        })}
        {popupContent && (
          <div className="ghfghfghfg" style={{ top: popupPosition.y, left: popupPosition.x, background: gradientBackground }}>
            <div className='sddmmdfsds'>
              <img src={popupContent.image} crossOrigin='anonymous' alt="Particle Detail"/>
              <h2>{popupContent.headline}</h2>
              <p>{popupContent.text}</p>
            </div>
            <div className="close-buttonfhbf" onClick={handleClosePopup}><ImCross /></div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Particle;
