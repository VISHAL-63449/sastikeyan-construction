import fs from 'fs';

// Define the root URL of the website
const domain = 'https://sastikeyan-construction.vercel.app';

// List of all the routes in the React application
const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/projects', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' }
];

// Generate the sitemap XML content
const currentDateTime = new Date().toISOString();
let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapXML += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

routes.forEach(route => {
    sitemapXML += `  <url>\n`;
    sitemapXML += `    <loc>${domain}${route.path}</loc>\n`;
    sitemapXML += `    <lastmod>${currentDateTime}</lastmod>\n`;
    sitemapXML += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemapXML += `    <priority>${route.priority}</priority>\n`;
    sitemapXML += `  </url>\n`;
});

sitemapXML += `</urlset>`;

// Write to public folder
try {
    if (!fs.existsSync('./public')) {
        fs.mkdirSync('./public');
    }
    fs.writeFileSync('./public/sitemap.xml', sitemapXML);
    console.log('Successfully generated sitemap.xml in the public directory.');
} catch (error) {
    console.error('Error writing sitemap.xml:', error);
}
