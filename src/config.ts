export const title = "CoinSolv";

export const version: string = import.meta.env.VITE_VERSION || "unset_version";
export const sha: string = import.meta.env.VITE_GIT_SHA || "unset_sha";
export const basename = import.meta.env.BASE_URL;

const { env } = import.meta;

console.log({ env });

const ghUrl = "https://github.com/coinsolv/client-app";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/release/tag/${version}`,
  url: ghUrl,
};
