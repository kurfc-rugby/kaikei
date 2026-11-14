// 会計アプリの入口の設定（画面と Service Worker の両方が読む）
//   APP：画面に表示する会計アプリ（Apps Script のWebアプリ）。/a/~/ は、複数のGoogleアカウントでログイン中でも開けるようにするため
//   API：Service Worker が通知の中身を取りに行く先（同じWebアプリの doPost）
//   APP_ORIGIN：会計アプリの画面が動く場所（この場所からのメッセージだけを受け付ける）
self.KAIKEI = {
  APP: 'https://script.google.com/a/~/macros/s/AKfycbypQU54D2ZKXUoqy_woBy-YJre-Gujpb54xW1SCWoKLzo9UeWli_cXz3UacQXP4Ojfy/exec',
  API: 'https://script.google.com/macros/s/AKfycbypQU54D2ZKXUoqy_woBy-YJre-Gujpb54xW1SCWoKLzo9UeWli_cXz3UacQXP4Ojfy/exec',
  APP_ORIGIN: /^https:\/\/[a-z0-9-]+-script\.googleusercontent\.com$/,
};
