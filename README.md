# hosting-config
GCP App Hosting の環境変数読み込みテスト用 Next.js プロジェクトです。

## セットアップ
```bash
npm install
npm run dev
# http://localhost:3000 で表示
```

## 環境変数表示
- `apphosting.yaml` に `APPHOSTING_MESSAGE` を定義（デフォルト: 「環境変数読み込み成功」）。
- 画面にはサーバーサイドで読み込んだ値を表示します。

## デプロイメモ
- `apphosting.yaml` の runtime/entrypoint/env は App Hosting 標準形式を想定。実環境仕様に合わせて調整してください。
