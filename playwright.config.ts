import { defineConfig, devices } from '@playwright/test';
import { testConfig } from './config/initConfig';

export default defineConfig({
    testDir: './tests',
    /* Global setup to initialize and validate environment variables */
    globalSetup: './config/initConfig.ts',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : testConfig.WORKERS,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        trace: 'retain-on-failure',
        headless: process.env.CI ? true : testConfig.HEADLESS,

        viewport: {
            width: testConfig.VIEWPORT_WIDTH,
            height: testConfig.VIEWPORT_HEIGHT
        }
    },

    projects: [
        {
            name: 'chromium',
            // use: { ...devices['Desktop Chrome'] },
        },
    ],
});
