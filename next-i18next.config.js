const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    react: {
      useSuspense: false,
    },
    reloadOnPrerender: process.env.NODE_ENV !== 'production',
    localePath: path.resolve('./public/locales'),
  },
};
