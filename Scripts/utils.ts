import { type Locator, type Page, test } from '@playwright/test';
import { requireConfigured } from './environment';

export function element(page: Page, selector: string): Locator {
  return page.locator(requireConfigured(selector, 'ElementsMap: seletor real do DOM'));
}

export async function pendingStep(description: string): Promise<never> {
  return test.step(description, async () => {
    throw new Error(`TODO: implementar etapa e asserções: ${description}`);
  });
}
