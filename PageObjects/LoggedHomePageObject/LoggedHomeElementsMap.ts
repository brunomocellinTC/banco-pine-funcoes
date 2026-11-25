export const LoggedHomeElementsMap = {
  home: '<PREENCHER:SELETOR_HOME>',
  modulos: '<PREENCHER:SELETOR_COLECAO_MODULOS>',
  tabelasCorporativas: '<PREENCHER:SELETOR_TABELAS_CORPORATIVAS>',
  contabilIFRS: '<PREENCHER:SELETOR_WEB_CORPORATE_CONTABIL_IFRS>',
} as const;

// Lista da home de referência, para perfil equivalente ao SUPERVISOR.
export const modulosEsperados = [
  'Proposta', 'Relatórios', 'Acesso', 'BackOffice', 'Tabelas Corporativas',
  'Cessao de Credito - C3', 'Duplo Controle', 'Tabelas Corporativo IFRS',
  'Tabelas IFRS', 'Web Corporate Contabil IFRS', 'Web Bacen IFRS',
] as const;
