/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  printWidth: 145,
  arrowParens: "avoid",
  trailingComma: "es5",
  proseWrap: "never",
  plugins: ["prettier-plugin-tailwindcss"],
};
