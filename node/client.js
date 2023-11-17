// httpとhttpsはモジュールが別。URLに合わせて対応
import http from 'http';
import https from 'https';


http.get('http://localhost:3000', (res) => {
    if (res.statusCode !== 200) {
        console.error("failed to get data. status code: %d", res.statusCode);
        return;
    }

    let rawData = '';
    res.on('data', (chunk) => {
        //  res.on('data', callback関数) で、responseのbodyデータをストリーム形式で処理してくれる。
        // ここではchunkという変数にstreamデータを追加式に格納している。
        rawData += chunk;
    });
    res.on('end', () => {
        // res.on('end', callback関数) で、responseのbodyデータを読み終わった後の処理を定義。
        try {
            // レスポンスデータがjson形式であればJSON.parse
            // const parsedData = JSON.parse(rawData); 
            console.log(rawData);
        } catch (e) {
            console.error(e.message);
        }
    });

}).on('error', (e) => {
    // http.get.on('error')でエラー処理。
    console.error(e)
});