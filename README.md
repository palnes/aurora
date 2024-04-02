# aurora

Basic design system setup

## About

This project aims to create a design **system** implemented with Design Tokens and acomponent system for React and React Native.

All display of design tokens and components is done via their respective Storybooks.

## Current state

- [x] pnpm workspaces
- [ ] Web
  - [x] Build for distribution
  - [x] Storybook
  - [x] Visual tests with Chromatic
  - [ ] Link to Design Tokens
  - [ ] Tests
- [ ] React Native
  - [x] Build for distribution
  - [x] Storybook for React Native
  - [ ] Link to Design Tokens
  - [ ] Tests
  - [ ] E2E tests
- [ ] Design Tokens
  - [x] Create sample token set
  - [x] Build for distribution
  - [x] Storybook
  - [ ] Tests
  - [ ] Visual tests with Chromatic
- [x] Nx
  - [x] Initial setup and dependency graph
  - [x] Optional Cache on Azure
- [ ] Changesets

## Requirements

- [pnpm](https://pnpm.io)
- [Nx](https://nx.dev/) - `pnpm add --global nx@latest`
- [XCode](https://developer.apple.com/xcode/) with a working iOS simulator
- [Android Studio](https://developer.android.com/studio) with a working Android simulator

## Getting started (Command cheatsheet)

First off, run `pnpm install`. Wait for a few seconds.

For the most part, this is the only `pnpm` command you should need to use. Most other commands should be done with [Nx](https://nx.dev/).

Nx will ensure that tasks are run in the correct order. For example, when building web, it needs to build tokens first. Nx orchestrates this for you, so you don't have to think about it.

### Sample commands

```
# Build web project
nx run web:test

# Test app project
nx run web:test

# Start web storybook (also starts the tokens:storybook)
nx run web:storybook

# Build all projects
nx run-many -t build

# Run lint, test, and build on all projects
nx run-many -t lint test build

# Run Storybook on tokens only
nx run tokens:storybook
```

If you for some reason want to skip the Nx task resolutions, simply run the tasks manually with `pnpm` in the respective projects:

```
# In packages/web, will not build packages/tokens first
pnpm run build
```

### Nx Cache

The project has been set up with a custom cache on Azure. Copy `.env.example` to `.env` and fill out the `NXCACHE_AZURE_SAS_URL` with information given to you by **Pål** on request.

If you think the cache is not producing your expected results, you can skip caching with the `--skipNxCache` option.

```
nx run-many -t build --skipNxCache
```
