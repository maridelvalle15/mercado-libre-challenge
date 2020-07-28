# Mercado Libre

## Environment

- Node.js v12.17.0
- Yarn 1.6.0

## Quick Start

1. Install dependencies

```bash
yarn install
```

2. To run the backend app

```bash
yarn start:server
```

3. To run the frontend app

```bash
yarn start:client
```

4. Unit test

```bash
yarn test
```

## Docs

1. UI component library :

```bash
yarn storybook
```

2. API swagger docs

```bash
http://127.0.0.1:8080/api-docs/
```

## Folders structure

- Storybook config `.storybook/*`
  - Define every component story `.storybook/stories`
- Frontend app `client/*`
  - Assets `client/assets/*`
  - UI components `client/components/*`
  - Bootloaders, api config and theme setup `client/config/*`
  - Custom Hooks `client/hooks/*`
  - UI layouts `client/layouts/*`
  - Pages `client/pages/*`
  - Routing and root component `client/root.js`
- Backend app `server/*`
  - Bootloaders, express and api config `server/config/*`
  - Repositories are classes acting as the source of the data. `server/repositories/*`
  - Resolvers is intended to handle the request logic and send back a response `server/resolvers/*`
  - Serializers format the data with an specific structure `server/serializers/*`
