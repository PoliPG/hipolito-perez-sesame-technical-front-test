# Sesame & Hipólito Pérez: Vacancy candidates app

Application developed for Sesame by Hipólito Pérez in Vue 3, Typescript and following SOLID patterns and hexagonal architecture.

## Create docker image

```sh
docker build \
    -t latest \
    --build-arg SESAME_API_URL=$var \
    --build-arg SESAME_API_TOKEN=$var \
    vacancy_app
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.
