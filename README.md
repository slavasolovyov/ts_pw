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

### Automatic CI
- GitHub Actions workflow at `.github/workflows/ci.yml` runs automatically on push/PR to main branch
- Installs deps, installs browsers, runs `npx playwright test`
- Uploads HTML report (`reports/playwright-report`) and JUnit XML (`reports/junit/results.xml`) as artifacts

### Manual Test Run
- GitHub Actions workflow at `.github/workflows/manual.yml` can be triggered manually
- Go to **Actions** → **Manual Test Run** → **Run workflow**
- Options:
  - **Browser**: Choose `all`, `chromium`, or `webkit` to run tests on specific browser(s)
- Uploads reports as artifacts with `-manual` suffix

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

