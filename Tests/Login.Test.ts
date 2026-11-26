import { expect, test } from '@playwright/test';
import { getEnvironmentData } from '../Scripts/environment';
import { autenticar, autenticarManualmente, conferirTela, loginConfigurado } from '../Scripts/Login';
import { HomePage } from '../PageObjects/HomePage';

const data = getEnvironmentData();
const manual = process.env.FUNCAO_LOGIN_MANUAL === '1';

test.describe('Login', () => {
  test.skip(!manual && !loginConfigurado(data), 'Configure os seletores reais ou use npm run test:login:visual.');

  test('Acessar a home do portal Função', { tag: ['@login', '@smoke'] }, async ({ page }) => {
    if (manual) await autenticarManualmente(page, data);
    else await autenticar(page, data);

    await expect(page).toHaveURL(/\/FI\.AC\.GUI\.FIMENU\.aspx(?:\?|$)/i);
    await expect(page.locator(HomePage.usuario)).toBeVisible();
    await expect(page.locator(HomePage.usuario)).toHaveText(/\S+/);
    if (data.usuario) {
      await expect(page.locator(HomePage.usuario)).toHaveText(data.usuario, { ignoreCase: true });
    }
    await expect(page.locator(HomePage.proposta)).toBeVisible();
    await expect(page.locator(HomePage.proposta)).toHaveText('Proposta');

    if (manual) await conferirTela(page);
  });
});
