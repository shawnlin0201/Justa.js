## API
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

let firstParse = symbolParser(text1, '/', '_')         
let secondParse = symbolParser(text2, '&', '=', true)
let thirdParse = symbolParser(text3, '/', '_') 

console.log(firstParse)      // return {city: '台北市', country: '中正區', street: '市民大道'}
console.log(secondParse)     // return {firstname: 'Shawn', lastname: 'Lin', Age: "25"}
console.log(thirdParse)      // return {week: '1-5', startwork: '0830-1000', endwork: '1800-1930'}
```

### symbolAntiParser
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

let anitParse1 = symbolAntiParser(obj1, '/' ,'_' , true)
let anitParse2 = symbolAntiParser(obj2, '&' ,'=', false, true)
let anitParse3 = symbolAntiParser(obj3, '/' ,'_', true)

console.log(anitParse1)     // return '/台北市_city/中正區_country/市民大道_street'
console.log(anitParse2)     // return 'firstname=Shawn&lastname=Lin&Age=25'
console.log(anitParse3)     // return '/1-5_week/0830-1000_startwork/1800-1930_endwork'
```