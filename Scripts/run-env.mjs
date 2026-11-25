import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const [environment = 'homologacao', ...args] = process.argv.slice(2);
if (!['homologacao', 'producao'].includes(environment)) {
  throw new Error('Ambiente inválido. Use homologacao ou producao.');
}
const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve('@playwright/test/cli'), 'test', ...args], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  stdio: 'inherit',
  env: { ...process.env, ENV: environment },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
