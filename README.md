## Vue + Vuex + Firebase shopping cart

This is my first tiny project in Vue.js, so please take that into account.
Check it out in action at https://vuexfirecart-13bbc.firebaseapp.com/

### Development

Run the development server with:
```shell
yarn run dev
```

Run linter with:
```shell
yarn run lint
```

### Deployment

You need to create a Firebase project and install firebase tools:
```shell
yarn global add firebase-tools
firebase login
```

Seed the database with product data:
```shell
firebase database:set /products data/products.json
```

Run this to build the project:
```shell
yarn run build
```

Then to deploy:
```shell
firebase deploy
```
