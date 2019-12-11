function symbolParser (source = '', splitSymbol = '/', filterSymbol = '_', reverseParseResult = false) {
    let parseStorage = {}
    let reverseResult = reverseParseResult ? [0,1] : [1,0]
    source
        .split(' ')
        .join('')
        .split(splitSymbol)
        .filter(req => req.indexOf(filterSymbol) > -1)
        .forEach(req => {
            let parse = req.split(filterSymbol)
            parseStorage[parse[reverseResult[0]]] = parse[reverseResult[1]]
        })
    return parseStorage
}

module.exports = symbolParser;