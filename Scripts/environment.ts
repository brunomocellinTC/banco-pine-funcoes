import { existsSync, readFileSync } from 'node:fs';

export type EnvironmentData = {
  baseURL: string;
  loginPath: string;
  usuario: string;
  senha: string;
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
  if (environment !== 'homologacao') throw new Error('Esta base cobre somente homologacao.');
  const local = new URL('../Data/homologacao.json', import.meta.url);
  const example = new URL('../Data/homologacao.example.json', import.meta.url);
  const data = JSON.parse(readFileSync(existsSync(local) ? local : example, 'utf8')) as EnvironmentData;
  data.usuario = process.env.FUNCAO_USUARIO ?? data.usuario;
  data.senha = process.env.FUNCAO_SENHA ?? data.senha;
  return data;
}
