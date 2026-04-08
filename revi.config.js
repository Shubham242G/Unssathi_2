export default {
  distDir: 'build',
  outputDir: 'build-prerendered',
  
  // Let ReviJs find all your routes automatically
  autoDiscover: true,
  
  // CRITICAL FOR YOUR SLOW APIS: Use ready flag instead of timers
  readyFlag: true,
  waitFor: 0,  // Don't guess with timers
  
  // Your routes (kept from your react-snap config)
  include: [
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
  ],
  
  // Handle dynamic routes
  routePatterns: [
    '/blog/*',      // All blog posts
    '/services/*'   // All service pages
  ],
  
  // Keep your existing puppeteer settings
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage'
  ],
  
  timeout: 60000,  // Increased to 60 seconds for slow APIs
  
  // Generate sitemap automatically
  sitemap: 'https://www.unsaathi.com',
  
  // Get SEO scores
  score: true,
  
  // Cache for faster rebuilds
  cache: true
}