# Sesame & Hipólito Pérez: Vacancy candidates app

Application developed for Sesame by Hipólito Pérez in Vue 3, Typescript and following SOLID patterns and hexagonal architecture.
App: https://hipolito-perez-sesame-technical-front-test-20fj93883.vercel.app/vacantes

## Create docker image

```sh
docker build \
    -t vacancy-app:latest \
    --build-arg PORT=$var \
    --build-arg SESAME_API_URL=$var \
    --build-arg SESAME_API_TOKEN=$var \
    .
```

## Create docker container

```sh
docker run \
    -p 127.0.0.1:3000:$PORT \
    vacancy-app
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
