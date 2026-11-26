// Menu interno do módulo na porta 8087, observado no primeiro HAR.
// Os campos do cadastro ainda não foram capturados.
export const PropostaPage = {
  menu: 'a[role="button"][data-submenu][aria-haspopup="true"]',
  cadastro: '#WFP2009ATI_MPCDPROP',
} as const;
