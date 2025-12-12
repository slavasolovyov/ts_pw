# Playwright + TypeScript Prototype

## Prerequisites
- Node 18+ (tested with Node 20)

## Setup
```bash
npm install
npx playwright install --with-deps
```

## Run tests
```bash
npm test              # headless run
npm run test:headed   # see browser
npm run test:ui       # Playwright UI mode
npm run test:report   # open last HTML report
```

## CI
- GitHub Actions workflow at `.github/workflows/ci.yml` installs deps, installs browsers, runs `npx playwright test`, and uploads the HTML report (`reports/playwright-report`) plus JUnit XML (`reports/junit/results.xml`) as artifacts.

## Project Structure
```
├── src/              # Source TypeScript files
├── tests/            # Playwright test specs
├── reports/          # Test reports (HTML, JUnit XML)
├── test-results/     # Test artifacts (screenshots, videos, traces)
├── dist/             # Compiled JavaScript output
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

