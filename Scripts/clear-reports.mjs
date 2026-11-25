import { rmSync } from 'node:fs';

for (const folder of ['Reports/allure-results', 'Reports/allure-report', 'Reports/playwright-report', 'test-results']) {
  rmSync(new URL(`../${folder}`, import.meta.url), { recursive: true, force: true });
}
