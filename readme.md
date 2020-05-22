<h1 align="center">Justa.js</h1>

<p align="center">Justa.js is just a JavaScript Library, collected some Fun function that are boring, for work, and suddenly thought of. The purpose is to improve my JavaScript skill, and share them with everyone to discuss and how to write better.</p>


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
- [symbolParser](#symbolparser)：接收字串並依據符號設定解析成物件型態。
- [symbolAntiParser](#symbolantiparser)：接收物件型態並反解析成字串型態。
- [getCookie](#getCookie)：取得指定 cookie（名稱、鍵值、有效日期）。
- [setCookie](#setCookie)：設定指定 cookie（名稱、鍵值、有效日期）。
- [deleteCookie](#deleteCookie)：刪除指定 cookie（名稱）。

------
### symbolParser
**symbolParser (source, splitSymbol, filterSymbol,[ reverseParseResult])**
* source: string, Input the text you want to parse.
* splitSymbol: string, Define the symbols you use to separate the search filter.
* filterSymbol: string, Define the symbols you use to separate the search filter type.
* reverseParseResult: boolean (default: false), Reverse parse result if you want.
```js
let text1 = '/台北市_city/中正區_country/市民大道_street'
let text2 = 'firstname=Shawn&lastname=Lin&Age=25'
let text3 = '/1-5_week/0830-1000_startwork/1800-1930_endwork'

let firstParse = just.symbolParser(text1, '/', '_')         
let secondParse = just.symbolParser(text2, '&', '=', true)
let thirdParse = just.symbolParser(text3, '/', '_') 

console.log(firstParse)      // return {city: '台北市', country: '中正區', street: '市民大道'}
console.log(secondParse)     // return {firstname: 'Shawn', lastname: 'Lin', Age: "25"}
console.log(thirdParse)      // return {week: '1-5', startwork: '0830-1000', endwork: '1800-1930'}
```

### API
- [symbolParser](#symbolparser)：接收字串並依據符號設定解析成物件型態。
- [symbolAntiParser](#symbolantiparser)：接收物件型態並反解析成字串型態。
- [getCookie](#getCookie)：取得指定 cookie（名稱、鍵值、有效日期）。
- [setCookie](#setCookie)：設定指定 cookie（名稱、鍵值、有效日期）。
- [deleteCookie](#deleteCookie)：刪除指定 cookie（名稱）。

**symbolAntiParser (source, splitSymbol, filterSymbol, [ reverseParseResult, removeFirstSymbol])**

* source: object, Input the Object you want to anti-parse into String.
* splitSymbol: string, Define the symbols you use to combine the search filter.
* filterSymbol: string, Define the symbols you use to combine the search filter type.
* reverseParseResult: boolean (default: false), Reverse combine result if you want.
* removeFirstSymbol: boolean (default: false), Remove first symbol if you want.
```js
let obj1 = {city: '台北市', country: '中正區', street: '市民大道'}
let obj2 = {firstname: "Shawn", lastname: "Lin", Age: "25"}
let obj3 = {week: "1-5", startwork: "0830-1000", endwork: "1800-1930"}

let anitParse1 = just.symbolAntiParser(obj1, '/' ,'_' , true)
let anitParse2 = just.symbolAntiParser(obj2, '&' ,'=', false, true)
let anitParse3 = just.symbolAntiParser(obj3, '/' ,'_', true)

console.log(anitParse1)     // return '/台北市_city/中正區_country/市民大道_street'
console.log(anitParse2)     // return 'firstname=Shawn&lastname=Lin&Age=25'
console.log(anitParse3)     // return '/1-5_week/0830-1000_startwork/1800-1930_endwork'
```


## License

[MIT License](https://github.com/shawnlin0201/Justa.js/blob/master/LICENSE)
