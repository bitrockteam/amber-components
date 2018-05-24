
import test from 'ava';
import { isProd, envs, env } from './../scripts/envs.js';

test(`current env is 'test'`, t => {
  t.is(env, 'test');
});

test(`isProd() get false`, t => {
  t.is(isProd(), false);
});

test(`envs values`, t => {
  t.is(envs.production, 'production');
  t.is(envs.development, 'development');
  t.is(envs.local, 'local');
  t.is(envs.test, 'test');
});