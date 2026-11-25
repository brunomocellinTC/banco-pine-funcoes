import { expect, type Page } from '@playwright/test';
import { LoggedHomeElementsMap as map } from './LoggedHomeElementsMap';

export class LoggedHomeActions {
  constructor(private readonly page: Page) {}

  async validarHome() {
    await expect(this.page.locator(map.sair)).toBeVisible();
    await expect(this.page.locator(map.cadastroProposta)).toBeAttached();
  }

  async abrirCadastroProposta() {
    await this.page.getByRole('button', { name: 'Proposta', exact: true }).click();
    await this.page.locator(map.cadastroProposta).click();
    await expect(this.page).toHaveURL(/\/MenuWeb\/Cadastro\/Proposta\/MPCDPROP\/UI\.MPCDPROP\.aspx\?seqdeci=1(?:&|$)/);
  }
}
