import { type Page } from '@playwright/test';
import { element } from '../../Scripts/utils';
import { requireConfigured, type EnvironmentData } from '../../Scripts/environment';

export class LoginActions {
  constructor(private readonly page: Page, private readonly data: EnvironmentData) {}

  async abrir() {
    await this.page.goto(new URL(requireConfigured(this.data.loginPath, 'loginPath'),
      requireConfigured(this.data.baseURL, 'baseURL')).href);
  }

  async entrar() {
    await element(this.page, this.data.login.usuario).fill(requireConfigured(this.data.usuario, 'usuario'));
    await element(this.page, this.data.login.senha).fill(requireConfigured(this.data.senha, 'senha'));
    await element(this.page, this.data.login.entrar).click();
  }
}
