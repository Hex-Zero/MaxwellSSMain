#!/usr/bin/env node
/**
 * Safely perform a post-build auto commit locally while avoiding failures in CI/Vercel.
 * Skips entirely when running in CI (VERCEL or CI env vars present) or when git isn't available.
 */
const { execSync } = require('child_process');

function log(msg) {
  process.stdout.write(`[postbuild-autocommit] ${msg}\n`);
}

if (process.env.CI || process.env.VERCEL) {
  log('CI environment detected; skipping auto commit.');
  process.exit(0);
}

try {
  execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
} catch {
  log('Not inside a git repository; skipping.');
  process.exit(0);
}

try {
  execSync('git add .', { stdio: 'inherit' });
  try {
    execSync('git diff --cached --quiet', { stdio: 'inherit' });
    log('No changes to commit.');
    process.exit(0);
  } catch {
    // Has staged changes
  }
  execSync('git commit -m "chore: auto commit after successful build"', { stdio: 'inherit' });
  try {
    execSync('git push origin HEAD', { stdio: 'inherit' });
  } catch (pushErr) {
    log('Push failed (likely no credentials). Commit retained locally.');
  }
} catch (err) {
  log(`Unexpected error: ${err.message}`);
  process.exit(0); // Never fail the build just for this helper
}
