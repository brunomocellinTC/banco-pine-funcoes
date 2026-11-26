import { defineConfig, devices } from '@playwright/test';
import { getEnvironmentData, requireConfigured } from './Scripts/environment';
 
const data = getEnvironmentData();
 
export default defineConfig({
  testDir: './Tests',
  testMatch: 'Login.Test.ts',
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 60_000,
  expect: { timeout: 15_000 },
  outputDir: 'test-results',
  reporter: 'list',
  use: {
    baseURL: requireConfigured(data.baseURL, 'baseURL'),
    headless: false,
    screenshot: 'off',
    trace: 'off',
    video: 'off',
  },
  projects: [
    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        launchOptions: {
          // Ajuste da sessão de teste para o sistema interno que usa HTTP.
          args: [
            '--disable-features=HttpsUpgrades,HttpsFirstModeIncognito,HttpsFirstBalancedModeAutoEnable',
          ],
        },
      },
    },
  ],
});
 