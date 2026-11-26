import { test } from '@playwright/test';
import { getEnvironmentData } from '../Scripts/environment';
import { autenticar } from '../Scripts/Login';
import { cadastrarProposta } from '../Scripts/Proposta';

// Falta a captura do cadastro completo para implementar o fluxo e suas asserções.
test.fixme('Proposta — cadastrar com os valores finais do fluxo gravado',
  { tag: ['@proposta', '@pending'] }, async ({ page }) => {
    await autenticar(page, getEnvironmentData());
    await cadastrarProposta(page);
  });
