const { isProd, envs, env } = require('./../../scripts/envs.ts');

const title = (msg: string) => `ENVS utility: ${msg}`;

test(title(`current env is 'test'`), () => {
  expect(env).toBe('test');
});

test(title(`isProd() get false`), () => {
  expect(isProd()).toBe(false);
});

test(title(`envs values`), () => {
  expect(envs.production).toBe('production');
  expect(envs.development).toBe('development');
  expect(envs.local).toBe('local');
  expect(envs.test).toBe('test');
});