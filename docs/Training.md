# node-express-training

index.html を SPA として RestAPI を想定して作成

## 環境構築

- express-generator をグローバルにインストール

```
$ npm install -g express-generator
```

- nodemon をグローバルにインストール

```
$ npm install -g nodemon
```

- express generator による作成

```
$ express --no-view ./node-express-training
```

- パッケージインストール

```
$ npm install --save-dev express
$ npm install --save-dev cookie-parser http-errors morgan
```

- jsonwebtoken のインストール

```
$ npm install --save-dev jsonwebtoken
```

- express-session のインストール

```
$ npm install --save-dev express-session
```

- redis(永続化可能なインメモリデータベース（In-memory database）)のインストール

```
$ npm install --save-dev connect-redis
```
