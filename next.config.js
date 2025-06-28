// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: ["index"],
      cssProp: true,
      namespace: "",
      minify: false,
      transpileTemplateLiterals: false,
      pure: false,
    }
  }
}
module.exports = nextConfig