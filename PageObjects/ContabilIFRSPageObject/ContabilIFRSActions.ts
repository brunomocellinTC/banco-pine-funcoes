import { type Page } from '@playwright/test';
import { element, pendingStep } from '../../Scripts/utils';
import { requireConfigured } from '../../Scripts/environment';
import { ContabilIFRSElementsMap as map } from './ContabilIFRSElementsMap';

export type RotinaContabil = 'abertura' | 'preFechamento' | 'fechar';

export class ContabilIFRSActions {
  constructor(private readonly page: Page) {}
  async selecionarProduto(_rotulo: string) {
    await pendingStep('Selecionar rótulo no BackOffice conforme componente real');
  }
  async abrirRotina(rotina: RotinaContabil) {
    await element(this.page, map.fechamento).click();
    await element(this.page, map[rotina]).click();
  }
  async preencherReferencia(referencia: string) {
    await element(this.page, map.referencia).fill(requireConfigured(referencia, 'referencia contábil preparada'));
  }
  async compararSaldos(comparar: boolean) { await element(this.page, map.compararSaldos).setChecked(comparar); }
  async confirmar() { await element(this.page, map.confirmar).click(); }
  async voltar() { await element(this.page, map.voltar).click(); }
  async aguardarExecucaoAtual() {
    await pendingStep('Correlacionar execução atual, aguardar conclusão e validar data, mensagem e status sem usar histórico antigo');
  }
  async baixarArquivo(tipo: 'exportarLog' | 'baixarArquivo') {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      element(this.page, map[tipo]).click(),
    ]);
    return download;
  }
}
