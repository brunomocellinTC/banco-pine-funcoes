import { expect, type Page } from '@playwright/test';
import { element } from '../../Scripts/utils';
import { LoggedHomeElementsMap as map, modulosEsperados } from './LoggedHomeElementsMap';

export class LoggedHomeActions {
  constructor(private readonly page: Page) {}
  async validarHome() { await expect(element(this.page, map.home)).toBeVisible(); }
  async validarModulos() {
    const modulos = element(this.page, map.modulos);
    await expect(modulos).toHaveCount(modulosEsperados.length);
    for (const nome of modulosEsperados) {
      await expect(modulos.filter({ hasText: new RegExp(`^${nome}$`) })).toBeVisible();
    }
  }
  async abrirTabelasCorporativas() { await element(this.page, map.tabelasCorporativas).click(); }
  async abrirContabilIFRS() { await element(this.page, map.contabilIFRS).click(); }
}
