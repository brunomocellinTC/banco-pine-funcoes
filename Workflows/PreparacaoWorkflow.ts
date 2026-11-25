import { pendingStep } from '../Scripts/utils';

// Implementar a integração autorizada para preparar/restaurar cada caso de forma independente.
// Não há execução dos comandos de servidor presentes em cases nesta suíte web.
export async function prepararCenario(id: string, produto?: string) {
  await pendingStep(`Preparar massa e estado independentes de ${id} ${produto ?? ''}`);
}

export async function consultarEstado() {
  return pendingStep('Consultar estado por caminho autorizado para comprovar ausência de gravação/execução');
}

export async function restaurarCenario(id: string, produto?: string) {
  await pendingStep(`Restaurar massa e histórico de ${id} ${produto ?? ''}`);
}
