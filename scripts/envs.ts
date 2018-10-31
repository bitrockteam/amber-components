
const env: string = process.env.NODE_ENV;
const envs: {
  production: string,
  development: string,
  local: string,
  test: string
} = {
  production: 'production',
  development: 'development',
  local: 'local',
  test: 'test'
};

const isProd = (): Boolean => env === envs.production;

module.exports = { isProd, envs, env };