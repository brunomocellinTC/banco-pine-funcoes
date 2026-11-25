import { type Page } from '@playwright/test';
import { LoginActions } from '../PageObjects/LoginPageObject/LoginActions';
import { PortalActions } from '../PageObjects/PortalPageObject/PortalActions';
import { type EnvironmentData } from '../Scripts/environment';

export async function autenticar(page: Page, data: EnvironmentData) {
  const login = new LoginActions(page, data);
  await login.abrir();
  await login.entrar();
  await new PortalActions(page).validarHome(data.usuario);
}
