import { type Page } from '@playwright/test';
import { PropostaPage } from '../PageObjects/PropostaPage';

// Usar após entrar no módulo Proposta; essa transição ainda precisa ser capturada.
export async function abrirCadastroProposta(page: Page) {
  await page.locator(PropostaPage.menu).filter({ hasText: /^Proposta\s*$/ }).click();
  await page.locator(PropostaPage.cadastro).click();
}

export async function cadastrarProposta(_page: Page): Promise<never> {
  throw new Error('Pendente: capturar entrada no módulo, campos, valores finais e confirmação do cadastro.');
}
