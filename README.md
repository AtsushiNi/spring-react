# 概要
Spring BootにReactをパッケージングするサンプルプロジェクト

Spring BootとReactを別サーバーに立てて通信するのではなく、  
Spring Boot起動時にsrc/resources/staticにReactのバンドルファイルをコピーする  
また、nodeやnpmを起動時にプロジェクト内のディレクトリにインストールすることで、開発環境をプロジェクト内で閉じる

# plainブランチ
バックエンドのSpring Bootと、フロントエンドのReactを実装  
ただし、フロントエンドとバックエンドのAPIによる通信は行っていない

# 使用Mavenライブラリ
- frontend-maven-plugin
- maven-resources-plugin

# 参考URL
- Youtube [Packaging a React.JS Application into a Java Spring Boot Application](https://www.youtube.com/watch?v=_CLLw3QAuOE)
- Github [wazooinc/spring-boot-packaging-with-react](https://github.com/wazooinc/spring-boot-packaging-with-react)