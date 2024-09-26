// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  importOrder: ['^@(.*)/(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['decorators-legacy', 'jsx', 'tsx', 'typescript'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
