/* eslint-disable fp/no-mutation */
/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV !== 'development' ? [purgecss] : []),
  ],
};
