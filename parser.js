function symbolParser (source = '', splitSymbol = '/', filterSymbol = '_', reverseParseResult = false) {
    let parseStorage = {}
    let reverseResult = reverseParseResult ? [0,1] : [1,0]    
    source
        .split(splitSymbol)
        .filter(req => req.indexOf(filterSymbol) > -1)
        .forEach(req => {
            let parse = req.split(filterSymbol)
            parseStorage[parse[reverseResult[0]]] = parse[reverseResult[1]]
        })
    return parseStorage
}

function symbolAntiParser (source, splitSymbol = '/', filterSymbol = '_', reverseParseResult = false, removeLastSymbol = true) {
    let stringStorage = ''
    for (key in source) {
        stringStorage += reverseParseResult
            ?`${splitSymbol}${source[key]}${filterSymbol}${key}`
            :`${splitSymbol}${key}${filterSymbol}${source[key]}`
    }
    return stringStorage
}

// let url = [
//     '/新北市_city/樹林區_country/鎮前街_street',
//     'firstname=Shawn&lastname=Lin&Age=25',
//     '/1-5_week/0830-1000_startwork/1800-1930_endwork'
// ]


// let test = [
//     symbolParser(url[0], '/', '_'),
//     symbolParser(url[1], '&', '=', true),
//     symbolParser(url[2], '/', '_')
// ]
// console.group('---symbolParse test---')
// for(let i = 0; i < test.length; i++) {
//     console.group('Test: ' + (i+1))
//     console.log(test[i])
//     console.groupEnd('Test: ' + (i+1))
// }
// console.groupEnd('---symbolParse test---')


// let antiTest = [
//     symbolAntiParser(test[0], '/' ,'_' , true),
//     symbolAntiParser(test[1], '&' ,'='),
//     symbolAntiParser(test[2], '/' ,'_', true)
// ]

// console.group('---symbolAntiParse test---')
// for(let i = 0; i < antiTest.length ; i++) {
//     console.group('AntiTest: ' + (i+1))
//     console.log(antiTest[i])
//     console.groupEnd('AntiTest: ' + (i+1))
// }
// console.groupEnd('---symbolAntiParse test---')
