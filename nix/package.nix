{
  lib,
  pnpm,
  nodejs_24,
  stdenvNoCC,
  fetchPnpmDeps,
  pnpmConfigHook,
}:
stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "mateotvara-website";
  version = "0.1.0";

  src = ../.;

  nativeBuildInputs = [
    pnpm
    nodejs_24
    pnpmConfigHook
  ];

  pnpmDeps = (
    fetchPnpmDeps {
      inherit (finalAttrs) pname version src;
      fetcherVersion = 4;
      # hash = lib.fakeHash;
      hash = "sha256-wc0Qz8D2D2fArstUu4pL6j9+8VjzwXaiBpTI4G5JFs4=";
    }
  );

  buildPhase = ''
    pnpm run build
  '';

  installPhase = ''
    mkdir -p $out
    mv dist/* $out/
  '';

  env.ASTRO_TELEMETRY_DISABLED = 1;
})
