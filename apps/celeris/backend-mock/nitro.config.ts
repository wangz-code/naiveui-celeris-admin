import errorHandler from './error';

export default defineNitroConfig({
  devErrorHandler: errorHandler,
  errorHandler: '~/error',
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin': 'https://wangz-code.github.io',
        'Access-Control-Expose-Headers': '*',
      },
    },
  },
});
