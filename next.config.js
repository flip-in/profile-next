/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
};

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  nextConfig,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "imgix",
    path: "kinexus-3274.imgix.net",
  },
};
