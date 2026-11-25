import { defineConfig, devices } from '@playwright/test';
import { getEnvironmentData, isPlaceholder } from './Scripts/environment';

const data = getEnvironmentData();

export default defineConfig({
  testDir: './Tests',
  testMatch: /.*\.Test\.ts/,
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0, // Rotinas contábeis não devem ser repetidas automaticamente.
  timeout: 60_000, // Limite técnico inicial; ajustar após observar os processos, não é SLA.
  expect: { timeout: 15_000 },
  outputDir: 'test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'Reports/playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'Reports/allure-results', detail: false }],
  ],
  use: {
    baseURL: isPlaceholder(data.baseURL) ? undefined : data.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    // Habilitar trace/vídeo somente após avaliar a captura de credenciais e massa.
    trace: 'off',
    video: 'off',
  },
  projects: [
    { name: 'chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge' } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
