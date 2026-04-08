// This is your complete script. Just copy and paste it.
import puppeteer from 'puppeteer';
import express from 'express';
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';

const DIST_DIR = join(process.cwd(), 'build'); // 'build' for CRA, 'dist' for Vite
const PORT = 3005;

// *** IMPORTANT: LIST ALL THE URLs YOU NEED FOR SEO ***
// Add all your important page paths here.
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

async function prerender() {
  const app = express();
  app.use(express.static(DIST_DIR));
  // SPA fallback: any unknown route serves index.html
  app.use((_, res) => {
    res.sendFile(join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`[prerender] Server listening on http://localhost:${PORT}`);
  });

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      console.log(`[prerender] Visiting ${url}`);

      // Wait for network to be idle, meaning most data has loaded.
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      // You can add a custom wait here if needed, e.g., for a specific element
      // await page.waitForSelector('.faq-item', { timeout: 10000 });

      const html = await page.content();

      const isRoot = route === '/';
      const filePath = isRoot
        ? join(DIST_DIR, 'index.html')
        : join(DIST_DIR, route, 'index.html');

      mkdirSync(dirname(filePath), { recursive: true });
      writeFileSync(filePath, html);

      console.log(`[prerender] Wrote ${filePath}`);
    }

    await browser.close();
  } finally {
    server.close();
  }
  console.log('🎉 Prerendering complete!');
}

prerender().catch((err) => {
  console.error('[prerender] Error during prerender:', err);
  process.exit(1);
});