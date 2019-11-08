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

function symbolAntiParser (source, splitSymbol = '/', filterSymbol = '_', reverseParseResult = false, removeFirstSymbol = false) {
    let stringStorage = ''
    for (key in source) {
        stringStorage += reverseParseResult
            ?`${splitSymbol}${source[key]}${filterSymbol}${key}`
            :`${splitSymbol}${key}${filterSymbol}${source[key]}`
    }
    
    return (removeFirstSymbol) ? stringStorage.slice(-(stringStorage.length-1)) : stringStorage
}
