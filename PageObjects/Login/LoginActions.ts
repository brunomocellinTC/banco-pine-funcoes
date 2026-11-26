import { type Page } from '@playwright/test';
import { LoginObjects } from './LoginObjects';
import { requireConfigured, type EnvironmentData } from '../../Scripts/environment';

export class LoginActions {
  constructor(private readonly page: Page) { }

  async abrirLogin(data: EnvironmentData) {
    const url = new URL(
      requireConfigured(data.login.path, 'login.path'),
      requireConfigured(data.baseURL, 'baseURL'),
    );
    await this.page.goto(url.href);
  }

  async preencherUsuario(usuario: string) {
    await this.page.locator(requireConfigured(LoginObjects.usuario, 'LoginObjects.usuario'))
      .fill(requireConfigured(usuario, 'login.usuario'));
  }

  async preencherSenha(senha: string) {
    await this.page.locator(requireConfigured(LoginObjects.senha, 'LoginObjects.senha'))
      .fill(requireConfigured(senha, 'login.senha'));
  }

  async clicarOk() {
    await this.page.locator(requireConfigured(LoginObjects.entrar, 'LoginObjects.ok')).click();
  }
}
