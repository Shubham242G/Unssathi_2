import puppeteer from 'puppeteer';
import express from 'express';
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory (works with ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use the absolute path to your build folder
const DIST_DIR = resolve(__dirname, 'build');
const PORT = 3005;

console.log(`[prerender] Looking for build folder at: ${DIST_DIR}`);

if (!existsSync(DIST_DIR)) {
  console.error(`❌ Build folder not found at: ${DIST_DIR}`);
  console.error('Please run `npm run build` first.');
  process.exit(1);
} else {
  console.log(`✅ Build folder found!\n`);
}

const ROUTES = [
  '/',
  '/blogs',
  '/faqs',
  '/services',
  '/why-Unsaathi',
  '/how-Unsaathi',
  '/About-Us',
  '/connect-With-Us',
  '/contact',
  '/quiz',
  '/divorce-lawyer-noida',
  '/divorce-lawyer-delhi',
  '/divorce-lawyer-gurgaon'
];

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function prerender() {
  console.log('🚀 Starting prerendering...\n');
  
  const app = express();
  app.use(express.static(DIST_DIR));
  app.use((_, res) => {
    res.sendFile(join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`[prerender] Server running at http://localhost:${PORT}\n`);
  });

  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      console.log(`📄 Processing: ${route}`);
      
      try {
        await page.goto(url, { 
          waitUntil: 'networkidle0', 
          timeout: 60000 
        });
        
        console.log(`   ⏳ Waiting for content to load...`);
        
        // Wait for content to render
        await page.waitForFunction(
          () => {
            const root = document.getElementById('root');
            const hasChildren = root && root.children.length > 0;
            const isReady = window.__REVI_READY__ === true;
            return hasChildren && isReady;
          },
          { timeout: 45000 }
        ).catch(() => console.log(`   ⚠️  Timeout, capturing current state...`));
        
        await wait(1500);
        
        const html = await page.content();
        
        const isRoot = route === '/';
        const filePath = isRoot
          ? join(DIST_DIR, 'index.html')
          : join(DIST_DIR, route, 'index.html');
        
        mkdirSync(dirname(filePath), { recursive: true });
        writeFileSync(filePath, html);
        
        // Verify the saved file has content
        if (html.includes('<div id="root"></div>')) {
          console.log(`   ⚠️  Warning: Root appears empty in saved file`);
        } else {
          console.log(`   ✅ Saved: ${filePath}`);
        }
        console.log('');
        
      } catch (error) {
        console.error(`   ❌ Failed: ${error.message}\n`);
      }
      
      await wait(500);
    }
    
    await browser.close();
    console.log('🎉 Prerendering complete!\n');
    
  } finally {
    server.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});