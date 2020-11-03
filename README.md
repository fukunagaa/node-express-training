# node-express-training

## 環境構築

- github からクローンする
- パッケージインストール

```
$ npm install
```

- nodemon をグローバルにインストール

```
$ npm install -g nodemon
```

## redis 環境構築

docker での起動方法をまとめる

### redis

- 入門

  > https://knowledge.sakura.ad.jp/16862/

- qiita

  > https://qiita.com/chokosuki4400/items/bdbbfe581dff66883881

- docker-compose.yml 作成

```
version: "3"

services:
  #Redis
  redis:
    image: "redis:latest"
    ports:
      - "6379:6379"
    volumes:
      - "./data/reis:/data"

```

- コンテナを起動する

```
docker-compose up -d
docker-compose ps
```

- コンテナの停止

```
docker-compose stop
```

- コンテナの削除

```
docker-compose rm
```

- 停止、削除、ネットワーク削除

```
docker-compose down
docker-compose down --rmi all
```

- コンテナの起動確認

```
docker ps -a
```

- コンテナの停止

```
docker stop <コンテナID or コンテナ名>
```

- コンテナの削除

```
docker rm <コンテナID or コンテナ名>
```

### redis をインストール

- qiita

  > https://qiita.com/hiromaru/items/ad22ade25798cd776236

- epel リポジトリをインストール

```
yum install epel-release
```

- yum コマンドを実行するたびに epel を参照するので epel を無効にする(※epel リポジトリを使用するときは yum <コマンド> <パッケージ名> --enablerepo=epel でコマンドを実行する。)

```
[epel]
enabled=0
```

- Redis をインストールしたいので、epel リポジトリを指定して redis をインストール

```
yum install redis --enablerepo=epel
```

- メモリがいっぱいになったときに、有効期限が設定されたキーの中でより短い有効期間（TTL）のキーを削除する maxmemory-policy volatile-ttl を指定する。

```
maxmemory 256m
maxmemory-policy volatile-ttl
```

- Redis のサービスを有効にして起動する。

```
systemctl enable redis.service
systemctl start redis.service
```

- PHP の Redis クライアントモジュールをインストールする。

```
yum install php-pecl-redis --enablerepo=epel
```

- すべてのインストールが完了したら Apache を再起動して、redis が読み込まれているかを確認

```
systemctl restart httpd.service
php -m | grep redis
```

### redis docker

- qiita
  > https://qiita.com/ryojsb/items/2a23b197b1a02ad90725

## サーバ

- サーバ起動

```
$ npm start
```
