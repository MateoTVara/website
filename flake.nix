{
  description = "";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      inherit (nixpkgs) lib;
      forAllSystems =
        f:
        lib.genAttrs
          [
            "x86_64-linux"
            "x86_64-darwin"
            "i686-linux"
            "aarch64-linux"
            "aarch64-darwin"
          ]
          (
            system:
            f (
              import nixpkgs {
                inherit system;
              }
            )
          );
    in
    {
      packages = forAllSystems (pkgs: {
        default = self.packages.${pkgs.stdenv.hostPlatform.system}.mateotvara-website;
        mateotvara-website = pkgs.callPackage ./nix/package.nix { };
      });

      devShells = forAllSystems (pkgs: {
        default = pkgs.callPackage ./nix/shell.nix { };
      });

      formatter = forAllSystems (
        pkgs:
        pkgs.treefmt.withConfig {
          runtimeInputs = with pkgs; [
            nixfmt-tree
          ];

          settings = {
            on-unmatched = "info";
            tree-root-file = "flake.nix";

            formatter = {
              nixfmt = {
                command = "nixfmt";
                includes = [ "*.nix" ];
              };
            };
          };
        }
      );
    };
}
