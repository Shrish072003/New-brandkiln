const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define the URLs you want to include in the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/brand-strategy', changefreq: 'weekly', priority: 0.8 },
  { url: '/brand-positioning', changefreq: 'weekly', priority: 0.8 },
  { url: '/brand-innovation', changefreq: 'weekly', priority: 0.8 },
  { url: '/content-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/metaverse', changefreq: 'weekly', priority: 0.8 },
  { url: '/e-learning-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/digital-ecosystems', changefreq: 'weekly', priority: 0.8 },
  { url: '/apps-and-platform-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Maritime', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/NirDhwani', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Purnartha', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/MotorOctane', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Jadcom', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Torres', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Pinktum', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Pinktum-AG', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/covince-innovation', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Wedding-bells', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/My-Ideal-Wedding', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Azelis', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Supreme-Petrochem', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Realty-Metaverse', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/private-banks', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/MEA', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/La-Chocolat', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/HomeYogaGuru', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Metro-AG', changefreq: 'weekly', priority: 0.8 },
  { url: '/case-study/Ariaa-Chikankari', changefreq: 'weekly', priority: 0.8 },
];

// Create a SitemapStream instance
const sitemap = new SitemapStream({ hostname: 'https://brandkiln.com' });

// Write the sitemap to a file
const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

sitemap.pipe(writeStream);

links.forEach(link => {
  sitemap.write(link);
});

sitemap.end();

streamToPromise(sitemap).then(() => console.log('Sitemap created successfully.'));
