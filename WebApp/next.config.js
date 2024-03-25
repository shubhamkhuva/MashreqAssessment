// @ts-check
// const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "hi"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
};

module.exports = nextConfig;