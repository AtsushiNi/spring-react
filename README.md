# 概要
Spring BootにReactをパッケージングするサンプルプロジェクト

Spring BootとReactを別サーバーに立てて通信するのではなく、  
Spring Boot起動時にsrc/resources/staticにReactのバンドルファイルをコピーする  
また、nodeやnpmを起動時にプロジェクト内のディレクトリにインストールすることで、開発環境をプロジェクト内で閉じる

# ブランチ

plainブランチから順に、実装を進めている

1. plain ブランチ

バックエンドのSpring Bootと、フロントエンドのReactを実装  
ただし、フロントエンドとバックエンドのAPIによる通信は行っていない

2. user-listブランチ

バックエンドではH2データベースを使用し、ユーザー情報を保存。  
ReactからaxiosでSpring BootのAPIを叩き、一覧を表示する

# 起動方法
開発時はReactのホットリロードを利用・Spring起動を短時間でしたいため、サーバーを分ける

### 開発
1. Spring Boot サーバー起動
```
mvn spring-boot:run
```

2. React Webサーバー起動
```
cd src/main/frontend
./node/npm start
```
3. localhost:3000にアクセス

### 本番
1. Spring Boot サーバー起動(自動的にReactがビルド・Spring Boot上に配置される)
```
mvn spring-boot:run -Pprod
```

2. localhost:8080にアクセス

# 使用Mavenライブラリ
- frontend-maven-plugin
- maven-resources-plugin

# 参考URL
- Youtube [Packaging a React.JS Application into a Java Spring Boot Application](https://www.youtube.com/watch?v=_CLLw3QAuOE)
- Github [wazooinc/spring-boot-packaging-with-react](https://github.com/wazooinc/spring-boot-packaging-with-react)