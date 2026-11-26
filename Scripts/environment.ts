import { existsSync, readFileSync } from 'node:fs';

export type EnvironmentData = {
  baseURL: string;
  login: {
    path: string;
    usuario: string;
    senha: string;
  };
  home: {
    path: string;
    dropdown2: string;
  };
};

export function isPlaceholder(value: string): boolean {
  return !value?.trim() || value.includes('<PREENCHER');
}

export function requireConfigured(value: string, name: string): string {
  if (isPlaceholder(value)) throw new Error('Configure ' + name + ' antes de executar.');
  return value;
}

export function getEnvironmentData(): EnvironmentData {
  const environment = process.env.ENV ?? 'homologacao';
  if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/i.test(environment)) throw new Error('Nome de ambiente inválido.');
  const local = new URL(`../Data/${environment}.json`, import.meta.url);
  const example = new URL(`../Data/${environment}.example.json`, import.meta.url);
  const file = existsSync(local) ? local : example;
  if (!existsSync(file)) throw new Error(`Crie Data/${environment}.json ou Data/${environment}.example.json.`);
  const data = JSON.parse(readFileSync(file, 'utf8').replace(/^\uFEFF/, '')) as EnvironmentData;
  data.login.usuario = process.env.FUNCAO_USUARIO ?? data.login.usuario;
  data.login.senha = process.env.FUNCAO_SENHA ?? data.login.senha;
  return data;
}
