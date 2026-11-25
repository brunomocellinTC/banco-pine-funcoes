import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve('@playwright/test/cli'),
  'test', 'Tests/Login.Test.ts', '--project=chrome', '--headed', '--timeout=0'], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  stdio: 'inherit',
  env: { ...process.env, ENV: 'homologacao', FUNCAO_LOGIN_MANUAL: '1' },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
