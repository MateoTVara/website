alias b := build
alias nb := nix-build
alias r := run
alias u := up
alias f := fmt

default: build

build:
  pnpm run build

nix-build:
  nix build -L

run:
  pnpm run dev

up:
  pnpm upgrade

fmt:
  nix fmt
  pnpm run fmt
