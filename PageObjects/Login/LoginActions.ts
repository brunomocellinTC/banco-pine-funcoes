import { type Page } from '@playwright/test';
import { LoginObjects } from './LoginObjects';
import { requireConfigured } from '../../Scripts/environment';

export class LoginActions {
  constructor(private readonly page: Page) {}

  async abrirLogin(path: string) {
    await this.page.goto(requireConfigured(path, 'login.path'));
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
