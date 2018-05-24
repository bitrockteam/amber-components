
const env = process.env.NODE_ENV;
const envs = {
  production: 'production',
  development: 'development',
  local: 'local',
  test: 'test'
};

const isProd = () => env === envs.production;

module.exports = { isProd, envs, env };