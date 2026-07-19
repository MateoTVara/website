{
  mkShell,
  callPackage,
  git,
  just,
  tree
}:
let
  mainPkg = callPackage ./package.nix { };
in
mkShell {
  inputsFrom = [
    mainPkg
  ];

  packages = [
    git
    just
    tree
  ];
}
