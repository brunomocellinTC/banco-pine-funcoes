import { type Page } from '@playwright/test';
import { element, pendingStep } from '../../Scripts/utils';
import { requireConfigured } from '../../Scripts/environment';
import { CotacoesElementsMap as map } from './CotacoesElementsMap';

export class CotacoesActions {
  constructor(private readonly page: Page) {}
  async abrirInclusao() {
    // TODO: confirmar se BackOffice é select nativo, componente customizado ou frame.
    await pendingStep('Selecionar Tabelas WEB no BackOffice conforme DOM real');
    await element(this.page, map.operacional).click();
    await element(this.page, map.cotacoes).click();
    await element(this.page, map.incluir).click();
  }
  async selecionarIndexador(codigo: string) {
    await element(this.page, map.codigoIndexador).fill(requireConfigured(codigo, 'cotacao.codigoIndexador'));
    await element(this.page, map.confirmarSelecao).click();
  }
  async preencherTaxa(taxa: string) { await element(this.page, map.taxa).fill(requireConfigured(taxa, 'cotacao.taxa')); }
  async selecionarTipo(_tipo: string) { await pendingStep('Selecionar Tipo conforme componente real'); }
  async confirmarCadastro() {
    // Instalar o handler de dialog ANTES de chamar este método, caso seja alerta nativo.
    await element(this.page, map.confirmarCadastro).click();
  }
  async cancelarCadastro() { await element(this.page, map.cancelarCadastro).click(); }
  async voltarCadastro() { await element(this.page, map.voltarCadastro).click(); }
}
