let just = justa = (function(){
    let
    symbolParser = function (source = '', splitSymbol = '/', filterSymbol = '_', reverseParseResult = false) {
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
    },
    symbolAntiParser = function (source, splitSymbol = '/', filterSymbol = '_', reverseParseResult = false, removeFirstSymbol = false) {
        let stringStorage = ''
        for (key in source) {
            stringStorage += reverseParseResult
                ?`${splitSymbol}${source[key]}${filterSymbol}${key}`
                :`${splitSymbol}${key}${filterSymbol}${source[key]}`
        }
        
        return (removeFirstSymbol) ? stringStorage.slice(-(stringStorage.length-1)) : stringStorage
    },
    getCookie = function (cname) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + cname + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    },
    setCookie = function (cname, cvalue, exdays){
        let d = new Date()
        d.setTime(d.getTime() + (exdays*24*60*60*1000))
        let expires = `expires=${d.toUTCString()}`
        document.cookie = `${cname}=${cvalue};${expires}`
    },
    deleteCookie = function (cname) {
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    throttle = function (fn, delay) {
        let coldown = false;
        let event = null;
        return function(...args) {
            if(coldown) { return }
            
            coldown = true
            clearTimeout(event)
            event = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    },
    debounce = function () {
        let event = null;
        return function() {
            if(event) {
                clearTimeout(event)
            }
            event = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
    ;return {
        symbolParser,
        symbolAntiParser,
        getCookie,
        setCookie,
        deleteCookie,
        throttle,
        debounce,
    }
})()
