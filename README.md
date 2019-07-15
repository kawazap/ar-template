# README

## 開発フロー

### 1. このプロジェクトをダウンロード

- ダウンロードは[こちら](https://github.com/deerboy/ar-template/archive/master.zip)
- あるいはこのリポジトリを[テンプレートとして](https://github.com/deerboy/ar-template/generate)マイリポジトリを作ってください

### 2. 3Dモデルを調達&設置

- [Free 3D](https://free3d.com/ja/)で好みのマテリアル付き3Dを調達（マテリアルは[こいういうの](https://github.com/deerboy/ar-template/blob/master/cat/Cat_bump.jpg?raw=true)）
- 解答したディレクトリをプロジェクトディレクトリに設置（現状catがある）
- index.htmlの以下の部分を設置したディレクトリのパスに変更

`/cat/12221_Cat_v1_l3.obj`と`/cat/12221_Cat_v1_l3.mtl`の2箇所を修正

```html
<a-entity 
obj-model="obj: url(/cat/12221_Cat_v1_l3.obj); 
mtl: url(/cat/12221_Cat_v1_l3.mtl)" scale="0.05 0.05 0.05" rotation="-90 0 0">
</a-entity>
```

#### 注意

- ダウンロードした3Dディレクトリ内のファイル名は変更しないこと。
- 大きさや角度は `scale` や `rotation` の数字をいじって調整

### 3. Netlifyにデプロイ

[Netlify](https://app.netlify.com/teams/deerboy/sites)（無料）

- GitHubと連携をオススメ
- プロジェクトディレクトリを丸ごとドロップしてもいい
- URLは設定画面から変えられます。
- Netlifyじゃなくてもいいです。

#### 注意

- 3Dモデルによっては初回カメラかざしてからしばらくしないと登場しません。（10秒程度）

### 4. QRコード作る

- [QR-monkey](https://www.qrcode-monkey.com/)で作成マーカーつきQRを作成（3の公開URL使う）
- 画像は[これ](https://github.com/deerboy/ar-template/blob/master/code.png?raw=true)使う
- QRの色や見た目は色々おしゃれにできます。

### 5. 名刺に貼る

- [ラクスル](https://raksul.com/online-design/business_card/?sample_design=)のオンラインジェネレーターがオススメです。
- 安い紙で急ぎでなければ500円で100枚ほど手に入ります。（紙質結構良い。デフォのマットがオススメ）

## 使い方

1. 名刺のQRをスマホ標準のカメラでかざす
2. Netlifyのサイトに飛んでカメラ起動する
3. 再度QRコードをかざす
4. オブジェクトが表示される

## おまけ

### 連絡先情報の追加

`position: fixed` でHTMLを重ねて情報をおいてみましょう。

- SNSリンク
- 連絡先、会社名、実績、主な活動

### 3Dモデルの自作、カスタマイズ

[blendar](https://www.blender.org/)という無料ソフトを使えば自分で3Dモデルも作れます。

### 3D表現のリッチ化

- [a-frame](https://aframe.io/)が使われているのでモデル動かしたり、雪降らせたり色々できます。
- テキストをおいたりもできます。（詳細は検索）

## 宣伝

開発ツイートなどしてますのでよろしければフォローお願いします。

[@d151005](https://twitter.com/d151005)
