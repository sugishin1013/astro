---
layout: "../../layouts/BlogPost.astro"
title: "Supabase + GraphQL APIでつまずいたところ"
description: ""
pubDate: "2023/03/05 02:00:00"
tags: ["tech", "Supabase", "GraphQL"]
---

`Supabase`では REST だけでなく、GraphQL の API も提供されているため、GraphQL を実務で使用したことがないこともあり試してみることにしました。

\*`Supabase`のローカル環境構築の手順は以下のリポジトリでおこないました

https://github.com/sugishin1013/supabase

しかし、いくつかつまずいたところがありました。。。

## ドキュメントと Supabase CLI のコマンド手順が異なる

https://supabase.com/docs/guides/cli/local-development

上記ドキュメントを参考にコマンド操作でローカル開発環境の構築とリモートへのデプロイを実施しましたが、ドキュメントに記載されているコマンドを入力してもエラーや notfound になったりとドキュメントが最新にアップデートされてないのかも？というところがありました。

## GraphQL API に接続できない

https://supabase.com/docs/guides/database/api

上記ドキュメントを参考にやってましたが、なかなか繋がりませんでした。。。

いろいろ設定や知見が必要なのかもしれませんが、とりあえず繋げてみようとした時につまずいた点は以下です。

・Postgres Row Level Security (RLS) を無効にする

・Table を SQL で作成する

\*二つ目は未だに謎です。。。自分だけなのか。。。（ダッシュボードの GUI 上で作成するとなぜか繋がらない）

## クエリをどのようなデータ構造でリクエストすればいいのかわからない

今まで REST しか触ったことがなかったので、マジでわかんなかったです。。。

いろいろ調べてみましたが、スキーマが異なればもちろんクエリの構造も変わるわけで。。。

自分が試した方法としては以下です。

・[Apollo Sandbox](https://studio.apollographql.com/sandbox/explorer)上での GUI 操作によるクエリテスト

・[TypeScript with Apollo Client](https://www.apollographql.com/docs/react/development-testing/static-typing/)の手順をもとに Typescript 用のスキーマの型の自動作成とクエリのデータ構造が正しいか判定してくれるパッケージを導入

・[get-graphql-schema](https://github.com/prisma-labs/get-graphql-schema)でスキーマを取得する

上記でトライアンドエラーを繰り返しながらなんとかエラーを解消することができました。

## 成果物

以上のようにいろいろつまずきながら追加・削除ができる超シンプルな TODO リストを作成しました。

https://graphql-iota-gray.vercel.app

https://github.com/sugishin1013/graphql

結論。GraphQL API は慣れてないと結構大変。。。
