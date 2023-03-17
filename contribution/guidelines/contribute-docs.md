---
sidebar_position: 2
---

# Contribution to Docs

[Arclix Docs](https://arclix.github.io/arclix-docs) is a documentation website for open source React creation and component generation CLI made to make the work of React developers easier. If you're interested in contributing to Arclix, hopefully, this document makes the process for contributing clear.

:::info
[Arclix Docs](https://arclix.github.io/arclix-docs) is built using [Docusaurus](https://docusaurus.io/) a static site generator to build `single-page application` with fast client-side navigation, leveraging the full power of React to make your site interactive.
:::

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) which includes `npm` greater than v14.

### Repo Setup

To develop and test the docs `Arclix`:

1. Run `npm i` in arclix-docs root folder.
2. Run `npm start` to start the dev server.
3. Do the changes you want in the Arclix.
4. Make sure you doesn't break any of the existing code.

### Pull Request Guidelines

-   Checkout a topic branch from a base branch (e.g. `master`), and merge back against that branch.

-   If adding a new feature:

    -   Add accompanying test case.
    -   Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first, and have it approved before working on it.

-   If fixing a bug:

    -   If you are resolving a special issue, add `fix: remove something (#issue id) #PR id` in your PR title for a better release log (e.g. `fix: remove something (#1) #2`).
    -   Provide a detailed description of the bug in the PR. Live demo preferred.
    -   Add appropriate test coverage if applicable.

-   It's OK to have multiple small commits as you work on the PR. GitHub can automatically squash them before merging.

-   No need to worry about code style as long as you have installed the dev dependencies. Modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [husky](https://typicode.github.io/husky)).

-   PR title must follow the [commit message convention](./commit-convention) so that changelogs can be automatically generated.

### Dependencies Guidelines

Arclix aims to be lightweight, and this includes being aware of the number of npm dependencies and their size.

### Think Before Adding a Dependency

Most deps should be added to `devDependencies` even if they are needed at runtime. Some exceptions are:

-   Type packages. Example: `@types/*`.
-   Deps that cannot be properly bundled due to binary files. Example: `esbuild`.

Avoid deps with large transitive dependencies that result in bloated size compared to the functionality it provides. For example, `http-proxy` itself plus `@types/http-proxy` is a little over 1MB in size, but `http-proxy-middleware` pulls in a ton of dependencies that make it 7MB(!) when a minimal custom middleware on top of `http-proxy` only requires a couple of lines of code.
