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
      hash = "sha256-QaKTXOaC1GX9lhVUHPuFV69+7Mo0Iu7N1iSWR/CP7Ok=";
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
