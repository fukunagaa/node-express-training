# node-express-training

index.html を SPA として RestAPI を想定して作成

## 環境構築

- express-generator をグローバルにインストール

```
$ npm install -g express-generator
```

- express generator による作成

```
$ express --no-view ./node-express-training
```

- パッケージインストール

```
$ npm install --save-dev express
$ npm install --save-dev nodemon cookie-parser http-errors morgan
```

- jsonwebtoken のインストール

```
$ npm install --save-dev jsonwebtoken
```

- express-session のインストール

```
$ npm install --save-dev express-session
```
