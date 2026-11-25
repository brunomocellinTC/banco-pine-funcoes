import { expect, type Page } from '@playwright/test';

// Seletores observados na entrada 0 do segundo HAR (home do portal).
export class PortalActions {
  constructor(private readonly page: Page) {}

  async validarHome(usuarioEsperado?: string) {
    await expect(this.page).toHaveURL(/\/FI\.AC\.GUI\.FIMENU\.aspx(?:\?|$)/i);
    const usuario = this.page.locator('#ctl00_L_Usuario');
    await expect(usuario).toBeVisible();
    await expect(usuario).toHaveText(/\S+/);
    if (usuarioEsperado) await expect(usuario).toHaveText(usuarioEsperado, { ignoreCase: true });
    await expect(this.page.locator('#ctl00_ContentPlaceHolder1_DataListMenu_ctl00_LinkButton2'))
      .toHaveText('Proposta');
    await expect(this.page.getByRole('link', { name: 'Proposta', exact: true })).toBeVisible();
  }
}
