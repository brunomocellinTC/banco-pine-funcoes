import { type Page } from '@playwright/test';
import { element } from '../../Scripts/utils';
import { requireConfigured } from '../../Scripts/environment';
import { LoginElementsMap as map } from './LoginElementsMap';

export class LoginActions {
  constructor(private readonly page: Page) {}

  async goto(baseURL: string, path: string) {
    await this.page.goto(new URL(requireConfigured(path, 'loginPath'), requireConfigured(baseURL, 'baseURL')).href);
  }

  async preencherCredenciais(usuario: string, senha: string) {
    await element(this.page, map.usuario).fill(requireConfigured(usuario, 'usuario'));
    await element(this.page, map.senha).fill(requireConfigured(senha, 'senha'));
  }

  async entrar() { await element(this.page, map.entrar).click(); }

  async moverFocoDaSenha(tecla: 'Enter' | 'Tab') {
    await element(this.page, map.senha).focus();
    await element(this.page, map.senha).press(tecla);
  }

  async entrarPeloTeclado() {
    await element(this.page, map.entrar).focus();
    await element(this.page, map.entrar).press('Enter');
  }
}
