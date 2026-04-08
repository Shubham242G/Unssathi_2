// revi-build.js
const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting ReviJs prerendering...');

try {
  // Run ReviJs as a separate process
  execSync('npx revijs', {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: {
      ...process.env,
      NODE_ENV: 'production',
      // Skip the problematic scoring module if needed
      SKIP_SCORING: 'true'
    }
  });
  console.log('✅ Prerendering completed successfully!');
} catch (error) {
  console.error('❌ Prerendering failed:', error.message);
  process.exit(1);
}