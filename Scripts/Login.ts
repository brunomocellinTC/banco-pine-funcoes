import { type Page } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { requireConfigured, type EnvironmentData } from './environment';

export function loginConfigurado(data: EnvironmentData): boolean {
  return [data.usuario, data.senha, ...Object.values(LoginPage)]
    .every(value => Boolean(value?.trim()));
}

export async function abrirLogin(page: Page, data: EnvironmentData) {
  await page.goto(new URL(requireConfigured(data.loginPath, 'loginPath'),
    requireConfigured(data.baseURL, 'baseURL')).href);
}

export async function autenticar(page: Page, data: EnvironmentData) {
  await abrirLogin(page, data);
  await page.locator(requireConfigured(LoginPage.usuario, 'LoginPage.usuario'))
    .fill(requireConfigured(data.usuario, 'usuario'));
  await page.locator(requireConfigured(LoginPage.senha, 'LoginPage.senha'))
    .fill(requireConfigured(data.senha, 'senha'));
  await page.locator(requireConfigured(LoginPage.entrar, 'LoginPage.entrar')).click();
}

export async function autenticarManualmente(page: Page, data: EnvironmentData) {
  await abrirLogin(page, data);
  // Faça login na janela aberta e clique em Resume no Inspector.
  await page.pause();
}

export async function conferirTela(page: Page) {
  await page.pause();
}
