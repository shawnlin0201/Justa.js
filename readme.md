# Justa.js

Justa.js is just a JavaScript Library, collected some Fun function that are boring, for work, and suddenly thought of. The purpose is to improve my JavaScript skill, and share them with everyone to discuss and how to write better.

## Resources
* [API](#api)

## API
Url Parse：
* [symbolParser](#symbolparser)
* [symbolAntiParser](#symbolantiparser)

------
### symbolParser
**symbolParser (source, splitSymbol, filterSymbol,[ reverseParseResult])**
* source: string, Input the text you want to parse.
* splitSymbol: string, Define the symbols you use to separate the search filter.
* filterSymbol: string, Define the symbols you use to separate the search filter type.
* reverseParseResult: boolean (default: false), Reverse parse result if you want.
```
let text1 = '/台北市_city/中正區_country/市民大道_street'
let text2 = 'firstname=Shawn&lastname=Lin&Age=25'
let text3 = '/1-5_week/0830-1000_startwork/1800-1930_endwork'

let firstParse = symbolParser(text[0], '/', '_')         
let secondParse = symbolParser(text[1], '&', '=', true)
let thirdParse = symbolParser(text[2], '/', '_') 

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
```
let obj1 = {city: {city: '台北市', country: '中正區', street: '市民大道'}
let obj2 = {firstname: "Shawn", lastname: "Lin", Age: "25"}
let obj3 = {week: "1-5", startwork: "0830-1000", endwork: "1800-1930"}

let anitParse1 = symbolAntiParser(obj1, '/' ,'_' , true)
let anitParse2 = symbolAntiParser(obj2, '&' ,'=', false, true)
let anitParse3 = symbolAntiParser(obj3, '/' ,'_', true)

console.log(anitParse1)     // return '/台北市_city/中正區_country/市民大道_street'
console.log(anitParse2)     // return 'firstname=Shawn&lastname=Lin&Age=25'
console.log(anitParse3)     // return '/1-5_week/0830-1000_startwork/1800-1930_endwork'
```
