import { expect, test } from '@playwright/test';
import { getEnvironmentData, isPlaceholder } from '../Scripts/environment';
import { LoginActions } from '../PageObjects/Login/LoginActions';
import { LoginObjects } from '../PageObjects/Login/LoginObjects';
import { HomeObjects } from '../PageObjects/Home/HomeObjects';

const data = getEnvironmentData();

test.describe('Login', () => {
  test.skip(
    [data.login.usuario, data.login.senha, ...Object.values(LoginObjects)].some(isPlaceholder),
    'Preencha os seletores de LoginObjects e as credenciais do ambiente.',
  );

  test('Acessar a home do portal Função', { tag: ['@login', '@smoke'] }, async ({ page }) => {
    const login = new LoginActions(page);
    await login.abrirLogin(data);
    await login.preencherUsuario(data.login.usuario);
    await login.preencherSenha(data.login.senha);
    await login.clicarOk();

    await expect(page).toHaveURL(url => url.pathname.toLowerCase() === data.home.path.toLowerCase());
    await expect(page.locator(HomeObjects.usuario)).toBeVisible();
    await expect(page.locator(HomeObjects.usuario)).toHaveText(data.login.usuario, { ignoreCase: true });
    await expect(page.locator(HomeObjects.proposta)).toBeVisible();
    await expect(page.locator(HomeObjects.proposta)).toHaveText('Proposta');
  });
});
