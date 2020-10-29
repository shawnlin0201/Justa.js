<h1 align="center">Justa.js</h1>

<p align="center">Justa.js is just a JavaScript Utils Function Library, focus on efficiently speed up work business.</p>

|Service|Status|Description|
|---|---|---|
|Travis-CI|[![Build Status](https://travis-ci.org/shawnlin0201/Justa.js.svg?branch=master)](https://travis-ci.org/shawnlin0201/Justa.js)|Unit testing & Node.js version check.|

## Quick Start
```html
<script src="https://raw.githubusercontent.com/shawnlin0201/Justa.js/master/justa.js"></script>
```
or
[Download source code!](https://raw.githubusercontent.com/shawnlin0201/Justa.js/master/justa.js)

## Resources
目前提供的 API：
- [getCookie](#getCookie)：取得指定 cookie（名稱、鍵值、有效日期）。
- [setCookie](#setCookie)：設定指定 cookie（名稱、鍵值、有效日期）。
- [deleteCookie](#deleteCookie)：刪除指定 cookie（名稱）。

------

#### getCookie
**getCookie (cname)**
- cname: cookie key name.

```js
let jsFilesVersion = Justa.getCookie('jsFilesVersion') // get client JavaScript files version
console.log(jsFilesVersion) // '20190701'
```

#### setCookie
**setCookie (cname, cvalue, exdays)**
- cname: cookie key name.
- cvalue: cookie value.
- exdays: cookie expires count as day.

```js
Justa.setCookie('jsFilesVersion', '20200522', 30)
```

#### deleteCookie
**deleteCookie (cname)**
- cname: cookie key.

```js
Justa.deleteCookie('jsFilesVersion')
```

## License

[MIT License](https://github.com/shawnlin0201/Justa.js/blob/master/LICENSE)
