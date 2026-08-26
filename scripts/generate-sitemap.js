import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const SITE_URL = 'https://VISHAL-63449.github.io/sastikeyan-construction';
const TODAY = new Date().toISOString().split('T')[0];

const pages = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'about', priority: 0.8, changefreq: 'monthly' },
  { path: 'services', priority: 0.9, changefreq: 'weekly' },
  { path: 'projects', priority: 0.8, changefreq: 'weekly' },
  { path: 'floor-plans', priority: 0.6, changefreq: 'monthly' },
  { path: 'contact', priority: 0.7, changefreq: 'monthly' },
];

const services = [
  'interior-design', 'modular-kitchen', 'luxury-modular-kitchen',
  'l-shape-kitchen', 'u-shape-kitchen', 'parallel-kitchen',
  'bedroom-interior', 'wardrobe-design', 'sliding-wardrobe',
  'walk-in-closet', 'living-room-interior', 'tv-unit-design',
  'false-ceiling', 'led-lighting', 'dining-room-interior',
  'partition-design', 'pooja-room-design', 'home-renovation',
  'apartment-interior', 'villa-interior', 'office-interior',
  'commercial-interior', 'house-construction', 'residential-construction',
  'commercial-construction', 'architecture-planning',
  'structural-engineering', 'building-renovation',
  'turnkey-construction', 'construction-consultation',
];

const projects = [
  'project-1', 'project-2', 'project-3', 'project-4',
  'project-5', 'project-6', 'project-7', 'project-8',
];

const serviceImages = [
  'interior%20image.jpeg', 'home%20construction.jpeg',
  'Architecture%20Planning.png', 'Structural%20Engineering.png',
  'Commercial%20Buildings.png', 'Renovation.png',
];

function url(loc, priority, changefreq, lastmod = TODAY) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
    <mobile:mobile/>
  </url>`;
}

function xmlHeader(namepaces) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${namepaces}>`;
}

function xmlFooter() {
  return '</urlset>';
}

function generatePagesSitemap() {
  const lines = [xmlHeader('\n        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"')];
  for (const page of pages) {
    lines.push(url(`/${page.path}`, page.priority, page.changefreq));
  }
  lines.push(xmlFooter());
  return lines.join('\n');
}

function generateServicesSitemap() {
  const lines = [xmlHeader('\n        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"')];
  lines.push(url('/services', 0.9, 'weekly'));
  for (const service of services) {
    lines.push(url(`/services#${service}`, 0.7, 'monthly'));
  }
  lines.push(xmlFooter());
  return lines.join('\n');
}

function generateProjectsSitemap() {
  const lines = [xmlHeader('\n        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"')];
  lines.push(url('/projects', 0.8, 'weekly'));
  for (const project of projects) {
    lines.push(url(`/projects/${project}`, 0.7, 'monthly'));
  }
  lines.push(xmlFooter());
  return lines.join('\n');
}

function generateImageSitemap() {
  const items = [];

  items.push({
    loc: '',
    images: [
      { src: 'logo.jpeg', title: 'Sastikeyan Interior - SK Construction Logo', caption: 'Sastikeyan Interior &amp; SK Construction official logo - Premium interior design and construction services in Chennai' },
      { src: 'services/interior%20image.jpeg', title: 'Interior Design Services - SK Construction', caption: 'Professional interior design services by Sastikeyan Interior in Pbel City, Kelambakkam, Chennai' },
      { src: 'services/home%20construction.jpeg', title: 'House Construction Services - SK Construction', caption: 'Residential house construction services by SK Construction in Chennai, Tamil Nadu' },
      { src: 'services/Architecture%20Planning.png', title: 'Architecture Planning - SK Construction', caption: 'Professional architecture planning and design services by SK Construction Chennai' },
      { src: 'services/Structural%20Engineering.png', title: 'Structural Engineering - SK Construction', caption: 'Structural engineering services for residential and commercial buildings by SK Construction' },
      { src: 'services/Commercial%20Buildings.png', title: 'Commercial Construction - SK Construction', caption: 'Commercial building construction services by SK Construction in Chennai' },
      { src: 'services/Renovation.png', title: 'Building Renovation - SK Construction', caption: 'Home and building renovation services by Sastikeyan Interior &amp; SK Construction' },
    ],
  });

  items.push({
    loc: '/about',
    images: [
      { src: 'about-mission.jpeg', title: 'About SK Construction - Our Mission', caption: 'Sastikeyan Construction mission - Building dreams with quality and trust in Chennai' },
      { src: 'owner.jpeg', title: 'GP Karthik - Owner SK Construction', caption: 'GP Karthik, founder and owner of Sastikeyan Construction with over 15 years of experience' },
    ],
  });

  const projectImages = [];
  for (let i = 1; i <= 8; i++) {
    projectImages.push({
      src: `projects/project-${i}.jpeg`,
      title: `Construction Project ${i} - SK Construction`,
      caption: `Completed construction project ${i} by SK Construction in Chennai, Tamil Nadu`,
    });
  }
  items.push({
    loc: '/projects',
    images: projectImages,
  });

  const lines = [xmlHeader('\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')];
  for (const item of items) {
    lines.push(`  <url>
    <loc>${SITE_URL}${item.loc}</loc>`);
    for (const img of item.images) {
      lines.push(`    <image:image>
      <image:loc>${SITE_URL}/${img.src}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`);
    }
    lines.push('  </url>');
  }
  lines.push(xmlFooter());
  return lines.join('\n');
}

function generateSitemapIndex() {
  const subSitemaps = [
    'pages-sitemap.xml',
    'services-sitemap.xml',
    'projects-sitemap.xml',
    'image-sitemap.xml',
  ];

  const lines = [`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`];
  for (const sub of subSitemaps) {
    lines.push(`  <sitemap>
    <loc>${SITE_URL}/${sub}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`);
  }
  lines.push('</sitemapindex>');
  return lines.join('\n');
}

function generateRobotsTxt() {
  return `# robots.txt for Sastikeyan Interior & SK Construction
# Website: ${SITE_URL}/
# Designed & Developed by Vishal

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/image-sitemap.xml
Sitemap: ${SITE_URL}/pages-sitemap.xml
Sitemap: ${SITE_URL}/services-sitemap.xml
Sitemap: ${SITE_URL}/projects-sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 10

# Host directive for Bing / Yandex
Host: https://VISHAL-63449.github.io

# AI search crawlers - allow full indexing
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /
`;
}

function ensurePublicDir() {
  if (!existsSync(PUBLIC_DIR)) {
    mkdirSync(PUBLIC_DIR, { recursive: true });
  }
}

function writeSitemap(filename, content) {
  const filepath = join(PUBLIC_DIR, filename);
  writeFileSync(filepath, content, 'utf-8');
  console.log(`  ✓ ${filename}`);
}

console.log('🚀 Generating SEO Sitemaps for Sastikeyan Interior & SK Construction...\n');

ensurePublicDir();

writeSitemap('sitemap.xml', generateSitemapIndex());
writeSitemap('pages-sitemap.xml', generatePagesSitemap());
writeSitemap('services-sitemap.xml', generateServicesSitemap());
writeSitemap('projects-sitemap.xml', generateProjectsSitemap());
writeSitemap('image-sitemap.xml', generateImageSitemap());
writeSitemap('robots.txt', generateRobotsTxt());

console.log('\n✅ All sitemaps generated successfully in public/');
console.log(`📍 Site URL: ${SITE_URL}`);
console.log(`📅 Date: ${TODAY}\n`);
