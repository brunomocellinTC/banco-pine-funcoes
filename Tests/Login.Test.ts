import { test } from '@playwright/test';
import { getEnvironmentData, loginConfigurado } from '../Scripts/environment';
import { autenticar } from '../Workflows/LoginWorkflow';
import { PortalActions } from '../PageObjects/PortalPageObject/PortalActions';

const data = getEnvironmentData();
const manual = process.env.FUNCAO_LOGIN_MANUAL === '1';

test.describe('Login', () => {
  test.skip(!manual && !loginConfigurado(data), 'Configure os seletores reais ou use npm run test:login:visual.');

  test('Acessar a home do portal Função', { tag: ['@login', '@smoke'] }, async ({ page }) => {
    if (manual) {
      await test.step('Fazer login manualmente e clicar em Resume no Inspector', async () => {
        await page.goto(new URL(data.loginPath, data.baseURL).href);
        await page.pause();
      });
      await test.step('Validar usuário autenticado e acesso a Proposta', async () => {
        await new PortalActions(page).validarHome(data.usuario || undefined);
      });
      await test.step('Conferir a home em tela e clicar em Resume para terminar', async () => {
        await page.pause();
      });
      return;
    }
    await autenticar(page, data);
  });
});
