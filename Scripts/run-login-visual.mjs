import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const project = args.some(arg => arg === '--project' || arg.startsWith('--project='))
  ? [] : ['--project=chrome'];
const result = spawnSync(process.execPath, [require.resolve('@playwright/test/cli'),
  'test', 'Tests/Login.Test.ts', ...project, '--headed', '--timeout=0', ...args], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  stdio: 'inherit',
  env: { ...process.env, ENV: 'homologacao', FUNCAO_LOGIN_MANUAL: '1' },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
