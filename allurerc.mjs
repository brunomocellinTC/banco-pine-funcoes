import { defineConfig } from 'allure';

export default defineConfig({
  name: 'Pine Funções Web',
  output: './Reports/allure-report',
  plugins: { awesome: { options: { reportName: 'Pine Funções Web', reportLanguage: 'pt' } } },
});
