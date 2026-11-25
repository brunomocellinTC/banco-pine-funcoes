import { type Page } from '@playwright/test';
import { LoginActions } from '../PageObjects/LoginPageObject/LoginActions';
import { LoggedHomeActions } from '../PageObjects/LoggedHomePageObject/LoggedHomeActions';
import { type EnvironmentData } from '../Scripts/environment';

export async function autenticar(page: Page, data: EnvironmentData) {
  const login = new LoginActions(page);
  await login.goto(data.baseURL, data.loginPath);
  await login.preencherCredenciais(data.usuario, data.senha);
  await login.entrar();
  await new LoggedHomeActions(page).validarHome();
}
