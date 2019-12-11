export default function symbolAntiParser (source, splitSymbol = '/', filterSymbol = '_', reverseParseResult = false, removeFirstSymbol = false) {
    let stringStorage = ''
    for (key in source) {
        stringStorage += reverseParseResult
            ?`${splitSymbol}${source[key]}${filterSymbol}${key}`
            :`${splitSymbol}${key}${filterSymbol}${source[key]}`
    }
    
    return (removeFirstSymbol) ? stringStorage.slice(-(stringStorage.length-1)) : stringStorage
}

// module.exports = symbolAntiParser;