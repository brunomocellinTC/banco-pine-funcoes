import { test } from '@playwright/test';
import { getEnvironmentData } from '../Scripts/environment';
import { autenticar } from '../Workflows/LoginWorkflow';
import { LoggedHomeActions } from '../PageObjects/LoggedHomePageObject/LoggedHomeActions';
import { pendingStep } from '../Scripts/utils';

// O HAR recebido termina na home: n?o cont?m a tela nem o POST de cadastro.
// Implementar preenchimento e valida??o da grava??o a partir da captura completa.
test.fixme('Proposta ? cadastrar com os valores finais do fluxo gravado',
  { tag: ['@proposta', '@pending'] }, async ({ page }) => {
    await autenticar(page, getEnvironmentData());
    await new LoggedHomeActions(page).abrirCadastroProposta();
    await pendingStep('Preencher os valores finais, gravar e validar o n?mero da proposta na confirma??o real');
  });
