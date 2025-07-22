# ubeya-automation

A Playwright-based automation testing suite for the Ubeya application.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd ubeya-automation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

4. **Configure environment variables**:
   - Copy the `.env` file or create one with the following variables:
     ```
     BASE_URL=http://localhost:3000
     ENABLE_FEATURE_X=true
     HEADLESS=false
     VIEWPORT_WIDTH=1600
     VIEWPORT_HEIGHT=900
     ```
   - Adjust the `BASE_URL` to point to your local or testing environment
   - Set `HEADLESS=true` if you want to run tests without opening a browser window

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in headed mode (with browser visible):
```bash
npx playwright test --headed
```

### Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

### Run tests with UI mode (interactive):
```bash
npx playwright test --ui
```

### Generate and view test report:
```bash
npx playwright show-report
```

## Project Structure

- `tests/` - Test files
- `pages/` - Page Object Model classes
- `config/` - Configuration files and environment setup
- `utils/` - Utility functions
- `playwright.config.ts` - Playwright configuration
- `.env` - Environment variables

## Test Configuration

The tests use environment variables defined in `.env` file:
- `BASE_URL` - The base URL of the application under test
- `HEADLESS` - Whether to run tests in headless mode
- `VIEWPORT_WIDTH` & `VIEWPORT_HEIGHT` - Browser viewport dimensions
- `ENABLE_FEATURE_X` - Feature flag for testing specific features

## Debugging

- Use `--debug` flag to run tests in debug mode:
  ```bash
  npx playwright test --debug
  ```
- View traces for failed tests in the HTML report
- Use `page.pause()` in test code to pause execution for debugging