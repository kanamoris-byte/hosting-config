import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default function Home() {
  const message =
    process.env.APPHOSTING_MESSAGE ?? "環境変数が設定されていません";

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.badge}>App Hosting テスト</p>
          <h1>環境変数読み込みチェック</h1>
          <p className={styles.lead}>
            apphosting.yaml に定義した環境変数をサーバーサイドで読み込み、ページ上に表示します。
          </p>
        </header>

        <section className={styles.panel}>
          <p className={styles.label}>APPHOSTING_MESSAGE</p>
          <p className={styles.value}>{message}</p>
        </section>

        <div className={styles.note}>
          <p>
            期待値: <code>環境変数読み込み成功</code>
          </p>
          <p>値が変わらない場合はデプロイ先の環境変数設定を確認してください。</p>
        </div>
      </main>
    </div>
  );
}
